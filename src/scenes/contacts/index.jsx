import React from 'react';
import { Box , useMediaQuery, useTheme} from '@mui/material';
import {GridToolbar, DataGrid} from "@mui/x-data-grid";
import { mockDataContacts } from "../../data/mockData";
import { tokens } from '../../theme';
import Header from '../../components/Header';


const index = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const isMobile = useMediaQuery('(min-width: 767px)');
    const columns = [
        {field : "id" ,headerName: "ID",flex: 0.5},
        {field : "registrarId" ,headerName: "Registrar ID"},
        {field: "name" , headerName:"Name" ,flex:1 ,cellClassName: "name-column--cell"},
        {field: "age" , headerName:"Age" ,type: "number", headerAlign: "left", align:"left" },
        {field: "phone" , headerName:"Phone Number" ,flex : 1 },
        {field: "email" , headerName:"Email" ,flex : 1 },
        {field: "address" , headerName:"Address" , flex:1},
        {field: "city" , headerName:"City" , flex:1},
        {field: "zipCode" , headerName:"ZipCode" , flex:1},
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
            }
        }}>
            <Header title = "CONTACTS" subtitle="List of Cintacts for Future Reference"/>
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
                "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
                    color: `${colors.gray[100]} !important`
                }
            }}
                
            >
                <DataGrid
                    rows={mockDataContacts}
                    columns={!isMobile ? columns.slice(1,3) : columns}
                />
            </Box>
        </Box>
    )
}

export default index