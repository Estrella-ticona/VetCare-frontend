import { http } from "../../shared/services/api-services";
import { User } from "../../iam/model/user";

export class UserApi {
    endpoint = "/user";

    async getUser() {
        return http.get(`${this.endpoint}`);
    }

    async updateUser(user: User) {
        return http.post(`${this.endpoint}`, user);
    }
}