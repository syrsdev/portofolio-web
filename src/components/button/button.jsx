import React from "react";
import { Link } from "react-router-dom";

function Button({
    children,
    color = "bg-gradient-to-r from-[#6C35DE] to-[#A364FF]",
    onClick,
    href = null,
}) {
    return (
        <>
            {href != null ? (
                <Link>{children}</Link>
            ) : (
                <button
                    className={`px-12 py-3 font-bold text-white ${color} rounded-[10px]`}
                >
                    {children}
                </button>
            )}
        </>
    );
}

export default Button;
