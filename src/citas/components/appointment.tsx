import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

interface cita {
    nombre: string;
    especie: string;
    genero: string;
    fechahora: Date;
    motivo: string;
}

function createData(
    nombre: string,
    especie: string,
    genero: string,
    fechahora: Date,
    motivo: string
): cita {
    return { nombre, especie, genero, fechahora, motivo };
}

const rows = [
    createData('Firulais', 'Perro', 'Macho', new Date('2024-10-05T10:00:00'), 'Vacunación anual'),
    createData('Michi', 'Gato', 'Hembra', new Date('2024-10-06T15:30:00'), 'Chequeo general'),
    createData('Toby', 'Perro', 'Macho', new Date('2024-10-07T09:00:00'), 'Dolor en la pata trasera'),
    createData('Luna', 'Gato', 'Hembra', new Date('2024-10-08T11:45:00'), 'Esterilización'),
    createData('Nemo', 'Pez', 'Desconocido', new Date('2024-10-09T14:00:00'), 'Cambio de pecera'),
    createData('Rocky', 'Perro', 'Macho', new Date('2024-10-10T16:00:00'), 'Desparasitación'),
    createData('Pelusa', 'Conejo', 'Hembra', new Date('2024-10-11T12:30:00'), 'Revisión de dientes'),
    createData('Kira', 'Gato', 'Hembra', new Date('2024-10-12T10:15:00'), 'Vacunación contra rabia'),
    createData('Max', 'Perro', 'Macho', new Date('2024-10-13T13:00:00'), 'Chequeo preoperatorio'),
    createData('Coco', 'Ave', 'Macho', new Date('2024-10-14T09:30:00'), 'Problemas en el ala')
];


export function AppointmentTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Especie</TableCell>
                            <TableCell>Genero</TableCell>
                            <TableCell>Fecha y Hora</TableCell>
                            <TableCell>Motivo</TableCell>
                        </TableRow>
                    </TableHead>


                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row: cita) => {
                                return (
                                    <TableRow>
                                        <TableCell>{row.nombre}</TableCell>
                                        <TableCell>{row.especie}</TableCell>
                                        <TableCell>{row.genero}</TableCell>
                                        <TableCell>{row.fechahora.toISOString()}</TableCell>
                                        <TableCell>{row.motivo}</TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 15, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
