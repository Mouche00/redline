import { forwardRef } from "react"
import { sentenceCase } from "src/utils/case"
import Background from 'src/assets/background.png'
import Border from 'src/assets/border-3-h.png'

const repeat = (label, i = 10) => {
    const elements = []
    for(let j = 0; j < i; j++) {
        elements.push(<span>{label.toUpperCase()}</span>)
    }
    return elements
}

const Bar = forwardRef(({ children, label, sticked = false, className }, ref) => {
    return (
        <div ref={ref} className={`transition-all h-full z-20 max-h-full min-w-[25%] max-w-[35%] absolute bg-cover ${label == 'media' ? 'bg-left' : 'bg-right'} ${!sticked ? '' : ''} top-0 ${className}`} style={{backgroundImage: `url(${Background})`}}>
            <div className="h-full flex items-start">
                <div className={`relative h-full max-w-16 flex items-center justify-center bg-black ${label == 'media' ? '' : 'order-2'}`}>
                    <div className={`absolute h-full w-8 top-0 bg-contain bg-repeat left-0 translate-x-[-100%] rotate-[-180deg]`} style={{backgroundImage: `url(${Border})`}}></div>
                    <div className={`absolute h-full w-8 top-0 bg-contain bg-repeat right-0 translate-x-[100%]`} style={{backgroundImage: `url(${Border})`}}></div>
                    <h1 className={`text-3xl text-center font-black text-lightgrey space-x-8 ${label == 'media' ? 'rotate-[-90deg]' : 'rotate-[90deg]'}`}>
                        {repeat(label)}
                    </h1>
                </div>
                <div className={`w-full ${label == 'media' ? 'bg-bronze' : 'bg-teal'} bg-opacity-60 h-full p-4`}>
                    <div className={`grid ${label == 'media' ? 'grid-cols-2' : 'grid-cols-1'}`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Bar