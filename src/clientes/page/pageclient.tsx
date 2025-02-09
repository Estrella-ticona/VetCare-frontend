import { Route } from "react-router";
import { ClientsContextProvider } from "../contexts/ClientsContextProvider";
import { ClientsTable } from "../components/ClientsTable";

export function Pageclient() {

    return (
        <ClientsContextProvider>
            <ClientsTable />
        </ClientsContextProvider>



    );
}