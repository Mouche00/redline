import { useEffect, useRef, useState } from "react"
import ReactMarkdown from "react-markdown";

const EditorPage = () => {
    const [markdown, setMarkdown] = useState(null)
    const [markdowns, setMarkdowns] = useState([])
    const [selected, setSelected] = useState(null)
    const [selection, setSelection] = useState([])
    const [styles, setStyles] = useState([])
    const [words, setWords] = useState([])
    const [markdownIndex, setMarkdownIndex] = useState(null)
    const editor = useRef(null)

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
        // console.log('selection', sliceBefore, index, text, text.length, offset, sel)
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
    }
    console.log('selection', selection, selected)

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
        console.log('HERE // result: ', result, 'words: ', words, 'styles: ', styles, 'markdowns: ', markdowns,'markdown: ', markdown, 'selection: ', selected)
        result = result.join(' ')
        setMarkdown(result)
    }

    useEffect(() => {
        applyMarkdown()
    }, [styles, words])

    const addBold = () => {
        if(selection.length > 0) {

            // GET INDEX OF SELECTION SELECTED ARRAY ELEMENT
            // let index = selected.anchorOffset < selected.focusOffset ? selected.anchorOffset : selected.focusOffset
            // let text = selected.toString()
            // let sliceBefore = words.join(' ').slice(0, index).split(' ')
            // let arrayIndex = sliceBefore.length - 1
            // index = sliceBefore[arrayIndex].length
            // if(styles.length < 1 || !styles[arrayIndex] || (styles[arrayIndex] && !(styles[arrayIndex].index <= index && (styles[arrayIndex].index + styles[arrayIndex].text.length) >= index))){
            let newStyles = []
            selection.forEach((item) => {
                newStyles.push(
                    {
                        index: item.index,
                        arrayIndex: item.arrayIndex,
                        text: item.text,
                        symbol: '**',
                        double: 1,
                    }
                )

                // newStyles.sort(function(a, b) {
                //     return a.arrayIndex - b.arrayIndex
                // })

                // console.log(newStyles)

            })
            setStyles([
                ...styles,
                ...newStyles
            ])
            // }
        }
    }

    const addLineBreak = () => {
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
        setMarkdownIndex(null)
        setWords([])
        setStyles([])
        editor.current.innerText = ''
    }

    const editMarkdown = (j) => {
        setMarkdownIndex(j)
        setMarkdowns(markdowns.filter((item, i) => i != j))
        let markdown = markdowns[j]
        setStyles([])
        setMarkdown(markdown)
        let newWords = markdown.slice(0, markdown.length - 2).split(' ')
        let newStyles = []
        newWords = newWords.map((word, i) => {
            let index = word.indexOf('**')
            let lastIndex = word.lastIndexOf('**')
            if(index >= 0){
                newStyles.push({
                    index: index,
                    arrayIndex: i,
                    text: word.slice(index + 2, lastIndex)
                })
                return word.slice(0, index) + word.slice(index + 2, lastIndex) + word.slice(lastIndex + 2, word.length)
            }
            return word
        })
        setStyles(newStyles)
        setWords(newWords)
        editor.current.innerText = newWords.join(' ')
    }

    const handleChange = (e) => {
        let newWords = e.target.innerText.split(' ').map((item) => item = item.trim())
        let newStyles = styles
        if(words.length == newWords.length) {
            words.forEach((word, i) => {

                // let slice = text.slice(0, selected.anchorOffset).split(' ')
                // // GET INDEX OF DELETED OR NEW CHARACTER IN SELECTED ARRAY ELEMENT
                // let index = slice[slice.length - 1].length + (word.length > newWords[i].length ? 1 : 0)
                // let indexOffset = word.length > newWords[i].length ? 1 : 0
                let index = selected.index + (word.length > newWords[i].length ? 1 : 0)
                
                let style = newStyles.filter((item) => item.arrayIndex == i)
                style = style[0]
                // styles.forEach((style) => {
                    if(style){
                        // console.log('newstyles', newStyles)
                        // console.log('here', style.index <= index && (style.index + style.text.length) >= index, style.index, index, style.index + style.text.length)
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
                                        symbol: style.symbol,
                                        double: style.double
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
                                    symbol: style.symbol,
                                    double: style.double
                                }
                            ]
                        }
                    }
                }
            // }
            )
        } else {
            // GET INDEX OF SELECTION SELECTED ARRAY ELEMENT
            // let index = selected.anchorOffset < selected.focusOffset ? selected.anchorOffset : selected.focusOffset
            // let sliceBefore = words.join(' ').slice(0, index).split(' ')
            // let arrayIndex = sliceBefore.length - 1

            let arrayIndex = selected.arrayIndex
            
            newStyles = newStyles.map((style) => {
                if(style.arrayIndex >= arrayIndex) {
                    if(words.length > newWords.length && style.arrayIndex > 0) {
                        style.arrayIndex = style.arrayIndex - 1
                    } else {
                        style.arrayIndex = style.arrayIndex + 1
                    }  
                }
                return style
            })
            newStyles = newStyles.sort(function(a, b) {
                return a.arrayIndex - b.arrayIndex
            })
            // console.log('selection index: ', arrayIndex)
        }

        setStyles(newStyles)   
        setWords(newWords)
    }

    // const handleChange = (e) => {
    //     let text = e.target.innerText
    //     let newWords = text.split(' ').map((item) => item = item.trim())
    //     if(words.length == newWords.length) {
    //         words.forEach((word, i) => {

    //             let slice = text.slice(0, selected.anchorOffset).split(' ')
    //             // GET INDEX OF DELETED OR NEW CHARACTER IN SELECTED ARRAY ELEMENT
    //             let index = slice[slice.length - 1].length + (word.length > newWords[i].length ? 1 : 0)
                
    //             styles.forEach((style) => {
    //                 if(style.arrayIndex == i){
    //                     let newStyles = styles.filter((style) => style.arrayIndex != i)
    //                     if(style.index < index && (style.index + style.text.length) >= index){
    //                         let newText = newWords[i].slice(style.index, style.index + style.text.length + (word.length > newWords[i].length ? -1 : 1))
    //                         if(newText){
    //                             setStyles([
    //                                 ...newStyles,
    //                                 {
    //                                     index: style.index,
    //                                     arrayIndex: style.arrayIndex,
    //                                     text: newText,
    //                                     symbol: style.symbol,
    //                                     double: style.double
    //                                 }
    //                             ])
    //                         } else {
    //                             setStyles(newStyles)
    //                         }
    //                     } else if (style.index == index && style.index != 0){
    //                         setStyles([
    //                             ...newStyles,
    //                             {
    //                                 index: style.index - 1,
    //                                 arrayIndex: style.arrayIndex,
    //                                 text: style.text,
    //                                 symbol: style.symbol,
    //                                 double: style.double
    //                             }
    //                         ])
    //                     }
    //                 }
    //             })
    //         })
    //     } else {
    //         // GET INDEX OF SELECTION SELECTED ARRAY ELEMENT
    //         let index = selected.anchorOffset < selected.focusOffset ? selected.anchorOffset : selected.focusOffset
    //         let sliceBefore = words.join(' ').slice(0, index).split(' ')
    //         let arrayIndex = sliceBefore.length - 1
    //         index = sliceBefore[arrayIndex].length
    //         let newStyles = styles
    //         newStyles = newStyles.map((style) => {
    //             if(style.arrayIndex >= arrayIndex) {
    //                 if(words.length > newWords.length && style.arrayIndex > 0) {
    //                     style.arrayIndex = style.arrayIndex - 1
    //                 } else {
    //                     console.log('here', style)
    //                     style.arrayIndex = style.arrayIndex + 1
    //                 }  
    //             }
    //             return style
    //         })
    //         newStyles = newStyles.sort(function(a, b) {
    //             return a.arrayIndex - b.arrayIndex
    //         })
    //         setStyles(newStyles)
    //         console.log('selection index: ', arrayIndex)
    //     }
        
    //     setWords(newWords)
    // }


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

            <div className="p-4 bg-orange-400">
                <p>if second word is last = unselectable</p>
                {/* <p>selecting until last = unboldable/unselectable</p> */}
            </div>
        </div>
    )
}

export default EditorPage