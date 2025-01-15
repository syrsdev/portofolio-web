import React, { useEffect, useState } from "react";
import Layout from "../layouts/layout";
import Container from "../layouts/container";
import Title from "../components/title/title";
import CardProject from "../components/card/cardProject";
import ProjectsCardSkeleton from "../components/skeleton/ProjectsCardSkeleton";
import { getProjects } from "../services/projects.service";

function Portfolio() {
    const [Project, setProject] = useState([]);
    useEffect(() => {
        getProjects((res) => {
            setProject(res);
        });
    }, []);
    return (
        <Layout>
            <Container top="pt-[150px] lg:pt-[170px]">
                <Title title={"Portfolio 🚀"}>
                    all projects that I have worked on
                </Title>

                <section className="my-16">
                    <div
                        className={`${
                            Project == null
                                ? "flex justify-center items-center"
                                : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9"
                        }`}
                    >
                        {Project == null ? (
                            <div className="w-1/2 md:w-1/4">
                                <img
                                    src="./assets/not-found.svg"
                                    className="w-full"
                                />
                            </div>
                        ) : Project.length > 0 ? (
                            Project.map((item) => (
                                <CardProject
                                    key={item.id}
                                    title={item.title}
                                    caption={item.description}
                                    src={item.image}
                                    alt={item.title}
                                />
                            ))
                        ) : (
                            <>
                                <ProjectsCardSkeleton classname="flex" />
                                <ProjectsCardSkeleton classname="hidden md:flex" />
                                <ProjectsCardSkeleton classname="hidden xl:flex" />
                            </>
                        )}
                    </div>
                </section>
            </Container>
        </Layout>
    );
}

export default Portfolio;
