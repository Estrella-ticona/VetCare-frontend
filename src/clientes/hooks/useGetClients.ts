import { useEffect, useState } from "react";
import { ClientsApi } from "../services/clients-api";
import { Client } from "../model/client";
import { PetsApi } from "../services/pets-api";

const api = new ClientsApi();
const api2 = new PetsApi();

export function useGetClients() {
    const [clients, setClients] = useState<Client[]>([]);
    const [loadingclient, setloadingclient] = useState(true);
    useEffect(() => {
        const fetchClientsWithPets = async () => {
            try {
                const clientsNoPets = await getClients();

                const clientsWithPets = await Promise.all(
                    clientsNoPets.map(async (client: Client) => {
                        if (client.id) {
                            const pets = await getPets(client.id);
                            return { ...client, pets }; // Retorna un nuevo objeto con las mascotas
                        }
                        return client;
                    })
                );

                setClients(clientsWithPets);
                setloadingclient(false);
            } catch (error) {
                console.error("Error fetching clients or pets:", error);
            }

        };

        fetchClientsWithPets();
    }, []);

    const getClients = async () => {
        const response = await api.getClients();
        return response.data;
    };

    const getPets = async (id: number) => {
        const response = await api2.getPets(id);
        return response.data;
    };

    return { clients, setClients, getClients, loadingclient };
}