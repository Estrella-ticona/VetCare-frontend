import { PlusIcon } from "@heroicons/react/24/solid";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { useGetClients } from "../hooks/useGetClients";
import { useState } from "react";
import { Client } from "../model/client";
import { FormAddClient } from "./FormAddClient";

function Row({ client }: { client: Client }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* informacion del cliente */}
            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                {/* boton expandir */}
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>

                {/* datos del cliente */}
                <TableCell component="th" scope="row">{client.name}</TableCell>
                <TableCell>{client.dni}</TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell>{client.phone}</TableCell>
            </TableRow>

            {/* mascotas */}
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Mascota
                            </Typography>
                            <Table size="small" aria-label="Mascota">
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
                                {/* <TableBody>
                                    {row.Mascotas.map((historyRow, index) => (
                                        <TableRow key={index}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.nombre}
                                            </TableCell>
                                            <TableCell>{historyRow.especie}</TableCell>
                                            <TableCell>{historyRow.edad}</TableCell>
                                            <TableCell>{historyRow.sexo}</TableCell>
                                            <TableCell>{historyRow.fechaderegistro}</TableCell>
                                            <TableCell>{historyRow.historial}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody> */}

                            </Table>

                            <button className="ml-auto hover:cursor-pointer flex items-center space-x-2 bg-celeste-900 text-celeste-100 py-2 px-4 rounded-full"
                                onClick={() => alert("Agregar nueva mascota")}>
                                <PlusIcon className="h-5 w-5" />
                                <span>Agregar Mascota</span>
                            </button>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

export function ClientsTable() {
    const { clients } = useGetClients();
    const [open, setOpen] = useState(false);
    return (
        <>
            <TableContainer component={Paper}>
                <Table
                    className="bg-celeste-100"
                    sx={{
                        minWidth: 650,

                        " & .MuiTableCell-root": { borderBottom: "1px solid #c4d2e7" },
                    }}
                    aria-label="collapsible table"
                >
                    {/* titulos */}
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Nombre Completo</TableCell>
                            <TableCell>DNI</TableCell>
                            <TableCell>Correo</TableCell>
                            <TableCell>Celular</TableCell>
                        </TableRow>
                    </TableHead>

                    {/* contenido */}
                    <TableBody>
                        {clients.map((client, index) => (
                            <Row key={index} client={client} />
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>

            <button className="ml-auto hover:cursor-pointer flex items-center space-x-2 bg-celeste-900 text-celeste-100 py-2 px-4 rounded-full"
                /* onClick={() => alert("Agregar nueva cliente")} */
                onClick={() => setOpen(!open)}>
                <PlusIcon className="h-5 w-5" />
                <span>Agregar Cliente</span>
            </button>

            {open && <FormAddClient />}
        </>
    );
}
