export class Appointment {
    id?: number;
    //Doctor data
    doctorId?: number;
    doctorName?: string;
    //Client data
    clientId?: number;
    clientName?: string;
    //Pet data
    petId?: number;
    petName?: string;
    petSpecie?: string;
    petGender?: string;
    petBreed?: string;
    petAge?: number;
    petWeight?: number;
    petBirthDate?: string;
    //Appointment data
    reason?: string;
    description?: string;
    diagnosis?: string;
    treatment?: string;
    observations?: string;
    date?: string;

    constructor(data: Partial<Appointment> = {}) {
        Object.assign(this, data);
    }
}