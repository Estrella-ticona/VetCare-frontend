import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button } from "@mui/material";
import { PlusIcon } from "@heroicons/react/24/solid";
interface Cliente {
    nombreCompleto: string;
    dni: string;
    correo: string;
    celular: string;
    Mascotas: {
        nombre: string;
        especie: string;
        edad: string; sexo: string; fechaderegistro: string; historial: string;

    }[];
}

function createData(
    nombreCompleto: string,
    dni: string,
    correo: string,
    celular: string,
    Mascotas: { nombre: string; especie: string; edad: string; sexo: string; fechaderegistro: string; historial: string; }[]
): Cliente {
    return { nombreCompleto, dni, correo, celular, Mascotas: Mascotas };
}

function Row(props: { row: Cliente }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (

        <React.Fragment>

            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.nombreCompleto}
                </TableCell>
                <TableCell>{row.dni}</TableCell>
                <TableCell>{row.correo}</TableCell>
                <TableCell>{row.celular}</TableCell>
            </TableRow>

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
                                <TableBody>
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

                                </TableBody>
                                <button className="hover:cursor-pointer flex items-center space-x-2 bg-celeste-900 text-celeste-100 py-2 px-4 rounded-full"
                                    onClick={() => alert("Agregar nueva mascota")}>
                                    <PlusIcon className="h-5 w-5" />
                                    <span>Agregar Mascota</span>
                                </button>
                            </Table>
                        </Box>
                    </Collapse>

                </TableCell>

            </TableRow>

        </React.Fragment>
    );
}

const rows = [
    createData("Fabricia Paty", "12345678", "fabricia@example.com", "95894262", [
        { nombre: "2023-01-01", especie: "Cita médica" },
        { nombre: "2023-02-15", especie: "Seguimiento" },
    ]),
    createData("Ana López", "87654321", "ana@example.com", "91234567", [
        { nombre: "2023-03-10", especie: "Primera consulta" },
        { nombre: "2023-04-20", especie: "Control anual" },
    ]),
];

export function CollapsibleTable() {
    return (
        <TableContainer component={Paper}>
            <Table
                className="bg-celeste-100"
                sx={{
                    minWidth: 650,

                    " & .MuiTableCell-root": { borderBottom: "1px solid #a8d8ff" },
                }}
                aria-label="collapsible table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Nombre Completo</TableCell>
                        <TableCell>DNI</TableCell>
                        <TableCell>Correo</TableCell>
                        <TableCell>Celular</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <Row key={index} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
