import { Outlet } from 'react-router-dom'
import Navbar from 'src/components/elements/navbar/Navbar'

const PublicLayout = () => {
    
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default PublicLayout