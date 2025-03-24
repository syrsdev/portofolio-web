import Footer from "./footer";
import Navbar from "./navbar";
import ButtonToTop from "../components/button/buttonToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Layout({ children }) {
    useEffect(() => {
        setTimeout(() => {
            AOS.init({
                once: true,
                duration: 1000,
            });
        });
    }, []);
    return (
        <>
            <Navbar />
            <main className={`text-white`}>{children}</main>
            <ButtonToTop />
            <Footer />
        </>
    );
}

export default Layout;
