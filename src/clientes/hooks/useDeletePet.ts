import { Pet } from "../model/pet";
import { PetsApi } from "../services/pets-api";
const api = new PetsApi();

export function useDeletePet() {
    const deletePet = async (pet: Pet) => {
        await api.deletePet(pet);
    };

    return { deletePet };
}