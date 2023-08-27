import React from 'react'
import Header from '../../components/Header'
import { Box , Button , IconButton , Typography , useMediaQuery, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import { mockTransactions } from '../../data/mockData';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import TrafficOutlinedIcon from '@mui/icons-material/TrafficOutlined';
import LineChart from '../../components/LineChart';
import BarCharts from '../../components/BarCharts';
import Geography from '../../components/Geography';
import StatBox from "../../components/StatBox"
import ProgressCircle from '../../components/ProgressCircle';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode) ;
  const isMobile = useMediaQuery('(min-width: 767px)');
  
  return (
    <Box sx={{
      display:{
        xs: 'flex',
        md: 'block'
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
    }} m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcom to your dashboard"/>
      
        { isMobile && (
          <Box>
          <Button
          sx={{ backgroundColor: colors.blueAccent[700] , color: colors.gray[100] , fontSize: "14px" , fontWeight: "bold" , padding: "10px 20px"}}
          >
            <DownloadForOfflineOutlinedIcon sx={{ mr: "10px"}}/>
            Download Reports
          </Button>
          </Box>
        )}
        
      </Box>

      {/* Grid & Charts */}
      <Box
      display="grid"
      gridTemplateColumns="repeat(12 , 1fr)"
      gridAutoRows="140px"
      gap="20px"
      mt="30px"
      sx={{ flexDirection :{
        xs: "column"
      }, display:{
        xs: "flex",
        md: "grid"
      }, gap:{
        xs:"20px",
      }}}
      >
        {/* Row1 */}
        <Box sx={{
          gridColumn:{
            sm: "span 12",
            md: "span 3"
          }
        }} gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
          <StatBox
          title="12,361"
          subtitle="Emails Sent"
          progress="0.75"
          incress="+14%"
          icon={
            <EmailOutlinedIcon sx={{ color: colors.greenAccent[600] , fontSize: "26px"}}/>
          }
          />
        </Box>

        <Box sx={{
          gridColumn:{
            sm: "span 12",
            md: "span 3"
          }
        }} gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
          <StatBox
          title="431,225"
          subtitle="Sales Obtained"
          progress="0.5"
          incress="+21%"
          icon={
            <PointOfSaleOutlinedIcon sx={{ color: colors.greenAccent[600] , fontSize: "26px"}}/>
          }
          />
        </Box>

        <Box sx={{
          gridColumn:{
            sm: "span 12",
            md: "span 3"
          }
        }} gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
          <StatBox
          title="32,441"
          subtitle="New Clients"
          progress="0.30"
          incress="+5%"
          icon={
            <PersonAddAlt1OutlinedIcon sx={{ color: colors.greenAccent[600] , fontSize: "26px"}}/>
          }
          />
        </Box>

        <Box sx={{
          gridColumn:{
            sm: "span 12",
            md: "span 3"
          }
        }} gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
          <StatBox
          title="1,361,134"
          subtitle="Traffic Inbound"
          progress="0.80"
          incress="+43%"
          icon={
            <TrafficOutlinedIcon sx={{ color: colors.greenAccent[600] , fontSize: "26px"}}/>
          }
          />
        </Box>

        {/* Row 2 */}
        <Box
        gridColumn="span 8"
        gridRow="span 2"
        backgroundColor = {colors.primary[400]}
        >
          <Box
          mt = "25px"
          p= "0 39px"
          display = "flex"
          justifyContent="space-between"
          alignItems="center"
          >
            <Box>
              <Typography variant='h5' fontWeight="600" color={colors.gray[100]}>
                Revenue Generated
              </Typography>
              <Typography variant='h3' fontWeight="bold" color={colors.greenAccent[500]}>
                $59,342,32
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <DownloadForOfflineOutlinedIcon
                sx={{ fontSize: "26px" , color: colors.greenAccent[500]}}
                />
              </IconButton>
            </Box>
          </Box>

          <Box height="250px" mt="-20px">
            <LineChart isDashboard={true}/>
          </Box>
          </Box>
          {/* Transactions */}
          <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} overflow="auto">
            <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} color = {colors.gray[100]} p="15px">
              <Typography color = {colors.gray[100]} variant='h5' fontWeight="600">
                Recent transaction
              </Typography>
            </Box>
            {mockTransactions.map((transaction , i) => (
              <Box 
              key={`${transaction.txId}-${i}`}
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p = "15px"
              >
                <Box>
                  <Typography color = {colors.greenAccent[500]} variant='h5' fontWeight="600">
                    {transaction.txId}
                  </Typography>
                  <Typography color = {colors.gray[100]} >
                    {transaction.user}
                  </Typography>
                </Box>
                <Box color = {colors.gray[100]}>
                  {transaction.date}
                </Box>
                <Box backgroundColor={colors.greenAccent[500]} p='5px 10px' borderRadius="4px" >
                  ${transaction.cost}
                </Box>
              </Box>
            ))}
          </Box>
          
          {/* Row 3 */}
          <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor = {colors.primary[400]}
          p="30px"
          >
            <Typography variant='h5' fontWeight="600">
              Campaign
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
              <ProgressCircle size='125'/>
              <Typography variant='h5' color = {colors.greenAccent[500]} sx={{ mt: "15px"}}>
                $48,324 revenue generated
              </Typography>
              <Typography variant='h5' fontWeight="600">
                includes extra
              </Typography>
            </Box>
          </Box>

          <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor = {colors.primary[400]}
          
          >
            <Typography variant='h5' fontWeight="600" sx={{ p: "30px 30px 0 30px"}}>
              Sales Quantity
            </Typography>
            <Box height="250px" mt="-20px">
              <BarCharts isDashboard={true} />
            </Box>
          </Box>

          <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor = {colors.primary[400]}
          p="30px"
          >
            <Typography variant='h5' fontWeight="600" sx={{ mb: "15px"}}>
              Geography Based Traffic
            </Typography>
            <Box height="200px">
              <Geography isDashboard={true} />
            </Box>
          </Box>


        </Box>
    </Box>
  )
}

export default Dashboard;