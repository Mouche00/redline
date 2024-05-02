/* eslint-disable react/display-name */
import Loader from "src/components/elements/loader/Loader"
import DefaultWallpaper from 'src/assets/default-wallpaper.jpg'
import DefaultPoster from 'src/assets/default-poster.jpg'
import BorderRight from 'src/assets/border-5-v.png'
import Texture from 'src/assets/texture.jpg'
import Border from "src/components/elements/border/Border"
import { forwardRef, useEffect, useRef, useState } from "react"
import PostCard from "../elements/PostCard"
import Sidebar from "../elements/Sidebar"
import { useParams } from "react-router-dom"
import { banUser, deletePost, fetchMedium } from "../../api/data"
import { ImageCard } from "../elements/MediumForm"
import { useAuth } from "src/hooks/useAuth"

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

const InfoSection = forwardRef(({ medium, onWheel, id, section }, ref) => {

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
        'crew',
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
                        <div className="w-full h-[50%] bg-cover bg-no-repeat bg-center opacity-70" style={{backgroundImage: `url(/src/assets/diamond-${activeLabel}.webp)`}}></div>
                        <h1 className="font-black text-black text-5xl bg-white w-full text-center p-2">{activeLabel.toUpperCase()}</h1>
                        {activeLabel == 'visuals' || activeLabel == 'crew' ? (
                            <div className="grid grid-cols-3 gap-8 w-full min-h-[30%] items-center justify-center p-8">
                            {activeLabel == 'visuals' ? (
                                medium.visuals.map((visual, i) => (
                                    <div key={i} className="w-full h-full border-2 border-white bg-white bg-cover bg-center" style={{backgroundImage: `url('http://localhost/uploads/${visual.path}')`}}></div>
                            ))) : (
                                medium.crew.map((crew, i) => (
                                <div key={i} className="flex flex-col p-2 bg-white items-start gap-4">
                                    <div className="w-full h-12 bg-cover bg-center rounded-full" style={{backgroundImage: `url(${crew.image ? 'http://localhost/uploads/' + crew.image.path : ''})`}}></div>
                                    <p className="text-black bg-white w-full px-1">{crew.name}</p>
                                    <p className="text-black bg-white w-full px-1">{crew.function}</p>
                                </div>
                            )))}
                            </div>
                        ) : (
                            <p className="text-white p-4 font-black text-4xl flex min-h-[30%] items-center justify-center">{medium[activeLabel]}</p>    
                        )}
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

const PostSection = ({ handleBan, handleDelete, medium, onWheel, id, section }) => {
    const sidebar = useRef(null)

    const handleClick = (label) => {
        sidebar.current.classList.add('translate-x-[100%]')
    }
    
    return (
        <Section onWheel={onWheel} id={id} section={section}>
            <div className="gap-12 my-12 mx-auto ml-12 h-fit w-full col-span-2 grid grid-cols-2 p-16">
                {medium && medium.posts.map((post, i) => (
                    <PostCard handleBan={handleBan} handleDelete={handleDelete} key={i} post={post} />
                ))}
            </div>

            <Sidebar ref={sidebar}>
                <button className="bg-white p-4 font-black text-black text-7xl w-full mb-24">+ NEW POST</button>
                <div className="w-full h-full flex flex-col items-center justify-sart gap-16">
                    <div className="rotate-[3deg] h-32 w-full flex flex-col items-end gap-2">
                        <label htmlFor="" className="px-4 text-black font-black text-6xl bg-white p-2">SEARCH</label>
                        <input type="text" className="p-[2px] w-[60%] text-white bg-bronze px-4" />
                    </div>
                    <div className="rotate-[-1deg] h-32 w-full flex flex-col items-start gap-2">
                        <h1 htmlFor="" className="px-4 text-black font-black text-6xl bg-white p-2">ORDER BY</h1>
                        <div className="flex gap-2">
                            <button className="bg-bronze p-2 px-4 font-black text-white">NEW</button>
                            <button className="bg-white p-2 font-black text-black">POPULAR</button>
                        </div>
                    </div>
                    <div className="rotate-[-2deg] h-32 w-full flex flex-col items-end gap-2">
                        <h1 htmlFor="" className="px-4 text-black font-black text-6xl bg-white p-2">FILTER</h1>
                        <div className="flex gap-2">
                            <button className="bg-bronze p-2 font-black text-white">TODAY</button>
                            <button className="bg-white p-2 font-black text-black">THIS MONTH</button>
                            <button className="bg-white p-2 font-black text-black">ALL TIME</button>
                        </div>
                    </div>
                </div>
            </Sidebar>
        </Section>
    )
}

const Diamond = ({ label, className, onClick }) => {
    return (
        <button onClick={() => onClick(label)} className={`relative w-32 h-32 mx-auto border-4 border-white rounded rotate-[-45deg] ${className}`}>
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <div className="absolute w-48 h-48 bg-cover bg-center bg-no-repeat rotate-[45deg]" style={{backgroundImage: `url(/src/assets/diamond-${label}.webp)`}}></div>
            </div>
            <div className="absolute top-0 left-0 h-full w-full flex items-end justify-center rotate-[45deg]">
                <p className="absolute bg-white font-bold w-[10rem] px-4 text-center text-xl">{label.toUpperCase()}</p>
            </div>
        </button>
    )
}

const LegendItem = ({ label, className, seperator = false, onClick}) => {
    return (
        <>
            <button onClick={onClick} className={`transition-all w-64 p-8 text-black text-4xl font-black border-4  border-white ${className}`}>{label.toUpperCase()}</button>
            {!seperator && 
                <hr className="h-full max-h-[15%] border-4 border-white"/>
            }
        </>
    )
}

const Legend = ({ section, changeSection }) => {
    const labels = [
        'info',
        'posts',
        'reviews'
    ]

    const handleClick = (i) => {
        changeSection(i)
    }

    return (
        <div className="h-full w-full flex flex-col items-center justify-center p-8 z-10">
            {labels.map((label, i) => (
                <LegendItem onClick={() => handleClick(i)} key={i} label={label} seperator={i >= labels.length - 1} className={section == i ? 'bg-white' : 'text-white'}/>
            ))}
        </div>
    )
}

const MediumPage = () =>{
    const {mediumID} = useParams()
    const [activeSection, setActiveSection] = useState(0)
    const [medium, setMedium] = useState(null)
    const sections = useRef(null)

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
            } else if(e.deltaY < 0 && prevSec){
                pos--
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

    const getMedium = async () => {
        const response = await fetchMedium(mediumID)
        setMedium(response)
        // console.log(response)
    }

    const handleBan = async (id) => {
        const response = await banUser(medium, id)
        getMedium()
    }

    const handleDelete = async (id) => {
        const response = await deletePost(id)
        getMedium()
    }

    useEffect(() => {
        getMedium()
    }, [])

    return (
        <Loader className="h-[100vh] overflow-hidden">
            <div className="h-full flex">
                <div className="relative flex w-[30%] h-full">
                    <div className="relative h-full w-full bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${medium && medium.poster ? 'http://localhost/uploads/' + medium.poster.path : DefaultPoster})`}}>
                        <div className="absolute w-full h-full top-0 left-0 bg-contain bg-repeat bg-center opacity-40" style={{backgroundImage: `url(${Texture})`}}></div>
                    </div>
                    <p className="absolute z-20 top-0 left-0 translate-x-8 translate-y-8 text-7xl font-black bg-white p-[2px] pr-48">{medium && medium.title}</p>
                    <Border direction='right' className='w-8' customImage={BorderRight} />
                </div>

                <div className="bg-cover bg-no-repeat bg-center w-full h-full" style={{backgroundImage: `url(${medium && medium.poster ? 'http://localhost/uploads/' + medium.background.path : DefaultWallpaper})`}}>
                    <div className="relative bg-bronze bg-opacity-60 h-full w-full grid grid-cols-3">
                        <div ref={sections} className="col-span-2 h-full w-full">
                            <InfoSection id={0} medium={medium} section={activeSection} onWheel={handleScroll} />
                            <PostSection id={1} handleBan={handleBan} handleDelete={handleDelete} medium={medium} section={activeSection} onWheel={handleScroll} />
                            <InfoSection id={2} section={activeSection} onWheel={handleScroll} />
                        </div>
                        <Legend section={activeSection} changeSection={setActiveSection}/>
                    </div>
                </div>
            </div>
        </Loader>
    )
}

export default MediumPage