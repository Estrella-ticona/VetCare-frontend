import dayjs from "dayjs";

export class Pet {
    id?: number;
    clientId?: number;
    name?: string;
    gender?: string;
    age?: number;
    specie?: string;
    registerDate?: string;
    breed?: string;
    weight?: number;
    birthDate?: string;


    constructor(data: Partial<Pet> = {}) {
        Object.assign(this, data);

        if (!this.registerDate)
            this.registerDate = dayjs(new Date()).format("DD-MM-YYYY");
    }
}