import { ReactNode } from "react";
import { ClientsContext, ClientsContextType } from "./clients-context";
import { useGetClients } from "../hooks/useGetClients";
import { useCreateClient } from "../hooks/useCreateClient"
import { useCreatePet } from "../hooks/useCreatePets";
import { useDeletePet } from "../hooks/useDeletePet";

export function ClientsContextProvider({ children }: { children: ReactNode }) {
    const { clients, setClients, getClients, loadingclient } = useGetClients();
    const { client, setClient, clearClient, createClient, handleChangeClient } = useCreateClient();
    const { pet, handleChangePet, clearPet, createPet, } = useCreatePet();
    const { deletePet } = useDeletePet();


    const ClientsContextValue: ClientsContextType = {
        clients,
        setClients,
        getClients,
        loadingclient,
        client,
        setClient,
        clearClient,
        createClient,
        handleChangeClient,
        pet,
        handleChangePet,
        clearPet,
        createPet,
        deletePet


    }


    return (
        <ClientsContext.Provider value={ClientsContextValue}>
            {children}
        </ClientsContext.Provider>
    );

};