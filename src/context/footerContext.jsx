import axios from "axios";
import { createContext, useEffect, useState } from "react";

const FooterContext = createContext();

const FooterContextProvider = ({ children }) => {
    const [data, SetData] = useState(null);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/footer").then((res) => {
            SetData(res.data.data);
        });
    }, []);

    return (
        <FooterContext.Provider value={{ data, SetData }}>
            {children}
        </FooterContext.Provider>
    );
};

export const FooterData = FooterContext;
export default FooterContextProvider;
