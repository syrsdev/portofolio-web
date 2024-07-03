import React from "react";
import Copyright from "../components/copyright";
import Container from "./container";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="mt-[60px] border-t-2 border-primary text-wrap">
            <Container top="pt-[50px]">
                <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-0">
                    <div className="flex flex-col w-full gap-3 md:w-max">
                        <h5 className="font-bold text-[24px] ">
                            Surya's Portfolio
                        </h5>
                        <p>
                            Thank you for visiting my personal portfolio
                            website, Connect with me over socials.
                        </p>
                    </div>
                    <div className="flex lg:justify-end w-full gap-12 md:gap-[100px] lg:gap-[50px] xl:gap-[100px] flex-col md:flex-row text-wrap">
                        <div className="flex flex-col gap-[15px]">
                            <h6 className="font-bold text-[20px] ">
                                Contact Info
                            </h6>
                            <ul className="flex flex-col gap-[15px] text-[16px]">
                                <li className="flex items-center gap-3">
                                    <div>
                                        <MdPhone className="w-[20px] h-[20px]" />
                                    </div>
                                    <span>+62 896-3013-3210</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div>
                                        <MdEmail className="w-[20px] h-[20px]" />
                                    </div>
                                    <span>surya.nata.aardhana@gmail.com</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div>
                                        <MdLocationOn className="w-[20px] h-[20px]" />
                                    </div>
                                    <span>
                                        Kelapa Dua, Tangerang Regency, Indonesia
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-[15px]">
                            <h6 className="font-bold text-[20px] ">Links</h6>
                            <ul className="flex flex-col gap-[15px]">
                                <li>
                                    <Link to={"/"}>Home</Link>
                                </li>
                                <li>
                                    <Link to={"/about"}>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/under-construction"}>
                                        Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/under-construction"}>
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/under-construction"}>
                                        Contacts
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-max"></div>
                </div>
            </Container>
            <Copyright />
        </footer>
    );
}

export default Footer;
