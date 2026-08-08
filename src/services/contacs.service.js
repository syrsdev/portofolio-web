// import axios from "axios";

// export const getContacts = (callback) => {
//     axios
//         .get(`${import.meta.env.VITE_API_ENDPOINT}/contacts`)
//         .then((res) => {
//             callback(res.data.data);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// };

import contactsData from "../data/contacts.json";

export const getContacts = (callback) => {
  setTimeout(() => callback(contactsData), 300);
};