import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <img
                src="./assets/404.svg"
                alt="404 not found"
                className="w-[230px] md:w-[280px]"
            />
            <h1 className="font-bold text-[24px] mt-8 mb-2">
                Oops! We can’t find that page.
            </h1>
            <Link to={"/"} className="text-primary">
                wanna back to home?
            </Link>
        </div>
    );
}

export default NotFound;
