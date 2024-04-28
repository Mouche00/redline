import { useEffect, useRef, useState } from "react"
import ReactMarkdown from "react-markdown";

const EditorPage = () => {
    const [markdown, setMarkdown] = useState(null)
    const [markdowns, setMarkdowns] = useState([])
    const [selected, setSelected] = useState(null)
    const [bolds, setBolds] = useState([])
    const [words, setWords] = useState([])
    const [markdownIndex, setMarkdownIndex] = useState(null)
    const editor = useRef(null)

    const getSel = () => {
        let sel = window.getSelection()
        setSelected(sel)
    }

    const applyMarkdown = () => {
        let result = []
        words.forEach((word, i) => {
            if(bolds && bolds.length > 0){
                for(let j = 0; j < bolds.length; j++){
                    if(bolds[j].arrayIndex == i){
                        if(word.includes(bolds[j].text)){
                            result[i] = word.substring(0, bolds[j].index) + '**' + bolds[j].text + '**' + word.substring(bolds[j].index + bolds[j].text.length)
                        } else {
                            setBolds(bolds.filter(bold => bold.arrayIndex != i))
                        }
                        break
                    } else {
                        result[i] =  word
                    }
                }
            } else {
                result[i] =  word
            }
        })
        console.log('HERE // result: ', result, 'words: ', words, 'bolds: ', bolds, 'markdowns: ', markdowns,'markdown: ', markdown, 'selection: ', selected)
        result = result.join(' ')
        setMarkdown(result)
    }

    useEffect(() => {
        applyMarkdown()
    }, [bolds, words])

    const addBold = () => {
        if(selected.toString().length > 1) {

            // GET INDEX OF SELECTION SELECTED ARRAY ELEMENT
            let index = selected.anchorOffset < selected.focusOffset ? selected.anchorOffset : selected.focusOffset
            let text = selected.toString()
            let sliceBefore = words.join(' ').slice(0, index).split(' ')
            let arrayIndex = sliceBefore.length - 1
            index = sliceBefore[arrayIndex].length

            let newBolds = [
                ...bolds,
                {
                    index: index,
                    arrayIndex: arrayIndex,
                    text: text
                }
            ]
            newBolds.sort(function(a, b) {
                return a.arrayIndex - b.arrayIndex
            })

            setBolds(newBolds)
        }
    }

    const addLineBreak = () => {
        console.log(markdownIndex)
        let newMarkdown = markdown + '\n\n'
        if(markdownIndex !== null) {
            let newMarkdowns = markdowns
            newMarkdowns.splice(markdownIndex, 0, newMarkdown)
            setMarkdowns(newMarkdowns)
        } else {
            setMarkdowns([
                ...markdowns,
                newMarkdown
            ])
        }

        setWords([])
        setBolds([])
        editor.current.innerText = ''
    }

    const editMarkdown = (j) => {
        setMarkdownIndex(j)
        setMarkdowns(markdowns.filter((item, i) => i != j))
        let markdown = markdowns[j]
        setBolds([])
        setMarkdown(markdown)
        let newWords = markdown.slice(0, markdown.length - 2).split(' ')
        let newBolds = []
        newWords = newWords.map((word, i) => {
            let index = word.indexOf('**')
            let lastIndex = word.lastIndexOf('**')
            if(index >= 0){
                newBolds.push({
                    index: index,
                    arrayIndex: i,
                    text: word.slice(index + 2, lastIndex)
                })
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
        let newWords = text.split(' ').map((item) => item = item.trim())
        if(words.length == newWords.length) {
            words.forEach((word, i) => {

                let slice = text.slice(0, selected.anchorOffset).split(' ')
                // GET INDEX OF DELETED OR NEW CHARACTER IN SELECTED ARRAY ELEMENT
                let index = slice[slice.length - 1].length + (word.length > newWords[i].length ? 1 : 0)
                
                bolds.forEach((bold) => {
                    if(bold.arrayIndex == i){
                        let newBolds = bolds.filter((bold) => bold.arrayIndex != i)
                        if(bold.index < index && (bold.index + bold.text.length) >= index){
                            let newText = newWords[i].slice(bold.index, bold.index + bold.text.length + (word.length > newWords[i].length ? -1 : 1))
                            if(newText){
                                setBolds([
                                    ...newBolds,
                                    {
                                        index: bold.index,
                                        arrayIndex: bold.arrayIndex,
                                        text: newText
                                    }
                                ])
                            } else {
                                setBolds(newBolds)
                            }
                        } else if (bold.index == index){
                            setBolds([
                                ...newBolds,
                                {
                                    index: bold.index - 1,
                                    arrayIndex: bold.arrayIndex,
                                    text: bold.text
                                }
                            ])
                        }
                    }
                })
            })
        } else {
            // GET INDEX OF SELECTION SELECTED ARRAY ELEMENT
            let index = selected.anchorOffset < selected.focusOffset ? selected.anchorOffset : selected.focusOffset
            let sliceBefore = words.join(' ').slice(0, index).split(' ')
            let arrayIndex = sliceBefore.length - 1
            index = sliceBefore[arrayIndex].length
            let newBolds = bolds
            newBolds = newBolds.map((bold) => {
                if(bold.arrayIndex >= arrayIndex) {
                    if(words.length > newWords.length) {
                        bold.arrayIndex = bold.arrayIndex - 1
                    } else {
                        console.log('here', bold)
                        bold.arrayIndex = bold.arrayIndex + 1
                    }  
                }
                return bold
            })
            newBolds = newBolds.sort(function(a, b) {
                return a.arrayIndex - b.arrayIndex
            })
            setBolds(newBolds)
            console.log('selection index: ', arrayIndex)
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