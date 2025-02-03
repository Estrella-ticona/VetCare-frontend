import { useCreateClient } from "../hooks/useCreateClient";

export function FormAddClient() {
    const { client, createClient } = useCreateClient();

    return (
        <div className="bg-celeste-500 text-white rounded-xl p-8 w-full max-w-4xl shadow-lg  " >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda delectus explicabo error, suscipit earum est magnam, voluptatibus porro, autem aspernatur labore. Earum possimus temporibus impedit! Vero doloribus explicabo quas excepturi!
            <button onClick={() => alert("GUARDADO")}>ENVIAR</button>
        </div>
    );
}