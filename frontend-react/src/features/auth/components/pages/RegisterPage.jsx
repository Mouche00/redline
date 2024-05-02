import AuthLayout from "../layouts/AuthLayout"
import Form from "../elements/Form"
import Input from "../elements/Input"
import { useAuth } from "src/hooks/useAuth"
import { useState } from "react"
import { register } from "../../api/data"

const RegisterPage = () => {
    const { setToken, setUser } = useAuth()
    const [formData, setFormDta] = useState({
        name: '',
        email: '',
        password: '',
        image: ''
    })
    console.log(formData)

    const [errors, setErrors] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const response = await register(formData)
            setToken(response.token)
            setUser(JSON.stringify(response.user))
            setErrors({})
        } catch(errors) {
            setErrors(errors)
        }
    }

    const handleChange = (e) => {
        setFormDta({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleImage = (e) => {
        setFormDta({
            ...formData,
            [e.target.name]: e.target.files[0]
        })
    }
    return (
        <AuthLayout type="register">
            <Form onSubmit={handleSubmit}>
                <Input errors={errors} onChange={handleChange} black={false} label='name' />
                <Input errors={errors} onChange={handleChange} type='email' label='email' />
                <Input errors={errors} onChange={handleChange} black={false} type='password' label='password' />
                <Input errors={errors} onChange={handleImage} label='image' type="file" />
            </Form>
        </AuthLayout>
    )
}

export default RegisterPage