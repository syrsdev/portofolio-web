import Footer from "./footer";
import Navbar from "./navbar";

function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className={`text-white`}>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;
