import { Box , useTheme , Typography} from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { tokens } from "../../theme";

import React from 'react'

const index = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title = "FAQ" subtitle="Frequently Asked Questions Page"/>

            <Accordion sx={{mt:"30px"}} defaultExpanded>
                <AccordionSummary expandIcon = {<ExpandMoreOutlinedIcon/>}>
                    <Typography color = {colors.greenAccent[500]} variant = "h5">
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem a, minima
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon = {<ExpandMoreOutlinedIcon/>}>
                    <Typography color = {colors.greenAccent[500]} variant = "h5">
                        Another Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod ratione eius saepe, soluta aspernatur expedita ex reprehenderit maiores, quibusdam voluptate mollitia porro minima dicta nulla laboriosam iusto consequatur, officia dolorum.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon = {<ExpandMoreOutlinedIcon/>}>
                    <Typography color = {colors.greenAccent[500]} variant = "h5">
                        Some Random Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem a, minima
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon = {<ExpandMoreOutlinedIcon/>}>
                    <Typography color = {colors.greenAccent[500]} variant = "h5">
                        Your Favorite Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem a, minima
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon = {<ExpandMoreOutlinedIcon/>}>
                    <Typography color = {colors.greenAccent[500]} variant = "h5">
                        Final Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem a, minima
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Box>
    )
}

export default index