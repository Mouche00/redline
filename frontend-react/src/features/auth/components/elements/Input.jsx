/* eslint-disable react/prop-types */
const Input = ({ black = true, type = 'text', errors = [], label, onChange, shadow = false, textarea = false, file = false, image }) => {
    return (
        <div className={`relative z-10 w-full`}>
            <div className={`relative z-10 h-full flex ${ !shadow ? 'px-16' : ''} w-full ${black ? 'text-black bg-black flex-row-reverse' : 'text-white bg-white'} py-8 px-16 items-start justify-center gap-2`}>
                <label className={`${black ? 'bg-white' : 'bg-black'} font-black p-4`} htmlFor={label}>{label.toUpperCase()}</label>
                <div className="space-y-2 w-full h-full">
                    {textarea ? (
                        <textarea onChange={onChange} name={label} cols="30" rows="5" className={`${black ? 'bg-white' : 'bg-black'} p-[2px] w-full`}></textarea>
                    ) : file ? (
                        <button type="button" className="relative w-full h-full border-2 border-dashed border-white text-white flex items-center justify-center bg-cover bg-center" style={{backgroundImage: `url(${image ? URL.createObjectURL(image) : ''})`}}>
                            +
                            <input onChange={onChange} className="absolute opacity-0 h-full w-full top-0 left-0 border-2 border-white" type="file" name={label}/>
                        </button>
                    ) : (
                        <input onChange={onChange} type={type} name={label} className={`${black ? 'bg-white' : 'bg-black'} p-[2px] w-full`} />
                    )}
                    <p className={`${black ? 'text-white text-end' : 'text-black'} text-xs`}>{errors[label]}</p>
                </div>
            </div>

            {shadow && (
                <div className={`absolute top-0 left-0 h-full w-full translate-x-4 translate-y-4 ${black ? 'bg-bronze' : 'bg-teal'} z-[-1]`}></div>
            )}
        </div>
    )
}

export default Input