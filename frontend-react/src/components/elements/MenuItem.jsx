/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const MenuItem = ({ label }) => {
    return <Link
                to={`${label.toLowerCase()}`}
                className='font-semibold w-full text-end border-y-4 border-transparent hover:bg-black hover:border-white py-2 px-12 box-content'
            >
                {label}
            </Link>
}

export default MenuItem