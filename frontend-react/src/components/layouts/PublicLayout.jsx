import { Outlet } from 'react-router-dom'
import Navbar from 'src/components/elements/Navbar'

const PublicLayout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                {/* <Footer /> */}
            </footer>
        </>
    )
}

export default PublicLayout