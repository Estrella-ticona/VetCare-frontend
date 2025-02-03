
export class Client {
    doctorName?: string;
    name?: string;
    dni?: number;
    email?: string;
    phone?: number;
    pets?: any[];

    constructor(data: Partial<Client> = {}) {
        Object.assign(this, data);
    }
}