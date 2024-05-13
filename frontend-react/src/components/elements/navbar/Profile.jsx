import { useRef } from 'react'
import DefaultPortrait from 'src/assets/portrait.jpg'
import Stroke from 'src/assets/stroke.png'
import Border from 'src/assets/border-2-h.png'
import Texture from 'src/assets/texture.jpg'
import Sticker from '../Sticker'
import ShadowWrapper from '../shadow/ShadowWrapper'
import Shadow from '../shadow/Shadow'
import { useAuth } from 'src/hooks/useAuth'

const Profile =  () => {
    const {user} = useAuth()
    const name = useRef(null)
    const role = useRef(null)
    const legend = useRef(null)

    const handleHover = () => {
        name.current.classList.toggle('opacity-0')
        role.current.classList.toggle('opacity-0')
        legend.current.classList.toggle('h-0')
        legend.current.classList.toggle('opacity-0')
    }

    return (
        <ShadowWrapper className='max-w-60 rotate-[1deg] translate-x-[-7px] translate-y-[5px] shadow-lg'>
            <div className='h-4 w-full bg-contain' style={{backgroundImage: `url(${Border})`}}></div>
                <div className="bg-contain p-2 bg-repeat flex flex-col items-center" style={{backgroundImage: `url(${Texture})`}}>
                    <div ref={legend} className="transition-all opacity-0 h-0 w-full flex items-end text-white p-2 grid grid-cols-2 gap-2">
                        <Sticker label='name' border='border-bronze' background='bg-bronze' />
                        <Sticker label='role' border='border-teal' background='bg-teal' />
                    </div>

                    <div className="h-64 w-48 p-2 py-4 pb-6 bg-contain bg-center bg-no-repeat" style={{backgroundImage: `url(${Stroke})`}}>
                        <div className='relative h-full w-full rounded border-2 border-white bg-cover bg-center bg-no-repeat text-white text-xl font-semibold' style={{backgroundImage: DefaultPortrait}}>
                            <div onMouseEnter={handleHover} onMouseLeave={handleHover} className='absolute top-0 left-0 h-full w-full'>
                                <div ref={name} className='h-[50%] w-full bg-bronze bg-opacity-50 flex items-center justify-center opacity-0 transition-all'>
                                    <p>{user ? JSON.parse(user).name : 'N/A'}</p>
                                </div>
                                <div ref={role} className='h-[50%] w-full bg-teal bg-opacity-50 flex items-center justify-center opacity-0 transition-all'>
                                    <p>{user ? 'User' : 'Visitor'}</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            <Shadow className='rotate-[-3deg]'/>
        </ShadowWrapper>
    )
}

export default Profile