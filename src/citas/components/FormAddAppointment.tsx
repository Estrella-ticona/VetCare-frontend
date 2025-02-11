import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Button, Dialog } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useContext } from "react";
import { AppointmentContext } from "../contexts/appointment-context";
export function FormAddAppointment({ open, handleClose, }: { open: boolean, handleClose: () => void }) {

    /* TODO ESTO SE DEBE DE CAMBIAR A PET */

    const { appointment, clearAppointment, createAppointment, handleChangeAppointment, clients, pets } = useContext(AppointmentContext);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        handleClose();
        /*   clients.forEach((client: Client) => {
              if (client.id === clientId && client.pets) {
                  client.pets.push(pet);
              }
          }); */
        /* pet.push(pet); */

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
                                options={clients.map((option) => option.name)}
                                onChange={(e, value) => alert(value)}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Dueño" />}
                            />
                            <Autocomplete
                                disablePortal
                                options={pets.map((option) => option.name)}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Mascotas" />}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="fecha"
                                className="bg-celeste-100"
                                value={appointment.date}
                                onChange={(e) => handleChangeAppointment("date", e.target.value)}
                            />

                            <TextField
                                required
                                id="outlined-required"
                                label=" Motivo"
                                className="bg-celeste-100"
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