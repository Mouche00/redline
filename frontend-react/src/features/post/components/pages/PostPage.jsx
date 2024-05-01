/* eslint-disable react/prop-types */
import Border from "src/components/elements/border/Border"
import DefaultWallpaper from 'src/assets/default-wallpaper.jpg'
import DefaultPoster from 'src/assets/default-poster.jpg'
import DefaultPortrait from 'src/assets/portrait.jpg'
import BorderRight from 'src/assets/border-5-v.png'
import Texture from 'src/assets/texture.jpg'
import Loader from "src/components/elements/loader/Loader"
import Sidebar from "src/features/medium/components/elements/Sidebar"
import { useParams } from "react-router-dom"
import { fetchComment, fetchComments, storeComment } from "../../api/data"
import { useEffect, useRef, useState } from "react"
import Input from "src/components/elements/form/Input"
import FormProvider from "src/providers/FormProvider"

const CommentCard = ({comment, onClick, disabled = 0}) => {
    const name = useRef(null)
    const role = useRef(null)

    const handleHover = () => {
        name.current.classList.toggle('translate-y-[-100%]')
        role.current.classList.toggle('translate-y-[100%]')
    }

    return (
        <div className={`flex w-full justify-center items-start gap-2 ${ disabled ? 'border-l-[4rem] border-bronze p-4' : ''}`}>
            <div className={`h-40 w-[30%] bg-cover bg-center bg-no-repeat flex flex-col border-2 border-white`} style={{backgroundImage: `url(${DefaultPortrait})`}}>
                <div onMouseEnter={handleHover} onMouseLeave={handleHover} className='h-full w-full flex flex-col items-center overflow-hidden'>
                    <p ref={name} className='transition-all h-full w-full text-black flex items-center justify-center font-black bg-white translate-y-[-100%]'>Tequila</p>
                    <p ref={role} className='transition-all h-full w-full text-white flex items-center justify-center font-black bg-black translate-y-[100%]'>Visitor</p>
                </div>
            </div>
            <div className="w-[60%] h-40 flex flex-col gap-2">
                <p className="text-black text-semibold bg-white p-4 px-3 text-center text-start w-full">{comment.content.body}</p>
                
                <div className="flex h-full items-start gap-2">
                    {!disabled && (
                        <button onClick={onClick} className="bg-teal text-white h-full flex items-center font-black">
                            <span className="text-xl block rotate-[-90deg]">REPLY</span>
                        </button>
                    )}
                    <div className='bg-white w-fit p-2 px-3 border-l-8 border-teal'>
                        <p className='font-black w-full text-center'>{comment.votes.length}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const PostPage = () => {
    const { post } = useParams()
    const [commentable, setCommentable] = useState({
        name: 'post',
        id: post
    })
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState()
    const [formData, setFormData] = useState({
        body: ''
    })

    const name = useRef(null)
    const role = useRef(null)

    const handleHover = () => {
        name.current.classList.toggle('translate-y-[-100%]')
        role.current.classList.toggle('translate-y-[100%]')
    }

    const getComment = async (id) => {
        try {
            const response = await fetchComment(id)
            setComment(response)
        } catch(error) {
            setComment(null)
        }
    }

    const getComments = async () => {
        try {
            const response = await fetchComments(commentable)
            setComments(response)
        } catch(error) {
            setComments([])
        }
    }

    const resetComments = () => {
        setCommentable({
            name: 'post',
            id: post
        })
        setComment(null)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // eslint-disable-next-line no-unused-vars
        const response = await storeComment(commentable, formData)
        getComments()
    }

    const handleClick = (id) => {
        console.log(id)
        setCommentable({
            name: 'comment',
            id: id
        })
        getComment(id)
    }

    useEffect(() => {
        getComments()
    }, [commentable])

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
                    <div className="relative bg-bronze bg-opacity-60 h-full w-full grid grid-cols-3">
                        <div className="col-span-2 h-full w-full py-32">
                            
                        <div className="w-full my-4 flex justify-center gap-4">
                            <div className={`flex w-[20%] h-full flex-col items-center gap-2`}>
                                <div onMouseEnter={handleHover} onMouseLeave={handleHover} className={`h-64 w-full bg-cover bg-center bg-no-repeat flex flex-col z-20 border-l-8 border-white`} style={{backgroundImage: `url(${DefaultPortrait})`}}>
                                    <div className='h-full w-full flex flex-col items-center overflow-hidden'>
                                        <p ref={name} className='transition-all text-2xl h-full w-full text-black flex items-center justify-center font-black bg-white translate-y-[-100%]'>Tequila</p>
                                        <p ref={role} className='transition-all text-2xl h-full w-full text-white flex items-center justify-center font-black bg-black translate-y-[100%]'>Visitor</p>
                                    </div>
                                </div>

                                <div className={`w-full grid grid-cols-4 py-2 items-center gap-3 text-lg`}>
                                    <div className='bg-white w-full col-span-2 p-2 border-l-8 border-black'>
                                        <p className='font-black w-full text-center'>145</p>
                                    </div>
                                    {/* <div className='bg-white p-2 border-l-8 border-black'>
                                        <p className='font-black w-full text-center'>145</p>
                                    </div>
                                    <div className='bg-white p-2 border-l-8 border-black'>
                                        <p className='font-black w-full text-center'>145</p>
                                    </div> */}
                                </div>

                                <div className={`w-full flex justify-between items-center flex justify-between items-center gap-3`}>
                                    <button className='relative z-10'>
                                        <div className="p-2 bg-white">
                                            <svg className='w-4' fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14z"></path></g></svg>
                                        </div>
                                        <div className="absolute z-[-1] top-0 left-0 translate-x-2 translate-y-2 bg-teal w-full h-full"></div>
                                    </button>

                                    <button className='relative z-10'>
                                        <div className="p-2 bg-white">
                                            <svg className='w-4 rotate-[-180deg]' fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14z"></path></g></svg>
                                        </div>
                                        <div className="absolute z-[-1] top-0 left-0 translate-x-2 translate-y-2 bg-teal w-full h-full"></div>
                                    </button>

                                    <button className='relative z-10'>
                                        <div className="p-2 bg-white">
                                            <svg className='w-4' viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M736 504a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zM128 128v640h192v160l224-160h352V128H128z"></path></g></svg>
                                        </div>
                                        <div className="absolute z-[-1] top-0 left-0 translate-x-2 translate-y-2 bg-teal w-full h-full"></div>
                                    </button>

                                    <button className='relative z-10'>
                                        <div className="p-2 bg-white">
                                            <svg className='w-4' fill="#000000" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>ionicons-v5-q</title><path d="M380.44,32H64A32,32,0,0,0,32,64V448a32,32,0,0,0,32,32H448a32.09,32.09,0,0,0,32-32V131.56ZM112,176V112H304v64ZM335.91,355.76a80,80,0,1,1-83.66-83.67A80.21,80.21,0,0,1,335.91,355.76Z"></path></g></svg>
                                        </div>
                                        <div className="absolute z-[-1] top-0 left-0 translate-x-2 translate-y-2 bg-teal w-full h-full"></div>
                                    </button>  
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 items-end'>
                                <div className='bg-contain bg-repeat z-10 h-fit w-full border-l-8 border-teal' style={{backgroundImage: `url(${Texture})`}}>
                                    <div className={`h-full w-full overflow-hidden flex items-center justify-center text-5xl`}>
                                        <p className='max-w-[32rem] p-[2px] text-white text-end font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                    </div>
                                </div>

                                <div className='w-full bg-white text-black text-md p-[2px] border-l-8 border-black'>
                                    <p className='max-w-[32rem] text-end p-[1px] pl-2 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem et inventore debitis dolor quas in ratione aperiam eum dolorum quam suscipit omnis voluptas, doloribus odio cum laudantium, rerum, dolores deleniti.</p>
                                </div>
                            </div>
                        </div>

                        </div>
                        <div className="overflow-scroll">
                            <Sidebar hidden={0} disabled={1} overflow={1}>
                                <div className="w-full h-full flex flex-col gap-8 items-center justify-start">
                                    <button onClick={resetComments} className="text-7xl w-full text-center p-4 bg-teal text-white font-black">COMMENTS</button>
                                    {comment && (
                                        <CommentCard comment={comment} onClick={() => handleClick(comment.id)} disabled={1}/>
                                    )}

                                    <div className="flex w-full flex-col gap-2">
                                        <FormProvider className="flex justify-center w-full items-start gap-2" onSubmit={handleSubmit} setFormData={setFormData}>
                                            <div className={`h-40 w-[30%] bg-cover bg-center bg-no-repeat flex flex-col border-2 border-white`} style={{backgroundImage: `url(${DefaultPortrait})`}}></div>
                                            <div className="w-[60%] h-full flex flex-col gap-2">
                                                <Input className='text-black text-semibold bg-white p-4 px-3 text-center text-start w-full' name='body' />
                                            </div>
                                        </FormProvider>

                                        {comments ? (
                                            comments.map((comment, i) => (
                                                <CommentCard comment={comment} key={i} onClick={() => handleClick(comment.id)} />
                                            ))
                                        ) : (
                                            <p>No comments yet</p>
                                        )}

                                        <div className="h-24"></div>
                                    </div>
                                </div>
                            </Sidebar>
                        </div>
                    </div>
                </div>
            </div>
        </Loader>
    )
}

export default PostPage