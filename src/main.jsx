import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/404";
import Construction from "./pages/construction";
import About from "./pages/about";
import Contacts from "./pages/contacts";

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
        <RouterProvider router={router} />
    </React.StrictMode>
);
