import { createContext } from "react";
import { Appointment } from "../model/appointment";
import { Client } from "@/clientes/model/client";
import dayjs, { Dayjs } from "dayjs";
import { Pet } from "@/clientes/model/pet";
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
    date: Dayjs | null;
    setDate: (date: Dayjs | null) => void;

    clients: Client[];
    setClients: (clients: Client[]) => void;
    getClients: () => Promise<void>;
    pets: Pet[];
    setPets: (pets: Client[]) => void;
    getPets: (id: number) => Promise<void>;
    petName: string;
    setPetName: (petName: string) => void;
    petSpecie: string;
    setPetSpecie: (petSpecie: string) => void;
    petGender: string;
    setPetGender: (petGender: string) => void;




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

    petName: "",
    setPetName: () => { },
    petSpecie: "",
    setPetSpecie: () => { },
    petGender: "",
    setPetGender: () => { },

    clearAppointment: () => { },
    createAppointment: async () => { },
    setClientselected: () => { },
    setPetsselected: () => { },
    clientselected: 0,
    petsselected: 0,
    date: dayjs(new Date()),
    setDate: () => { },

    clients: [],
    setClients: () => { },
    getClients: async () => { },
    pets: [],
    setPets: () => { },
    getPets: async () => { },

});