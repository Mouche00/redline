/* eslint-disable react/display-name */
import Loader from "../elements/loader/Loader"
import DefaultWallpaper from 'src/assets/default-wallpaper.jpg'
import DefaultPoster from 'src/assets/default-poster.jpg'
import BorderRight from 'src/assets/border-5-v.png'
import Texture from 'src/assets/texture.jpg'
import Border from "../elements/border/Border"
import { forwardRef, useEffect, useRef, useState } from "react"

const Section = forwardRef(({ children, onWheel, id, section }, ref) => {
    let pos = ''
    switch (true) {
        case id < section:
            pos = 'translate-y-[-100%]'
            console.log('up')
            break;
        case id > section:
            pos = 'translate-y-[100%]'
            console.log('down')
            break;
    }
    console.log('here', id, section, pos)
    return (
        <div ref={ref} onWheel={onWheel} className={`absolute transition-all w-full h-full grid grid-cols-3 gap-8 ${pos}`}>
            {children}
        </div>
    )
})

const InfoSection = forwardRef(({ onWheel, id, section }, ref) => {

    const [activeLabel, setActiveLabel] = useState('')
    const sidebar = useRef(null)

    const labels = [
        'title',
        'description',
        'visuals',
        'genre',
        'date',
        'studio',
        'category',
        'people',
        'misc'
    ]

    const handleClick = (label) => {
        if(label !== activeLabel){
            sidebar.current.classList.add('translate-x-[100%]')
            console.log(2)
            setTimeout(() => {
                sidebar.current.classList.remove('translate-x-[100%]')
                setActiveLabel(label)
            }, 200)
        }
    }
    
    return (
        <Section ref={ref} onWheel={onWheel} id={id} section={section}>
            <div className="gap-32 my-12 mx-auto h-fit w-fit col-span-2 grid grid-cols-3 p-16">
                {labels.map((label, i) => (
                    <Diamond onClick={handleClick} key={i} label={label} className={(i - 1) % 3 == 0 ? 'translate-y-[100%]' : ''} />
                ))}
            </div>

            <Sidebar ref={sidebar}>
                {activeLabel ? (
                    <>
                        <div className="w-full h-[50%] bg-contain bg-repeat bg-center opacity-70" style={{backgroundImage: `url(src/assets/diamond-${activeLabel}.webp)`}}></div>
                        <h1 className="font-black text-black text-5xl bg-white w-full text-center p-2">{activeLabel.toUpperCase()}</h1>
                        <p className="text-white p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi impedit consectetur ut reiciendis nihil perferendis sunt sapiente possimus nulla obcaecati, veniam aut quo magnam sint illo repudiandae. Nulla, sed quasi!</p>    
                    </>
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <h1 className="rotate-[-90deg] text-9xl text-white font-black">SELECT A SECTION</h1>
                    </div>
                )}
                </Sidebar>
        </Section>
    )
})

const Diamond = ({ label, className, onClick }) => {
    return (
        <button onClick={() => onClick(label)} className={`relative w-32 h-32 mx-auto border-4 border-white rounded rotate-[-45deg] ${className}`}>
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <div className="absolute w-48 h-48 bg-cover bg-center bg-no-repeat rotate-[45deg]" style={{backgroundImage: `url(src/assets/diamond-${label}.webp)`}}></div>
            </div>
            <div className="absolute top-0 left-0 h-full w-full flex items-end justify-center rotate-[45deg]">
                <p className="absolute bg-white font-bold w-[10rem] px-4 text-center text-xl">{label.toUpperCase()}</p>
            </div>
        </button>
    )
}

const Sidebar = forwardRef(({ children }, ref) => {
    const hideSidebar = (e) => {
        e.stopPropagation()
        ref.current.classList.toggle('translate-x-[100%]')
    }

    return (
        <div ref={ref} className="relative transition-all translate-x-[100%] w-full h-full top-0 left-0 bg-contain bg-repeat bg-center" style={{backgroundImage: `url(${Texture})`}}>
            <Border onClick={hideSidebar} direction='left' className='w-8' customImage={BorderRight} />
            <div className="h-full flex items-center flex-col">
                {children}
            </div>
        </div>
    )
})

const MediumPage = () =>{
    const [activeSection, setActiveSection] = useState(0)
    const sections = useRef(null)
    // const [currentSec, setCurrentSec] = useState(null)

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCurrentSec(topElement.current)
    //     }, 1500)
    // }, [])

    const handleScroll = (e) => {
        const currentSec = sections.current.children[activeSection]
        const nextSec = currentSec.nextElementSibling
        const prevSec = currentSec.previousElementSibling
        console.log('curr', currentSec)
        console.log('next', nextSec)
        console.log('prev', prevSec)
        let pos = 0
        if(e.deltaX <= 0) {
            if(e.deltaY > 0 && nextSec){
                pos++
                // currentSec.classList.add('translate-y-[-100%]')
                // nextSec.classList.add('translate-y-[-100%]')
            } else if(e.deltaY < 0 && prevSec){
                pos--
                // currentSec.classList.remove('translate-y-[-100%]')
                // prevSec.classList.remove('translate-y-[-100%]')

            }
        }

        switch (true) {
            case (pos > 0):
                setTimeout(() => {
                    setActiveSection(activeSection + 1)
                }, 100)
                break;
            case (pos < 0):
                setTimeout(() => {
                    setActiveSection(activeSection - 1)
                }, 100)
                break;
        }
    }

    console.log(activeSection)

    const handleUpScroll = (e) => {
        if(e.deltaY > 0 && e.deltaX <= 0){
            topSibling.current.classList.add('translate-y-[-100%]')
            bottomSibling.current.classList.add('translate-y-[-100%]')
        }
    }

    const handleDownScroll = (e) => {
        if(e.deltaY < 0 && e.deltaX <= 0){
            bottomSibling.current.classList.remove('translate-y-[-100%]')
            topSibling.current.classList.remove('translate-y-[-100%]')
        }
    }

    return (
        <Loader className="h-[100vh] overflow-hidden">
            <div className="h-full flex">
                <div className="relative flex w-[30%] h-full">
                    <div className="relative h-full w-full bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${DefaultPoster})`}}>
                        <div className="absolute w-full h-full top-0 left-0 bg-contain bg-repeat bg-center opacity-40" style={{backgroundImage: `url(${Texture})`}}></div>
                    </div>
                    <p className="absolute z-20 top-0 left-0 translate-x-8 translate-y-8 text-7xl font-black bg-white p-[2px] pr-48">DISCO ELYSIUM</p>
                    <Border direction='right' className='w-8' customImage={BorderRight} />
                </div>

                <div className="bg-cover bg-no-repeat bg-center w-full h-full" style={{backgroundImage: `url(${DefaultWallpaper})`}}>
                    <div ref={sections} className="relative bg-bronze bg-opacity-60 h-full w-full">
                        <InfoSection id={0} section={activeSection} onWheel={handleScroll} />
                        <InfoSection id={1} section={activeSection} onWheel={handleScroll} />
                        <InfoSection id={2} section={activeSection} onWheel={handleScroll} />
                    </div>
                </div>
            </div>
        </Loader>
    )
}

export default MediumPage