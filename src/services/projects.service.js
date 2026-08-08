// import axios from "axios";

// export const getProjects = (callback) => {
//     axios
//         .get(`${import.meta.env.VITE_API_ENDPOINT}/projects`)
//         .then((res) => {
//             callback(res.data.data);
//         })
//         .catch((err) => {
//             console.log(err);
//             callback({ status: 404, message: "Not Found" });
//         });
// };

// export const getRecentProjects = (callback) => {
//     axios
//         .get(`${import.meta.env.VITE_API_ENDPOINT}/home/recent-projects`)
//         .then((res) => {
//             callback(res.data.data);
//         })
//         .catch((err) => {
//             console.log(err);
//             callback({ status: 404, message: "Not Found" });
//         });
// };

import projectsData from "../data/projects.json";

export const getProjects = (callback) => {
  setTimeout(() => callback(projectsData), 300);
};

export const getRecentProjects = (callback) => {
  setTimeout(() => callback(projectsData), 300);
};