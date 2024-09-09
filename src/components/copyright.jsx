import React, { useContext } from "react";
import Container from "../layouts/container";
import { FaSpotify, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FooterData } from "../context/footerContext";

function Copyright() {
    const { data } = useContext(FooterData);
    return (
        <Container>
            <div className="flex pb-28 md:pb-7 justify-between flex-col md:flex-row gap-5 items-center border-t-2 border-primary py-[30px]">
                <div className="flex gap-5 w-max">
                    <a target="_blank" href={data == null ? "" : data.spotify}>
                        <FaSpotify className="w-[25px] h-[25px]" />
                    </a>
                    <a target="_blank" href={data == null ? "" : data.github}>
                        <FaGithub className="w-[25px] h-[25px]" />
                    </a>
                    <a target="_blank" href={data == null ? "" : data.linkedin}>
                        <FaLinkedin className="w-[25px] h-[25px]" />
                    </a>
                    <a
                        target="_blank"
                        href={data == null ? "" : data.instagram}
                    >
                        <FaInstagram className="w-[25px] h-[25px]" />
                    </a>
                </div>
                <div className="w-max font-semibold text-[10px] md:text-[12px]">
                    ©2024 Surya Nata Ardhana | All rights reserved
                </div>
            </div>
        </Container>
    );
}

export default Copyright;
