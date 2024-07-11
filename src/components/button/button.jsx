import React from "react";
import { Link } from "react-router-dom";

function Button({
    children,
    color = "bg-gradient-to-r from-[#6C35DE] to-[#A364FF]",
    onClick,
    href = null,
    sm = false,
}) {
    return (
        <>
            {href != null ? (
                <Link
                    onClick={() => window.scrollTo(0, 0)}
                    to={href}
                    className={`px-12 text-center font-bold text-white ${color} rounded-[10px] hover:shadow-[7px_5px_56px_-14px_#A364FF] transition-all duration-300 active:scale-90 active:shadow-[7px_5px_56px_-10px_#A364FF] w-full text-nowrap ${
                        sm
                            ? `text-[12px] lg:text-[14px] py-2`
                            : "text-[12px] lg:text-[16px] py-3"
                    }`}
                >
                    {children}
                </Link>
            ) : (
                <button
                    className={`px-12 font-bold text-white ${color} rounded-[10px] hover:shadow-[7px_5px_56px_-14px_#A364FF] transition-all duration-300 active:scale-90 active:shadow-[7px_5px_56px_-10px_#A364FF] w-full text-nowrap ${
                        sm
                            ? `text-[12px] lg:text-[14px] py-2`
                            : "text-[12px] lg:text-[16px] py-3"
                    }`}
                >
                    {children}
                </button>
            )}
        </>
    );
}

export default Button;
