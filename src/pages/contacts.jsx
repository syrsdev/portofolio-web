import React from "react";
import Container from "../layouts/container";
import Layout from "../layouts/layout";
import Title from "../components/title/title";

function Contacts() {
    return (
        <Layout>
            <Container top="pt-[160px] md:pt-[180px]">
                <div className="mb-10 border-b-2">
                    <Title
                        title="Get in Touch With Me 📬"
                        mb="pb-5"
                        text="text-start"
                    >
                        Feel free to contact me, let's discuss how we can work
                        together.
                    </Title>
                </div>

                <div className="flex flex-col justify-between gap-10 md:flex-row">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col">
                            <h3 className="text-[24px] font-semibold">
                                Send me a message
                            </h3>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-[24px] font-semibold">
                                Or find me on social media
                            </h3>
                        </div>
                    </div>
                    <div className="flex justify-center w-full lg:justify-end xl:justify-center md:w-1/3 lg:w-1/2">
                        <img
                            src="./assets/contact.svg"
                            alt="illustration"
                            width={300}
                        />
                    </div>
                </div>
            </Container>
        </Layout>
    );
}

export default Contacts;
