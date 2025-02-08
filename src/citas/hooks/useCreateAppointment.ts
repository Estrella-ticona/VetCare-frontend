import { useState } from "react";
import { Appointment } from "../model/appointment";
import { AppointmentApi } from "@/citas/services/appointment-api";
const api = new AppointmentApi();

export function useCreateAppointment() {

    const [appointment, setAppointment] = useState<Appointment>(new Appointment());

    const handleChangeAppointment = (name: keyof Appointment, value: string) => {
        setAppointment((prevAppointment) => ({
            ...prevAppointment,
            [name]: value,
        }));
    };
    const clearAppointment = () => {
        setAppointment(new Appointment());
    }
    const createAppointment = async () => {
        await api.createAppointment(appointment);
        clearAppointment();
    }
    return { appointment, clearAppointment, createAppointment, handleChangeAppointment, setAppointment };
}