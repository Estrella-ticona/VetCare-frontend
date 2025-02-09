import { http } from "@/shared/services/api-services";
import { Appointment } from "../model/appointment";
export class AppointmentApi {
    endpoint = "/appointments";
    async getAppointments() {
        return http.get(`${this.endpoint}`);
    }

    async createAppointment(appointment: Appointment) {
        return http.post(`${this.endpoint}`, appointment);
    }

}