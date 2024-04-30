import DefaultLayout from "src/components/layouts/DefaultLayout"
import Editor from "../components/elements/Editor"

const PostRoutes = [
    {
        path: '/editor',
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <Editor />
            }
        ]
    },
]

export default PostRoutes