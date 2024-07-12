import React from "react";
import Layout from "../layouts/layout";
import Container from "../layouts/container";
import Title from "../components/title/title";
import CardProject from "../components/card/cardProject";

function Portfolio() {
    return (
        <Layout>
            <Container top="pt-[150px] lg:pt-[170px]">
                <Title title={"Portfolio 🚀"}>
                    all projects that I have worked on
                </Title>

                <section className="my-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9">
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
                </section>
            </Container>
        </Layout>
    );
}

export default Portfolio;
