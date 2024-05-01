import DefaultLayout from "src/components/layouts/DefaultLayout"
import Editor from "../components/elements/Editor"
import PostPage from "../components/pages/PostPage"

const PostRoutes = [
    {
        path: '/post',
        element: <DefaultLayout />,
        children: [
            {
                path: ':id',
                element: <PostPage />
            },
            {
                path: 'editor',
                element: <Editor />
            }
        ]
    },
]

export default PostRoutes