import { History } from "../model/history";
import { createContext } from "react";
export type HistoryContextType = {
    history: History[];
    setHistory: (history: History[]) => void;
    getallHistory: () => Promise<void>;
    clearHistory: () => void;
    loadingHistory: boolean;
    handleChangeHistory: (name: keyof History, value: string) => void;
}
export const HistoryContext = createContext<HistoryContextType>({
    history: [],
    setHistory: () => { },
    getallHistory: async () => { },
    clearHistory: () => { },
    loadingHistory: true,
    handleChangeHistory: () => { },
});