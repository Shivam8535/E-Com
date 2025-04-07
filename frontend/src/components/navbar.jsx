


const Navbar = () => {


    return (<>
        <header className="max-h-110 w-full px-4 mt-2 py-2">
            <nav className="container mx-auto flex w-full h-15 items-center justify-between">
                {/* logo */}
                <div className="left w-[20%]"><h1 className="text-2xl">Logo</h1></div>
                <div className="center md:block w-[40%] hidden">
                    <input type="text" className="border-gray-400 border lg:w-[100%] outline-none px-4 py-2 rounded-[12px]" />
                </div>
                <div className="right w-[40%] ml-2 flex gap-2 justify-end">
                    <ul className="group">
                        <li><a href="/login">LogIn</a></li>
                        <li className="relative hidden group-hover:block">
                            <div className="nav-box rounded-2xl lg:w-[25rem] w-[15rem] left-[-10rem] overflow-hidden h-60 py-2 absolute lg:left-[-18.9rem]">
                                <a className="px-4 rounded-2x hover:bg-gray-50 block" href="/profile">Profile</a>
                            </div>
                        </li>
                    </ul>
                    <ul className="">
                        <li><a href="/">Home</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    </>)
}
export default Navbar;