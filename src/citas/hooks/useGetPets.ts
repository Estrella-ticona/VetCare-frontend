
import { Pet } from "@/clientes/model/pet";
import { PetsApi } from "@/clientes/services/pets-api";
import { useState } from "react";

const api = new PetsApi();

export function useGetPets() {
    const [pets, setPets] = useState<Pet[]>([]);

    async function getPets(id: number) {
        const response = await api.getPets(id);
        setPets(response.data);
    }

    return { pets, setPets, getPets };
}
