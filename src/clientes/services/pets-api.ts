import { http } from "@/shared/services/api-services";
import { Pet } from "../model/pet";
export class PetsApi {
    endpoint = "/pets";
    async getPets(id: number) {
        const data = { clientId: id }
        return http.post(`${this.endpoint}`, data);
    }


    async createPets(Pet: Pet) {
        return http.post(`${this.endpoint}/create`, Pet);
    }

}