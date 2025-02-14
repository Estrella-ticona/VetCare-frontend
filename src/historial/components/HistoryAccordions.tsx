import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Appointment } from '@/citas/model/appointment';
import { HistoryForm } from './HistoryForm';
import { History } from '../model/history';

function AppointmentAccordion({ appointment }: { appointment: Appointment }) {
    const [expanded, setExpanded] = React.useState<boolean>(false);

    return (
        <Accordion expanded={expanded} onChange={(e) => setExpanded(!expanded)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                    {appointment.reason}
                </Typography>
                <Typography component="span" sx={{ color: 'text.secondary' }}>
                    {appointment.date}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <HistoryForm appointment={appointment} />
            </AccordionDetails>
        </Accordion>
    );
}

export function HistoryAccordions({ history }: { history: History }) {
    return (
        <>
            {
                history.appointments?.map((appointment) =>
                    <AppointmentAccordion key={appointment.id} appointment={appointment} />
                )
            }
        </>
    );
}
