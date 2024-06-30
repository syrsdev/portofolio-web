import React from "react";
import Container from "../layouts/container";
import { FaSpotify, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Copyright() {
    return (
        <Container>
            <div className="flex justify-between flex-col md:flex-row gap-5 items-center border-t-2 border-primary py-[30px]">
                <div className="flex gap-5 w-max">
                    <a href="">
                        <FaSpotify className="w-[25px] h-[25px]" />
                    </a>
                    <a href="">
                        <FaGithub className="w-[25px] h-[25px]" />
                    </a>
                    <a href="">
                        <FaLinkedin className="w-[25px] h-[25px]" />
                    </a>
                    <a href="">
                        <FaInstagram className="w-[25px] h-[25px]" />
                    </a>
                </div>
                <div className="w-max font-bold text-[10px] md:text-[12px]">
                    ©2024 Surya Nata Ardhana | All rights reserved
                </div>
            </div>
        </Container>
    );
}

export default Copyright;
