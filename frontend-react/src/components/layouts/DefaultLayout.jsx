import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
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

export default DefaultLayout