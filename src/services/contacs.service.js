import axios from "axios";

export const getContacts = (callback) => {
    axios
        .get(`${import.meta.env.VITE_API_ENDPOINT}/contacts`)
        .then((res) => {
            callback(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        });
};
