import { ReactNode } from "react";
import { ClientsContext, ClientsContextType } from "./clients-context";
import { useGetClients } from "../hooks/useGetClients";
import { useCreateClient } from "../hooks/useCreateClient"
import { useCreatePet } from "../hooks/useCreatePets";

export function ClientsContextProvider({ children }: { children: ReactNode }) {
    const { clients, setClients, getClients } = useGetClients();
    const { client, setClient, clearClient, createClient, handleChangeClient } = useCreateClient();
    const { pet, handleChangePet, clearPet, createPet } = useCreatePet();

    const ClientsContextValue: ClientsContextType = {
        clients,
        setClients,
        getClients,
        client,
        setClient,
        clearClient,
        createClient,
        handleChangeClient,
        pet,
        handleChangePet,
        clearPet,
        createPet,


    }


    return (
        <ClientsContext.Provider value={ClientsContextValue}>
            {children}
        </ClientsContext.Provider>
    );

};