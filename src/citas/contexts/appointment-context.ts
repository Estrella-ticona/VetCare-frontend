import { createContext } from "react";
import { Appointment } from "../model/appointment";
export type AppointmentContextType = {
    /* useGetAppointments */
    appointments: Appointment[];
    setAppointments: (appointments: Appointment[]) => void;
    getAppointments: () => Promise<void>;

    loadingAppointment: boolean;
    /* useCreateAppointment */
    appointment: Appointment;
    handleChangeAppointment: (name: keyof Appointment, value: string) => void;
    setAppointment: (appointment: Appointment) => void;
    clearAppointment: () => void;
    createAppointment: () => Promise<void>;
}
/* valores por defecto */
export const AppointmentContext = createContext<AppointmentContextType>({
    appointments: [],
    setAppointments: () => { },
    setAppointment: () => { },
    getAppointments: async () => { },
    loadingAppointment: true,
    appointment: new Appointment(),
    handleChangeAppointment: () => { },
    clearAppointment: () => { },
    createAppointment: async () => { },
});