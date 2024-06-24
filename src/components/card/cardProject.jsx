import React from "react";
import Button from "../button/button";
import ButtonSecondary from "../button/buttonSecondary";

function CardProject({ src, alt = "#", title, caption }) {
    return (
        <div className="flex flex-col w-full cursor-pointer">
            <img
                src={src}
                alt={alt}
                className="rounded-t-[15px] h-[175px] object-cover "
            />
            <div className="p-5 bg-secondary rounded-b-[15px] flex-col flex gap-1">
                <h4 className="font-bold text-[16px] line-clamp-1">{title}</h4>
                <p className="text-[14px] line-clamp-2">{caption}</p>
                <div className="flex mt-3">
                    <img
                        src="./assets/html.png"
                        alt=""
                        className="max-w-[20px] object-contain"
                    />
                </div>
                <div className="flex justify-between gap-5 mt-4">
                    <Button sm="true">View</Button>
                    <ButtonSecondary sm="true">Github</ButtonSecondary>
                </div>
            </div>
        </div>
    );
}

export default CardProject;
