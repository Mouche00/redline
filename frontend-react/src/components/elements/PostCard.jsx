import Background from 'src/assets/background.png'
import Texture from 'src/assets/texture.jpg'
import DefaultPortrait from 'src/assets/portrait.jpg'

const PostCard = () => {
    return (
        <div className="w-full h-32 my-4 flex">
            <div className='z-10 h-full w-32 mr-[-1rem] rotate-[-2deg] bg-cover bg-center bg-no-repeat border-2 border-black' style={{backgroundImage: `url(${DefaultPortrait})`}}></div>
            <div className='px-2 py-4 w-full'>
                <div className='relative rotate-[1deg] bg-contain bg-repeat h-full' style={{backgroundImage: `url(${Texture})`}}>
                    <div className='h-full w-full p-2 overflow-hidden flex items-center justify-center'>
                        <p className='max-w-64 p-2 text-white font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque porro.</p>
                    </div>
                    <div className='absolute flex justify-between items-center bottom-0 translate-y-[50%] px-5 right-0 flex flex-row-reverse justify-between items-center gap-3'>
                        <button className='p-2 bg-white rotate-[-4deg]'>
                            <svg className='w-3' fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14z"></path></g></svg>
                        </button>

                        <button className='p-2 bg-white rotate-[4deg]'>
                            <svg className='w-3 rotate-[-180deg]' fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14z"></path></g></svg>
                        </button>

                        <button className='p-2 bg-white rotate-[2deg]'>
                            <svg className='w-3' viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M736 504a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zM128 128v640h192v160l224-160h352V128H128z"></path></g></svg>
                        </button>

                        <button className='p-2 bg-white rotate-[-3deg]'>
                            <svg className='w-3' fill="#000000" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>ionicons-v5-q</title><path d="M380.44,32H64A32,32,0,0,0,32,64V448a32,32,0,0,0,32,32H448a32.09,32.09,0,0,0,32-32V131.56ZM112,176V112H304v64ZM335.91,355.76a80,80,0,1,1-83.66-83.67A80.21,80.21,0,0,1,335.91,355.76Z"></path></g></svg>
                        </button>
                        
                    </div>
                    <div className='absolute top-0 right-0 translate-x-[20%] translate-y-[-20%] w-12 h-16 rotate-[2deg] bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${Background}`}}></div>

                </div>
            </div>
        </div>
    )
}

export default PostCard