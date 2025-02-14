import { PlusIcon } from "@heroicons/react/24/solid"
import { TableRow, TableCell, Collapse, Box, Typography, Table, TableHead, TableBody } from "@mui/material"
import { Pet } from "../model/pet";
import { FormAddPet } from "./FormAddPet";
import { useContext, useState } from "react";
import { ClientsContext } from "../contexts/clients-context";
import { Client } from "../model/client";
import { TrashIcon } from "@heroicons/react/24/solid";

function Row({ pet }: { pet: Pet }) {
    const { deletePet, clients, setClients } = useContext(ClientsContext);

    const handleDelete = async () => {
        // Crear una nueva copia del array de clientes
        const updatedClients = clients.map((client: Client) => {
            if (client.id === pet.clientId && client.pets) {
                return {
                    ...client,
                    pets: client.pets.filter((p: Pet) => p.id !== pet.id), // Eliminar la mascota
                };
            }
            return client;
        });

        // Actualizar el estado global de clients
        setClients(updatedClients);

        // Eliminar la mascota del backend (si aplica)
        await deletePet(pet);
    };

    return (
        <TableRow>
            <TableCell component="th" scope="row">
                {pet.name}
            </TableCell>
            <TableCell>{pet.age}</TableCell>
            <TableCell>{pet.specie}</TableCell>
            <TableCell>{pet.gender} </TableCell>
            <TableCell>{pet.register}</TableCell>
            <TableCell> <button className="  hover:cursor-pointer  bg-red-500 text-celeste-100 py-2 px-4 rounded-full" onClick={handleDelete}> <TrashIcon className="h-5 w-5" /></button></TableCell>
        </TableRow>
    )
}

export function PetsTable({ open, pets, clientId }: { open: boolean, pets: Pet[], clientId: number }) {
    const [openform, setOpenform] = useState(false);

    return (
        <TableRow >
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>
                        <Typography variant="h6" gutterBottom component="div">
                            Mascota
                        </Typography>
                        {/* tabla de mascotas */}
                        <Table size="small" aria-label="Mascota">
                            {/* titulos */}
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Edad</TableCell>
                                    <TableCell>Especie</TableCell>
                                    <TableCell>Sexo</TableCell>
                                    <TableCell>Fecha de Registro</TableCell>
                                </TableRow>
                            </TableHead>
                            {/* contenido */}
                            <TableBody>
                                {
                                    pets.map((pet, index) => <Row key={index} pet={pet} />)
                                }
                            </TableBody>
                        </Table>
                        <button className="ml-auto mt-10 hover:cursor-pointer flex items-center space-x-2 bg-celeste-900 text-celeste-100 py-2 px-4 rounded-full"
                            onClick={() => setOpenform(!openform)}>
                            <PlusIcon className="h-5 w-5" />
                            <span>Agregar Mascota</span>
                        </button>
                        <FormAddPet open={openform} clientId={clientId} handleClose={() => setOpenform(false)} />
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow >
    );
}