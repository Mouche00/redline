const Heading = () => {
    return (
        <div className="absolute z-20 left-0 top-0 translate-x-[-20%] w-full h-48 font-black bg-contain bg-center bg-no-repeat flex items-center" style={{backgroundImage: `url(${Background})`}}>
            <p className="text-6xl text-black ml-4">Login</p>
        </div>
    )
}

export default Heading