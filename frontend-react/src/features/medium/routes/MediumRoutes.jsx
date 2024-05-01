import DefaultLayout from "src/components/layouts/DefaultLayout"
import MediumForm from "../components/elements/MediumForm"
import MediumPage from "../components/pages/MediumPage"

const MediumRoutes = [
    {
        path: '/medium',
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <MediumPage />
            },
            {
                path: 'add',
                element: <MediumForm />
            },

        ]
    },
]

export default MediumRoutes