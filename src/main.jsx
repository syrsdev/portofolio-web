import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/404";
import Construction from "./pages/construction";
import About from "./pages/about";
import Contacts from "./pages/contacts";
import Portfolio from "./pages/portfolio";
import FooterContextProvider from "./context/footerContext";
import ProjectDetail from "./pages/projectDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/portfolio",
        element: <Portfolio />,
    },
    {
        path: "/portfolio/:slug",
        element: <ProjectDetail />,
    },
    {
        path: "/contacts",
        element: <Contacts />,
    },
    {
        path: "/under-construction",
        element: <Construction />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <FooterContextProvider>
            <RouterProvider router={router} />
        </FooterContextProvider>
    </React.StrictMode>
);
