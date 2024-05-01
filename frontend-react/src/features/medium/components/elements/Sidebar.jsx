/* eslint-disable react/display-name */
import { forwardRef, useRef } from "react"
import Border from "src/components/elements/border/Border"
import BorderRight from 'src/assets/border-5-v.png'
import Texture from 'src/assets/texture.jpg'


const Sidebar = forwardRef(({ children, hidden = 1, disabled = 0, overflow = 0 }, ref) => {
    const reference = ref ?? useRef(null)
    const hideSidebar = (e) => {
        e.stopPropagation()
        if(! disabled){
            reference.current.classList.toggle('translate-x-[100%]')
        }
    }

    return (
        <div ref={reference} className={`relative transition-all ${hidden ? 'translate-x-[100%]' : ''} w-full min-h-full top-0 left-0 bg-contain bg-repeat bg-center z-20`} style={{backgroundImage: `url(${Texture})`}}>
            <Border onClick={hideSidebar} direction='left' overflow={1} className='w-8' customImage={BorderRight} />
            <div className="h-full flex items-center flex-col">
                {children}
            </div>
        </div>
    )
})

export default Sidebar