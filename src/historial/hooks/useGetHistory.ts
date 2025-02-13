import { useEffect, useState } from "react";
import { History } from "../model/history";
import { historyApi } from "../services/history-api";
const api = new historyApi();

export function useGetHistory() {
    const [history, setHistory] = useState<History[]>([]);
    const [loadingHistory, setLoadingHistory] = useState(true);
    async function getallHistory() {
        const response = await api.getAllHistories();
        setHistory(response.data);
        setLoadingHistory(false);
    }
    const clearHistory = () => {
        setHistory([]);
    }

    const handleChangeHistory = (name: keyof History, value: string) => {
        setHistory((prevHistory) => ({
            ...prevHistory,
            [name]: value,
        }));
    };

    useEffect(() => {
        getallHistory().then();
    }
        , []);


    return { history, setHistory, getallHistory, loadingHistory, clearHistory, handleChangeHistory };
}