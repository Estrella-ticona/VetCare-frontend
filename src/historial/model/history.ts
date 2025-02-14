import { Appointment } from "@/citas/model/appointment";

export class History {
    appointments?: Appointment[];

    constructor(data: Partial<History> = {}) {
        Object.assign(this, data);
    }
}

/*
histroial -> conjuto de citas
history -> Appointment[]

historialZeus -> [cita1, cita2, cita3]

Historial medico de la mascota

datos generales de la mascota
ID de mascota: {historialZeus.appointmetns[0].petId}
nombre: {historialZeus.appointmetns[0].petName}
dueño: {historialZeus.appointmetns[0].clientName}

Historial medico

 
 {historialZeus.map((history) => <Row key={appointment.id} appointment={appointment} />)
 }

Row:
    Motivo {appointmetns.reason}
    fecha {appointmetns.date}
    veterianrio {appointmetns.doctorName}
    descriponc {appointmetns.description}
    tratamiento {appointmetns.treatment}
    observacio {appointmetns.observation}




*/