import Button from "../components/button/button";
import CardProject from "../components/card/cardProject";
import Title from "../components/title/title";
import Container from "../layouts/container";
import Layout from "../layouts/layout";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
    let roll = [
        "Frontend Developer",
        2000,
        "Web Developer",
        2000,
        "Freelancer",
        2000,
        "Programmer",
        2000,
        "ReactJS Developer",
        2000,
        "Laravel Fullstack Developer",
        2000,
    ];
    return (
        <>
            <Layout>
                <Container top="pt-[180px]">
                    <header className="flex items-center">
                        <div className="flex flex-col justify-center w-1/2 gap-1">
                            <h1 className="flex flex-col gap-1 font-bold text-[34px]">
                                <span className="text-[24px]">
                                    Hello 👋, i am
                                </span>
                                SURYA NATA ARDHANA
                            </h1>
                            <p className="text-[28px] font-semibold">
                                And i’m a{" "}
                                <TypeAnimation
                                    sequence={roll}
                                    wrapper="span"
                                    speed={60}
                                    className="text-primary"
                                    repeat={Infinity}
                                />
                            </p>
                            <div className="flex gap-5 mt-8 w-max">
                                <Button color={"bg-secondary"}>About me</Button>
                                <Button>Download CV</Button>
                            </div>
                        </div>
                        <div className="flex items-center justify-end w-1/2">
                            <img
                                src="./assets/foto.svg"
                                alt="surya nata ardhana"
                            />
                        </div>
                    </header>

                    <section className="my-28">
                        <Title title={"Recently Project 🚀"} />

                        <div className="grid grid-cols-3 gap-9">
                            <CardProject
                                title={"Project 1"}
                                caption={"Project 1 description"}
                                src={"/assets/thumbnail.png"}
                                alt={"#"}
                            />
                            <CardProject
                                title={"Project 1"}
                                caption={"Project 1 description"}
                                src={"/assets/thumbnail.png"}
                                alt={"#"}
                            />
                            <CardProject
                                title={"Project 1"}
                                caption={"Project 1 description"}
                                src={"/assets/thumbnail.png"}
                                alt={"#"}
                            />
                        </div>

                        <div className="mx-auto mt-16 w-max">
                            <Button>More Projects</Button>
                        </div>
                    </section>
                </Container>

                <div className="flex flex-col">
                    <img
                        src="./assets/waveTop.svg"
                        alt="wave"
                        className="w-full"
                    />
                    <Container
                        top="pt-0"
                        bg="bg-gradient-to-r from-[#6C35DE] via-[#7D43E8] to-[#A364FF]"
                    >
                        <section>
                            <Title title={"My Skills 🎯"}>
                                Technologies I’ve been working with recently
                            </Title>
                        </section>
                    </Container>
                    <img
                        src="./assets/waveBottom.svg"
                        alt="wave"
                        className="w-full -mt-1"
                    />
                </div>
            </Layout>
        </>
    );
};

export default Home;
