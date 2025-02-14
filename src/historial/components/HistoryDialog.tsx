import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Button, Dialog } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useContext } from "react";
import { History } from "../model/history";
import { HistoryAccordions } from "./HistoryAccordions";

export function HistoryDialog({ open, handleClose, history }: { open: boolean, handleClose: () => void, history: History }) {



    return (
        <Dialog open={open} onClose={handleClose}>
            <h2>HISTORIAL</h2>
            <h3>Datos:</h3>
            <p>Dueño: {history.appointments?.at(0)?.clientName}</p>
            <p>Nombre de la Mascota: {history.appointments?.at(0)?.petName}</p>
            <p>Especie:{history.appointments?.at(0)?.petSpecie} </p>
            <p>Raza: {history.appointments?.at(0)?.petBreed}</p>
            <p>Genero:{history.appointments?.at(0)?.petGender} </p>
            <p>Fecha de Nacimiento:{history.appointments?.at(0)?.petBirthDate}</p>
            <p>Edad:{history.appointments?.at(0)?.petAge} </p>
            <p>Peso:{history.appointments?.at(0)?.petWeight} </p>

            <h2>Citas</h2>
            <HistoryAccordions history={history} />



            <Button onClick={() => { handleClose(); }}>
                <XMarkIcon className="h-5 w-5" />
            </Button>


        </Dialog>
    );
}