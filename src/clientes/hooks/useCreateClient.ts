import { useState } from "react";
import { Client } from "../model/client";
import { ClientsApi } from "../services/clients-api";

const api = new ClientsApi();


export function useCreateClient() {
    const [client, setClient] = useState<Client>(new Client());

    const handleChangeClient = (name: keyof Client, value: string) => {
        setClient((prevClient) => ({
            ...prevClient,
            [name]: value,
        }));
    };

    const clearClient = () => {
        setClient(new Client());
    }

    const createClient = async () => {
        await api.createClient(client);
        clearClient();
    }




    return { client, clearClient, createClient, handleChangeClient, setClient };
}
