import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { List, ListItem } from '@mui/material';

export default function ProductTags() {
    return (
        <>
            <Accordion sx={{ marginLeft: 4, marginRight: 4, marginTop:2 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>FIT & SIZING</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <List sx={{ listStyleType: 'disc' }}>
                            <ListItem sx={{ display: 'list-item' }}>
                                Classic fit.
                            </ListItem>
                            <ListItem sx={{ display: 'list-item' }}>
                                Easy through the chest, shoulders, and waist.
                            </ListItem>
                            <ListItem sx={{ display: 'list-item' }}>
                                Hits at the hip.
                            </ListItem>
                        </List>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ marginLeft: 4, marginRight: 4, marginTop: 2, marginBottom:2 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>PRODUCT DETAILS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <List sx={{ listStyleType: 'disc' }}>
                            <ListItem sx={{ display: 'list-item' }}>
                                Soft cotton T-shirt.
                            </ListItem>
                            <ListItem sx={{ display: 'list-item' }}>
                                Crewneck.
                            </ListItem>
                            <ListItem sx={{ display: 'list-item' }}>
                                Short sleeves.
                            </ListItem>
                        </List>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ marginLeft: 4, marginRight: 4}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>FABRIC & CARE</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <List sx={{ listStyleType: 'disc' }}>
                            <ListItem sx={{ display: 'list-item' }}>
                                Cotton 100%
                            </ListItem>
                            <ListItem sx={{ display: 'list-item' }}>
                                Machine wash.
                            </ListItem>
                            <ListItem sx={{ display: 'list-item' }}>
                                Imported.
                            </ListItem>
                        </List>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    );
}