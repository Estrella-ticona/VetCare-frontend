import { useState } from "react";
import { cliente } from "@/clientes/model/cliente";
import { ClienteApi } from "../services/cliente-api";
const api = new ClienteApi();
export function useUpdateClient() {
    const [client, setClient] = useState<cliente>(new cliente());

}
