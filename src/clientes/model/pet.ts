export class Pet {
    clientId?: number;
    name?: string;
    gender?: string;
    age?: number;



    constructor(data: Partial<Pet> = {}) {
        Object.assign(this, data);
    }
}