/* eslint-disable react/prop-types */
const Input = ({ black = true, type = 'text', errors, label, onChange }) => {
    return (
        <div onChange={onChange} className={`flex w-full ${black ? 'text-black bg-black flex-row-reverse' : 'text-white bg-white'} py-8 items-start justify-center gap-2`}>
            <label className={`${black ? 'bg-white' : 'bg-black'} font-black p-4`} htmlFor={label}>{label.toUpperCase()}</label>
            <div className="space-y-2">
                <input type={type} name={label} className={`${black ? 'bg-white' : 'bg-black'} p-[2px]`} />
                <p className={`${black ? 'text-white text-end' : 'text-black'} text-xs`}>{errors[label]}</p>
            </div>
        </div>
    )
}

export default Input