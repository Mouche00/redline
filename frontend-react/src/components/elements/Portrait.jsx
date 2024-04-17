import PortraitOne from 'src/assets/portrait1.png'
import PortraitTwo from 'src/assets/portrait2.png'
import PortraitThree from 'src/assets/portrait3.png'
import { Link } from "react-router-dom"
import { useRef } from 'react'

const Portrait = ({ disabled = false, name = 'home', className }) => {
    const label = useRef(null)

    const handleHover = (e) => {
        if(!disabled){
            label.current.classList.toggle('translate-y-[100%]')
        }
    }

    return (
        <Link to={`/${name}`} onMouseEnter={handleHover} onMouseLeave={handleHover} className={`relative h-full transition-all ${!disabled ? 'hover:filter-none hover:scale-[105%] filter grayscale' : ''} bg-cover bg-center bg-no-repeat ${className}`} style={{backgroundImage: `url(${name == 'register' ? PortraitOne : name == 'login' ? PortraitThree : PortraitTwo})`}}>
            <p ref={label} className={`transition-all absolute text-center text-4xl font-black text-black w-full flex items-center justify-center bottom-0 ${!disabled ? 'h-[50%] translate-y-[100%] bg-white' : 'h-full rotate-[-90deg] text-9xl text-white'} p-8`}>{name.toUpperCase()}</p>
        </Link>
    )
}

export default Portrait