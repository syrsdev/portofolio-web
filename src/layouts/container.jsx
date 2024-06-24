import React from "react";

function Container({ children, top = "pt-[80px]", bg = "bg-transparent" }) {
    return (
        <>
            <section className={`text-white px-[150px] ${top} ${bg}`}>
                {children}
            </section>
        </>
    );
}

export default Container;
