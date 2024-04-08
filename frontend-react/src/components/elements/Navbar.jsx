const Navbar = () => {
    return (
        <nav className="fixed bottom-0 min-h-[10vh] w-full flex justify-between items-end">
            <div className="w-48 h-64 bg-red-500">
                <div className="">0</div>
                <div className="h-full">0</div>
            </div>

            <div className=" flex justify-between items-end">
                <div className="flex bg-red-500">
                    <p className="p-4">1</p>
                    <p className="p-4">1</p>
                    <p className="p-4">1</p>
                </div>
                <div className="flex flex-col bg-red-500 p-4">
                    <p className="text-4xl">2</p>
                    <p>2</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar