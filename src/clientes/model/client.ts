import { Pet } from "./pet"
export class Client {
    id?: number;
    doctorName?: string;
    name?: string;
    dni?: number;
    email?: string;
    phone?: number;
    pets?: Pet[];

    constructor(data: Partial<Client> = {}) {
        Object.assign(this, data);
    }
}