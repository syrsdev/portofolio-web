import React from "react";
import { Link } from "react-router-dom";

function ButtonSecondary({
    children,
    color = "bg-tertiary",
    onClick,
    href = null,
    sm = false,
}) {
    return (
        <>
            {href != null ? (
                <Link
                    className={`relative bg-secondary hover:text-white isolation-auto z-10 px-12 font-bold text-primary rounded-[10px] transition-all duration-300 active:scale-90 active:shadow-[7px_5px_50px_-10px_#A364FF] w-full text-nowrap border-primary border-2 ${
                        sm ? `text-[14px] py-2` : "text-[16px] py-3"
                    } before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-tertiary before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"`}
                >
                    {children}
                </Link>
            ) : (
                <button
                    className={`relative bg-secondary hover:text-white isolation-auto z-10 px-12 font-bold text-primary rounded-[10px] transition-all duration-300 active:scale-90 active:shadow-[7px_5px_50px_-10px_#A364FF] w-full text-nowrap border-primary border-2 ${
                        sm ? `text-[14px] py-2` : "text-[16px] py-3"
                    } before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-tertiary before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"`}
                >
                    {children}
                </button>
            )}
        </>
    );
}

export default ButtonSecondary;
