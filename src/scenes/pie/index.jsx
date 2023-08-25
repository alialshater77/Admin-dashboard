import PieChart from "../../components/PieChart";
import { Box } from "@mui/material";
import Header from "../../components/Header";

import React from 'react'

const index = () => {
    return (
        <Box width="95%" m = "20px">
            <Header title="Pie Chart" subtitle="Simple Pie Chart"/>
            <Box height="75vh">
                <PieChart/>
            </Box>
        </Box>
    )
}

export default index;