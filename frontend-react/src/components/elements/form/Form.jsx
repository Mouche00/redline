import { useEffect } from "react"

const Form = ({ children, onSubmit, className }) => {

    return (
        <form onSubmit={onSubmit} className={className}>
            {children}
            <button type="submit" className="hidden"></button>
        </form>

    )
}

export default Form