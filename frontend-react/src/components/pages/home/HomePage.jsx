import { useRef } from "react"
import Bar from "src/components/elements/Bar"
import Island from "src/components/elements/island/Island"
import Loader from "src/components/elements/loader/Loader"


const HomePage = () => {
    const movies = useRef(null)
    const posts = useRef(null)


    const handleHover = (e) => {

        const moviesClasses = movies.current.classList
        moviesClasses.toggle('opacity-0')

        const postsClasses = posts.current.classList
        postsClasses.toggle('opacity-0')

        e.target.classList.toggle('opacity-0')

        console.log('here', movies.current)
    }

    return (
        <Loader className="h-[100vh] flex flex-col items-center justify-center bg-black">
            <Bar ref={posts} label='posts' className='left-0 translate-x-[50%]'/>   
            <Island label='trending' onHover={handleHover} />
            <div className="flex items-center justify-center">
                <Island label='new' onHover={handleHover} />
                <Island label='releasing' onHover={handleHover} />
            </div>
            <Bar ref={movies} label='movies' className='right-0 translate-x-[-50%]' />
        </Loader>
    )
}

export default HomePage