import { useEffect, useState } from 'react'
import Texture from 'src/assets/texture.jpg'

export const LazyLoad = ({ children }) => {
    const [loadContent, setLoadContent] = useState(false)
    setTimeout(() => setLoadContent(true), 200)

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

const Loader = ({ children, className = '', style = {} }) => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoading(true)

            setTimeout(() => {
                setLoading(false)
            }, 2000)
        }, 5)
    }, [])

    return (
        <>
            <div className={`${loading ? 'translate-y-[100%]' : 'translate-y-[-100%]'} translate-y-[-100%] transition-all fixed z-50 top-[-100%] left-0 w-[100vw] h-[100vh] bg-contain bg-repeat`} style={{ backgroundImage: `url(${Texture})` }}></div>
            <LazyLoad>
                <section className={`overflow-x-hidden ${className}`} style={style}>
                    {children}
                </section>
            </LazyLoad>
        </>
    )
}

export default Loader