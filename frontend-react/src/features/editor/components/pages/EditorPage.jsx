import { useEffect, useRef, useState } from "react"
import ReactMarkdown from "react-markdown";

const EditorPage = () => {
    const [markdown, setMarkdown] = useState(null)
    const [markdowns, setMarkdowns] = useState([])
    const [selected, setSelected] = useState(null)
    const [bolds, setBolds] = useState([])
    const [words, setWords] = useState([])
    const editor = useRef(null)

    const getSel = () => {
        let sel = window.getSelection()
        setSelected(sel)
    }

    const applyMarkdown = () => {
        let result = []

        words.forEach((word, i) => {
            if(bolds.length > 0){
                for(let j = 0; j < bolds.length; j++){
                    let bold = bolds[j]
                    if(bold.arrayIndex == i){
                        result[i] = word.substring(0, bold.index) + '**' + bold.text + '**' + word.substring(bold.index + bold.text.length)
                        break
                    } else {
                        console.log(1)
                        result[i] =  word
                    }
                }
            } else {
                result[i] =  word
            }
        })
        console.log(result, 'bolds: ', bolds, markdowns, markdown)
        result = result.join(' ')
        setMarkdown(result)
    }

    useEffect(() => {
        applyMarkdown()
    }, [bolds, words])

    const addBold = () => {
        if(!selected.toString().length < 1) {
            let index = selected.anchorOffset < selected.focusOffset ? selected.anchorOffset : selected.focusOffset
            let text = selected.toString()

            let sliceBefore = words.join(' ').slice(0, index).split(' ')
            let arrayIndex = sliceBefore.length - 1
            index = sliceBefore[arrayIndex].length

            setBolds([
                ...bolds,
                {
                    index: index,
                    arrayIndex: arrayIndex,
                    text: text
                }
            ])


        }
    }

    const addLineBreak = () => {
        let newMarkdown = markdown + '\n\n'

        setMarkdowns([
            ...markdowns,
            newMarkdown
        ])

        setMarkdown('')
        setBolds([])
        editor.current.innerText = ''
    }

    const editMarkdown = (j) => {
        setMarkdowns(markdowns.filter((item, i) => i != j))
        let markdown = markdowns[i]
        setBolds([])
        setMarkdown(markdown)
        let newWords = markdown.slice(0, markdown.length - 2).split(' ')
        let newBolds = []
        newWords = newWords.map((word, i) => {
            let index = word.indexOf('**')
            let lastIndex = word.lastIndexOf('**')
            if(index >= 0){
                newBolds[i] = {
                    index: index,
                    arrayIndex: i,
                    text: word.slice(index + 2, lastIndex)
                }
                return word.slice(0, index) + word.slice(index + 2, lastIndex) + word.slice(lastIndex + 2, word.length)
            }
            return word
        })
        setBolds(newBolds)
        setWords(newWords)
        editor.current.innerText = newWords.join(' ')
    }

    const handleChange = (e) => {
        let text = e.target.innerText
        let newWords = text.split(' ')
        if(words.length == newWords.length) {
            words.forEach((word, i) => {
                if(word.length > newWords[i].length){
                    let slice = text.slice(0, selected.anchorOffset).split(' ')
                    let index = slice[slice.length - 1].length + 1
                    bolds.forEach((bold) => {
                        if(bold.arrayIndex == i){
                            let newBolds = bolds.filter((bold) => bold.arrayIndex != i)
                            if(bold.index < index && (bold.index + bold.text.length) >= index){
                                let newText = newWords[i].slice(bold.index, bold.index + bold.text.length - 1)
                                if(newText){
                                    setBolds([
                                        newBolds,
                                        {
                                            index: bold.index,
                                            arrayIndex: bold.arrayIndex,
                                            text: newText
                                        }
                                    ])
                                } else {
                                    setBolds([
                                        newBolds
                                    ])
                                }
                            } else if (bold.index == index){
                                setBolds([
                                    newBolds,
                                    {
                                        index: bold.index - 1,
                                        arrayIndex: bold.arrayIndex,
                                        text: bold.text
                                    }
                                ])
                            }
                        }
                    })
                }
            })
        } else if (words.length > newWords.length) {
            setBolds([])
        }

        setWords(newWords)
    }


    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex">
                <div className="flex flex-col mr-4">
                    <button onClick={addBold}>B</button>
                    <button onClick={addLineBreak}>L</button>
                </div>
                <div>
                    <div ref={editor} contentEditable='true' onSelect={getSel} onKeyUp={handleChange} className="w-64 h-64 border-2 border-black"></div>
                </div>
            </div>

            <div className="text-xl">
                    {markdowns.map((item, i) => (
                        <div key={i} onClick={() => editMarkdown(i)}>
                            <ReactMarkdown>{item}</ReactMarkdown>
                        </div>
                    ))}
                    <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    )
}

export default EditorPage