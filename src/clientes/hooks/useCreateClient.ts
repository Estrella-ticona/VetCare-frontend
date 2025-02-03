import { useState } from "react";
import { Client } from "../model/client";
import { ClientsApi } from "../services/clients-api";

const api = new ClientsApi();

export function useCreateClient() {
    const [client, setClient] = useState<Client>(new Client());

    const createClient = async () => {
        const response = await api.getClients();
        setClients(response.data);
    }

    return { client, createClient, };
}
