import DefaultLayout from "src/components/layouts/DefaultLayout"
import MediumForm from "../components/elements/MediumForm"
import MediumPage from "../components/pages/MediumPage"

const MediumRoutes = [
    {
        path: '/medium',
        element: <DefaultLayout />,
        children: [
            {
                path: ':mediumID',
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