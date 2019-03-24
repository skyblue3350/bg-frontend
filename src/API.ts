import axios from "axios";

export default class API {
    private instance;

    constructor(token?: string) {
        this.instance = axios.create({
            baseURL: "http://192.168.1.5:1337",
            timeout: 1000,
            responseType: "json",
        });
        //this.instance.defaultConfig.headers.authorization = "aaaa";
    }

    login(uid: string, pass: string) {
        return this.instance.post("/auth/local", {
            identifier: uid,
            password: pass,
        });
    }
}

