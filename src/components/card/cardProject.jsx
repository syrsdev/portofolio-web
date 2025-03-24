import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import ButtonProject from "../button/buttonProject";

function CardProject({ data, skills = [] }) {
    return (
        <Link
            to={`/portfolio/${data.slug}`}
            className="relative flex flex-col w-full cursor-pointer group "
        >
            <div className="h-full font-bold relative text-transparent group-hover:text-white flex items-center justify-center group-hover:bg-black  w-full rounded-t-[15px] group-hover:bg-opacity-60 duration-500 transition-all">
                <img
                    src={data.image}
                    alt={data.title}
                    className="rounded-t-[15px] w-full h-[180px] lg:h-[200px] object-cover group-hover:blur-[1px] relative -z-50"
                />
                <p className="absolute flex items-center justify-center gap-1">
                    Detail Project <FaLongArrowAltRight className="ml-2" />
                </p>
            </div>
            <div className="p-5 bg-secondary rounded-b-[15px] flex-col flex gap-1 h-full justify-between">
                <h4 className="font-bold text-[16px] line-clamp-1">
                    {data.title}
                </h4>
                <p
                    dangerouslySetInnerHTML={{ __html: data.description }}
                    className="text-[14px] w-full text-wrap line-clamp-2 project-desc"
                ></p>
                {skills.length > 0 && (
                    <div className="flex mt-3">
                        {skills.map((skill) => (
                            <img
                                key={skill.skill_id}
                                src="./assets/html.png"
                                alt=""
                                className="max-w-[20px] object-contain"
                            />
                        ))}
                    </div>
                )}
                <ButtonProject
                    demo={data.link}
                    github={data.github_link}
                    figma={data.figma_link}
                    slug={data.slug}
                />
            </div>
        </Link>
    );
}

export default CardProject;
