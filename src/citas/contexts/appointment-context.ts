import { createContext } from "react";
import { Appointment } from "../model/appointment";
import { Client } from "@/clientes/model/client";
export type AppointmentContextType = {
    /* useGetAppointments */
    appointments: Appointment[];
    setAppointments: (appointments: Appointment[]) => void;
    getAppointments: () => Promise<void>;


    /*
    1 useGetClients
        lista de clientes
    
    2 useGetPets
        mascostas del cliente

    clienteSelected
    setClienteSelected -> TRAER MASCOTAS

    petSelected
    setPetSelected -> la citada creada se debe actulizar con clientId y petId
    */

    loadingAppointment: boolean;
    /* useCreateAppointment */
    appointment: Appointment;
    handleChangeAppointment: (name: keyof Appointment, value: string) => void;
    setAppointment: (appointment: Appointment) => void;
    clearAppointment: () => void;
    createAppointment: () => Promise<void>;
    setClientselected: (clientselected: number) => void;
    setPetsselected: (petsselected: number) => void;
    clientselected: number;
    petsselected: number;

    clients: Client[];
    setClients: (clients: Client[]) => void;
    getClients: () => Promise<void>;
    pets: Client[];
    setPets: (pets: Client[]) => void;
    getPets: (id: number) => Promise<void>;



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
    setClientselected: () => { },
    setPetsselected: () => { },
    clientselected: 0,
    petsselected: 0,

    clients: [],
    setClients: () => { },
    getClients: async () => { },
    pets: [],
    setPets: () => { },
    getPets: async () => { },

});