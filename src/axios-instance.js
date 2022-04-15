import axios from "axios";

const instance = axios.create({ baseURL: "http://51.15.133.70:3000" });

export default instance;
