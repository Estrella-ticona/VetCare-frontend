
export class Appointment {
    id?: number;
    petid?: number;
    reason?: string;
    localdatetime?: string;


    constructor(data: Partial<Appointment> = {}) {
        Object.assign(this, data);
    }
}