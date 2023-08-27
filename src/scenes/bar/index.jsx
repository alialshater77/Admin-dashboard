import BarCharts from "../../components/BarCharts";
import { Box } from "@mui/material";
import Header from "../../components/Header";

import React from 'react'

const index = () => {
    return (
        <Box width="95%" m = "20px" >
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
                <Header title="Bar Chart" subtitle="Simple Bar Chart"/>
            </Box>
            <Box height="75vh">
                <BarCharts/>
            </Box>
        </Box>
    )
}

export default index