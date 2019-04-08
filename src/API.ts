import axios from "axios";
import GamesAPI from "./api/games";

export default class API {
    private axios;
    public games;
    public host = "http://127.0.0.1:8000";

    constructor(token?: string) {
        this.axios = axios.create({
            baseURL: this.host,
            timeout: 1000,
            responseType: "json",
        });
        if (token) {
            this.axios.defaults.headers.Authorization = `Token ${token}`;
        }

        this.games = new GamesAPI(this.axios);
    }

    login(uid: string, pass: string) {
        return this.axios.post("/auth/login/", {
            username: uid,
            password: pass,
        });
    }

    getUserDate() {
        return this.axios.get("/auth/user/");
    }
}

