import { useEffect, useRef, useState } from "react"
import ReactMarkdown from "react-markdown";
import { storeImage, storePost } from "../../api/data";
import './Editor.css'
import Input from "src/features/auth/components/elements/Input";
import Card from "src/components/elements/Card";
import { fetchMediums } from "src/api/data";

const Editor = () => {
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
    const [position, setPosition] = useState('0')
    const [mediums, setMediums] = useState([])
    const [medium, setMedium] = useState()
    const [redirect, setRedirect] = useState(null)
    const editor = useRef(null)
    const input = useRef(null)
    const preview = useRef(null)

    console.log('form:', formData)
    console.log('position:', position)

    const handleTitle = (e) => {
        setFormData({
            ...formData,
            title: e.target.value
        })
    }

    const getMediums = async () => {
        const response = await fetchMediums()
        setMediums(response)
        console.log('here:', response)
    }

    const redirectToPage = () => {
        if(redirect){
            console.log('herrrr');
            window.location.href = "http://localhost:3000/post/" + redirect;
        }
    }

    useEffect(() => {
        redirectToPage()
    }, [redirect])

    const handleSubmit = async () => {
        const response = await storePost(medium, formData)
        setRedirect(response.contentable_id)
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
        setPosition(preview.current.offsetHeight)
    }

    useEffect(() => {
        getMediums()
    }, [])

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
        // setPosition(preview.current.offsetHeight)

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
        // console.log('here', preview.current.lastElementChild)
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

    const handleMedium = (id) => {
        // e.target.classList.add('bg-bronze', 'bg-opacity-60')
        setMedium(id)
    }


    return (
        <div className="">
            <button className="w-full flex justify-end" onClick={handleSubmit}>
                <p className="font-black bg-white text-6xl p-2 pl-28 text-end w-fit">SUBMIT</p>
            </button>
            <div className="grid grid-cols-5 gap-12 items-start justify-center">
                <div className="flex col-span-2 flex-col gap-8">
                    <div className="relative z-10 flex flex-col gap-3">
                        <div className="relative z-10 col-span-3 font-black w-fit">

                            <h1 className="p-4 bg-white">MEDIUM</h1>
                            <div className="absolute h-full w-full z-[-1] bg-teal top-0 left-0 translate-x-2 translate-y-2"></div>
                        </div>
                        <div className="relative z-10">

                            <div className="grid grid-cols-2 max-h-[55vh] overflow-y-scroll bg-white p-4 px-8">

                                {mediums ? (
                                    mediums.map((item, i) => (
                                        <button onClick={() => handleMedium(item.id)} key={i}>
                                            <Card className={`${item.id == medium ? 'bg-bronze bg-opacity-60' : ''}`} medium={item} />
                                        </button>
                                    ))
                                ) : (
                                    <p>No data</p>
                                )}
                            </div>
                        <div className="absolute h-full w-full z-[-1] bg-teal top-0 left-0 translate-x-4 translate-y-4"></div>
                        </div>
                    </div>
                    <Input onChange={handleTitle} type="text" label="title" className="w-fit" shadow={true}/>
                </div>
                <div className="grid grid-cols-2 col-span-3 gap-4 items-start">
                    <div className="relative z-10 col-span-3 font-black w-fit">

                        <h1 className="p-4 bg-white">BODY</h1>
                        <div className="absolute h-full w-full z-[-1] bg-teal top-0 left-0 translate-x-2 translate-y-2"></div>
                    </div>

                    <div className="relative z-10 col-span-2 w-full">

                        <div className="w-full">
                            <div id='preview' ref={preview} className={`w-full flex flex-col items-start justify-center gap-[1rem] bg-white ${markdowns.length > 0 ? 'p-4' : ''}`}>
                                {markdowns.map((item, i) => (
                                    <div className="w-full" key={i} onClick={() => editMarkdown(i)}>
                                        <ReactMarkdown>{item}</ReactMarkdown>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-white w-full px-4 min-h-8 w-[25rem]">

                                <ReactMarkdown>{markdown}</ReactMarkdown>
                            </div>
                        </div>
                        <div className="absolute h-full w-full z-[-1] bg-teal top-0 left-0 translate-x-2 translate-y-2"></div>
                    </div>

                    <div className="flex flex-col gap-2 justify-center"  style={{transform: `translateY(${position}px)`}}>
                        <div className={`flex flex-row-reverse gap-4 h-full w-fit`}>

                            <div className="relative z-10 col-span-2 font-black w-fit">
                                <div className="flex h-full w-fit flex-col bg-black text-white p-2">
                                    <button onClick={addBold} className="font-bold">B</button>
                                    <button onClick={addItalic} className="italic">I</button>
                                    <button onClick={addHeading} className="text-2xl">H</button>
                                    <button className="relative flex items-center justify-center">
                                        <svg className="w-5 ml-[5px]" fill="#fff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>image</title> <path d="M0 25.156v-18.313h22.406v18.313h-22.406zM20.125 19.094v-9.969h-17.844v8.469l4.875-2.906 6.375 3.469 2.594-1.531zM15.938 14.469c-1 0-1.781-0.813-1.781-1.813s0.781-1.813 1.781-1.813 1.781 0.813 1.781 1.813-0.781 1.813-1.781 1.813z"></path> </g></svg>
                                        <input ref={input} onChange={addImage} type="file" className="absolute w-full h-full top-0 left-0 opacity-0"/>
                                    </button>
                                    {/* <button onClick={addLineBreak}>L</button> */}
                                </div>
                            
                                <div className="absolute h-full w-full z-[-1] bg-bronze top-0 left-0 translate-x-2 translate-y-2"></div>
                            </div>

                            <div className="relative z-10 col-span-2 font-black w-fit h-fit">
                                <div className="w-full">
                                    <div ref={editor} contentEditable='true' onSelect={getSel} onKeyDown={handleKey} onKeyUp={handleChange} className="w-64 min-h-8 bg-black text-white"></div>
                                </div>
                            
                                <div className="absolute h-full w-full z-[-1] bg-bronze top-0 left-0 translate-x-2 translate-y-2"></div>
                            </div>
                        </div>

                        

                        {/* <div className="p-4 bg-orange-400">
                            <p>if second word is last = unselectable</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Editor