
export class Appointment {
    clientId?: number;
    id?: number;
    petId?: number;
    petName?: string;
    petSpecie?: string;
    petGender?: string;
    reason?: string;
    date?: string;



    constructor(data: Partial<Appointment> = {}) {
        Object.assign(this, data);
    }
}

