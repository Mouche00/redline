import Loader from "src/components/Loader"
import Island from "./island/Island"
// import Trending from "src/assets/trending.png"

const HomePage = () => {
    return (
        <Loader className="h-[100vh] flex flex-col items-center justify-center bg-black">
            <Island label='Trending' />
            <div className="flex items-center justify-center">
                <Island label='New' />
                <Island label='Releasing' />
            </div>
        </Loader>
    )
}

export default HomePage