const Shadow = ({ className = '' }) => {
    return (
        <div className={`${className} absolute w-full h-full top-0 left-0 scale-[101%] bg-lightgrey border-[1px] border-gray-500 z-[-1] shadow-xl`}></div>
    )
}

export default Shadow