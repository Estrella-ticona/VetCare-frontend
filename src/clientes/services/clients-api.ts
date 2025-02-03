import { http } from "@/shared/services/api-services";
import { Client } from "../model/client";
export class ClientsApi {
    endpoint = "/clients";
    async getClients() {
        return http.get(`${this.endpoint}`);
    }

    async createClient(client: Client) {
        return http.post(`${this.endpoint}`, client);
    }

}