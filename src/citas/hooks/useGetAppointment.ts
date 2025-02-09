import { useEffect, useState } from "react";
import { Appointment } from "../model/appointment";
import { AppointmentApi } from "@/citas/services/appointment-api";
const api = new AppointmentApi();

export function useGetAppointment() {

    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loadingAppointment, setLoadingAppointment] = useState(true);
    async function getAppointments() {
        const response = await api.getAppointments();
        setAppointments(response.data);
        setLoadingAppointment(false);
    }
    useEffect(() => {
        getAppointments().then();

    }, []);







    return { getAppointments, appointments, setAppointments, loadingAppointment };
}