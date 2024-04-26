import DefaultLayout from "src/components/layouts/DefaultLayout"
import MediumForm from "../components/elements/MediumForm"

const MediumRoutes = [
    {
        path: '/medium/add',
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <MediumForm />
            }
        ]
    },
]

export default MediumRoutes