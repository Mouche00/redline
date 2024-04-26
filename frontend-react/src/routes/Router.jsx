import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import DefaultLayout from 'src/components/layouts/DefaultLayout'
import HomePage from 'src/components/pages/home/HomePage'
import IslandPage from 'src/components/pages/home/IslandPage'
import MediumPage from 'src/components/pages/MediumPage'
import MenuPage from 'src/components/pages/menu/MenuPage'
import NotFoundPage from 'src/components/pages/NotFoundPage'
import AuthRoutes from 'src/features/auth/routes/AuthRoutes'
import ChatRoutes from 'src/features/chat/routes/ChatRoutes'
import EditorRoutes from 'src/features/editor/routes/EditorRoutes'
import MediumRoutes from 'src/features/medium/routes/MediumRoutes'

const publicRoutes = [
    {
        path: '/',
        element: <MenuPage />
    },
    {
        path: '/',
        element: <DefaultLayout />,
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
    ...MediumRoutes,
    ...EditorRoutes,
    ...ChatRoutes,
    ...AuthRoutes,
    ...publicRoutes,
    ...isNotAuthRoutes,
    ...isAuthRoutes
])

const Router = () => {
    return <RouterProvider router={router}/>
}

export default Router



