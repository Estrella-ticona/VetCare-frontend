import { AppointmentTable } from "../components/appointment";
import { AppointmentContextProvider } from "../contexts/appointmentContextProvider";

export function Pageappointment() {
    return (
        <AppointmentContextProvider>
            <AppointmentTable />
        </AppointmentContextProvider>
    );
}