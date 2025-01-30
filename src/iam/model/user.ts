export class User {
    email?: string;
    password?: string;
    name?: string;
    speciality?: string;
    dni?: number;
    phone?: number;

    constructor(data: Partial<User> = {}) {
        Object.assign(this, data);
    }

}