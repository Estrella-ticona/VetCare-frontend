import { ReactNode } from "react";
import { useGetHistory } from "../hooks/useGetHistory";
import { HistoryContext, HistoryContextType } from "./historyContex";

export function HistoryContextProvider({ children }: { children: ReactNode }) {
    const { history, setHistory, getallHistory, loadingHistory } = useGetHistory();


    const HistoryContextValue: HistoryContextType = {
        history,
        setHistory,
        getallHistory,
        loadingHistory
    }
    return (
        <HistoryContext.Provider value={HistoryContextValue}>
            {children}
        </HistoryContext.Provider>)


}