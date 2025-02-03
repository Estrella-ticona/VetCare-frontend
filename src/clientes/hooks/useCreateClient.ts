import { useState } from "react";
import { Client } from "../model/client";
import { ClientsApi } from "../services/clients-api";

const api = new ClientsApi();

export function useCreateClient() {
    const [client, setClient] = useState<Client>(new Client());

    const handleChange = (name: keyof Client, value: string) => {
        setClient((prevClient) => ({
            ...prevClient,
            [name]: value,
        }));
    };

    const createClient = async () => {
        await api.createClient(client);
    }

    return { client, createClient, handleChange };
}
