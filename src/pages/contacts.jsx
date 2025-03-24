import React, { useEffect, useState } from "react";
import Container from "../layouts/container";
import Layout from "../layouts/layout";
import Title from "../components/title/title";
import ButtonContact from "../components/button/buttonContact";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { getContacts } from "../services/contacs.service";

function Contacts() {
    const [contact, setContact] = useState({});
    useEffect(() => {
        getContacts((data) => {
            setContact(data);
        });
    }, []);
    console.log(contact);

    return (
        <Layout>
            <Container top="pt-[160px] md:pt-[180px]">
                <div className="mb-10 border-b-2">
                    <Title
                        aos="zoom-in"
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
                        <div className="flex flex-col" data-aos="fade-right">
                            <h3 className="text-[18px] md:text-[22px] lg:text-[24px] font-semibold">
                                Send me a message
                            </h3>
                            <div className="flex flex-col w-full gap-5 mt-5 md:gap-3 lg:gap-5 md:w-full md:flex-row">
                                <ButtonContact
                                    color="bg-red-500"
                                    href={
                                        contact?.email != null &&
                                        `mailto:/${contact.email}`
                                    }
                                >
                                    <span className="text-[20px]">
                                        <MdOutlineEmail />
                                    </span>
                                    Email
                                </ButtonContact>
                                <ButtonContact
                                    color="bg-[#00B944]"
                                    href={
                                        contact?.telp != null &&
                                        `https://wa.me/+62${contact.telp}`
                                    }
                                >
                                    <span className="text-[20px]">
                                        <FaWhatsapp />
                                    </span>
                                    WhatsApp
                                </ButtonContact>
                            </div>
                        </div>
                        <div className="flex flex-col" data-aos="fade-right">
                            <h3 className="text-[18px] md:text-[22px] lg:text-[24px] font-semibold">
                                Or find me on social media
                            </h3>
                            <div className="flex flex-col w-full gap-5 my-5 md:gap-3 lg:gap-5 md:w-full md:flex-row">
                                <ButtonContact
                                    color="bg-slate-700"
                                    href={
                                        contact?.github != null &&
                                        contact.github
                                    }
                                >
                                    <span className="text-[20px]">
                                        <FaGithub />
                                    </span>
                                    Github
                                </ButtonContact>
                                <ButtonContact
                                    color="bg-pink-600"
                                    href={
                                        contact?.instagram != null &&
                                        contact.instagram
                                    }
                                >
                                    <span className="text-[20px]">
                                        <FaInstagram />
                                    </span>
                                    Instagram
                                </ButtonContact>
                            </div>
                            <ButtonContact
                                color="bg-blue-600"
                                href={
                                    contact?.linkedin != null &&
                                    contact.linkedin
                                }
                            >
                                <span className="text-[20px]">
                                    <FaLinkedin />
                                </span>
                                Linkedin
                            </ButtonContact>
                        </div>
                    </div>
                    <div
                        data-aos="fade-left"
                        className="flex justify-center w-full lg:justify-end xl:justify-center md:w-1/3 lg:w-1/2"
                    >
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
