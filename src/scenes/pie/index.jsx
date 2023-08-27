import PieChart from "../../components/PieChart";
import { Box } from "@mui/material";
import Header from "../../components/Header";

import React from 'react'

const index = () => {
    return (
        <Box width="95%" m = "20px">
            <Box sx={{
                width:{
                    xs:"100%"
                },
                display:{
                    xs:"flex",
                    md:"block"
                },
                justifyContent:{
                    xs: "center",
                    md: 'none'
                },
                alignItems:{
                xs: "center",
                md: 'none'
                },
                flexDirection:{
                xs: "column",
                md: 'none'
                },
            }}>
            <Header title="Pie Chart" subtitle="Simple Pie Chart"/>
            </Box>
            <Box height="75vh">
                <PieChart/>
            </Box>
        </Box>
    )
}

export default index;