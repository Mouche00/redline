import PortraitOne from 'src/assets/portrait1.png'
import PortraitTwo from 'src/assets/portrait2.png'
import PortraitThree from 'src/assets/portrait3.png'
import { Link } from "react-router-dom"
import { useRef } from 'react'

const Portrait = ({ name = 'home' }) => {
    const label = useRef(null)

    const handleHover = (e) => {
        label.current.classList.toggle('translate-y-[100%]')
    }

    return (
        <Link to={`/${name}`} onMouseEnter={handleHover} onMouseLeave={handleHover} className="relative h-full w-full transition-all hover:filter-none hover:scale-[105%] filter grayscale bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${name == 'register' ? PortraitOne : name == 'login' ? PortraitTwo : PortraitThree})`}}>
            <p ref={label} className="transition-all absolute text-center text-4xl font-black text-black h-[50%] w-full flex items-center justify-center bottom-0 translate-y-[100%] p-8 bg-white">{name.toUpperCase()}</p>
        </Link>
    )
}

export default Portrait