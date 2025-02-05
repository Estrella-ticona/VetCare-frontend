import { useState } from "react";
import { Pet } from "../model/pet";

import { PetsApi } from "../services/pets-api";

const api2 = new PetsApi();

export function useCreatePet() {
    const [pet, setPet] = useState<Pet>(new Pet());

    const handleChangePet = (name: keyof Pet, value: string) => {
        setPet((prevPet) => ({
            ...prevPet,
            [name]: value,
        }));
    };

    const clearPet = () => {
        setPet(new Pet());
    }

    const createPet = async () => {
        await api2.createPets(pet);
        clearPet();
    }

    return { pet, clearPet, createPet, handleChangePet, setPet };
}
