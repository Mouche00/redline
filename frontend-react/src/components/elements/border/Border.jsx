/* eslint-disable react/prop-types */
import BorderImage from 'src/assets/border.png'
import './Border.css'

const Border = ({ animated = false, direction, customImage, className }) => {
    return (
        <div className={`absolute z-10 h-full w-10 top-0 ${className} ${direction == 'left' ? 'left-0 translate-x-[-50%]' : 'right-0 translate-x-[50%]'}`}>
            <div
                className={`${animated ? direction == 'left' ? 'scroll-left' : 'scroll-right' : ''} h-full w-full bg-repeat bg-contain`} style={{ backgroundImage: `url(${customImage ?? BorderImage})` }}>
            </div>
            <div
                className={`${animated ? direction == 'left' ? 'scroll-left' : 'scroll-right' : ''} h-full w-full bg-repeat bg-contain`} style={{ backgroundImage: `url(${customImage ?? BorderImage})` }}>
            </div>
        </div>
    )
}

export default Border