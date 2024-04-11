import { forwardRef } from "react"
import { sentenceCase } from "src/utils/case"

const Bar = forwardRef(({ color = 'bronze', label, sticked = false, className }, ref) => {
    return (
        <div ref={ref} className={`transition-all z-20 p-4 max-h-full min-w-64 max-w-[30rem] absolute ${!sticked ? 'opacity-0' : ''} top-0 ${className}`}>
            <div className="grid grid-cols-1 gap-4">
                <h1 className={`text-xl px-4 py-2 text-center font-black text-white ${color == 'bronze' ? 'bg-bronze' : 'bg-teal'} rounded`}>{sentenceCase(label)}</h1>
                <div className={`bg-white border-4 border-dashed ${color == 'bronze' ? 'border-bronze' : 'border-bronze'} rounded h-16`}>
                    <p></p>
                </div>
            </div>
        </div>
    )
})

export default Bar