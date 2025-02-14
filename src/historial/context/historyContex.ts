import { History } from "../model/history";
import { createContext } from "react";
export type HistoryContextType = {
    history: History[];
    setHistory: (history: History[]) => void;
    getallHistory: () => Promise<void>;
    loadingHistory: boolean;
}
export const HistoryContext = createContext<HistoryContextType>({
    history: [],
    setHistory: () => { },
    getallHistory: async () => { },
    loadingHistory: true,
});