export class Pet {
    id?: number;
    clientId?: number;
    name?: string;
    gender?: string;
    age?: number;
    specie?: string;
    register?: any;



    constructor(data: Partial<Pet> = {}) {
        Object.assign(this, data);
        /* if (data.register) {
            this.register = new Date(data.register);
        } */
    }
}