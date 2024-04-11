import MapOne from "src/assets/map-1.png"
import MapOneShadow from "src/assets/map-1-shadow.png"
import MapOneHover from "src/assets/map-1-hover.png"

import MapTwo from "src/assets/map-2.png"
import MapTwoShadow from "src/assets/map-2-shadow.png"
import MapTwoHover from "src/assets/map-2-hover.png"

import MapThree from "src/assets/map-3.png"
import MapThreeShadow from "src/assets/map-3-shadow.png"
import MapThreeHover from "src/assets/map-3-hover.png"

import { useRef } from "react"
import Card from "./Card"
import { Link } from "react-router-dom"

const Island = ({ label, className = '', page = false }) => {
    const image = useRef(null)
    const movies = useRef(null)
    const posts = useRef(null)

    const Map = label == 'Trending' ? MapOne : label == 'New' ? MapTwo : MapThree
    const MapShadow = label == 'Trending' ? MapOneShadow : label == 'New' ? MapTwoShadow : MapThreeShadow
    const MapHover = label == 'Trending' ? MapOneHover : label == 'New' ? MapTwoHover : MapThreeHover

    const handleHover = (e) => {
        const imageClasses = image.current.classList
        imageClasses.toggle('translate-x-[-2%]')
        imageClasses.toggle('translate-y-[-2%]')

        const moviesClasses = movies.current.classList
        moviesClasses.toggle('opacity-0')

        const postsClasses = posts.current.classList
        postsClasses.toggle('opacity-0')

        e.target.classList.toggle('opacity-0')
    }

    return (
        <>
            <Link to={`${!page ? `/${label}` : '/home'}`} className={`relative ${!page ? 'max-w-full' : 'max-h-full'} z-10 ${className}`}>
                <img ref={image} className={`transition-all ${!page ? 'max-h-[30rem]' : 'max-h-full'}`} src={Map} alt="" srcset="" />
                <div onMouseEnter={handleHover} onMouseLeave={handleHover} className={`transition-all h-full w-full absolute top-0 left-0 translate-x-[-2%] translate-y-[-2%] opacity-0 bg-contain bg-no-repeat flex justify-center items-center`} style={{backgroundImage: `url(${MapHover})`}}>
                    <p className="text-7xl font-black text-white">{`${!page ? label : 'Home'}`}</p>
                </div>
                <img className="h-full absolute top-0 left-0 z-[-1] scale-[99%]" src={MapShadow} alt="" srcset="" />
            </Link>



            <div ref={movies} className={`transition-all z-20 p-4 max-h-full min-w-64 max-w-[30rem] absolute ${!page ? 'opacity-0' : ''} top-0 right-0 translate-x-[-50%]`}>
                <div className="grid grid-cols-1 gap-4">
                    <h1 className="text-xl px-4 py-2 text-center font-black text-white bg-bronze rounded">Media</h1>
                    <div className="bg-white border-4 border-dashed border-bronze rounded h-16">
                        <p></p>
                    </div>
                </div>
            </div>

            <div ref={posts} className={`transition-all z-20 p-4 max-h-full min-w-64 max-w-[30rem] absolute ${!page ? 'opacity-0' : ''} top-0 left-0 translate-x-[50%]`}>
                <div className="grid grid-cols-1 gap-4">
                    <h1 className="text-xl px-4 py-2 text-center font-black text-white bg-teal rounded">Posts</h1>
                    <div className="bg-white border-4 border-dashed border-teal rounded h-16">
                        <p></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Island