import { useEffect, useRef, useState } from "react"
import { fetchMediums, fetchPosts } from "src/api/data"
import Bar from "src/components/elements/Bar"
import Card from "src/components/elements/Card"
import Island from "src/components/elements/island/Island"
import Loader from "src/components/elements/loader/Loader"
import SeaBackground from "src/components/elements/sea_background/SeaBackground"
import PostCard from "src/features/medium/components/elements/PostCard"


const HomePage = () => {
    const movies = useRef(null)
    const posts = useRef(null)
    const [mediums, setMediums] = useState()
    const [post, setPost] = useState()

    const getMediums = async (type = 'new') => {
        const response = await fetchMediums(type)
        setMediums(response)
        console.log(response)
    }

    const getPosts = async (type = 'new') => {
        const response = await fetchPosts(type)
        setPost(response)
        console.log(response)
    }

    useEffect(() => {
        getMediums()
        getPosts()
    }, [])

    const handleHover = (e, type) => {
        getMediums(type)
        getPosts(type)
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
                    {/* {post && post.map((item, i) => (
                        <PostCard post={item} key={i} />
                    ))} */}
                </Bar>   
                <Island label='upcoming' onHover={(e) => handleHover(e, 'upcoming')} />
                <div className="flex items-center justify-center">
                    <Island label='new' onHover={(e) => handleHover(e, 'new')} />
                    <Island label='popular' onHover={(e) => handleHover(e, 'popular')} />
                </div>
                <Bar ref={movies} label='media' className='right-0 translate-x-[100%]'>
                    {mediums && mediums.map((medium, i) => (
                        <Card medium={medium} key={i} />
                    ))}
                </Bar>
            </SeaBackground>
        </Loader>
    )
}

export default HomePage