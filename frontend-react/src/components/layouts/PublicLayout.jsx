import { Outlet } from 'react-router-dom'
import Navbar from 'src/components/elements/Navbar'
import Loading from '../elements/Loading'

const PublicLayout = () => {
    
    return (
        <>
            <Loading>
                <header>
                    <Navbar />
                </header>
                <main>
                    <Outlet />
                </main>
                <footer>
                    {/* <Footer /> */}
                </footer>
            </Loading>
        </>
    )
}

export default PublicLayout