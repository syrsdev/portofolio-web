import React from "react";

function Title({ title, children }) {
    return (
        <div className="flex flex-col gap-1 mb-10 text-center text-white">
            <h2 className="text-[28px] font-bold">{title}</h2>
            <p className="text-[20px]">{children}</p>
        </div>
    );
}

export default Title;
