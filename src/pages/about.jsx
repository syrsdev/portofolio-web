import React, { useEffect, useState } from "react";
import Layout from "../layouts/layout";
import Container from "../layouts/container";
import Title from "../components/title/title";
import { BiSolidUser } from "react-icons/bi";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { getAbout } from "../services/about.service";

function About() {
    const [tab, setTab] = useState(false);
    const [about, setAbout] = useState({});

    useEffect(() => {
        getAbout((res) => {
            setAbout(res);
        });
    }, []);
    console.log(about);

    return (
        <Layout>
            <Container top="pt-[160px] md:pt-[180px]">
                <div className="flex flex-col w-full">
                    <div className="flex w-full text-center">
                        <button
                            className={`md:px-7 px-5 py-4 rounded-tl-[28px] ${
                                tab ? "bg-tertiary border-b-2" : "bg-secondary"
                            }  w-fit border-r border-slate-400`}
                            onClick={() => setTab(false)}
                        >
                            About
                        </button>
                        <button
                            className={`px-0 md:px-7 py-4 rounded-tr-[28px] ${
                                tab ? "bg-secondary" : "bg-tertiary border-b-2"
                            } w-full md:w-max border-l border-slate-400`}
                            onClick={() => setTab(true)}
                        >
                            Work & Education
                        </button>
                    </div>
                    <div className="w-full md:rounded-[0_28px_28px_28px] rounded-[0_0_28px_28px] bg-secondary py-12  px-6 md:px-12 xl:px-24">
                        {tab == false ? (
                            <>
                                <Title text="start" title="About Me" />
                            </>
                        ) : (
                            <div className="flex flex-col justify-between gap-10 md:flex-col-reverse lg:flex-row">
                                <div className="w-fit">
                                    <Title
                                        title="Education"
                                        mb="mb-5"
                                        text="start"
                                    />
                                    <ol className="flex flex-col gap-12 pt-3 pb-6 border-l-2 border-primary">
                                        {about.education.map((item) => (
                                            <li className="px-5" key={item.id}>
                                                <div className="flex items-center gap-4 mb-3">
                                                    <span className="w-3 h-3 bg-white rounded-full -ms-[26.5px]"></span>
                                                    <div className="px-2 py-2 font-bold text-sm rounded-[8px] bg-tertiary">
                                                        {new Date(
                                                            item.start_date
                                                        ).toLocaleDateString(
                                                            "en-US",
                                                            {
                                                                month: "long",
                                                                year: "numeric",
                                                                day: "numeric",
                                                            }
                                                        )}{" "}
                                                        -{" "}
                                                        {item.end_date == null
                                                            ? "Present"
                                                            : new Date(
                                                                  item.end_date
                                                              ).toLocaleDateString(
                                                                  "en-US",
                                                                  {
                                                                      month: "long",
                                                                      year: "numeric",
                                                                      day: "numeric",
                                                                  }
                                                              )}
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <h3 className="font-bold text-[18px]">
                                                        {item.name}
                                                    </h3>
                                                    <p className="text-[12px]">
                                                        {item.major}
                                                    </p>
                                                </div>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                                <div className="flex flex-col w-full lg:w-fit">
                                    <Title
                                        title="Work Experience"
                                        mb="mb-5"
                                        text="text-start md:text-center"
                                    />
                                    <div className="flex flex-col md:flex-row justify-between gap-5 lg:gap-8 text-[12px] mb-7">
                                        <div className="flex flex-col justify-between gap-3 w-fit">
                                            <h3 className="font-bold text-[20px]">
                                                Frontend Developer
                                            </h3>
                                            <div className="flex items-center gap-3 ">
                                                <div className="flex items-center gap-1">
                                                    <p className="text-[16px]">
                                                        <PiBuildingOfficeBold />
                                                    </p>
                                                    <p>PT. Timpat digital</p>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <p className="text-[16px]">
                                                        <SlLocationPin />
                                                    </p>
                                                    <p>Remote - Tangerang</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-between gap-3 md:items-end md:flex-col w-max">
                                            <span className="px-5 py-1 rounded-full w-fit bg-tertiary">
                                                Intern
                                            </span>
                                            <p>Apr 2022 - July 2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </Layout>
    );
}

export default About;
