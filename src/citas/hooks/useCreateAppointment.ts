import { useState } from "react";
import { Appointment } from "../model/appointment";
import { AppointmentApi } from "@/citas/services/appointment-api";
import dayjs, { Dayjs } from "dayjs";
const api = new AppointmentApi();

export function useCreateAppointment() {
    const [petName, setPetName] = useState<string>("");
    const [petSpecie, setPetSpecie] = useState<string>("");
    const [petGender, setPetGender] = useState<string>("");
    const [date, setDate] = useState<Dayjs | null>(dayjs(new Date()));
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
        appointment.date = date?.format("YYYY-MM-DDTHH:mm:ss") || "";
        appointment.clientId = clientselected;
        appointment.petId = petsselected;
        await api.createAppointment(appointment);
        clearAppointment();
    }
    return { appointment, clearAppointment, createAppointment, handleChangeAppointment, setAppointment, setClientselected, setPetsselected, clientselected, petsselected, date, setDate, petName, setPetName, petSpecie, setPetSpecie, petGender, setPetGender };
}