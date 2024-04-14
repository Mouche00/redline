import MapOne from "src/assets/map-1.png"
import MapOneShadow from "src/assets/map-1-shadow.png"
import MapOneHover from "src/assets/map-1-hover.png"

import MapTwo from "src/assets/map-2.png"
import MapTwoShadow from "src/assets/map-2-shadow.png"
import MapTwoHover from "src/assets/map-2-hover.png"

import MapThree from "src/assets/map-3.png"
import MapThreeShadow from "src/assets/map-3-shadow.png"
import MapThreeHover from "src/assets/map-3-hover.png"

import { Link } from "react-router-dom"
import { useRef } from "react"
import { sentenceCase } from "src/utils/case"

const Island = ({ label, className = '', page = false, onHover }) => {
    const image = useRef(null)
    const shadow = useRef(null)

    const mapID = label == 'popular' ? 1 : label == 'new' ? 2 : 3

    const Map = mapID == 1 ? MapOne : mapID == 2 ? MapTwo : MapThree
    const MapShadow = mapID == 1 ? MapOneShadow : mapID == 2 ? MapTwoShadow : MapThreeShadow
    const MapHover = mapID == 1 ? MapOneHover : mapID == 2 ? MapTwoHover : MapThreeHover

    const handleHover = (e) => {
        const imageClasses = image.current.classList
        imageClasses.toggle('translate-x-[-2%]')
        imageClasses.toggle('translate-y-[-2%]')

        shadow.current.classList.toggle('scale-[101%]')

        onHover(e)
    }

    return (
        <>
            <Link to={`${!page ? `/${label}` : '/home'}`} className={`relative ${!page ? 'max-w-full' : 'max-h-full'} z-10 ${className}`}>
                <img ref={image} className={`transition-all ${!page ? 'max-h-[30rem]' : 'max-h-full'}`} src={Map} alt="" srcset="" />
                <div onMouseEnter={handleHover} onMouseLeave={handleHover} className={`transition-all h-full w-full absolute top-0 left-0 translate-x-[-2%] translate-y-[-2%] opacity-0 bg-contain bg-no-repeat flex justify-center items-center`} style={{backgroundImage: `url(${MapHover})`}}>
                    <p className="text-7xl font-black text-white">{`${!page ? sentenceCase(label) : 'Home'}`}</p>
                </div>
                <img ref={shadow} className="h-full absolute top-0 left-0 z-[-1] scale-[101%]" src={MapShadow} alt="" srcset="" />
            </Link>
        </>
    )
}

export default Island