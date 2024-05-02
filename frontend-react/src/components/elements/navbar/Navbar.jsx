import Texture from 'src/assets/texture.jpg'
import BorderImage from 'src/assets/border-2-h.png'
import BorderTop from 'src/assets/border-5-h.png'
import Border from "src/components/elements/border/Border"
import { Link } from 'react-router-dom'
import Clock from '../clock/Clock'
import ShadowWrapper from '../shadow/ShadowWrapper'
import Shadow from '../shadow/Shadow'
import Profile from './Profile'
import { LazyLoad } from '../loader/Loader'
import { useRef, useState } from 'react'
import MediumForm from 'src/features/medium/components/elements/MediumForm'
import Editor from 'src/features/post/components/elements/Editor'

const Navbar = () => {
    const slider = useRef(null)
    const [form, setForm] = useState('medium')
    const handleMediumClick = (type) => {
        setForm(type)
        slider.current.classList.toggle('translate-y-[100%]')
    }
    return (
        <LazyLoad>
            <nav className="fixed z-50 bottom-0 max-h-[15vh] w-full flex justify-between items-end">
                <div className='flex items-end'>
                    <Profile />
                    <ShadowWrapper className='translate-y-4'>
                        <div className='h-4 w-full bg-contain rotate-[-2deg]' style={{backgroundImage: `url(${BorderImage})`}}></div>
                        <div className="mr-[-8px] flex gap-4 bg-contain p-2 bg-repeat rotate-[-2deg]" style={{backgroundImage: `url(${Texture})`}}>
                            <button onClick={() => handleMediumClick('form')} className='p-4'>
                                <svg className='w-10 h-full' fill="#77767b" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g> <path className="st0" d="M209.75,318.813c0.75,0.438,1.656,0.406,2.406-0.031l101.75-60.734c0.719-0.422,1.156-1.203,1.156-2.047 c0-0.828-0.438-1.625-1.156-2.031l-101.75-60.75c-0.75-0.422-1.656-0.438-2.406-0.031c-0.734,0.438-1.188,1.234-1.188,2.094V256 v60.719C208.563,317.594,209.016,318.391,209.75,318.813z"></path> <path className="st0" d="M432,0v36H80V0H0v512h80v-36h352v36h80V0H432z M56,476H24v-40h32V476z M56,396H24v-40h32V396z M56,316H24v-40 h32V316z M56,236H24v-40h32V236z M56,156H24v-40h32V156z M56,76H24V36h32V76z M432,428H80V84h352V428z M488,476h-32v-40h32V476z M488,396h-32v-40h32V396z M488,316h-32v-40h32V316z M488,236h-32v-40h32V236z M488,156h-32v-40h32V156z M488,76h-32V36h32V76z"></path> </g> </g></svg>
                            </button>
                            <button onClick={() => handleMediumClick('post')} className='p-4'>
                                <svg className='w-10 h-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" version="1.1" id="svg822" fill="#77767b"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs id="defs816"> <inkscape:path-effect effect="copy_rotate" starting_point="17,304.0625" origin="15,304.0625" id="path-effect1009" is_visible="true" copies_to_360="true" fuse_paths="false" starting_angle="0" rotation_angle="60.2" num_copies="8"></inkscape:path-effect> </defs> <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="19.610429" inkscape:cx="14.638758" inkscape:cy="14.520172" inkscape:document-units="px" inkscape:current-layer="layer1" showgrid="true" units="px" inkscape:window-width="1366" inkscape:window-height="713" inkscape:window-x="0" inkscape:window-y="0" inkscape:window-maximized="1" showguides="true" inkscape:guide-bbox="true"> <sodipodi:guide position="21.126168,22.794393" orientation="1,0" id="guide1575" inkscape:locked="false"></sodipodi:guide> <sodipodi:guide position="22.682243,23.285047" orientation="1,0" id="guide1635" inkscape:locked="false"></sodipodi:guide> <sodipodi:guide position="22.682243,7.6455921" orientation="0,1" id="guide1639" inkscape:locked="false"></sodipodi:guide> <sodipodi:guide position="18.859863,18.859863" orientation="1,0" id="guide1242" inkscape:locked="false"></sodipodi:guide> <inkscape:grid type="xygrid" id="grid1103"></inkscape:grid> <sodipodi:guide position="-16,8" orientation="1,0" id="guide1139" inkscape:locked="false"></sodipodi:guide> </sodipodi:namedview> <metadata id="metadata819"> <rdf:rdf> <cc:work rdf:about=""> <dc:format>image/svg+xml</dc:format> <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type> <dc:title> </dc:title> </cc:work> </rdf:rdf> </metadata> <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(0,-289.0625)"> <path  d="m 5.0000001,301.01904 1.3043479,1.30434 c 0,0 1.2213086,0.0882 2.7751359,-0.70313 l 3.9741851,3.97418 c -1.298954,2.23377 -1.097147,4.12024 -1.097147,4.12024 l 1.73913,1.73914 3.478262,-3.47826 6.086955,6.08695 1.739131,0 v -1.73914 l -6.086956,-6.08694 3.47826,-3.47826 -1.73913,-1.73912 c 0,0 -1.88356,-0.19917 -4.118547,1.09883 l -3.97758,-3.97758 c 0.791095,-1.55408 0.704823,-2.77343 0.704823,-2.77343 l -1.304348,-1.30436 z" id="rect1085" inkscape:connector-curvature="0" sodipodi:nodetypes="cccccccccccccccccc"></path> </g> </g></svg>
                            </button>
                        </div>
                        <Shadow className='rotate-[4deg] translate-y-[10%] translate-x-[5%]'/>
                    </ShadowWrapper>
                </div>

                <div className="flex justify-between items-end">
                    <ShadowWrapper className='translate-y-4'>
                        <div className='h-4 w-full bg-contain rotate-[-2deg]' style={{backgroundImage: `url(${BorderImage})`}}></div>
                        <div className="mr-[-8px] flex gap-12 bg-contain p-2 bg-repeat rotate-[-2deg]" style={{backgroundImage: `url(${Texture})`}}>
                            <Link className='p-4' to='/home'>
                                <svg className='w-10' viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>home [#77767b]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-419.000000, -720.000000)" fill="#B7561F"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M379.79996,578 L376.649968,578 L376.649968,574 L370.349983,574 L370.349983,578 L367.19999,578 L367.19999,568.813 L373.489475,562.823 L379.79996,568.832 L379.79996,578 Z M381.899955,568.004 L381.899955,568 L381.899955,568 L373.502075,560 L363,569.992 L364.481546,571.406 L365.099995,570.813 L365.099995,580 L372.449978,580 L372.449978,576 L374.549973,576 L374.549973,580 L381.899955,580 L381.899955,579.997 L381.899955,570.832 L382.514204,571.416 L384.001,570.002 L381.899955,568.004 Z" id="home-[#77767b]"> </path> </g> </g> </g> </g></svg>
                            </Link>
                            <Link className='p-4' to='/feed'>
                                <svg className='w-10 h-full' fill="#77767b" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M58.2,395.6C26,395.6,0,421.7,0,453.8S26,512,58.2,512c32.1,0,58.2-26,58.2-58.2S90.3,395.6,58.2,395.6z M0,0v93.1 c231.4,0,418.9,187.5,418.9,418.9H512C512,229.2,282.8,0,0,0z M0,186.2v93.1c128.5,0,232.7,104.2,232.7,232.7h93.1 C325.8,332,179.9,186.2,0,186.2z"></path> </g></svg>
                            </Link>
                            <Link className='p-4' to='/calendar'>
                                <svg className='w-10 h-full' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M7 1C6.44772 1 6 1.44772 6 2V3H5C3.34315 3 2 4.34315 2 6V20C2 21.6569 3.34315 23 5 23H19C20.6569 23 22 21.6569 22 20V6C22 4.34315 20.6569 3 19 3H18V2C18 1.44772 17.5523 1 17 1C16.4477 1 16 1.44772 16 2V3H8V2C8 1.44772 7.55229 1 7 1ZM16 6V5H8V6C8 6.55228 7.55229 7 7 7C6.44772 7 6 6.55228 6 6V5H5C4.44772 5 4 5.44772 4 6V9H20V6C20 5.44772 19.5523 5 19 5H18V6C18 6.55228 17.5523 7 17 7C16.4477 7 16 6.55228 16 6ZM4 15V11H8V15H4ZM4 17V20C4 20.5523 4.44772 21 5 21H8V17H4ZM10 17V21H14V17H10ZM16 17V21H19C19.5523 21 20 20.5523 20 20V17H16ZM20 15H16V11H20V15ZM14 15H10V11H14V15Z" fill="#77767b"></path> </g></svg>
                            </Link>
                            <Link className='p-4' to='/login'>
                                <svg className='w-10 h-full' viewBox="-3 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#77767b"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>lock_open [#706]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-143.000000, -5079.000000)" fill="#77767b"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M89,4936.998 L99,4936.998 L99,4926.98799 L89,4926.98799 L89,4936.998 Z M92,4924.98599 L92,4923.02302 C92,4921.91892 92.915,4921.002 94.018,4921.002 C95.12,4921.002 96.035,4921.98298 96.035,4922.98398 L98.035,4922.98398 C98.035,4920.98198 96.227,4919 94.018,4919 C91.808,4919 90,4920.81181 90,4923.02302 L90,4924.98599 L87,4924.98599 L87,4939 L101,4939 L101,4924.98599 L92,4924.98599 Z" id="lock_open-[#706]"> </path> </g> </g> </g> </g></svg>
                            </Link>
                        </div>

                        <Shadow className='rotate-[3deg] translate-y-[10%] translate-x-[5%]'/>
                    </ShadowWrapper>

                    <ShadowWrapper className='translate-y-[5px] translate-x-[5px]'>
                        <div className='h-4 w-full bg-contain rotate-[2deg]' style={{ backgroundImage: `url(${BorderImage})` }}></div>
                        <div className="flex flex-col p-4 bg-contain bg-repeat rotate-[2deg]" style={{ backgroundImage: `url(${Texture})` }}>
                            <Clock />
                        </div>

                        <Shadow className='translate-y-[10%] rotate-[-10deg]'/>
                    </ShadowWrapper>
                    
                </div>
            </nav>
            <div ref={slider} className='absolute transition-all top-0 left-0 h-[100vh] w-[100vw] backdrop-blur-lg bg-black/30 translate-y-[100%] z-30'>
                <div className={`absolute z-40 h-10 w-full top-0 left-0`}>
                    <div
                        className={`h-full w-full bg-repeat bg-contain rotate-[180deg]`} style={{ backgroundImage: `url(${BorderTop})` }}>
                    </div>
                </div>
                <div className='w-full h-full flex items-center justify-center z-40'>
                    {form == 'form' ? (
                        <MediumForm />
                    ) : (
                        <Editor />
                    )}
                </div>

            </div>
        </LazyLoad>


    )
}

export default Navbar