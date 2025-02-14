import { AppointmentTable } from "../components/AppointmentTable";
import { AppointmentContextProvider } from "../contexts/appointmentContextProvider";

export function AppointmentPage() {
    return (
        <AppointmentContextProvider>
            <AppointmentTable />
        </AppointmentContextProvider>
    );
}