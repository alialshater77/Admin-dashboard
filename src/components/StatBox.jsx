import { Box ,Typography ,  useTheme} from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

import React from 'react'

const StatBox = ({ title , subtitle , icon , progress , incress}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box width = "100%" m = "0 39px">
            <Box display = "flex" justifyContent="space-between">
                <Box>
                    {icon}
                    <Typography variant="h4" fontWeight="bold" sx={{ color : colors.gray[100]}}>
                        {title}
                    </Typography>
                </Box>
            
            <Box>
                <ProgressCircle progress={progress}/>
            </Box>
            </Box>
            <Box display = "flex" justifyContent="space-between">
                <Typography variant="h5" sx={{ color : colors.greenAccent[100]}}>
                    {subtitle}
                </Typography>
                <Typography variant="h5" fontStyle="italic" sx={{ color : colors.gray[600]}}>
                    {incress}
                </Typography>
            </Box>
        </Box>
    )
}

export default StatBox