/* eslint-disable react/prop-types */
import BorderImage from 'src/assets/border.png'

const Border = ({ direction }) => {
    return <div
        className={`absolute z-10 h-full w-10 bg-repeat bg-contain ${direction == 'left' ? 'left-0 translate-x-[-50%]' : 'right-0 translate-x-[50%]'}`} style={{ backgroundImage: `url(${BorderImage})` }}>
    </div>
}

export default Border