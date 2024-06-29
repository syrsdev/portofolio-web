import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [navActive, setNavActive] = useState(false);

    useEffect(() => {
        let scroll = () => {
            if (window.scrollY > 0) {
                setNavActive(true);
            } else {
                setNavActive(false);
            }
        };
        window.addEventListener("scroll", scroll);
    }, []);
    return (
        <>
            <nav
                className={`flex justify-between items-center text-white py-8 px-[95px] font-bold fixed w-full z-50 transition-all ${
                    navActive
                        ? "duration-1000 bg-gradient-to-r from-[#6C35DE] via-[#7D43E8] to-[#A364FF] shadow-xl shadow-slate-700 "
                        : "duration-500 bg-transparent"
                } `}
            >
                <p className="text-[16px]">SURYA'S PORTFOLIO</p>
                <ul className="flex gap-10 text-[16px] items-center">
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/under-construction"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/under-construction"}>Portfolio</Link>
                    </li>
                    <li>
                        <Link to={"/under-construction"}>Services</Link>
                    </li>
                    <li>
                        <Link to={"/under-construction"}>Contact</Link>
                    </li>
                </ul>
            </nav>
            {!navActive && (
                <img
                    src="./assets/navbarWave.svg"
                    alt="wave"
                    className="absolute w-full -z-10 h-[115px] object-cover"
                />
            )}
        </>
    );
}

export default Navbar;
