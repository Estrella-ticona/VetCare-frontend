import { PlusIcon } from "@heroicons/react/24/solid";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useContext, useState } from "react";
import { ClientsContext } from "../contexts/clients-context";
import { Client } from "../model/client";
import { FormAddClient } from "./FormAddClient";
import { PetsTable } from "./PetsTable";

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

            {/* informacion de las mascota */}
            {
                client.pets &&
                <PetsTable open={open} pets={client.pets} />
            }


        </>
    );
}

export function ClientsTable() {
    //    const { clients } = useGetClients();
    const { clients } = useContext(ClientsContext);

    const [open, setOpen] = useState(false);
    return (
        <>
            <TableContainer component={Paper}>
                <Table
                    className="bg-celeste-100 block"
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
                            <TableCell><span className="font-semibold">Nombre Completo</span></TableCell>
                            <TableCell><span className="font-semibold">DNI</span></TableCell>
                            <TableCell><span className="font-semibold">Correo</span></TableCell>
                            <TableCell><span className="font-semibold">Celular</span></TableCell>
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

            <button className="ml-auto mt-10 hover:cursor-pointer flex items-center space-x-2 bg-celeste-900 text-celeste-100 py-2 px-4 rounded-full"
                onClick={() => setOpen(!open)}>
                <PlusIcon className="h-5 w-5" />
                <span>Agregar Cliente</span>
            </button>

            <FormAddClient open={open} handleClose={() => setOpen(false)} />


        </>
    );
}
