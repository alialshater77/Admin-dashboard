import Geography from "../../components/Geography";
import { Box , useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

import React from 'react'

const index = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box width="95%" m = "20px">
            <Header title="Pie Chart" subtitle="Simple Pie Chart"/>
            <Box mt="40px" height="70vh" border = {` 1px solid ${colors.gray[100]}`} borderRadius="4px">
                <Geography/>
            </Box>
        </Box>
    )
}

export default index;