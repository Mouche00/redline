import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PublicLayout from 'src/components/layouts/PublicLayout'
import HomePage from 'src/components/pages/home/HomePage'
import MenuPage from 'src/components/pages/menu/MenuPage'
import NewPage from 'src/components/pages/NewPage'
import NotFoundPage from 'src/components/pages/NotFoundPage'
import ReleasingPage from 'src/components/pages/ReleasingPage'
import TrendingPage from 'src/components/pages/TrendingPage'

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
            },
            {
                path: 'trending',
                element: <TrendingPage />
            },
            {
                path: 'new',
                element: <NewPage />
            },
            {
                path: 'releasing',
                element: <ReleasingPage />
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



