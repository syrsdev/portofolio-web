import React from "react";
import ScrollToTop from "react-scroll-to-top";

const ButtonToTop = () => {
    return (
        <ScrollToTop
            smooth
            color="#fff"
            width="15"
            height="15"
            viewBox="0 0 256 256"
            className="bg-gradient-to-r from-[#6C35DE] to-[#A364FF] w-[40px] h-[40px] rounded-full flex items-center justify-center font-bold !bottom-28 !right-5 md:!right-10 md:!bottom-10 !z-[100]"
        />
    );
};

export default ButtonToTop;
