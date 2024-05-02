import Background from 'src/assets/background.png'
import ReactMarkdown from "react-markdown";
import Texture from 'src/assets/texture.jpg'
import DefaultPortrait from 'src/assets/portrait.jpg'
import { useRef } from 'react'
import moment from "moment"
import { Link } from 'react-router-dom';
import { useAuth } from 'src/hooks/useAuth';

const PostCard = ( {post, handleDelete, handleBan, minified = false, standalone = true} ) => {
    const name = useRef(null)
    const role = useRef(null)
    const {user} = useAuth()

    const handleHover = () => {
        name.current.classList.toggle('translate-y-[-100%]')
        role.current.classList.toggle('translate-y-[100%]')
    }

    return (
        <div className="w-full my-4 flex">
            <div className={`flex ${minified ? 'w-24' : 'w-32'} h-full flex-col items-center gap-2`}>
                <div onMouseEnter={handleHover} onMouseLeave={handleHover} className={`z-10 ${minified ? 'h-32 rotate-[-2deg]' : 'h-40'} w-full bg-cover bg-center bg-no-repeat flex flex-col z-20`} style={{backgroundImage: `url(${DefaultPortrait})`}}>
                    <div className='h-full w-full flex flex-col items-center overflow-hidden'>
                        <p ref={name} className='transition-all h-full w-full text-black flex items-center justify-center font-black bg-white translate-y-[-100%]'>{post && post.content.user.name}</p>
                        <p ref={role} className='transition-all h-full w-full text-white flex items-center justify-center font-black bg-black translate-y-[100%]'>{'User'}</p>
                    </div>
                </div>
            </div>
            <div className='py-2 flex flex-col gap-2 items-end ml-[-5px]'>
                <div className='relative rotate-[-2deg] bg-contain bg-repeat z-10 h-fit w-fit' style={{backgroundImage: `url(${Texture})`}}>
                    <div className={`h-full w-full overflow-hidden flex items-center justify-center ${!minified ? 'text-xl' : 'p-2'}`}>
                        <Link to={`/post/${post.id}`} className='max-w-64 p-[1px] text-white text-end font-semibold'>{post && post.content.title}</Link>
                    </div>
                    <div className={`absolute flex justify-between items-center right-0 flex ${minified ? 'flex-row-reverse px-5 translate-y-[120%] bottom-0 ' : 'flex-col top-0 translate-x-[100%] pl-2'} justify-between items-center gap-3`}>
                        {post.medium.users.find((u) => u.id == JSON.parse(user).id && u.pivot.is_moderator_at) && (
                            <>
                                <button onClick={() => handleDelete(post.id)} className='p-2 bg-white rotate-[-4deg]'>
                                    DEL
                                </button>

                                <button onClick={() => handleBan(post.content.user.id)} className='p-2 bg-white rotate-[4deg]'>
                                    BAN
                                </button> 
                            </>
                        )}

                        {/* <button className='p-2 bg-white rotate-[2deg]'>
                            <svg className='w-3' viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M736 504a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zM128 128v640h192v160l224-160h352V128H128z"></path></g></svg>
                        </button>

                        <button className='p-2 bg-white rotate-[-3deg]'>
                            <svg className='w-3' fill="#000000" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>ionicons-v5-q</title><path d="M380.44,32H64A32,32,0,0,0,32,64V448a32,32,0,0,0,32,32H448a32.09,32.09,0,0,0,32-32V131.56ZM112,176V112H304v64ZM335.91,355.76a80,80,0,1,1-83.66-83.67A80.21,80.21,0,0,1,335.91,355.76Z"></path></g></svg>
                        </button> */}
                        
                    </div>

                    <div className={`absolute flex justify-between items-center right-0 flex flex-row-reverse px-5 translate-y-[-100%] py-2 top-0 justify-between items-center gap-3`}>
                        <div className='bg-white p-2 rotate-[-2deg]'>
                            <p className='font-black'>{post && post.points}</p>
                        </div>

                        <div className='bg-white p-2 rotate-[1deg] w-fit'>
                            <p className='font-black'>{post && moment(post.created_at).fromNow()}</p>
                        </div>
                        
                    </div>
                </div>
                {!minified &&
                    <div className='w-full rotate-[2deg] bg-white border-b-4 border-dashed border-white text-black text-xs p-[2px]'>
                        <div className='preview max-h-32 overflow-hidden max-w-64 text-end p-[1px] font-semibold'>
                            <ReactMarkdown>{post.content.body}</ReactMarkdown>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default PostCard