/* eslint-disable react/prop-types */
const Form = ({ children, onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className="relative w-full font-semibold text-black flex flex-col justify-center items-center">
            {children}
            <button type="submit" className="hidden"></button>
        </form>
    )
}

export default Form