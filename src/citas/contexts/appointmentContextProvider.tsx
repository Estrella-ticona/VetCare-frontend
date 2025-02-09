import { ReactNode } from "react";

import { useCreateAppointment } from "../hooks/useCreateAppointment";
import { useGetAppointment } from "../hooks/useGetAppointment";

import { AppointmentContext, AppointmentContextType } from "./appointment-context";

export function AppointmentContextProvider({ children }: { children: ReactNode }) {

    const { appointment, clearAppointment, createAppointment, handleChangeAppointment, setAppointment } = useCreateAppointment();
    const { getAppointments, appointments, setAppointments, loadingAppointment } = useGetAppointment();



    const AppointmentContextValue: AppointmentContextType = {
        appointment,
        clearAppointment,
        createAppointment,
        handleChangeAppointment,
        setAppointment,
        getAppointments,
        appointments,
        setAppointments,
        loadingAppointment
    }


    return (
        <AppointmentContext.Provider value={AppointmentContextValue}>
            {children}
        </AppointmentContext.Provider>
    );

};