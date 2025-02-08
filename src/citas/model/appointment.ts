import { Pet } from '@/clientes/model/pet';
export class Appointment {
    id?: number;
    petid?: number;
    reason?: string;
    date?: string;
    pet?: Pet;


    constructor(data: Partial<Appointment> = {}) {
        Object.assign(this, data);
    }
}