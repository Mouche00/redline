import DefaultLayout from "src/components/layouts/DefaultLayout"
import EditorPage from "../components/pages/EditorPage"

const EditorRoutes = [
    {
        path: '/editor',
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <EditorPage />
            }
        ]
    },
]

export default EditorRoutes