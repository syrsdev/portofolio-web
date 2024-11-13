import Footer from "./footer";
import Navbar from "./navbar";
import ButtonToTop from "../components/button/buttonToTop";

function Layout({ children }) {
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
