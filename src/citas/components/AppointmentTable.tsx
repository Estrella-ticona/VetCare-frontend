import { useState, useContext } from 'react';
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
import { AppointmentContext } from '../contexts/appointment-context';
import { FormAddAppointment } from './FormAddAppointment';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/es-pr';
import { Skeleton } from "@mui/material";

function Row({ appointment }: { appointment: Appointment }) {
    return (
        <TableRow>
            <TableCell>{appointment.petName}</TableCell>
            <TableCell>{appointment.petSpecie}</TableCell>
            <TableCell>{appointment.petGender}</TableCell>
            <TableCell>{dayjs(appointment.date).format('DD/MM/YYYY hh:mm a')}</TableCell>
            <TableCell>{appointment.reason}</TableCell>
        </TableRow>
    );
}

export function AppointmentTable() {
    const { appointments, loadingAppointment } = useContext(AppointmentContext);
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);


    // Estados para la búsqueda y el filtro por fecha
    const [search, setSearch] = useState("");
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

    // Manejadores de paginación
    const handleChangePage = (event: unknown, newPage: number) => setPage(newPage);
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    // 🔎 **Filtrado de datos**
    const filteredAppointments = appointments.filter((appointment) => {
        const matchesSearch =
            search === "" ||
            appointment.petName!!.toLowerCase().includes(search.toLowerCase()) ||
            appointment.reason!!.toLowerCase().includes(search.toLowerCase());

        const matchesDate =
            !selectedDate ||
            dayjs(appointment.date).format('YYYY-MM-DD') === selectedDate.format('YYYY-MM-DD');

        return matchesSearch && matchesDate;
    });

    return (
        <>
            {/* Barra de búsqueda y filtro */}
            <div className="flex gap-8 mb-4 justify-center">
                <input
                    type="text"
                    placeholder="Buscar por nombre o razón..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-3xl bg-celeste-300 px-4 py-2 shadow-md rounded-lg hover:bg-celeste-400"
                />

                {/* Selector de fecha corregido */}
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es-pr">
                    <DatePicker
                        label="Seleccionar fecha"
                        value={selectedDate}
                        onChange={(newDate) => setSelectedDate(newDate)}
                        views={['year', 'month', 'day']}  // Permite seleccionar Año → Mes → Día
                        format="DD/MM/YYYY"
                    />
                </LocalizationProvider>

                <button
                    onClick={() => {
                        setSearch("");
                        setSelectedDate(null);
                    }}
                    className="bg-celeste-900 text-white px-4 py-2 shadow-md rounded-lg hover:bg-celeste-600"
                >
                    Quitar filtros
                </button>
            </div>

            {/* Tabla */}
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Especie</TableCell>
                                <TableCell>Género</TableCell>
                                <TableCell>Fecha y Hora</TableCell>
                                <TableCell>Motivo</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {loadingAppointment ? (
                                Array.from(new Array(5)).map((_) => (
                                    <TableRow>
                                        <TableCell colSpan={5} style={{ padding: "4px 0" }}>
                                            <Skeleton variant="rectangular" height={50} width="100%" />
                                        </TableCell>
                                    </TableRow>)
                                )) : filteredAppointments
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((appointment) => <Row key={appointment.id} appointment={appointment} />)
                            }
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[5, 15, 100]}
                    component="div"
                    count={filteredAppointments.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>

            {/* Botón para agregar nueva cita */}
            <button
                className="ml-auto mt-10 hover:cursor-pointer flex items-center space-x-2 bg-celeste-900 text-celeste-100 py-2 px-4 rounded-full"
                onClick={() => setOpen(true)}
            >
                <PlusIcon className="h-5 w-5" />
                <span>Agregar Cita</span>
            </button>

            <FormAddAppointment open={open} handleClose={() => setOpen(false)} />
        </>
    );
}
