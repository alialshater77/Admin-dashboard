import React from 'react';
import { Box , Typography, useMediaQuery, useTheme} from '@mui/material';
import { DataGrid} from "@mui/x-data-grid";
import { mockDataInvoices} from "../../data/mockData";
import { tokens } from '../../theme';
import Header from '../../components/Header';


const index = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const isMobile = useMediaQuery('(min-width: 767px)');
    const columns = [
        {field : "id" ,headerName: "ID"},
        {field: "name" , headerName:"Name" ,flex:1 ,cellClassName: "name-column--cell"},
        {field: "phone" , headerName:"Phone Number" ,flex : 1 },
        {field: "email" , headerName:"Email" ,flex : 1 },
        {field: "cost" , headerName:"Cost" , flex:1 , renderCell:(params) =>(
            <Typography color = {colors.greenAccent[500]}>
                ${params.row.cost}
            </Typography>
        )},
        {field: "date" , headerName:"Date" , flex:1},
    ]

    return (
        <Box width="95%" ml="1.8%" sx={{
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
            <Header title = "INVOICES" subtitle="List of Invoice Balances"/>
            <Box  
                m="40px 0 0 0"
                height="75vh"
                sx ={{"& .MuiDataGrid-root" : {
                    border: "none"
                },
                "& .MuiDataGrid-cell" :{
                    borderBottom:"none"
                },
                "& .name-column--cell" :{
                    color: colors.greenAccent[300]
                },
                "& .MuiDataGrid-columnHeaders" :{
                    backgroundColor : colors.blueAccent[700],
                    borderBottom: "none"
                },
                "& .MuiDataGrid-virtualScroller":{
                    backgroundColor: colors.primary[400]
                },
                "& .MuiDataGrid-footerContainer" :{
                    borderTop:"none",
                    backgroundColor: colors.blueAccent[700]
                },
                "& .MuiCheckbox-root": {
                    color: `${colors.greenAccent[700]} !important`
                }
            }}
                
            >
                <DataGrid
                    rows={mockDataInvoices}
                    columns={!isMobile ? columns.slice(1,3) : columns}
                    checkboxSelection
                />
            </Box>
        </Box>
    )
}

export default index