
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { PlusIcon } from '@heroicons/react/24/solid';
import { Appointment } from '../model/appointment';
import { useContext, useState } from 'react';
import { AppointmentContext } from '../contexts/appointment-context';
import { FormAddAppointment } from './FormAddAppointment';
import dayjs from 'dayjs';

function Row({ appointment }: { appointment: Appointment }) {
    return (
        <TableRow>

            <TableCell component="th" scope="row">{appointment.petName}</TableCell>
            <TableCell>{appointment.petSpecie}</TableCell>
            <TableCell>{appointment.petGender}</TableCell>
            <TableCell>{dayjs(appointment.date).format('DD/MM/YYYY hh:mm a')}</TableCell>
            <TableCell>{appointment.reason}</TableCell>

        </TableRow>
    );
}



export function AppointmentTable() {
    const { appointments } = useContext(AppointmentContext);
    const [open, setOpen] = useState(false);


    const [page, setPage] = useState(0);



    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [search, setSearch] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    // 🔹 Filtrar por nombre y fecha
    /*   const [appointments, setAppointments] = React.useState<Appointment[]>([]); */

    /*  const filteredRows = appointments.filter((appointment) => {
         const rowDate = appointment.date!!.toString().split("T")[0]; // Convertir a formato YYYY-MM-DD
         return (
             appointment.pet!!.name!!.toLowerCase().includes(search.toLowerCase()) &&
             (!selectedDate || rowDate === selectedDate)
         );
     }); */

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };



    return (
        <>
            {/*  */}
            {/* Desde aqui comienza la tabla */}
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                {/* tabla de datos */}
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
                            {appointments.map((appointment) => <Row key={appointment.id} appointment={appointment} />)}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 15, 100]}
                    component="div"
                    count={Row.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage} />
            </Paper>
            <button className="ml-auto mt-10 hover:cursor-pointer flex items-center space-x-2 bg-celeste-900 text-celeste-100 py-2 px-4 rounded-full"
                onClick={() => setOpen(true)}>
                <PlusIcon className="h-5 w-5" />
                <span>Agregar Cita</span>
            </button >
            <FormAddAppointment open={open} handleClose={() => setOpen(false)} />

        </>
    );
}
{/* barra de busqueda y filtro */ }
{/* <div className="flex gap-4 mb-4">
<input
    type="text"
    placeholder="Buscar por nombre..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className=" w-6xl bg-celeste-300  px-4 py-2 shadow-md rounded-lg hover:bg-celeste-400 "
/>

<input
    type="date"
    value={selectedDate}
    onChange={(e) => setSelectedDate(e.target.value)}
    className="p-3 border rounded-lg shadow-md  bg-celeste-300"
/>
<button
    onClick={() => { setSearch(""); setSelectedDate(""); }}
    /* rounded-lg  por si quiero que sea redondo*/
/*     className="bg-celeste-900 text-white px-4 py-2 shadow-md rounded-lg hover:bg-celeste-600  "
>
    Quitar filtros
</button>
</div> */} 