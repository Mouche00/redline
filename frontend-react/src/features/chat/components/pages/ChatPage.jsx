import { useAuth } from "src/hooks/useAuth"
import echo from "../../utils/echo"
import { useEffect, useRef, useState } from "react"
import { fetchChannels, fetchMessages, fetchReciever, send } from "../../api/data"
import DefaultPortrait from 'src/assets/portrait.jpg'
import Border from 'src/assets/border-5-h.png'
import BorderV from 'src/assets/border-5-v.png'
import moment from "moment"
import Texture from 'src/assets/texture.jpg'
import Loader from "src/components/elements/loader/Loader"

const ChatPage = () => {
    const {token, user} = useAuth()
    const [message, setMessage] = useState('')
    const [reciever, setReciver] = useState(null)
    const [channels, setChannels] = useState([])
    const [channel, setChannel] = useState(null)
    const [messages, setMessages] = useState([])
    const input = useRef(null)
    const chat = useRef(null)

    const getMessages = async (channel) => {
        const response = await fetchMessages(channel)
        setMessages(response)
    }

    const getReciever = async (channel) => {
        const response = await fetchReciever(channel)
        console.log('reciever', response, channel)
        setReciver(response)
    }

    const getChannels = async () => {
        const response = await fetchChannels();
        console.log('channels', response)
        setChannels(response)
    }

    useEffect(() => {
        getMessages(channel)
        getReciever(channel)
        getChannels()
    }, [channel])

    useEffect(() => {
        const instance = echo(token)
        try {

            instance.join(`chat.dm.${channel}`)
            .listen('.new-message', () => {
                getMessages(channel)
                console.log(1)
            })

            console.log(user)

            // instance.private(`App.Models.User.${user.id}`)
            // .notification(
            //     console.log('rayan')
            // )
        } catch (error) {
            console.log('Websocket error', error);
        }

        if(chat.current) {
            chat.current.scrollTop = chat.current.scrollHeight
        }

        return () => {
            instance.leave(`chat.dm.${channel}`);
        }
        
    }, [messages])
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        await send(message, channel)
        input.current.value = ''
    }

    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    const handleChannelChange = (id) => {
        setChannel(id)
    }

    return (
        <Loader className="relative w-full h-screen bg-grey flex items-center justify-center">
            <div className="absolute top-0 left-0 w-[25%] translate-x-8 z-10 h-full flex">
                <div className="w-4 h-full bg-contain bg-center bg-repeat rotate-[-180deg]" style={{backgroundImage: `url(${BorderV})`}}></div>
                <div className="bg-contain bg-center bg-repeat w-full h-full space-y-8" style={{backgroundImage: `url(${Texture})`}}>
                    <div className="p-4 space-y-4">
                        <div className="flex">
                            <label className="bg-bronze h-10 p-2 text-white font-black text-xl flex items-center" htmlFor="query">SEARCH</label>
                            <input className="h-10 w-full p-2" name="query" />
                        </div>
                        <button className="bg-bronze w-full p-4 text-white font-black text-white text-3xl">+ NEW CHAT</button>
                    </div>
                    
                    <div className="space-y-4">
                        {channels && channels.map((item, i) => (
                            <button onClick={() => handleChannelChange(item.id)} key={i} className="w-full h-32 bg-left bg-cover" style={{backgroundImage: `url(${DefaultPortrait})`}}>
                                <div key={i} className="w-full h-full flex items-center justify-center bg-teal bg-opacity-60 text-2xl font-black text-white">
                                    <p>{item.users[0].name.toUpperCase()}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                    
                </div>
                <div className="w-4 h-full bg-contain bg-center bg-repeat rotate-[-180deg]" style={{backgroundImage: `url(${BorderV})`}}></div>
            </div>
            <div className="w-full h-[80%] ml-[25%] py-12">
                <div className="h-6 w-full bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${Border})`}}></div>
                <div className="w-full h-full flex px-24">
                    {reciever ? (
                        <>
                            <div className="w-4 h-full bg-contain bg-center bg-repeat rotate-[-180deg]" style={{backgroundImage: `url(${BorderV})`}}></div>
                            <div className="w-[15%] h-full justify-center bg-cover bg-center bg-no-repeat border-4 border-white" style={{backgroundImage: `url(${DefaultPortrait})`}}>
                                <div className="w-full h-full bg-bronze bg-opacity-60 flex items-center justify-center">
                                    {/* <h1 className="rotate-[-90deg] font-black text-5xl text-white">{(messages[0].user_id != JSON.parse(user).id ? messages[0].user.name : messages[1].user.name).toUpperCase()}</h1> */}
                                    <h1 className="rotate-[-90deg] font-black text-5xl text-white">{reciever ? (reciever.name).toUpperCase() : ''}</h1>
                                </div>
                            </div>
                            <div className="h-full w-full border-4 border-white">
                                <div ref={chat} className="h-[92%] w-full overflow-y-scroll bg-white overflow-x-hidden">
                                    <div className="w-full flex items-center p-4">
                                        <div className={`w-full flex flex-col gap-8`}>
                                            {messages && messages.length > 0 && messages.map((message, index) => (
                                                message.message ? (
                                                    <div key={index} className={`flex flex-col ${message.user_id != reciever.id ? 'items-end' : 'items-start'}`}>
                                                        <div className={`${message.user_id != reciever.id ? 'text-end' : 'text-start'} relative z-10 min-w-4 text-white font-black h-fit text-xl`}>
                                                            <p className="rotate-[1deg] p-4 bg-bronze">{message.message}</p>
                                                            <div className="absolute rotate-[-2deg] top-0 left-0 w-full h-full z-[-1] bg-black translate-x-2 translate-y-2"></div>
                                                        </div>
                                                        {/* <p className="p-2 text-sm font-black text-bronze">{new Date((new Date(message.pivot.created_at).toISOString().slice(0, 19).replace('T', ' '))).toLocaleString()}</p> */}
                                                        <p className="p-2 text-xs mt-[1px] font-black text-bronze">{moment(message.created_at).fromNow() ?? ''}</p>
                                                    </div>     
                                                ) : (
                                                    <></>
                                                )
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className={`flex w-full h-[8%]`}>
                                    <p className="bg-black text-white font-black w-[25%] flex items-center justify-center text-xl">SEND MESSAGE</p>
                                    <div className="w-[80%]">
                                        <input ref={input} onChange={handleChange} type="text" name='message' className="w-full h-full border-4 outline-none border-black p-2 bg-white font-black h-fit mx-[-2px]" />
                                        <button type="submit" className="hidden"></button>
                                    </div>
                                </form> 
                            </div>
                            <div className="w-[15%] h-full  bg-cover bg-center bg-no-repeat border-4 border-white" style={{backgroundImage: `url(${DefaultPortrait})`}}>
                                <div className="w-full h-full bg-bronze bg-opacity-60 flex items-center justify-center">
                                    <h1 className="rotate-[-90deg] font-black text-5xl text-white">YOU</h1>
                                </div>
                            </div>
                            <div className="w-4 h-full bg-contain bg-center bg-repeat" style={{backgroundImage: `url(${BorderV})`}}></div>
                        </>
                    ) : (
                        <></>
                    )}
                </div>
                <div className="h-6 w-full bg-contain bg-center bg-repeat rotate-[-180deg]" style={{backgroundImage: `url(${Border})`}}></div>
            </div>
        </Loader>
    )
}

export default ChatPage