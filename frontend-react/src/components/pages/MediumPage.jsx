import Loader from "../elements/loader/Loader"
import DefaultWallpaper from 'src/assets/default-wallpaper.jpg'
import DefaultPoster from 'src/assets/default-poster.jpg'
import BorderRight from 'src/assets/border-5-v.png'
import Texture from 'src/assets/texture.jpg'
import Border from "../elements/border/Border"

const MediumPage = () =>{
    return (
        <Loader className="h-[100vh] overflow-hidden">
            <div className="h-full flex">
                <div className="relative flex w-[30%] h-full">
                    <div className="relative h-full w-full bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${DefaultPoster})`}}>
                        <div className="absolute w-full h-full top-0 left-0 bg-contain bg-repeat bg-center opacity-40" style={{backgroundImage: `url(${Texture})`}}></div>
                    </div>
                    <p className="absolute z-20 top-0 left-0 translate-x-8 translate-y-8 text-7xl font-black bg-white p-[2px] pr-48">DISCO ELYSIUM</p>
                    <Border direction='right' className='w-8' customImage={BorderRight} />
                </div>

                <div className="bg-cover bg-no-repeat bg-center w-full h-full" style={{backgroundImage: `url(${DefaultWallpaper})`}}>
                    <div className="bg-bronze bg-opacity-60 h-full w-full">
                        <div className="w-full h-full flex p-8 gap-8">
                            <div className="w-full h-full flex flex-col">
                                {/* <div className="flex flex-col items-end gap-4">
                                    <h1 className="font-black text-4xl bg-white w-64 p-2">NAME</h1>
                                    <p className="w-fit max-w-full p-2 bg-white font-bold">Lorem ipsum dolor sit amet consectetur</p>
                                </div> */}

                                <div className="w-full h-full col-span-3 grid grid-cols-3 p-8">
                                    <div className="relative w-32 h-32 mx-auto mx-auto bg-yellow-400 border-4 border-white rounded rotate-[-45deg]">
                                        <div className="w-full h-full flex items-center justify-center overflow-hidden">
                                            <img className="rotate-[45deg] min-w-fit" src={DefaultPoster} alt="" />
                                        </div>
                                        <p className="absolute bottom-0 left-0 translate-x-[-30%] translate-y-[-50%] bg-white font-bold w-full text-center rotate-[45deg]">Name</p>
                                    </div>
                                    <div className="relative translate-y-[100%] w-32 h-32 mx-auto bg-yellow-400 border-4 border-white rounded rotate-[-45deg]">
                                        <div className="w-full h-full flex items-center justify-center overflow-hidden">
                                            <img className="rotate-[45deg] min-w-fit" src={DefaultPoster} alt="" />
                                        </div>
                                        <p className="absolute bottom-0 left-0 translate-x-[-30%] translate-y-[-50%] bg-white font-bold w-full text-center rotate-[45deg]">Name</p>
                                    </div>
                                    <div className="relative w-32 h-32 mx-auto bg-yellow-400 border-4 border-white rounded rotate-[-45deg]">
                                        <div className="w-full h-full flex items-center justify-center overflow-hidden">
                                            <img className="rotate-[45deg] min-w-fit" src={DefaultPoster} alt="" />
                                        </div>
                                        <p className="absolute bottom-0 left-0 translate-x-[-30%] translate-y-[-50%] bg-white font-bold w-full text-center rotate-[45deg]">Name</p>
                                    </div>
                                    <div className="relative w-32 h-32 mx-auto bg-yellow-400 border-4 border-white rounded rotate-[-45deg]">
                                        <div className="w-full h-full flex items-center justify-center overflow-hidden">
                                            <img className="rotate-[45deg] min-w-fit" src={DefaultPoster} alt="" />
                                        </div>
                                        <p className="absolute bottom-0 left-0 translate-x-[-30%] translate-y-[-50%] bg-white font-bold w-full text-center rotate-[45deg]">Name</p>
                                    </div>
                                    <div className="relative translate-y-[100%] w-32 h-32 mx-auto bg-yellow-400 border-4 border-white rounded rotate-[-45deg]">
                                        <div className="w-full h-full flex items-center justify-center overflow-hidden">
                                            <img className="rotate-[45deg] min-w-fit" src={DefaultPoster} alt="" />
                                        </div>
                                        <p className="absolute bottom-0 left-0 translate-x-[-30%] translate-y-[-50%] bg-white font-bold w-full text-center rotate-[45deg]">Name</p>
                                    </div>
                                    <div className="relative w-32 h-32 mx-auto bg-yellow-400 border-4 border-white rounded rotate-[-45deg]">
                                        <div className="w-full h-full flex items-center justify-center overflow-hidden">
                                            <img className="rotate-[45deg] min-w-fit" src={DefaultPoster} alt="" />
                                        </div>
                                        <p className="absolute bottom-0 left-0 translate-x-[-30%] translate-y-[-50%] bg-white font-bold w-full text-center rotate-[45deg]">Name</p>
                                    </div>
                                    <div className="relative w-32 h-32 mx-auto bg-yellow-400 border-4 border-white rounded rotate-[-45deg]">
                                        <div className="w-full h-full flex items-center justify-center overflow-hidden">
                                            <img className="rotate-[45deg] min-w-fit" src={DefaultPoster} alt="" />
                                        </div>
                                        <p className="absolute bottom-0 left-0 translate-x-[-30%] translate-y-[-50%] bg-white font-bold w-full text-center rotate-[45deg]">Name</p>
                                    </div>
                                    <div className="relative translate-y-[100%] w-32 h-32 mx-auto bg-yellow-400 border-4 border-white rounded rotate-[-45deg]">
                                        <div className="w-full h-full flex items-center justify-center overflow-hidden">
                                            <img className="rotate-[45deg] min-w-fit" src={DefaultPoster} alt="" />
                                        </div>
                                        <p className="absolute bottom-0 left-0 translate-x-[-30%] translate-y-[-50%] bg-white font-bold w-full text-center rotate-[45deg]">Name</p>
                                    </div>
                                    <div className="relative w-32 h-32 mx-auto bg-yellow-400 border-4 border-white rounded rotate-[-45deg]">
                                        <div className="w-full h-full flex items-center justify-center overflow-hidden">
                                            <img className="rotate-[45deg] min-w-fit" src={DefaultPoster} alt="" />
                                        </div>
                                        <p className="absolute bottom-0 left-0 translate-x-[-30%] translate-y-[-50%] bg-white font-bold w-full text-center rotate-[45deg]">Name</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-full bg-red-400"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Loader>
    )
}

export default MediumPage