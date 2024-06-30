import React from "react";

function Container({ children, top = "pt-[80px]", bg = "bg-transparent" }) {
    return (
        <>
            <section
                className={`text-white px-[28px] md:px-[50px] lg:px-[65px] xl:px-[85px] 2xl:px-[150px] ${top} ${bg}`}
            >
                {children}
            </section>
        </>
    );
}

export default Container;
