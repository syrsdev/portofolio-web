import Navbar from "./navbar";

function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="text-white">{children}</main>
        </>
    );
}

export default Layout;
