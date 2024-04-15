import Loader from "src/components/elements/loader/Loader"
import MenuImg from 'src/assets/menu.jpg'
import Border from "src/components/elements/border/Border"
import BorderLeft from 'src/assets/border-l-3.png'
import BorderRight from 'src/assets/border-r-3.png'
import { useRef } from "react"
import Portrait from "src/components/elements/Portrait"

const Filler = () => {
    const button = useRef(null)
    const filler = useRef(null)

    const handleHover = () => {
        button.current.classList.toggle('translate-x-[-100%]')
        button.current.classList.toggle('opacity-0')
        filler.current.classList.toggle('translate-x-[100%]')
        filler.current.classList.toggle('opacity-0')
    }

    return (
        <div onMouseEnter={handleHover} onMouseLeave={handleHover} className="relative h-full w-full overflow-hidden">
            <div ref={filler} className="transition-all h-full w-full flex flex-col items-center justify-center gap-4">
                <div className="flex items-start gap-2">
                    <p className="bg-white text-white p-4">N/A</p>
                    <div className="bg-white w-64 h-8 p-[2px]"></div>
                </div>
                <div className="flex flex-row-reverse items-start gap-2">
                    <p className="bg-white text-white p-4">N/A</p>
                    <div className="bg-white w-64 h-8 p-[2px]"></div>
                </div>

                <div className="flex items-start gap-2">
                    <p className="bg-white text-white p-4">N/A</p>
                    <div className="bg-white w-64 h-8 p-[2px]"></div>
                </div>
                <div className="flex flex-row-reverse items-start gap-2">
                    <p className="bg-white text-white p-4">N/A</p>
                    <div className="bg-white w-64 h-8 p-[2px]"></div>
                </div>
            </div>

            <button ref={button} type="button" className="transition-all absolute top-0 left-0 translate-x-[-100%] opacity-0 h-full w-full text-white text-9xl font-black w-full">
                SUBMIT
            </button>
        </div>
    )
}

const LoginPage = () => {

    return (
        <Loader className="relative w-full h-[100vh] flex justify-center overflow-hidden">
            <img className='max-w-fit' src={MenuImg} alt="" />
            <div className="absolute bg-transparent w-full h-full grid grid-cols-3 text-white">
                    <div 
                        className='relative bg-lightgrey bg-opacity-100 w-[60%] mx-auto'   
                    >
                        <Border animated={true} direction='left' className='w-20 opacity-100' customImage={BorderLeft} />

                        <div className="h-full flex flex-col items-center justify-center">
                            <Portrait name="home" className='w-full'/>
                            <Portrait name="register" className='w-full'/>
                        </div>
                        
                        <Border animated={true}  direction='right' className='w-16' customImage={BorderRight} />

                    </div>

                    <div 
                        className='col-span-2 w flex flex-row-reverse'   
                    >
                        <Portrait name="login" disabled={true} className='w-[20%]'/>
                        <div 
                            className='relative h-full bg-gradient-to-b from-bronze to-transparent w-[50%]'   
                        >
                        <div className='w-full h-full absolute gap-4'>

                            <div className="w-full h-full flex flex-col items-center justify-center">
                                <Filler />

                                <form className="relative w-full font-semibold text-black flex flex-col justify-center items-center">
                                    <div className="flex w-full bg-white py-8 items-start justify-center gap-2">
                                        <label className="bg-black text-white p-4" htmlFor="email">Email</label>
                                        <input type="email" name="email" className="bg-black text-white p-[2px]" />
                                    </div>

                                    <div className="flex w-full bg-black py-8 flex-row-reverse justify-center items-start gap-2">
                                        <label className="bg-white text-black p-4" htmlFor="password">Password</label>
                                        <input type="password" name="password" className="p-[2px]" />
                                    </div>
                                </form>

                                <Filler />
                            </div>
                        </div>

                        <Border animated={true} direction='left' className='w-20 opacity-100' customImage={BorderLeft} />
                        <Border animated={true} direction='right' className='w-16' customImage={BorderRight} />
                    </div>
                </div>
                </div>
        </Loader>
    )
}

export default LoginPage