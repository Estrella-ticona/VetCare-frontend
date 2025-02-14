import { ClientsContextProvider } from "../contexts/ClientsContextProvider";
import { ClientsTable } from "../components/ClientsTable";

export function ClientPage() {
    return (
        <ClientsContextProvider>
            <ClientsTable />
        </ClientsContextProvider>
    );
}