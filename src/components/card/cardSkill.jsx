import React from "react";

function CardSkill({ title, src, alt }) {
    return (
        <div
            data-aos="flip-up"
            className="flex flex-col justify-between px-7 py-4 md:px-8 md:py-5 cursor-pointer bg-secondary rounded-[18px] w-max gap-3"
        >
            <img src={src} alt={alt} className="object-contain max-h-[60px]" />
            <p className="font-bold text-[14px] lg:text-[16px] text-center">
                {title}
            </p>
        </div>
    );
}

export default CardSkill;
