import React from "react";
import { Link } from "react-router-dom";

function Construction() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-5">
            <img
                src="./assets/construc.svg"
                alt="illustration"
                width={"250px"}
            />
            <h1 className="font-bold text-[20px]">
                Pages Under Construction, Please comeback later.
            </h1>
            <Link className="text-primary" to="/">
                Back to home
            </Link>
        </div>
    );
}

export default Construction;
