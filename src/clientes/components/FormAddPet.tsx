import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Button, Dialog } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useContext } from "react";
import { ClientsContext } from "../contexts/clients-context";
import { Client } from "../model/client";


export function FormAddPet({ open, handleClose, clientId }: { open: boolean, clientId: number, handleClose: () => void }) {

    /* TODO ESTO SE DEBE DE CAMBIAR A PET */
    const { clearPet, handleChangePet, pet, createPet, clients } = useContext(ClientsContext);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        handleClose();
        clients.forEach((client: Client) => {
            if (client.id === clientId && client.pets) {
                client.pets.push(pet);
            }
        });
        /* pet.push(pet); */

        await createPet(clientId);
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
                                onChange={(e) => handleChangePet("name", e.target.value)}
                            />

                            <TextField
                                required
                                id="outlined-required"
                                label=" edad"
                                className="bg-celeste-100"
                                value={pet.age}
                                onChange={(e) => handleChangePet("age", e.target.value)}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="especie"
                                className="bg-celeste-100"
                                value={pet.specie}
                                onChange={(e) => handleChangePet("specie", e.target.value)}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="genero"
                                className="bg-celeste-100"
                                value={pet.gender}
                                onChange={(e) => handleChangePet("gender", e.target.value.toUpperCase())}
                            />

                        </Box>

                    </div>
                    <div className="flex items-center justify-end">
                        <div className="flex items-center space-x-2 bg-white text-celeste-900 py-2 px-4 rounded-full">
                            <Button type="submit" >
                                <CheckIcon className="h-5 w-5" />    </Button>
                            <Button onClick={() => { clearPet(); handleClose(); }}>
                                <XMarkIcon className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </Dialog>
    );
}