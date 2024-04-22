import AuthLayout from "../layouts/AuthLayout"
import Form from "../elements/Form"
import Input from "../elements/Input"

const RegisterPage = () => {

    return (
        <AuthLayout type="register">
            <Form>
                <Input black={false} label='name' />
                <Input type='email' label='email' />
                <Input black={false} type='password' label='password' />
                <Input label='image' />
            </Form>
        </AuthLayout>
    )
}

export default RegisterPage