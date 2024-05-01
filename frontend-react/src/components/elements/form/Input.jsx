import { useContext } from "react"
import { FormContext } from "src/providers/FormProvider"

const Input = ({ className, name }) => {
    const setData = useContext(FormContext)

    const handleChange = (e) => {
        setData({
            [e.target.name]: e.target.value
        })
    }

    return (
        <input onChange={handleChange} name={name} className={className} />
    )
}

export default Input