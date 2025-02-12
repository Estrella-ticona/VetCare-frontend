import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Button, Dialog } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useContext } from "react";
import { AppointmentContext } from "../contexts/appointment-context";
import 'dayjs/locale/es-pr';
import { Appointment } from "../model/appointment";
export function FormAddAppointment({ open, handleClose, }: { open: boolean, handleClose: () => void }) {

    /* TODO ESTO SE DEBE DE CAMBIAR A PET */

    const { appointment, clearAppointment, createAppointment, handleChangeAppointment, clients, pets, setClientselected, getPets, setPetsselected, date, setDate, appointments, petName, petSpecie, petGender, setPetName, setPetSpecie, setPetGender } = useContext(AppointmentContext);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        appointment.petName = petName;
        appointment.petSpecie = petSpecie;
        appointment.petGender = petGender;

        appointments.push(appointment);

        handleClose();
        await createAppointment();
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
                            <Autocomplete
                                disablePortal
                                options={clients}
                                getOptionLabel={(option) => option.name || ""}
                                onChange={(e, value) => { setClientselected(value!!.id!!); getPets(value!!.id!!).then() }}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Dueño" />}
                            />
                            <Autocomplete
                                disablePortal

                                options={pets}
                                getOptionLabel={(option) => option.name || ""}
                                //ACAAAAAAAAAAAA SETEAR LOS DATOS DE LA MASCOTA
                                onChange={(e, value) => { setPetsselected(value!!.id!!); setPetName(value?.name!!); setPetSpecie(value?.specie!!); setPetGender(value?.gender!!) }}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Mascotas" />}
                            />
                            {/*  <TextField
                                required
                                id="outlined-required"
                                label="fecha"
                                className="bg-celeste-100"
                                value={appointment.date}
                                onChange={(e) => handleChangeAppointment("date", e.target.value)}
                            /> */}
                            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es-pr">
                                <DemoContainer components={['DateTimePicker']}>
                                    <DateTimePicker label="Basic date time picker"
                                        value={date}
                                        onChange={(newDate) => setDate(newDate)} />

                                </DemoContainer>
                            </LocalizationProvider>

                            <TextField
                                required
                                id="outlined-required"
                                label=" Motivo"
                                /*  className="bg-celeste-100" */
                                value={appointment.reason}
                                onChange={(e) => handleChangeAppointment("reason", e.target.value)}
                            />


                        </Box>

                    </div>
                    <div className="flex items-center justify-end">
                        <div className="flex items-center space-x-2 bg-white text-celeste-900 py-2 px-4 rounded-full">
                            <Button type="submit" >
                                <CheckIcon className="h-5 w-5" />    </Button>
                            <Button onClick={() => { clearAppointment(); handleClose(); }}>
                                <XMarkIcon className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </Dialog>
    );
}