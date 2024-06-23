import Navbar from "./navbar";

function Layout({ children, top = "pt-[160px]" }) {
    return (
        <>
            <Navbar />
            <main className={`text-white px-[150px] ${top}`}>{children}</main>
        </>
    );
}

export default Layout;
