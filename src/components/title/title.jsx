import React from "react";

function Title({
    title,
    children,
    text = "text-center",
    mb = "mb-10",
    aos = "",
}) {
    return (
        <div
            className={`flex flex-col gap-1 ${mb} ${text} text-white`}
            data-aos={aos}
        >
            <h2 className="text-[20px] md:text-[24px] lg:text-[28px] font-bold">
                {title}
            </h2>
            {children && (
                <p className="text-[14px] lg:text-[20px]">{children}</p>
            )}
        </div>
    );
}

export default Title;
