import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PublicLayout from 'src/components/layouts/PublicLayout'
import LoginPage from 'src/components/pages/auth/LoginPage'
import RegisterPage from 'src/components/pages/auth/RegisterPage'
import HomePage from 'src/components/pages/home/HomePage'
import IslandPage from 'src/components/pages/home/IslandPage'
import MediumPage from 'src/components/pages/MediumPage'
import MenuPage from 'src/components/pages/menu/MenuPage'
import NotFoundPage from 'src/components/pages/NotFoundPage'
// import Test from 'src/features/test/components/Test'

const testRoutes = [
    // {
    //     path: '/test',
    //     element: <Test />
    // }
]

const publicRoutes = [
    {
        path: '/',
        element: <MenuPage />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    },
    {
        path: '/',
        element: <PublicLayout />,
        children: [
            {
                index: true,
                path: 'home',
                element: <HomePage />
            },
            {
                path: 'trending',
                element: <IslandPage label='trending' />
            },
            {
                path: 'new',
                element: <IslandPage label='new' />
            },
            {
                path: 'releasing',
                element: <IslandPage label='releasing' />
            },
            {
                path: 'medium',
                element: <MediumPage />
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
]

const isNotAuthRoutes = []

const isAuthRoutes = []

const router = createBrowserRouter([
    ...testRoutes,
    ...publicRoutes,
    ...isNotAuthRoutes,
    ...isAuthRoutes
])

const Router = () => {
    return <RouterProvider router={router}/>
}

export default Router



