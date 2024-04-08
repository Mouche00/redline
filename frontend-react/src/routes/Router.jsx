import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PublicLayout from 'src/components/layouts/PublicLayout'
import HomePage from 'src/components/pages/HomePage'
import MenuPage from 'src/components/pages/menu/MenuPage'
import NotFoundPage from 'src/components/pages/NotFoundPage'

const publicRoutes = [
    {
        path: '/',
        element: <MenuPage />
    },
    {
        path: '/',
        element: <PublicLayout />,
        children: [
            {
                index: true,
                path: 'home',
                element: <HomePage />
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
    ...publicRoutes,
    ...isNotAuthRoutes,
    ...isAuthRoutes
])

const Router = () => {
    return <RouterProvider router={router}/>
}

export default Router



