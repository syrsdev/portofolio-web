import axios from "axios";
import { createContext, useEffect, useState } from "react";
import footerData from "../data/contacts.json";
const FooterContext = createContext();

const FooterContextProvider = ({ children }) => {
  const [data, SetData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      SetData(footerData);
    }, 300);
    // axios.get(`${import.meta.env.VITE_API_ENDPOINT}/footer`).then((res) => {
    //     SetData(res.data.data);
    // });
  }, []);

  return (
    <FooterContext.Provider value={{ data, SetData }}>
      {children}
    </FooterContext.Provider>
  );
};

export const FooterData = FooterContext;
export default FooterContextProvider;
