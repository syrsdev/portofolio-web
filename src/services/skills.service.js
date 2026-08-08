// import axios from "axios";

// export const getAllSkill = (callback) => {
//     axios
//         .get(`${import.meta.env.VITE_API_ENDPOINT}/home/skills`)
//         .then((res) => {
//             callback(res.data.data);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// };

import skillsData from "../data/skills.json";

export const getAllSkill = (callback) => {
  setTimeout(() => callback(skillsData), 300);
};
