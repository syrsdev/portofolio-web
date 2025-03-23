import React from "react";
import { Link } from "react-router-dom";

function Button({
    children,
    color = "bg-gradient-to-r from-[#6C35DE] to-[#A364FF]",
    onClick,
    href = null,
    sm = false,
    download = "",
}) {
    return (
        <>
            {href != null ? (
                download != "" ? (
                    <a
                        download={download}
                        onClick={() => window.scrollTo(0, 0)}
                        href={href}
                        className={`flex justify-center items-center px-12 text-center font-bold text-white ${color} rounded-[10px] hover:shadow-[7px_5px_56px_-14px_#A364FF] transition-all duration-300 active:scale-90 active:shadow-[7px_5px_56px_-10px_#A364FF] w-full text-nowrap gap-1 ${
                            sm
                                ? `text-[12px] lg:text-[14px] py-2`
                                : "text-[12px] lg:text-[16px] py-3"
                        }`}
                    >
                        {children}
                    </a>
                ) : (
                    <Link
                        onClick={() => window.scrollTo(0, 0)}
                        to={href}
                        className={`flex justify-center items-center px-12 text-center font-bold text-white ${color} rounded-[10px] hover:shadow-[7px_5px_56px_-14px_#A364FF] transition-all duration-300 active:scale-90 active:shadow-[7px_5px_56px_-10px_#A364FF] w-full text-nowrap gap-1 ${
                            sm
                                ? `text-[12px] lg:text-[14px] py-2`
                                : "text-[12px] lg:text-[16px] py-3"
                        }`}
                    >
                        {children}
                    </Link>
                )
            ) : (
                <button
                    className={`flex justify-center items-center px-12 font-bold text-white ${color} rounded-[10px] hover:shadow-[7px_5px_56px_-14px_#A364FF] transition-all duration-300 active:scale-90 active:shadow-[7px_5px_56px_-10px_#A364FF] w-full text-nowrap ${
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
