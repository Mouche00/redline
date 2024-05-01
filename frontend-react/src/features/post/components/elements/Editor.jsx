import { useEffect, useRef, useState } from "react"
import ReactMarkdown from "react-markdown";
import { storeImage, storePost } from "../../api/data";

const Editor = ({ medium = '1' }) => {
    const [formData, setFormData] = useState({
        title: '',
        body: []
    })
    const [markdown, setMarkdown] = useState(null)
    const [markdowns, setMarkdowns] = useState([])
    const [selected, setSelected] = useState(null)
    const [selection, setSelection] = useState([])
    const [styles, setStyles] = useState([])
    const [globalStyle, setGlobalStyle] = useState(null)
    const [words, setWords] = useState([])
    const [markdownIndex, setMarkdownIndex] = useState(null)
    const editor = useRef(null)
    const input = useRef(null)

    console.log('nnnnn', formData)

    const handleTitle = (e) => {
        setFormData({
            ...formData,
            title: e.target.value
        })
    }

    const handleSubmit = async () => {
        const response = await storePost(medium, formData)
        console.log(response)
    }

    const getSel = () => {
        const sel = window.getSelection()
        
        let text = sel.toString().trim()
        let result = []

        let anchor = sel.anchorOffset
        let focus = sel.focusOffset
        let offset = Math.abs(anchor - focus)
        let index

        if(text.length < offset || text.split(' ')[text.split(' ').length - 1] == words[words.length - 1]){
            index = anchor
        } else if(text.length > offset) {
            index = 0
        } else {
            index = anchor < focus ? anchor : focus
        }

        let sliceBefore = words.join(' ').slice(0, index).split(' ')
        let arrayIndex = sliceBefore.length - 1
        index = sliceBefore[arrayIndex].length

        setSelected({
            index: index,
            arrayIndex: arrayIndex,
            misc: sel
        })

        if(text.length > 0) {
            if(text.split(' ').length > 1){
                text.split(' ').forEach((element, i) => {
                    if(i == 0) {
                        result.push({
                            index: index,
                            arrayIndex: arrayIndex,
                            text: element,
                        })
                    } else {
                        result.push({
                            index: 0,
                            arrayIndex: arrayIndex + i,
                            text: element,
                        })
                    }
                });
            } else {
                result = [{
                    index: index,
                    arrayIndex: arrayIndex,
                    text: text,
                }]
            }
        } else {
            setSelection([])
        }
        setSelection(result)
        console.log('selection', selection, selected)
    }

    const applyMarkdown = () => {
        let result = []
        words.forEach((word, i) => {
            if(styles && styles.length > 0){
                for(let j = 0; j < styles.length; j++){
                    if(styles[j].arrayIndex == i){
                        if(word.includes(styles[j].text)){
                            result[i] = word.substring(0, styles[j].index) + styles[j].symbol + styles[j].text + styles[j].symbol + word.substring(styles[j].index + styles[j].text.length)
                        } else {
                            setStyles(styles.filter(style => style.arrayIndex != i))
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
        console.log('HERE // result: ', result, 'words: ', words, 'styles: ', styles, 'global:', globalStyle, 'markdowns: ', markdowns,'markdown: ', markdown, 'selection: ', selected)
        result = (globalStyle ? `${globalStyle} ` : '') + result.join(' ')
        setMarkdown(result)
    }

    useEffect(() => {
        applyMarkdown()
    }, [styles, words, globalStyle])

    const addBold = () => {
        addStyle('**')
    }

    const addItalic = () => {
        addStyle('*')
    }

    const addHeading = () => {
        addStyle('#', 0)
    }

    const addImage = async (e) => {
        const response = await storeImage(e.target.files[0])
        const md = `![Alt text](http://localhost/uploads/${response})`
        if(markdownIndex !== null) {
            let newMarkdowns = markdowns
            newMarkdowns.splice(markdownIndex, 1, md)
            setMarkdowns([
                ...newMarkdowns
            ])
            setMarkdownIndex(null)
        } else {
            setMarkdowns([
                ...markdowns,
                md,
            ])
        }
    }

    const addStyle = (symbol = '*', global = 1) => {
        if(global){
            let newStyles = styles
            if(selection.length > 0) {
                selection.forEach((item) => {
                    if(newStyles.find((style) => style.arrayIndex == item.arrayIndex)){
                        newStyles = newStyles.filter((style) => style.arrayIndex != item.arrayIndex)
                    }

                    newStyles.push(
                        {
                            index: item.index,
                            arrayIndex: item.arrayIndex,
                            text: item.text,
                            symbol: symbol,
                        }
                    )

                })
            } else {
                if(newStyles.find((style) => style.arrayIndex == selected.arrayIndex && style.symbol == symbol)){
                    newStyles = newStyles.filter((style) => style.arrayIndex != selected.arrayIndex)
                }
            }

            setStyles([
                ...newStyles
            ])
        } else {
            if(globalStyle == symbol){
                setGlobalStyle(null)
            } else {
                setGlobalStyle(symbol)
            }
        }
    }

    const addLineBreak = () => {
        let newMarkdown = markdown
        if(markdownIndex !== null) {
            let newMarkdowns = markdowns
            newMarkdowns.splice(markdownIndex, 0, newMarkdown)
            setMarkdowns(newMarkdowns)
            setFormData({
                ...formData,
                body: newMarkdowns.join('\n')
            })
        } else {
            setMarkdowns([
                ...markdowns,
                newMarkdown
            ])

            setFormData({
                body: [
                    ...markdowns,
                    newMarkdown
                ].join('\n')
            })
        }
        setMarkdownIndex(null)
        setWords([])
        setStyles([])
        setGlobalStyle(null)
        editor.current.textContent = ''
    }

    const editMarkdown = (j) => {
        setMarkdownIndex(j)
        if(markdowns[j].includes('![Alt text]')){
            const event = new MouseEvent('click', {bubbles: true})
            // event.simulated = true

            input.current.dispatchEvent(event)
        } else {
            setMarkdowns(markdowns.filter((item, i) => i != j))
            let markdown = markdowns[j]
            setStyles([])
            setMarkdown(markdown)

            let newWords = markdown.slice(0, markdown.length).split(' ')
            
            if(newWords[0].includes('#')) {
                setGlobalStyle(newWords[0])
                newWords.shift()
            }
            
            let newStyles = []
            let symbol = '*'
            newWords = newWords.map((word, i) => {
                if(word.includes('**')) {
                    symbol = '**'
                }

                let index = word.indexOf(symbol)
                let lastIndex = word.lastIndexOf(symbol)
                if(index >= 0){
                    newStyles.push({
                        index: index,
                        arrayIndex: i,
                        text: word.slice(index + 2, lastIndex),
                        symbol: symbol,
                    })
                    return word.slice(0, index) + word.slice(index + 2, lastIndex) + word.slice(lastIndex + 2, word.length)
                }
                return word
            })
            setStyles(newStyles)
            setWords(newWords)
            editor.current.innerText = newWords.join(' ')
        }
    }

    const handleChange = (e) => {
        let newWords = e.target.innerText.split(' ').map((item) => item = item.trim())
        let newStyles = styles
        if(words.length == newWords.length) {
            words.forEach((word, i) => {
                let index = selected.index + (word.length > newWords[i].length ? 1 : 0)
                
                let style = newStyles.filter((item) => item.arrayIndex == i)
                style = style[0]
                    if(style){
                        if(style.index < index && (style.index + style.text.length) >= index){
                            newStyles = newStyles.filter((item) => item.arrayIndex != i)
                            let newText = newWords[i].slice(style.index, style.index + style.text.length + (word.length > newWords[i].length ? -1 : 1))
                            if(newText){
                                newStyles = [
                                    ...newStyles,
                                    {
                                        index: style.index,
                                        arrayIndex: style.arrayIndex,
                                        text: newText,
                                        symbol: style.symbol
                                    }
                                ]
                            }
                        } else if (style.index == index && style.index != 0){
                            newStyles = [
                                ...newStyles,
                                {
                                    index: style.index - 1,
                                    arrayIndex: style.arrayIndex,
                                    text: style.text,
                                    symbol: style.symbol
                                }
                            ]
                        }
                    }
                }
            )
        } else {

            let arrayIndex = selected.arrayIndex
            
            newStyles = newStyles.map((style) => {
                if(style.arrayIndex >= arrayIndex) {
                    if(words.length > newWords.length && style.arrayIndex > 0) {
                        style.arrayIndex = style.arrayIndex - 1
                    } else if(words.length - 1 != arrayIndex) {
                        style.arrayIndex = style.arrayIndex + 1
                    }  
                }
                return style
            })
            newStyles = newStyles.sort(function(a, b) {
                return a.arrayIndex - b.arrayIndex
            })
        }

        setStyles(newStyles)   
        setWords(newWords)
    }

    const handleKey = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault()
            addLineBreak()
        }
    }


    return (
        <div className="flex flex-col items-center justify-center">
            <input onChange={handleTitle} type="text" name="title" />
            <div className="flex">
                <div className="flex flex-col mr-4">
                    <button onClick={addBold}>B</button>
                    <button onClick={addItalic}>I</button>
                    <button onClick={addHeading}>H</button>
                    <input ref={input} onChange={addImage} type="file" />
                    {/* <button onClick={addLineBreak}>L</button> */}
                </div>
                <div>
                    <div ref={editor} contentEditable='true' onSelect={getSel} onKeyDown={handleKey} onKeyUp={handleChange} className="w-64 h-64 border-2 border-black"></div>
                </div>
                <button onClick={handleSubmit}>SUBMIT</button>
            </div>

            <div className="text-xl">
                    {markdowns.map((item, i) => (
                        <div key={i} onClick={() => editMarkdown(i)}>
                            <ReactMarkdown>{item}</ReactMarkdown>
                        </div>
                    ))}
                    <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>

            <div className="p-4 bg-orange-400">
                <p>if second word is last = unselectable</p>
            </div>
        </div>
    )
}

export default Editor