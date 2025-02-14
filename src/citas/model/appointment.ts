
export class Appointment {
    id?: number;

    doctorId?: number;
    doctorName?: string;
    //-------
    clientId?: number;
    clientName?: string;

    petId?: number;
    petName?: string;
    petSpecie?: string;
    petGender?: string;
    petBreed?: string;
    petAge?: number;
    petWeight?: number;
    petBirthDate?: string;
    //------
    reason?: string;
    description?: string;
    diagnostic?: string;
    treatment?: string;
    observation?: string;
    date?: string;



    constructor(data: Partial<Appointment> = {}) {
        Object.assign(this, data);
    }
}

