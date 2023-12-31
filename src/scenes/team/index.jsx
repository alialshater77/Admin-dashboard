import React from 'react';
import { Box , Typography , useMediaQuery, useTheme } from '@mui/material';
import { DataGrid} from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import { tokens } from '../../theme';
import AdminPanelSettingsOutlined from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlined from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlined from "@mui/icons-material/SecurityOutlined";
import Header from '../../components/Header';

const index = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const isMobile = useMediaQuery('(min-width: 767px)');
    const columns = [
        {field : "id" ,headerName: "ID"},
        {field: "name" , headerName:"Name" ,flex:1 ,cellClassName: "name-column--cell"},
        {field: "age" , headerName:"Age" ,type: "number", headerAlign: "left", align:"left" },
        {field: "phone" , headerName:"Phone Number" ,flex : 1 },
        {field: "email" , headerName:"Email" ,flex : 1 },
        {field: "access" , headerName:"Access Level" ,flex : 1  , renderCell: ({ row: {access}}) =>{
            return (
                <Box width ="60%"
                    m ="0 auto"
                    p = "5px"
                    display="flex"
                    justifyContent="center"
                    backgroundColor ={
                        access === "admin" ? 
                        colors.greenAccent[600]
                        : colors.greenAccent[700]
                    }
                    borderRadius="4px"
                >
                    {access === "admin" && <AdminPanelSettingsOutlined/>}
                    {access === "manager" && <SecurityOutlined/>}
                    {access === "user" && <LockOpenOutlined/>}
                    <Typography color = {colors.gray[100]} sx={{ ml: "5px"}}>
                        {access}
                    </Typography>
                </Box>
            )
        }},
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
            <Header title = "TEAM" subtitle="Managing the team members"/>
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
                }
            }}
                
            >
                <DataGrid
                    rows={mockDataTeam}
                    columns={!isMobile ? columns.slice(1,3) : columns}
                />
            </Box>
        </Box>
    )
}

export default index