import LoginPage from "../components/pages/LoginPage"
import RegisterPage from "../components/pages/RegisterPage"


const AuthRoutes = [
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    },
]

export default AuthRoutes