import { useState } from "react";
import { Appointment } from "../model/appointment";
import { AppointmentApi } from "@/citas/services/appointment-api";
const api = new AppointmentApi();

export function useCreateAppointment() {

    const [appointment, setAppointment] = useState<Appointment>(new Appointment());
    const [clientselected, setClientselected] = useState<number>(0);
    const [petsselected, setPetsselected] = useState<number>(0);

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
        appointment.clientId = clientselected;
        appointment.petId = petsselected;
        await api.createAppointment(appointment);
        clearAppointment();
    }
    return { appointment, clearAppointment, createAppointment, handleChangeAppointment, setAppointment };
}