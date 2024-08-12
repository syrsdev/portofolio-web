import axios from "axios";

export const getAllSkill = (callback) => {
    axios
        .get("http://127.0.0.1:8000/api/home/skills")
        .then((res) => {
            callback(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        });
};
