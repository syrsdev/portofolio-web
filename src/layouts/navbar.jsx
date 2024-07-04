import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    BiHome,
    BiSolidHome,
    BiSolidMessageRoundedDots,
    BiSolidRocket,
    BiSolidUser,
    BiSolidWrench,
    BiUser,
} from "react-icons/bi";

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

        scroll();
    }, []);
    return (
        <>
            <nav
                className={`flex justify-between items-center text-white py-8 px-[25px] lg:px-[55px] xl:px-[80px] 2xl:px-[95px] font-bold absolute md:fixed w-full z-50 transition-all ${
                    navActive
                        ? "duration-1000 bg-gradient-to-r from-[#6C35DE] via-[#7D43E8] to-[#A364FF] shadow-xl shadow-slate-700 "
                        : "duration-500 bg-transparent"
                } `}
            >
                <p className="text-[16px]">SURYA'S PORTFOLIO</p>
                <ul className="md:flex hidden md:gap-7 xl:gap-10 text-[14px] xl:text-[16px] items-center">
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
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
                {/* <label className="flex flex-col w-8 gap-2 md:hidden ">
                    <input className="hidden peer" type="checkbox" />
                    <div className="rounded-2xl h-[3px] w-1/2 bg-white duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]"></div>
                    <div className="rounded-2xl h-[3px] w-full bg-white duration-500 peer-checked:-rotate-45"></div>
                    <div className="rounded-2xl h-[3px] w-1/2 bg-white duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]"></div>
                </label> */}
            </nav>
            {!navActive && (
                <img
                    src="./assets/navbarWave.svg"
                    alt="wave"
                    className="absolute w-full h-[123px] md:h-[115px] object-cover"
                />
            )}

            <nav className="md:hidden font-bold px-5 py-4 rounded-full fixed bottom-3 w-full z-50 bg-secondary text-[12px]">
                <ul className="flex items-center justify-between">
                    <Link to={"/"} className="flex flex-col items-center gap-1">
                        <span>
                            <BiSolidHome className="text-[23px]" />
                        </span>
                        <li>Home</li>
                    </Link>
                    <Link
                        to={"/about"}
                        className="flex flex-col items-center gap-1"
                    >
                        <span>
                            <BiSolidUser className="text-[23px]" />
                        </span>
                        <li>About</li>
                    </Link>
                    <Link to={"/"} className="flex flex-col items-center gap-1">
                        <span>
                            <BiSolidRocket className="text-[23px]" />
                        </span>
                        <li>Portfolio</li>
                    </Link>
                    <Link to={"/"} className="flex flex-col items-center gap-1">
                        <span>
                            <BiSolidWrench className="text-[23px]" />
                        </span>
                        <li>Services</li>
                    </Link>
                    <Link to={"/"} className="flex flex-col items-center gap-1">
                        <span>
                            <BiSolidMessageRoundedDots className="text-[23px]" />
                        </span>
                        <li>Contacts</li>
                    </Link>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
