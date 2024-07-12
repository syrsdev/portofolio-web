import React from "react";
import { Link } from "react-router-dom";
import Layout from "../layouts/layout";

function Construction() {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen gap-5 text-center">
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
        </Layout>
    );
}

export default Construction;
