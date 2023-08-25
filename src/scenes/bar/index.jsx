import BarCharts from "../../components/BarCharts";
import { Box } from "@mui/material";
import Header from "../../components/Header";

import React from 'react'

const index = () => {
    return (
        <Box width="95%" m = "20px">
            <Header title="Bar Chart" subtitle="Simple Bar Chart"/>
            <Box height="75vh">
                <BarCharts/>
            </Box>
        </Box>
    )
}

export default index