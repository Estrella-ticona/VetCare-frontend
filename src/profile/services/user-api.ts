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

    /*     async updateemail(user: User) {
            return http.post(`${this.endpoint}/email`, user);
        }
        async updatepassword(user: User) {
            return http.post(`${this.endpoint}/password`, user);
        }
        async updatename(user: User) {
            return http.post(`${this.endpoint}/name`, user);
        }
        async updatespeciality(user: User) {
            return http.post(`${this.endpoint}/speciality`, user);
        }
        async updatedni(user: User) {
            return http.post(`${this.endpoint}/dni`, user);
        }
        async updatephone(user: User) {
            return http.post(`${this.endpoint}/phone`, user);
        }
    */
}