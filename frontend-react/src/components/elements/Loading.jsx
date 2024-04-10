import { useEffect, useState } from 'react'
import Texture from 'src/assets/texture.jpg'

const Loading = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [loadContent, setLoadContent] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoading(true)

            setTimeout(() => {
                setLoading(false)
            }, 2000)
        }, 5)
    }, [])

   const LazyLoad = ({children}) => {
        setTimeout(() => setLoadContent(true), 500)

        return (
            <>
                {loadContent ? (
                    <>
                        {children}
                    </>
                ) : (
                    <div className='fixed top-0 left-0 w-[100vw] h-[100vh] bg-grey z-10'></div>
                )}
            </>
        )
            
    }
    return (
        <>
            <div className={`${loading ? 'translate-y-[100%]' : 'translate-y-[-100%]'} translate-y-[-100%] transition-all fixed top-[-100%] left-0 w-[100vw] h-[100vh] z-20 bg-contain bg-repeat`} style={{ backgroundImage: `url(${Texture})` }}></div>
            <LazyLoad>
                {children}
            </LazyLoad>
        </>
    )
}

export default Loading