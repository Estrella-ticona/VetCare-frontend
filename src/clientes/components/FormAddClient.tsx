import { useCreateClient } from "../hooks/useCreateClient";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { CheckIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
export function FormAddClient() {
    const { client, createClient } = useCreateClient();
    const formaddclient = async (e: any) => {
        e.preventDefault();
        await createClient();
    }
    return (
        <div className="bg-celeste-300 text-white rounded-xl p-8 w-full max-w-4xl shadow-lg  " >
            <form onSubmit={formaddclient}>
                <div className="mb-4">


                    <Box className='grid grid-cols-2 gap-4'
                        component="form"
                        sx={{ '& .MuiTextField-root': { m: 1, width: '35ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            required
                            id="outlined-required"
                            label="Nombres completos"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="DNI"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="correo electronico"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label=" telefono"
                        />

                    </Box>

                </div>
                <div className="flex items-center justify-end">
                    {
                        <div className="flex items-center space-x-2 bg-white text-celeste-900 py-2 px-4 rounded-full"
                        >

                            <button onClick={() => alert("guardar")}>
                                <CheckIcon className="h-5 w-5" /> </button>

                            <button onClick={() => alert("cancelar")}>  <XMarkIcon className="h-5 w-5" /></button>





                        </div>
                    }
                </div>
            </form>
        </div>
    );
}