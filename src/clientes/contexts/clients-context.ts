import { createContext } from "react";
import { Client } from "../model/client";
import { Pet } from "../model/pet";

export type ClientsContextType = {
    /* useGetClients */
    clients: Client[];
    setClients: (clients: Client[]) => void;
    getClients: () => Promise<void>;
    loadingclient: boolean;

    /*UseCreate pet */
    pet: Pet;
    handleChangePet: (name: keyof Pet, value: string) => void;
    clearPet: () => void;
    createPet: (clientId: number) => Promise<void>;
    deletePet: (pet: Pet) => Promise<void>;

    /* useCreateClient */
    client: Client;
    setClient: (client: Client) => void;
    clearClient: () => void;
    createClient: () => Promise<void>;
    handleChangeClient: (name: keyof Client, value: string) => void;
}

/* valores por defecto */
export const ClientsContext = createContext<ClientsContextType>({
    clients: [],
    setClients: () => { },
    getClients: async () => { },
    loadingclient: true,

    pet: new Pet(),
    handleChangePet: () => { },
    clearPet: () => { },
    createPet: async () => { },
    deletePet: async () => { },

    client: new Client(),
    setClient: () => { },
    clearClient: () => { },
    createClient: async () => { },
    handleChangeClient: () => { },
});