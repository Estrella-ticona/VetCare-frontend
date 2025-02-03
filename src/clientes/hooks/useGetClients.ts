import { useEffect, useState } from "react";
import { ClientsApi } from "../services/clients-api";
import { Client } from "../model/client";

const api = new ClientsApi();

export function useGetClients() {
    const [clients, setClients] = useState<Client[]>([]);

    useEffect(() => {
        getClients().then();
    }, []);

    const getClients = async () => {
        const response = await api.getClients();
        setClients(response.data);
    }

    return { clients };
}
