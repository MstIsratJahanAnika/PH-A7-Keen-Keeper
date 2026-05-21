import { GoGraph } from "react-icons/go";
import { IoTimeOutline } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";
import { Link, NavLink } from "react-router";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm mb-[80px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>

                    {/* dropdown menu */}
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li className=" rounded-sm"><NavLink to="/" className={({isActive})=> `flex items-center gap-2 rounded-sm px-4 py-2 ${isActive ? 'text-white bg-[#244D3F]': 'text-[#64748B]'}`}><RiHome2Line />Home</NavLink></li>
                    <li className=" rounded-sm"><NavLink to="/timeLine" className={({isActive})=> `flex items-center gap-2 rounded-sm px-4 py-2 ${isActive ? 'text-white bg-[#244D3F]': 'text-[#64748B]'}`}><IoTimeOutline />TimeLine</NavLink></li>
                    <li className=" rounded-sm"><NavLink to="/stats" className={({isActive})=> `flex items-center gap-2 rounded-sm px-4 py-2 ${isActive ? 'text-white bg-[#244D3F]': 'text-[#64748B]'}`}><GoGraph />Stats</NavLink></li>
                    </ul>
                </div>
                <a className="text-[#244D3F] font-semibold text-2xl"><span className="font-extrabold text-2xl text-[#1F2937]">Keen</span>Keeper</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    <li className=" rounded-sm"><NavLink to="/" className={({isActive})=> `flex items-center gap-2 rounded-sm px-4 py-2 ${isActive ? 'text-white bg-[#244D3F]': 'text-[#64748B]'}`}><RiHome2Line />Home</NavLink></li>
                    <li className=" rounded-sm"><NavLink to="/timeLine" className={({isActive})=> `flex items-center gap-2 rounded-sm px-4 py-2 ${isActive ? 'text-white bg-[#244D3F]': 'text-[#64748B]'}`}><IoTimeOutline />TimeLine</NavLink></li>
                    <li className=" rounded-sm"><NavLink to="/stats" className={({isActive})=> `flex items-center gap-2 rounded-sm px-4 py-2 ${isActive ? 'text-white bg-[#244D3F]': 'text-[#64748B]'}`}><GoGraph />Stats</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;