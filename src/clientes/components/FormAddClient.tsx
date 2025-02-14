import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Button, Dialog } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useContext } from "react";
import { ClientsContext } from "../contexts/clients-context";

export function FormAddClient({ open, handleClose, }: { open: boolean, handleClose: () => void }) {
    const { clients, setClients, createClient, clearClient, handleChangeClient, client } = useContext(ClientsContext);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        handleClose();
        clients.push(client);
        setClients(clients);
        await createClient();
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <div className="bg-celeste-200 text-white  p-8 w-full max-w-4xl shadow-lg" >
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        {/* grid grid-cols-2 gap-4 */}
                        <Box className='flex flex-col'
                            component="form"
                            sx={{ '& .MuiTextField-root': { m: 1, width: '35ch' } }}
                            noValidate
                            autoComplete="off">
                            <TextField
                                required
                                id="outlined-required"
                                label="Nombres completos"
                                className="bg-celeste-100"
                                value={client.name}
                                onChange={(e) => handleChangeClient("name", e.target.value)}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="DNI"
                                className="bg-celeste-100"
                                value={client.dni}
                                onChange={(e) => handleChangeClient("dni", e.target.value)}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="correo electronico"
                                className="bg-celeste-100"
                                value={client.email}
                                onChange={(e) => handleChangeClient("email", e.target.value)}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label=" telefono"
                                className="bg-celeste-100"
                                value={client.phone}
                                onChange={(e) => handleChangeClient("phone", e.target.value)}
                            />
                        </Box>
                    </div>
                    <div className="flex items-center justify-end">
                        <div className="flex items-center space-x-2 bg-white text-celeste-900 py-2 px-4 rounded-full">
                            <Button type="submit" >
                                <CheckIcon className="h-5 w-5" />    </Button>
                            <Button onClick={() => { handleClose(); clearClient(); }}>
                                <XMarkIcon className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </Dialog>
    );
}