import React from "react";
import { Link } from "react-router-dom";

const ButtonProject = ({
    demo = null,
    github = null,
    figma = null,
    slug = null,
    sm = true,
    demoTxt = "Live Demo",
    githubTxt = "Github",
    figmaTxt = "Figma",
    width = "max",
}) => {
    return (
        <div
            className={`flex justify-between flex-col md:flex-row gap-4 lg:gap-3 mt-4 ${width}`}
        >
            {demo != null ? (
                <a
                    onClick={(e) => e.stopPropagation()}
                    href={demo}
                    target="_blank"
                    className={`flex justify-center items-center px-12 text-center font-bold text-white bg-gradient-to-r from-[#6C35DE] to-[#A364FF] rounded-[10px] hover:shadow-[7px_5px_56px_-14px_#A364FF] transition-all duration-300 active:scale-90 active:shadow-[7px_5px_56px_-10px_#A364FF] w-full text-nowrap ${
                        sm
                            ? `text-[12px] lg:text-[14px] py-2`
                            : "text-[12px] lg:text-[16px] py-3"
                    }`}
                >
                    {demoTxt}
                </a>
            ) : (
                <Link
                    onClick={() => window.scrollTo(0, 0)}
                    to={`/portfolio/${slug}`}
                    className={`flex justify-center items-center px-12 text-center font-bold text-white bg-gradient-to-r from-[#6C35DE] to-[#A364FF] rounded-[10px] hover:shadow-[7px_5px_56px_-14px_#A364FF] transition-all duration-300 active:scale-90 active:shadow-[7px_5px_56px_-10px_#A364FF] w-full text-nowrap ${
                        sm
                            ? `text-[12px] lg:text-[14px] py-2`
                            : "text-[12px] lg:text-[16px] py-3"
                    }`}
                >
                    Detail Project
                </Link>
            )}
            {github != null && (
                <a
                    href={github}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    className={`flex justify-center items-center relative bg-secondary hover:text-white isolation-auto z-10 px-12 font-bold text-primary rounded-[10px] transition-all duration-300 active:scale-90 active:shadow-[7px_5px_50px_-10px_#A364FF] w-full md:w-max text-nowrap border-primary border-2  ${
                        sm
                            ? `text-[12px] lg:text-[14px] py-2`
                            : "text-[12px] lg:text-[16px] py-3"
                    } before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-tertiary before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"`}
                >
                    {githubTxt}
                </a>
            )}
            {figma != null && (
                <a
                    href={figma}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    className={`flex justify-center items-center relative bg-secondary hover:text-white isolation-auto z-10 px-12 font-bold text-primary rounded-[10px] transition-all duration-300 active:scale-90 active:shadow-[7px_5px_50px_-10px_#A364FF] w-full md:w-max text-nowrap border-primary border-2  ${
                        sm
                            ? `text-[12px] lg:text-[14px] py-2`
                            : "text-[12px] lg:text-[16px] py-3"
                    } before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-tertiary before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"`}
                >
                    {figmaTxt}
                </a>
            )}
        </div>
    );
};

export default ButtonProject;
