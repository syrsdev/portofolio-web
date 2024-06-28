import React from "react";
import Copyright from "../components/copyright";
import Container from "./container";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="mt-[60px] border-t-2 border-primary">
            <Container top="pt-[50px]">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-3 w-max">
                        <h5 className="font-bold text-[24px] ">
                            Surya's Portfolio
                        </h5>
                        <p>
                            Thank you for visiting my personal portfolio
                            website, Connect with me over socials.
                        </p>
                    </div>
                    <div className="flex justify-end w-full gap-[100px]">
                        <div className="flex flex-col gap-[15px]">
                            <h6 className="font-bold text-[20px] ">
                                Contact Info
                            </h6>
                            <ul className="flex flex-col gap-[15px]">
                                <li className="flex items-center gap-3">
                                    <MdPhone /> +62 896-3013-3210
                                </li>
                                <li className="flex items-center gap-3">
                                    <MdEmail /> surya.nata.aardhana@gmail.com
                                </li>
                                <li className="flex items-center gap-3">
                                    <MdLocationOn /> Kelapa Dua, Tangerang
                                    Regency, Indonesia
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-[15px]">
                            <h6 className="font-bold text-[20px] ">Links</h6>
                            <ul className="flex flex-col gap-[15px]">
                                <li>
                                    <Link>Home</Link>
                                </li>
                                <li>
                                    <Link>About</Link>
                                </li>
                                <li>
                                    <Link>Portfolio</Link>
                                </li>
                                <li>
                                    <Link>Services</Link>
                                </li>
                                <li>
                                    <Link>Contacts</Link>
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
