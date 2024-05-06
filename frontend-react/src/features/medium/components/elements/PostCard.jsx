import Background from 'src/assets/background.png'
import Texture from 'src/assets/texture.jpg'
import DefaultPortrait from 'src/assets/portrait.jpg'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import ReactMarkdown from "react-markdown";


const PostCard = ( {post, minified = false, standalone = true} ) => {
    const name = useRef(null)
    const role = useRef(null)

    const handleHover = () => {
        name.current.classList.toggle('translate-y-[-100%]')
        role.current.classList.toggle('translate-y-[100%]')
    }

    return (
        <div className="w-full my-4 flex">
            <div className={`flex ${minified ? 'w-24' : 'w-32'} h-full flex-col items-center gap-2`}>
                <div onMouseEnter={handleHover} onMouseLeave={handleHover} className={`z-10 ${minified ? 'h-32 rotate-[-2deg]' : 'h-40'} w-full bg-cover bg-center bg-no-repeat flex flex-col z-20`} style={{backgroundImage: `url(${post ? 'http://localhost/uploads/' + post.content.user.image?.path : DefaultPortrait })`}}>
                    <div className='h-full w-full flex flex-col items-center overflow-hidden'>
                        <p ref={name} className='transition-all h-full w-full text-black flex items-center justify-center font-black bg-white translate-y-[-100%]'>{post?.content.user.name}</p>
                        <p ref={role} className='transition-all h-full w-full text-white flex items-center justify-center font-black bg-black translate-y-[100%]'>User</p>
                    </div>
                </div>
            </div>
            <div className='py-2 flex flex-col gap-2 items-end ml-[-1rem]'>
                <div className='relative rotate-[-2deg] bg-contain bg-repeat z-10 h-fit w-full' style={{backgroundImage: `url(${Texture})`}}>
                    <Link to={'/post/' + post.id} className={`h-full w-full overflow-hidden flex items-center justify-end ${!minified ? 'text-xl' : 'p-4'}`}>
                        <p className='max-w-64 p-[1px] text-white text-end font-semibold'>{post?.content.title}</p>
                    </Link>
                    <div className={`absolute flex justify-between items-center right-0 flex ${minified ? 'flex-row-reverse px-5 translate-y-[120%] bottom-0 ' : 'flex-col top-0 translate-x-[100%] pl-2'} justify-between items-center gap-3`}>
                        <button className='p-2 bg-white rotate-[-4deg]'>
                            <svg className='w-3' fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14z"></path></g></svg>
                        </button>

                        <button className='p-2 bg-white rotate-[4deg]'>
                            <svg className='w-3 rotate-[-180deg]' fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14z"></path></g></svg>
                        </button>

                        <button className='p-2 bg-white rotate-[2deg]'>
                            <svg className='w-3' viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M736 504a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zM128 128v640h192v160l224-160h352V128H128z"></path></g></svg>
                        </button>

                        <button className='p-2 bg-white rotate-[-3deg]'>
                            <svg className='w-3' fill="#000000" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>ionicons-v5-q</title><path d="M380.44,32H64A32,32,0,0,0,32,64V448a32,32,0,0,0,32,32H448a32.09,32.09,0,0,0,32-32V131.56ZM112,176V112H304v64ZM335.91,355.76a80,80,0,1,1-83.66-83.67A80.21,80.21,0,0,1,335.91,355.76Z"></path></g></svg>
                        </button>
                        
                    </div>

                    <div className={`absolute flex justify-between items-center right-0 flex flex-row-reverse px-5 translate-y-[-100%] py-2 top-0 justify-between items-center gap-3`}>
                        <div className='bg-white p-2 rotate-[-2deg]'>
                            <p className='font-black'>{post?.points}</p>
                        </div>

                        <div className='bg-white p-2 rotate-[1deg]'>
                            <p className='font-black'>{moment(post?.created_at).fromNow()}</p>
                        </div>
                        
                    </div>
                </div>
                {!minified &&
                    <div id='preview' className='w-full rotate-[2deg] bg-white text-black max-w-64 text-end p-[3px] pl-2'>
                        <ReactMarkdown>{post?.content.body}</ReactMarkdown>
                    </div>
                }
            </div>
        </div>
    )
}

export default PostCard