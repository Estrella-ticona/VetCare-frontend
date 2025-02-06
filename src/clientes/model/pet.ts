export class Pet {
    id?: number;
    clientId?: number;
    name?: string;
    gender?: string;
    age?: number;
    specie?: string;
    register?: string;

    constructor(data: Partial<Pet> = {}) {
        Object.assign(this, data);

        if (!this.register) {
            const date = new Date();
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            this.register = `${day}-${month}-${year}`;
        }
    }
}