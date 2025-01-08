import axios from "axios";

console.log(import.meta.env.API_ENDPOINT);

export const getAbout = (callback) => {
    axios
        .get(`${import.meta.env.VITE_API_ENDPOINT}/about`)
        .then((res) => {
            callback(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        });
};
