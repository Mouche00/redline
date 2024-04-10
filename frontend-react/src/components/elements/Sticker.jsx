/* eslint-disable react/prop-types */
const Sticker = ({ label, border, background }) => {
    return (
        <>
            <div className='space-y-2 z-10'>
                <p className={`px-4 py-2 flex items-center h-full border-2 border-dashed ${border} rounded-sm font-medium text-sm m-auto text-center`}>{label}</p>
                <div className={`px-4 py-2 rounded-sm ${background}`}></div>
            </div>
        </>
    )
}

export default Sticker