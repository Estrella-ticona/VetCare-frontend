import { ReactNode } from "react";
import { useCreateAppointment } from "../hooks/useCreateAppointment";
import { useGetAppointments } from "../hooks/useGetAppointments";
import { AppointmentContext, AppointmentContextType } from "./appointment-context";
import { useGetClients } from "../hooks/useGetClients";
import { useGetPets } from "../hooks/useGetPets";

export function AppointmentContextProvider({ children }: { children: ReactNode }) {
    const { appointment, clearAppointment, createAppointment, handleChangeAppointment, setAppointment, setClientselected, setPetsselected, clientselected, petsselected, date, setDate, petSpecie, setPetSpecie, petGender, setPetGender, petName, setPetName } = useCreateAppointment();
    const { getAppointments, appointments, setAppointments, loadingAppointment } = useGetAppointments();
    const { clients, setClients, getClients } = useGetClients();
    const { pets, setPets, getPets } = useGetPets();

    const AppointmentContextValue: AppointmentContextType = {
        appointment,
        clearAppointment,
        createAppointment,
        handleChangeAppointment,
        setAppointment,
        setClientselected,
        setPetsselected,
        clientselected,
        petsselected,
        date,
        setDate,
        petName,
        setPetName,
        petSpecie,
        setPetSpecie,
        petGender,
        setPetGender,

        getAppointments,
        appointments,
        setAppointments,
        loadingAppointment,

        clients,
        setClients,
        getClients,
        pets,
        setPets,
        getPets
    }

    return (
        <AppointmentContext.Provider value={AppointmentContextValue}>
            {children}
        </AppointmentContext.Provider>
    );
};