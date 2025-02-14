import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export function HistoryAccordions() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                        caso
                    </Typography>
                    <Typography component="span" sx={{ color: 'text.secondary' }}>
                        fecha
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        contexto
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}
