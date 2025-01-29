//import { http } from "@/shared/services/api-service";
//import { User } from "../model/user";

import { http } from "../../shared/services/api-services";
import { User } from "../model/user";

export class AuthApi {
    endpoint = "/auth";

    async signIn(user: User) {
        return http.post(`${this.endpoint}/sign-in`, user);
    }

    async signUp(user: User) {
        return http.post(`${this.endpoint}/sign-up`, user);
        //return http.post(`${this.endpoint}/sign-up`, user, { headers: { "Content-Type": "multipart/form-data" } });
    }
}