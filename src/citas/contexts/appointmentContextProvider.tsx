import { ReactNode } from "react";

import { useCreateAppointment } from "../hooks/useCreateAppointment";
import { useGetAppointment } from "../hooks/useGetAppointment";

import { AppointmentContext, AppointmentContextType } from "./appointment-context";
import { useGetClients } from "../hooks/useGetClient";
import { useGetPets } from "../hooks/useGetPet";

export function AppointmentContextProvider({ children }: { children: ReactNode }) {

    const { appointment, clearAppointment, createAppointment, handleChangeAppointment, setAppointment, setClientselected, setPetsselected, clientselected, petsselected } = useCreateAppointment();
    const { getAppointments, appointments, setAppointments, loadingAppointment } = useGetAppointment();
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