import AuthLayout from "../layouts/AuthLayout"
import Form from "../elements/Form"
import Input from "../elements/Input"
import { useState } from "react"
import { login } from "../../api/data"
import { useAuth } from "src/hooks/useAuth"

const LoginPage = () => {    
    const { setToken, setUser } = useAuth()
    const [formData, setFormDta] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const response = await login(formData)
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

    return (
        <AuthLayout type="login">
            <Form onSubmit={handleSubmit}>
                <Input errors={errors} onChange={handleChange} black={false} type='email' label='email' />
                <Input errors={errors} onChange={handleChange} type='password' label='password' />
            </Form>
        </AuthLayout>
    )
}

export default LoginPage