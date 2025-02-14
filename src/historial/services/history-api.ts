import { http } from "@/shared/services/api-services";
import { Appointment } from "@/citas/model/appointment";

export class historyApi {

    endpoint = "/histories";


    async getHistoryByClientId(clientId: number) {
        const data = { clientId: clientId }
        return http.post(`${this.endpoint}/by-client-id`, data);
    }
    async updateAppointmentById(appointment: Appointment) {
        return http.post(`${this.endpoint}/update-appointment`, appointment);
    }
    async getAllHistories() {
        return http.get(`${this.endpoint}`);
    }

}
