const Navbar = () => {
    return <>
        <div className="  flex-shrink-0 h-full w-64 shadow shadow-2xl">
            <div className="p-4">
                <h2 className="text-lg font-bold mb-4">Main Menu</h2>
                <ul className="text-sm">
                    <li className="py-2 border-b rounded-lg border-white hover:bg-[#00B0D7] ">

                        <ul className="pl-2">
                            <li className="py-2 hover:text-white">
                                <a href="" className="text-decoration-none text-light block ">ABC</a>
                            </li>

                        </ul>
                    </li>
                    <li className="py-2 rounded-lg border-b border-white  hover:bg-[#00B0D7]">

                        <ul className="pl-2">
                            <li className="py-2 hover:text-white">
                                <a href="" className="text-decoration-none text-light block ">ABC</a>
                            </li>

                        </ul>
                    </li>


                </ul>
            </div>
        </div>
    </>
}

export default Navbar