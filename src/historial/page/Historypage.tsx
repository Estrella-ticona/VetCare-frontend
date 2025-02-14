import { HistoryTable } from "../components/HistoryTable";
import { HistoryContextProvider } from "../context/HistoryContextProvider";


export function Historypage() {
    return (
        <HistoryContextProvider >
            <HistoryTable />
        </HistoryContextProvider>

    )
}