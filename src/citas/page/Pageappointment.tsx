import { AppointmentTable } from "../components/AppointmentTable";
import { AppointmentContextProvider } from "../contexts/appointmentContextProvider";

export function Pageappointment() {
    return (
        <AppointmentContextProvider>
            <AppointmentTable />
        </AppointmentContextProvider>
    );
}