const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 sticky top-0">
            <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
                <h1 className="text-white text-2xl">Tailwind CSS</h1>
                <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-0 md:space-x-4 list-none">
                    <li className="text-gray-300 hover:text-white"><a href="#">Home</a></li>
                    <li className="text-gray-300 hover:text-white"><a href="#">About</a></li>
                    <li className="text-gray-300 hover:text-white"><a href="#">Services</a></li>
                    <li className="text-gray-300 hover:text-white"><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
