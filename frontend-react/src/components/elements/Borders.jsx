import Border from 'src/assets/border-3-v.png'
import BorderHorizontal from 'src/assets/border-3-h.png'

const Borders = ({ children, className }) => {
    return (
        <div className={`relative z-10 p-[0px] ${className}`}>
            <div className="absolute z-[-1] top-0 left-0 translate-y-[-50%] h-8 w-full bg-contain bg-repeat-x bg-center" style={{backgroundImage: `url(${Border})`}}></div>
            <div className="absolute top-0 right-0 translate-x-[50%] w-8 h-full bg-contain bg-repeat-y bg-center" style={{backgroundImage: `url(${BorderHorizontal})`}}></div>
            <div className="absolute z-[-1] rotate-[180deg] bottom-0 left-0 translate-y-[50%] h-8 w-full bg-contain bg-repeat-x bg-center" style={{backgroundImage: `url(${Border})`}}></div>
            <div className="absolute bottom-0 left-0 translate-x-[-50%] rotate-[180deg] w-4 h-full w-8 bg-contain bg-repeat-y bg-center" style={{backgroundImage: `url(${BorderHorizontal})`}}></div>
            <div className='p-4 bg-black'>
                { children }
            </div>
        </div>
    )
} 

export default Borders