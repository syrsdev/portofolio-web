import axios from "axios";

export const getAbout = (callback) => {
    axios
        .get("http://127.0.0.1:8000/api/about")
        .then((res) => {
            callback(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        });
};
