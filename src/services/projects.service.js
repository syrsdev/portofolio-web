import axios from "axios";

export const getProjects = (callback) => {
    axios
        .get(`${import.meta.env.VITE_API_ENDPOINT}/projects`)
        .then((res) => {
            callback(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        });
};

export const getRecentProjects = (callback) => {
    axios
        .get(`${import.meta.env.VITE_API_ENDPOINT}/home/recent-projects`)
        .then((res) => {
            callback(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        });
};
