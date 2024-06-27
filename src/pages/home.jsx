import Button from "../components/button/button";
import ButtonGroup from "../components/button/buttonGroup";
import ButtonSecondary from "../components/button/buttonSecondary";
import CardProject from "../components/card/cardProject";
import CardSkill from "../components/card/cardSkill";
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
                        className="relative w-full -z-0"
                    />
                    <Container
                        top="pt-0"
                        bg="bg-gradient-to-r from-[#6C35DE] via-[#7D43E8] to-[#A364FF]"
                    >
                        <section>
                            <Title title={"My Skills 🎯"}>
                                Technologies I’ve been working with recently
                            </Title>

                            <div className="grid grid-cols-6 gap-24">
                                <CardSkill
                                    title={"ReactJS"}
                                    src={"/assets/html.png"}
                                    alt={"#"}
                                />
                                <CardSkill
                                    title={"ReactJS"}
                                    src={"/assets/html.png"}
                                    alt={"#"}
                                />
                                <CardSkill
                                    title={"ReactJS"}
                                    src={"/assets/html.png"}
                                    alt={"#"}
                                />
                                <CardSkill
                                    title={"ReactJS"}
                                    src={"/assets/html.png"}
                                    alt={"#"}
                                />
                                <CardSkill
                                    title={"ReactJS"}
                                    src={"/assets/html.png"}
                                    alt={"#"}
                                />
                                <CardSkill
                                    title={"ReactJS"}
                                    src={"/assets/html.png"}
                                    alt={"#"}
                                />
                                <CardSkill
                                    title={"ReactJS"}
                                    src={"/assets/html.png"}
                                    alt={"#"}
                                />
                            </div>
                        </section>
                    </Container>
                    <img
                        src="./assets/waveBottom.svg"
                        alt="wave"
                        className="relative w-full -mt-1 -z-10"
                    />
                </div>

                <Container top="pt-[100px]">
                    <div className="flex bg-secondary rounded-[30px] px-[75px] py-[25px] gap-[100px] justify-between">
                        <div className="flex flex-col justify-center w-3/5 gap-[15px]">
                            <h3 className="font-bold text-[30px]">
                                I’m available for every opportunity!
                            </h3>
                            <p className="text-[16px]">
                                I specialize in Front End Development and
                                Laravel Web Development. Interested working with
                                me? Need help on your project? I’d love to hear
                                you about that.
                            </p>
                            <ButtonGroup
                                sm="true"
                                text1={"Contact me !"}
                                text2={"My services ->"}
                            />
                        </div>
                        <div className="flex justify-end w-auto">
                            <img
                                src="/assets/opportunity.png"
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
