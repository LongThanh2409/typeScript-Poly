import Slider from "./slider"
import { Link, useNavigate } from "react-router-dom"
import { useLocalStorage } from "../../hooks"
const Header = () => {

    return <>
        {/* Header */}
        <header className="bg-red-500 ">
            <div className="container w-2/3  h-[64px] mx-auto flex items-center gap-7">
                <img className="w-[64px] pl-2" src="/logo2.jpg" alt="" />
                <input className="pl-2 rounded-lg grow h-[34px] " type="text" placeholder="search" />
                <div>

                    <div className="flex m-auto">


                    </div>

                    <div>
                        <Link to="login">
                            <button className="bg-white px-3 py-2 mx-2 rounded-lg hover:bg-red-200">Login</button>
                        </Link>
                        <Link to="signup">
                            <button className="bg-white px-3 py-2 rounded-lg mx-2">Signup</button>
                        </Link>
                    </div>


                </div>
            </div>
        </header>


    </>
}

export default Header