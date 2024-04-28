import { Outlet } from 'react-router-dom'

const PublicLayout = () => {
    return (
        <>
            {/* <header>
                <Navbar />
            </header> */}
            <main>
                <Outlet />
            </main>
            {/* <footer>
                <Footer />
            </footer> */}
        </>
    )
}

export default PublicLayout