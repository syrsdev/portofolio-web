import React from "react";
import ButtonGroup from "../button/buttonGroup";
import { Link } from "react-router-dom";

function CardProject({ src, alt = "#", title, caption }) {
    return (
        <Link className="relative flex flex-col w-full cursor-pointer group">
            <img
                src={src}
                alt={alt}
                className="rounded-t-[15px] h-[200px] object-cover group-hover:blur-[1px]"
            />
            <div className="h-[200px] font-bold absolute text-transparent group-hover:text-white flex items-center justify-center group-hover:bg-black z-30 w-full rounded-t-[15px] group-hover:bg-opacity-60 duration-500 transition-all">
                Detail Project {"->"}
            </div>
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
                <ButtonGroup
                    sm="true"
                    text1={"View"}
                    text2={"Github"}
                    width="full"
                />
            </div>
        </Link>
    );
}

export default CardProject;
