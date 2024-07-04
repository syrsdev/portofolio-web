import React, { useState } from "react";
import Layout from "../layouts/layout";
import Container from "../layouts/container";
import Title from "../components/title/title";
import { BiSolidUser } from "react-icons/bi";

function About() {
    const [tab, setTab] = useState(false);
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
                            <div className="flex flex-col justify-between gap-10 lg:flex-row">
                                <div className="w-fit">
                                    <Title
                                        title="Education"
                                        mb="mb-5"
                                        text="start"
                                    />
                                    <ol className="flex flex-col gap-12 pt-3 pb-6 border-l-2 border-primary">
                                        <li className="px-5">
                                            <div className="flex items-center gap-4 mb-3">
                                                <span className="w-3 h-3 bg-white rounded-full -ms-[26.5px]"></span>
                                                <div className="px-2 py-2 font-bold text-sm rounded-[8px] bg-tertiary">
                                                    june 2021 - mei 2024
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <h3 className="font-bold text-[18px]">
                                                    SMKN 4 TANGERANG
                                                </h3>
                                                <p className="text-[12px]">
                                                    Software engineering
                                                </p>
                                            </div>
                                        </li>
                                        <li className="px-5">
                                            <div className="flex items-center gap-4 mb-3">
                                                <span className="w-3 h-3 bg-white rounded-full -ms-[26.5px]"></span>
                                                <div className="px-2 py-2 font-bold text-sm rounded-[8px] bg-tertiary">
                                                    june 2021 - mei 2024
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <h3 className="font-bold text-[18px]">
                                                    SMKN 4 TANGERANG
                                                </h3>
                                                <p className="text-[12px]">
                                                    Software engineering
                                                </p>
                                            </div>
                                        </li>
                                    </ol>
                                </div>
                                <div className="flex flex-col w-fit">
                                    <Title title="Work Experience" />
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
