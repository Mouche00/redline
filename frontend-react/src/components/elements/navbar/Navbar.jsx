import Texture from 'src/assets/texture.jpg'
import Border from 'src/assets/border-2-h.png'
import { Link } from 'react-router-dom'
import Clock from '../clock/Clock'
import ShadowWrapper from '../shadow/ShadowWrapper'
import Shadow from '../shadow/Shadow'
import Profile from './Profile'
import { LazyLoad } from '../loader/Loader'

const Navbar = () => {
    return (
        <LazyLoad>
            <nav className="fixed z-50 bottom-0 max-h-[15vh] w-full flex justify-between items-end">
                <Profile />

                <div className="flex justify-between items-end">
                    <ShadowWrapper className='translate-y-4'>
                        <div className='h-4 w-full bg-contain rotate-[-2deg]' style={{backgroundImage: `url(${Border})`}}></div>
                        <div className="mr-[-8px] flex gap-12 bg-contain p-2 bg-repeat rotate-[-2deg]" style={{backgroundImage: `url(${Texture})`}}>
                            <Link className='p-4' to='/home'>
                                <svg className='w-10' viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>home [#77767b]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-419.000000, -720.000000)" fill="#B7561F"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M379.79996,578 L376.649968,578 L376.649968,574 L370.349983,574 L370.349983,578 L367.19999,578 L367.19999,568.813 L373.489475,562.823 L379.79996,568.832 L379.79996,578 Z M381.899955,568.004 L381.899955,568 L381.899955,568 L373.502075,560 L363,569.992 L364.481546,571.406 L365.099995,570.813 L365.099995,580 L372.449978,580 L372.449978,576 L374.549973,576 L374.549973,580 L381.899955,580 L381.899955,579.997 L381.899955,570.832 L382.514204,571.416 L384.001,570.002 L381.899955,568.004 Z" id="home-[#77767b]"> </path> </g> </g> </g> </g></svg>
                            </Link>
                            <Link className='p-4' to='/feed'>
                                <svg className='w-10 h-full' fill="#77767b" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M58.2,395.6C26,395.6,0,421.7,0,453.8S26,512,58.2,512c32.1,0,58.2-26,58.2-58.2S90.3,395.6,58.2,395.6z M0,0v93.1 c231.4,0,418.9,187.5,418.9,418.9H512C512,229.2,282.8,0,0,0z M0,186.2v93.1c128.5,0,232.7,104.2,232.7,232.7h93.1 C325.8,332,179.9,186.2,0,186.2z"></path> </g></svg>
                            </Link>
                            <Link className='p-4' to='/calendar'>
                                <svg className='w-10 h-full' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M7 1C6.44772 1 6 1.44772 6 2V3H5C3.34315 3 2 4.34315 2 6V20C2 21.6569 3.34315 23 5 23H19C20.6569 23 22 21.6569 22 20V6C22 4.34315 20.6569 3 19 3H18V2C18 1.44772 17.5523 1 17 1C16.4477 1 16 1.44772 16 2V3H8V2C8 1.44772 7.55229 1 7 1ZM16 6V5H8V6C8 6.55228 7.55229 7 7 7C6.44772 7 6 6.55228 6 6V5H5C4.44772 5 4 5.44772 4 6V9H20V6C20 5.44772 19.5523 5 19 5H18V6C18 6.55228 17.5523 7 17 7C16.4477 7 16 6.55228 16 6ZM4 15V11H8V15H4ZM4 17V20C4 20.5523 4.44772 21 5 21H8V17H4ZM10 17V21H14V17H10ZM16 17V21H19C19.5523 21 20 20.5523 20 20V17H16ZM20 15H16V11H20V15ZM14 15H10V11H14V15Z" fill="#77767b"></path> </g></svg>
                            </Link>
                            <Link className='p-4' to='/login'>
                                <svg className='w-10 h-full' viewBox="-3 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#77767b"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>lock_open [#706]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-143.000000, -5079.000000)" fill="#77767b"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M89,4936.998 L99,4936.998 L99,4926.98799 L89,4926.98799 L89,4936.998 Z M92,4924.98599 L92,4923.02302 C92,4921.91892 92.915,4921.002 94.018,4921.002 C95.12,4921.002 96.035,4921.98298 96.035,4922.98398 L98.035,4922.98398 C98.035,4920.98198 96.227,4919 94.018,4919 C91.808,4919 90,4920.81181 90,4923.02302 L90,4924.98599 L87,4924.98599 L87,4939 L101,4939 L101,4924.98599 L92,4924.98599 Z" id="lock_open-[#706]"> </path> </g> </g> </g> </g></svg>
                            </Link>
                        </div>

                        <Shadow className='rotate-[3deg] translate-y-[10%] translate-x-[5%]'/>
                    </ShadowWrapper>

                    <ShadowWrapper className='translate-y-[5px] translate-x-[5px]'>
                        <div className='h-4 w-full bg-contain rotate-[2deg]' style={{ backgroundImage: `url(${Border})` }}></div>
                        <div className="flex flex-col p-4 bg-contain bg-repeat rotate-[2deg]" style={{ backgroundImage: `url(${Texture})` }}>
                            <Clock />
                        </div>

                        <Shadow className='translate-y-[10%] rotate-[-10deg]'/>
                    </ShadowWrapper>
                    
                </div>
            </nav>
        </LazyLoad>

    )
}

export default Navbar