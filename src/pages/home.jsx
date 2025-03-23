import Button from "../components/button/button";
import ButtonGroup from "../components/button/buttonGroup";
import CardProject from "../components/card/cardProject";
import CardSkill from "../components/card/cardSkill";
import Title from "../components/title/title";
import Container from "../layouts/container";
import Layout from "../layouts/layout";
import { TypeAnimation } from "react-type-animation";
import cv from "../assets/CV-SURYA NATA ARDHANA.pdf";
import { useEffect, useState } from "react";
import { getAllSkill } from "../services/skills.service";
import { getRecentProjects } from "../services/projects.service";
import ProjectsCard from "../components/skeleton/ProjectsCardSkeleton";
import ProjectsCardSkeleton from "../components/skeleton/ProjectsCardSkeleton";
import { FaLongArrowAltRight } from "react-icons/fa";

const Home = () => {
    let roll = [
        "Frontend Developer",
        2000,
        "Freelancer",
        2000,
        "Programmer",
        2000,
        "Fullstack Developer",
        2000,
        "Mobile App Developer",
        2000,
    ];
    const [skill, setSkill] = useState([]);
    const [recentProject, setRecentProject] = useState([]);
    useEffect(() => {
        getAllSkill((res) => {
            setSkill(res);
        });

        getRecentProjects((res) => {
            setRecentProject(res);
        });
    }, []);
    console.log(recentProject);

    return (
        <>
            <Layout>
                <Container top="pt-[160px] md:pt-[180px]">
                    <header className="flex flex-col md:items-center md:flex-row">
                        <div className="flex flex-col justify-center w-full gap-2 md:gap-1 md:w-1/2">
                            <h1 className="flex flex-col gap-2 md:gap-1 font-bold text-[24px] xl:text-[34px]">
                                <span className="text-[18px] xl:text-[24px]">
                                    Hello 👋, i am
                                </span>
                                SURYA NATA ARDHANA
                            </h1>
                            <p className="text-[22px] xl:text-[28px] font-semibold">
                                And i’m a{" "}
                                <TypeAnimation
                                    sequence={roll}
                                    wrapper="span"
                                    speed={60}
                                    className="text-primary"
                                    repeat={Infinity}
                                />
                            </p>
                            <div className="flex flex-col w-full gap-5 mt-8 md:gap-3 lg:gap-5 md:w-max md:flex-row">
                                <Button href={"/about"} color={"bg-secondary"}>
                                    About me
                                </Button>
                                <Button
                                    href={cv}
                                    download={"cv-surya nata ardhana.pdf"}
                                >
                                    Download CV
                                </Button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full md:justify-end md:w-fit lg:w-1/2">
                            <img
                                src="./assets/foto.svg"
                                alt="surya nata ardhana"
                                className="w-9/12 mt-12 md:w-3/5 xl:w-fit md:mt-0"
                            />
                        </div>
                    </header>

                    <section className="my-28">
                        <Title title={"Recently Projects 🚀"} />

                        <div
                            className={`${
                                recentProject.status == 404
                                    ? "flex justify-center items-center"
                                    : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9"
                            }`}
                        >
                            {recentProject.length == 0 ? (
                                <>
                                    <ProjectsCardSkeleton classname="flex" />
                                    <ProjectsCardSkeleton classname="hidden md:flex" />
                                    <ProjectsCardSkeleton classname="hidden xl:flex" />
                                </>
                            ) : recentProject.length > 0 ? (
                                recentProject.map((item) => (
                                    <CardProject
                                        key={item.id}
                                        title={item.title}
                                        caption={item.description}
                                        src={item.image}
                                        alt={item.title}
                                        detail={item.slug}
                                        skills={item.skills}
                                    />
                                ))
                            ) : (
                                <div className="w-1/2 md:w-1/4">
                                    <img
                                        src="./assets/not-found.svg"
                                        className="w-full"
                                    />
                                </div>
                            )}
                        </div>

                        <div className="mx-auto mt-16 w-max">
                            <Button href={"/portfolio"}>More Projects</Button>
                        </div>
                    </section>
                </Container>

                <div className="flex flex-col ">
                    <div className="w-full -mb-1">
                        <img
                            src="./assets/waveTop.svg"
                            alt="wave"
                            className="relative w-full -z-0"
                        />
                    </div>
                    <Container
                        top="py-10 xl:py-0"
                        bg="bg-gradient-to-r from-[#6C35DE] via-[#7D43E8] to-[#A364FF]"
                    >
                        <section>
                            <Title title={"My Skills 🎯"}>
                                Technologies I’ve been working with recently
                            </Title>

                            <div
                                className={`${
                                    skill.length != 0
                                        ? "grid grid-cols-2 gap-10 md:grid-cols-3 justify-items-center xl:gap-24 xl:grid-cols-6"
                                        : "flex justify-center items-center"
                                }`}
                            >
                                {skill.length != 0 ? (
                                    skill.map((item) => (
                                        <CardSkill
                                            key={item.id}
                                            title={item.skill}
                                            src={item.image}
                                            alt={item.skill}
                                        />
                                    ))
                                ) : (
                                    <div className="w-1/2 md:w-1/3">
                                        <img
                                            src="./assets/not-found.svg"
                                            className="w-full"
                                        />
                                    </div>
                                )}
                            </div>
                        </section>
                    </Container>
                    <div className="w-full -mt-1">
                        <img
                            src="./assets/waveBottom.svg"
                            alt="wave"
                            className="relative w-full -z-10 "
                        />
                    </div>
                </div>

                <Container top="pt-[100px]">
                    <div className="flex flex-col md:flex-row bg-secondary rounded-[30px] px-[20px] md:px-[50px] xl:px-[75px] py-[25px] gap-14 md:gap-[100px] justify-between">
                        <div className="flex flex-col justify-center w-full md:w-3/5 gap-3 md:gap-[15px]">
                            <h3 className="font-bold text-[24px] xl:text-[30px]">
                                I’m available for every opportunity!
                            </h3>
                            <p className="text-[14px] xl:text-[16px]">
                                I specialize in Front End Development and
                                Laravel Web Development. Interested working with
                                me? Need help on your project? I’d love to hear
                                you about that.
                            </p>
                            <ButtonGroup
                                width="w-full md:w-fit"
                                sm="true"
                                text1="Contact me !"
                                href1="/contacts"
                                href2="/under-construction"
                                text2="My services"
                                icon2={
                                    <FaLongArrowAltRight
                                        classN
                                        ame="ml-2 text-xl md:text-2xl"
                                    />
                                }
                            />
                        </div>
                        <div className="flex justify-center w-auto md:justify-end">
                            <img
                                src="/assets/opportunity.svg"
                                alt="illustration"
                                className="object-contain w-full max-w-[280px]"
                            />
                        </div>
                    </div>
                </Container>
            </Layout>
        </>
    );
};

export default Home;
