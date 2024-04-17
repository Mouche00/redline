import { useRef } from "react"
import Bar from "src/components/elements/Bar"
import Card from "src/components/elements/Card"
import PostCard from "src/components/elements/PostCard"
import Island from "src/components/elements/island/Island"
import Loader from "src/components/elements/loader/Loader"
import SeaBackground from "src/components/elements/sea_background/SeaBackground"


const HomePage = () => {
    const movies = useRef(null)
    const posts = useRef(null)


    const handleHover = (e) => {

        const moviesClasses = movies.current.classList
        moviesClasses.toggle('translate-x-[100%]')

        const postsClasses = posts.current.classList
        postsClasses.toggle('translate-x-[-100%]')

        e.target.classList.toggle('opacity-0')

        console.log('here', movies.current)
    }

    return (
        <Loader className="overflow-hidden">
            <SeaBackground className="h-[100vh] flex flex-col items-center justify-center w-full">
                <Bar ref={posts} label='posts' className='left-0 translate-x-[-100%] grid-cols-1'>
                    <PostCard minified={true} />
                    <PostCard minified={true} />
                </Bar>   
                <Island label='upcoming' onHover={handleHover} />
                <div className="flex items-center justify-center">
                    <Island label='new' onHover={handleHover} />
                    <Island label='popular' onHover={handleHover} />
                </div>
                <Bar ref={movies} label='media' className='right-0 translate-x-[100%]'>
                    <Card />
                </Bar>
            </SeaBackground>
        </Loader>
    )
}

export default HomePage