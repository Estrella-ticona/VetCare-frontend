import { Client } from "@/clientes/model/client";
import { ClientsApi } from "@/clientes/services/clients-api";
import { useEffect, useState } from "react";
const api = new ClientsApi();

export function useGetClients() {
    const [clients, setClients] = useState<Client[]>([]);
    async function getClients() {
        const response = await api.getClients();
        setClients(response.data);

    }
    useEffect(() => {
        getClients().then();
    }, []);

    return { clients, setClients, getClients };
}
