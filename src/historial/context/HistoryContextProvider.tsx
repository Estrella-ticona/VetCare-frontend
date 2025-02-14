import { ReactNode } from "react";
import { useGetHistory } from "../hooks/useGetHistory";
import { HistoryContext, HistoryContextType } from "./historyContex";

export function HistoryContextProvider({ children }: { children: ReactNode }) {
    const { history, setHistory, getallHistory, clearHistory, loadingHistory, handleChangeHistory } = useGetHistory();


    const HistoryContextValue: HistoryContextType = {
        history,
        setHistory,
        getallHistory,
        clearHistory,
        loadingHistory,
        handleChangeHistory

    }
    return (
        <HistoryContext.Provider value={HistoryContextValue}>
            {children}
        </HistoryContext.Provider>)


}