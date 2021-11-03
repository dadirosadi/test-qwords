const Navigation = () => {
    return <nav className="shadow-sm z-10 mb-1 fixed bg-white w-full">
        <div className="max-w-6xl mx-auto px-4 ">
            <div className="flex justify-between">
                <div className="flex space-x-7">
                    <div>
                        <a href="#home" className="flex items-center py-4">
                            <span className="text-2xl font-bold">Qwords</span>
                        </a>
                    </div>
                </div>
                <div className="hidden md:flex items-center space-x-8 font-medium text-sm">
                    <a href="#product" className="py-4 px-2 hover:text-secondary border-green-500 ">Product</a>
                    <a href="#feature" className="py-4 px-2  hover:text-secondary transition duration-300">Feature</a>
                    <a href="#testimonial" className="py-4 px-2  hover:text-secondary transition duration-300">Testimonial</a>
                    <a href="" className="py-4 px-2 transition duration-300"><button className="bg-secondary hover:bg-thirdary text-white rounded-full px-4 py-1 text-xs">Hubungi Kami</button></a>
                </div>
                <div className="md:hidden flex items-center">
                    <button className="outline-none mobile-menu-button">
                        <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                            x-show="!showMenu"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        {/* <div className="hidden mobile-menu">
            <ul className="">
                <li className="active"><a href="/" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
                <li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
                <li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
                <li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
            </ul>
        </div> */}
    </nav>
}

export default Navigation;