import axios from "axios";

export const AxiosInstance = axios.create({  //worked on the export and bearer below later
    baseURL: process.env.REACT_APP_AUTH,
    headers: {
        "Content-Type" : "application/json",
        "Authorization" : "bearer + jwt_token_string"   //add json_web_token to authorization
    }
});