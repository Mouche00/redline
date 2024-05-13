import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { fetchMediums } from "src/api/data"
import Bar from "src/components/elements/Bar"
import Card from "src/components/elements/Card"
import Island from "src/components/elements/island/Island"
import Loader from "src/components/elements/loader/Loader"
import SeaBackground from "src/components/elements/sea_background/SeaBackground"
import PostCard from "src/features/medium/components/elements/PostCard"

const IslandPage = ({ label }) => {
    const movies = useRef(null)
    const posts = useRef(null)


    const [mediums, setMediums] = useState()

    const getMediums = async () => {
        const response = await fetchMediums(label)
        setMediums(response)
        console.log(response)
    }

    useEffect(() => {
        getMediums()
    }, [])

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
            <SeaBackground className="h-[100vh] flex flex-col items-center justify-center">
                <Bar ref={posts} label='posts' sticked={true} className='left-0'>
                    {/* <PostCard minified={true} />
                    <PostCard minified={true} />
                    <PostCard minified={true} /> */}
                </Bar>
                <Island label={label} className='h-full' page={true} onHover={handleHover}/>
                <Bar ref={movies} label='media' sticked={true} className='right-0'>
                    {mediums && mediums.map((medium, i) => (
                        <Link to={`/medium/${medium.id}`} key={i}>
                            <Card medium={medium} />
                        </Link>
                    ))}
                </Bar>
            </SeaBackground >
        </Loader>
    )
}

export default IslandPage