import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Button, Dialog } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useContext } from "react";
import { ClientsContext } from "../contexts/clients-context";

export function FormAddPet({ open, handleClose, }: { open: boolean, handleClose: () => void }) {

    /* TODO ESTO SE DEBE DE CAMBIAR A PET */
    const { clients, setClients, createClient, clearClient: clearPet, handleChange, client: pet } = useContext(ClientsContext);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        handleClose();
        clients.push(pet);
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
                                value={pet.name}
                                onChange={(e) => handleChange("name", e.target.value)}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="genero"
                                className="bg-celeste-100"
                                value={pet.gender}
                                onChange={(e) => handleChange("gender", e.target.value)}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label=" edad"
                                className="bg-celeste-100"
                                value={pet.age}
                                onChange={(e) => handleChange("age", e.target.value)}
                            />
                        </Box>
                    </div>
                    <div className="flex items-center justify-end">
                        <div className="flex items-center space-x-2 bg-white text-celeste-900 py-2 px-4 rounded-full">
                            <Button type="submit" >
                                <CheckIcon className="h-5 w-5" />    </Button>
                            <Button onClick={() => { handleClose(); clearPet(); }}>
                                <XMarkIcon className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </Dialog>
    );
}