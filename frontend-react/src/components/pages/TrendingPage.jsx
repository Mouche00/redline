import Loader from "src/components/Loader"
import Island from "./home/island/Island"
// import Trending from "src/assets/trending.png"

const TrendingPage = () => {
    return (
        <Loader className="h-[100vh] flex flex-col items-center justify-center bg-black">
            <Island className='h-full' page={true}/>
        </Loader>
    )
}

export default TrendingPage