import { useEffect, useState } from "react";

function Navbar() {
    const [navActive, setNavActive] = useState(false);

    let scroll = () => {
        if (window.scrollY > 0) {
            setNavActive(true);
        } else {
            setNavActive(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scroll);
    }, []);
    return (
        <>
            <nav
                className={`flex justify-between items-center text-white py-8 px-[100px] font-bold fixed w-full ${
                    navActive
                        ? "bg-gradient-to-r from-[#6C35DE] to-[#A364FF]"
                        : "bg-transparent"
                } `}
            >
                <p className="text-[20px]">Surya's Portfolio</p>
                <ul className="flex gap-10 text-[16px] items-center">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Portfolio</li>
                    <li className="cursor-pointer">Services</li>
                    <li className="cursor-pointer">Contact</li>
                </ul>
            </nav>
            <img
                src="./assets/navbarWave.svg"
                alt="wave"
                className="absolute w-full -z-10 h-[115px] object-cover"
            />
        </>
    );
}

export default Navbar;
