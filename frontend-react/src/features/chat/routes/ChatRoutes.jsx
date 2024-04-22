import ChatPage from "../components/pages/ChatPage"
import DefaultLayout from "src/components/layouts/DefaultLayout"

const ChatRoutes = [
    {
        path: '/chat',
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <ChatPage />
            }
        ]
    },
]

export default ChatRoutes