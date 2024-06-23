import Button from "../components/button/button";
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
            <Layout top="pt-[180px]">
                <header className="flex items-center">
                    <div className="flex flex-col justify-center w-1/2 gap-1">
                        <h1 className="flex flex-col gap-1 font-bold text-[34px]">
                            <span className="text-[24px]">Hello 👋, i am</span>
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
                        <div className="flex gap-5 mt-8">
                            <Button color={"bg-secondary"}>About me</Button>
                            <Button>Download CV</Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-end w-1/2">
                        <img src="./assets/foto.svg" alt="surya nata ardhana" />
                    </div>
                </header>

                <section></section>
            </Layout>
        </>
    );
};

export default Home;
