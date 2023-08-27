import { useState} from 'react';
import { Box , IconButton , Typography , useMediaQuery, useTheme} from "@mui/material";
import {  NavLink } from 'react-router-dom';
import { tokens } from '../../theme';
import User from '../../assets/user.png'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import Style from "./sidebar.module.css";

const Item = ({ title , to , icon , setSelected }) =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <Box sx = {{ color: colors.gray[100]}} onClick={() => setSelected(title)}>
            <NavLink style={{textDecoration: "none"}} to={to} >
                <Box justifyContent="center" alignItems="center" display="flex">
                    {title ? (
                        <>
                        <IconButton>
                            {icon}
                        </IconButton>
                        <Typography className={Style.ho} variant='h6' ml="20px" style={{ color: colors.gray[100] , fontWeight: "500" }}>{title}</Typography> 
                    </>
                    ) : (
                        <Box display="flex" justifyContent="center" alignItems="center" mt="10px">
                            <IconButton >
                            {icon}
                            </IconButton>
                        </Box>
                        
                    )}
                    
                </Box>
            </NavLink>
        </Box>
        
    )
}

const MainSidebar = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed , setIsCollapsed] = useState(false);
    const [selected , setSelected] = useState("Dashboard");
    const [menuToggle , setMenuToggle] = useState(false);
    const isNotMobile = useMediaQuery('(min-width: 767px)');

    return (
        <>
        { isNotMobile && !isCollapsed && (
        <Box  display="flex" height="100%" width="25%" sx={{ left: 0 , top: 0}}>
            <Box width="20%" height="100%" position="fixed" sx={{ backgroundColor: colors.primary[400] ,overflowY: "scroll", zIndex: 40 , flexDirection: 'column'}}>
                {/* 11 */}
                
                    <Box display="flex" justifyContent="space-between" p="10px" mt="6px">
                        <Typography variant='h3' color={colors.gray[100]}>
                            ADMINIS
                        </Typography>
                        <IconButton  onClick={() => setIsCollapsed(!isCollapsed)}>
                            <MenuOutlinedIcon/>
                        </IconButton>
                    </Box>

                {/* 222 */}
                
                <Box mt="25px">
                    <Box width="100%" display="flex" justifyContent="center" alignItems="center">
                        <img 
                        alt='profile-user'
                        width="140px"
                        height="130px"
                        src={User}
                        style={{ cursor: "pointer" , borderRadius:"50%" ,marginBottom: "10px"}}
                        />
                    </Box>
                    <Box textAlign="center">
                        <Typography variant='h3' color = {colors.gray[100]} fontWeight="bold" sx={{mt: "10px" }}>Ali Alshater</Typography>
                        <Typography variant='h5' color = {colors.greenAccent[500]}>Admin</Typography>
                    </Box>
                </Box>

                {/* MenuItems */}
                <Box alignItems="flex-start" justifyContent="space-between" flexDirection="column" display="flex"  mt="25px" paddingLeft={isCollapsed ? undefined: "5%"}>
                <Item 
                    title = "Dashboard"
                    to = "/"
                    icon={<HomeOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Typography
                    variant='h6'
                    color={colors.gray[100]}
                    sx={{ m: '15px 0 5px 20px' , fontWeight:"700"}}
                    >
                    Data
                    </Typography>
                    <Item 
                    title = "Manage Team"
                    to = "/team"
                    icon={<PersonOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item 
                    title = "Contact Information"
                    to = "/contacts"
                    icon={<ContactsOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item 
                    title = "Invoices Balances"
                    to = "/invoices"
                    icon={<ReceiptOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />

                    <Typography
                    variant='h6'
                    color={colors.gray[100]}
                    sx={{ m: '15px 0 5px 20px' , fontWeight:"700"}}
                    >
                    Pages
                    </Typography>

                    <Item 
                    title = "Profile Form"
                    to = "/form"
                    icon={<PersonOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item 
                    title = "Calendar"
                    to = "/calendar"
                    icon={<CalendarTodayOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item 
                    title = "FAQ Page"
                    to = "/faq"
                    icon={<HelpOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />

                    <Typography
                    variant='h6'
                    color={colors.gray[100]}
                    sx={{ m: '15px 0 5px 20px', fontWeight:"700"}}
                    >
                    Charts
                    </Typography>
                    <Item 
                    title = "Bar Chart"
                    to = "/bar"
                    icon={<BarChartOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item 
                    title = "Pie Charts"
                    to = "/pie"
                    icon={<PieChartOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item 
                    title = "Line Chart"
                    to = "/line"
                    icon={<TimelineOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item 
                    title = "Geography Chart"
                    to = "/geography"
                    icon={<MapOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                </Box>
            </Box>
        </Box>
        )}
        {isNotMobile && isCollapsed && (
            <Box display="flex" height="100%" width="8%" sx={{ left: 0 , top: 0}}>
            <Box width="5%" height="100%" position="fixed" sx={{ backgroundColor: colors.primary[400] , zIndex: 40 , flexDirection: 'column'}}>
                {/* 11 */}
                
                    <Box display="flex" alignItems="center" justifyContent="center" mt="6px">
                        <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                            <MenuOutlinedIcon/>
                        </IconButton>
                    </Box>

                {/* MenuItems */}
                <Box mt="25px" paddingLeft={isCollapsed ? undefined: "5%"}>
                <Item 
                    to = "/"
                    icon={<HomeOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                />
                    <Item 
                    
                    to = "/team"
                    icon={<PersonOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item 
                    
                    to = "/contacts"
                    icon={<ContactsOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item 
                    
                    to = "/invoices"
                    icon={<ReceiptOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />

                    <Item 
                    
                    to = "/form"
                    icon={<PersonOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item 
                    
                    to = "/calendar"
                    icon={<CalendarTodayOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item 
                    
                    to = "/faq"
                    icon={<HelpOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item 
                    
                    to = "/bar"
                    icon={<BarChartOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item 
                    
                    to = "/pie"
                    icon={<PieChartOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item 
                    
                    to = "/line"
                    icon={<TimelineOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item 
                    
                    to = "/geography"
                    icon={<MapOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                </Box>
            </Box>
        </Box>
        )}
        {!isNotMobile && !menuToggle && (
            <Box display="flex" height="100%" width="8%" sx={{ left: 0 , top: 0}}>
            <Box width="8%" height="100%" position="fixed" sx={{ backgroundColor: colors.primary[400] , zIndex: 40 , flexDirection: 'column'}}>
                {/* 11 */}
                
                    <Box display="flex" alignItems="center" justifyContent="center" mt="6px">
                        <IconButton onClick={() => setMenuToggle(!menuToggle)}>
                            <MenuOutlinedIcon/>
                        </IconButton>
                    </Box>

                {/* MenuItems */}
                <Box mt="25px" paddingLeft={isCollapsed ? undefined: "5%"}>
                <Item 
                    to = "/"
                    icon={<HomeOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                />
                    <Item 
                    
                    to = "/team"
                    icon={<PersonOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item 
                    
                    to = "/contacts"
                    icon={<ContactsOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item 
                    
                    to = "/invoices"
                    icon={<ReceiptOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />

                    <Item 
                    
                    to = "/form"
                    icon={<PersonOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item 
                    
                    to = "/calendar"
                    icon={<CalendarTodayOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item 
                    
                    to = "/faq"
                    icon={<HelpOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item 
                    
                    to = "/bar"
                    icon={<BarChartOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item 
                    
                    to = "/pie"
                    icon={<PieChartOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item 
                    
                    to = "/line"
                    icon={<TimelineOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Item 
                    
                    to = "/geography"
                    icon={<MapOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    />
                </Box>
            </Box>
        </Box>
        )}
        {!isNotMobile && menuToggle && (
            <Box width="50%" height="100%" position="fixed" sx={{ backgroundColor: colors.primary[400] ,overflowY: "scroll", zIndex: 40 , flexDirection: 'column'}}>
            {/* 11 */}
            
                <Box display="flex" justifyContent="space-between" p="10px" mt="6px">
                    <Typography variant='h3' color={colors.gray[100]}>
                        ADMINIS
                    </Typography>
                    <IconButton  onClick={() => setMenuToggle(!menuToggle)}>
                        <MenuOutlinedIcon/>
                    </IconButton>
                </Box>

            {/* 222 */}
            
            <Box mt="25px">
                <Box width="100%" display="flex" justifyContent="center" alignItems="center">
                    <img 
                    alt='profile-user'
                    width="140px"
                    height="130px"
                    src={User}
                    style={{ cursor: "pointer" , borderRadius:"50%" ,marginBottom: "10px"}}
                    />
                </Box>
                <Box textAlign="center">
                    <Typography variant='h3' color = {colors.gray[100]} fontWeight="bold" sx={{mt: "10px" }}>Ali Alshater</Typography>
                    <Typography variant='h5' color = {colors.greenAccent[500]}>Admin</Typography>
                </Box>
            </Box>

            {/* MenuItems */}
            <Box alignItems="flex-start" justifyContent="space-between" flexDirection="column" display="flex"  mt="25px" paddingLeft={isCollapsed ? undefined: "5%"}>
            <Item 
                title = "Dashboard"
                to = "/"
                icon={<HomeOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
            />
            <Typography
                variant='h6'
                color={colors.gray[100]}
                sx={{ m: '15px 0 5px 20px' , fontWeight:"700"}}
                >
                Data
                </Typography>
                <Item 
                title = "Manage Team"
                to = "/team"
                icon={<PersonOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
                />
                <Item 
                title = "Contact Information"
                to = "/contacts"
                icon={<ContactsOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
                />
                <Item 
                title = "Invoices Balances"
                to = "/invoices"
                icon={<ReceiptOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
                />

                <Typography
                variant='h6'
                color={colors.gray[100]}
                sx={{ m: '15px 0 5px 20px' , fontWeight:"700"}}
                >
                Pages
                </Typography>

                <Item 
                title = "Profile Form"
                to = "/form"
                icon={<PersonOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
                />
                <Item 
                title = "Calendar"
                to = "/calendar"
                icon={<CalendarTodayOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
                />
                <Item 
                title = "FAQ Page"
                to = "/faq"
                icon={<HelpOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
                />

                <Typography
                variant='h6'
                color={colors.gray[100]}
                sx={{ m: '15px 0 5px 20px', fontWeight:"700"}}
                >
                Charts
                </Typography>
                <Item 
                title = "Bar Chart"
                to = "/bar"
                icon={<BarChartOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
                />
                <Item 
                title = "Pie Charts"
                to = "/pie"
                icon={<PieChartOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
                />
                <Item 
                title = "Line Chart"
                to = "/line"
                icon={<TimelineOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
                />
                <Item 
                title = "Geography Chart"
                to = "/geography"
                icon={<MapOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
                />
            </Box>
        </Box>
        )}
        </>
    )
}

export default MainSidebar;