import { useContext } from "react";
import { HistoryContext } from "../context/historyContex";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Appointment } from "@/citas/model/appointment";


export function HistoryForm({ appointment }: { appointment: Appointment }) {
    /* const { history, setHistory, getallHistory, handleChangeHistory } = useContext(HistoryContext); */

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        /*     history.push(history); */
        /*  setHistory(history);
         await getallHistory(); */
    }
    return (

        <div className="bg-celeste-200 text-white  p-8 w-full max-w-4xl shadow-lg" >
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    {/* grid grid-cols-2 gap-4 */}
                    <Box className='flex flex-col'
                        component="form"
                        sx={{ '& .MuiTextField-root': { m: 1, width: '35ch' } }}
                        noValidate
                        autoComplete="off">
                        <TextField
                            required
                            id="outlined-required"
                            label="Descripción"
                            className="bg-celeste-100"
                            value={appointment.description}

                        /* onChange={(e) => handleChangeHistory("appointments", e.target.value)} */
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Tratamiento"
                            className="bg-celeste-100"
                            value={appointment.treatment}
                        /* onChange={(e) => handleChangeHistory("appointments", e.target.value)} */
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Diagnóstico"
                            className="bg-celeste-100"
                            value={appointment.diagnosis}
                        /* onChange={(e) => handleChangeHistory("appointments", e.target.value)} */
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Observaciones"
                            className="bg-celeste-100"
                            value={appointment.observations}
                        /* onChange={(e) => handleChangeHistory("appointments", e.target.value)} */
                        />

                    </Box>
                </div>
                {/* <div className="flex items-center justify-end">
                           <div className="flex items-center space-x-2 bg-white text-celeste-900 py-2 px-4 rounded-full">
                            <Button type="submit" >
                            <CheckIcon className="h-5 w-5" />    </Button>
                           <Button >
                            <XMarkIcon className="h-5 w-5" />
                           </Button>
                           </div>
                      </div> */}
            </form>
        </div>

    );
}