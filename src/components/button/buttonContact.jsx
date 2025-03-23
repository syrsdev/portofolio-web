import React from "react";

function ButtonContact({
    children,
    color = "bg-gradient-to-r from-[#6C35DE] to-[#A364FF]",
    onClick,
    href = null,
    sm = false,
}) {
    return (
        <a
            target="_blank"
            href={href}
            className={`px-12 text-center ${
                href == false ? "cursor-not-allowed" : "cursor-pointer"
            } text-[16px] flex items-center justify-center gap-2 font-bold text-white ${color} rounded-[10px] hover:shadow-[7px_5px_56px_-14px_#A364FF] transition-all duration-300 active:scale-90 active:shadow-[7px_5px_56px_-10px_#A364FF] w-full text-nowrap py-3`}
        >
            {children}
        </a>
    );
}

export default ButtonContact;
