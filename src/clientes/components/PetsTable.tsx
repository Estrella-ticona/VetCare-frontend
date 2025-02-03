import { PlusIcon } from "@heroicons/react/24/solid"
import { TableRow, TableCell, Collapse, Box, Typography, Table, TableHead, TableBody } from "@mui/material"

function Row({ pet }: { pet: any }) {
    return (
        <TableRow>
            <TableCell component="th" scope="row">
                {pet.nombre}
            </TableCell>
            <TableCell>{pet.especie}</TableCell>
            <TableCell>{pet.edad}</TableCell>
            <TableCell>{pet.sexo}</TableCell>
            <TableCell>{pet.fechaderegistro}</TableCell>
            <TableCell>{pet.historial}</TableCell>
        </TableRow>
    )
}

export function PetsTable({ open, pets }: { open: boolean, pets: any[] }) {
    const historyRows = Array.from({ length: 5 }, (i) => (undefined));

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
                                    <TableCell>Especie</TableCell>
                                    <TableCell>Edad</TableCell>
                                    <TableCell>Sexo</TableCell>
                                    <TableCell>Fecha de Registro</TableCell>
                                    <TableCell>Historial</TableCell>
                                </TableRow>
                            </TableHead>

                            {/* contenido */}
                            <TableBody>
                                {/* {
                                    pets.map((pet, index) => (
                                        <Row key={index} pet={pet} />
                                    ))
                                } */}
                            </TableBody>
                        </Table>

                        <button className="ml-auto mt-10 hover:cursor-pointer flex items-center space-x-2 bg-celeste-900 text-celeste-100 py-2 px-4 rounded-full"
                            onClick={() => alert("Agregar nueva mascota")}>
                            <PlusIcon className="h-5 w-5" />
                            <span>Agregar Mascota</span>
                        </button>
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow >
    );
}