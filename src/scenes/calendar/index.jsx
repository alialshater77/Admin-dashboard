import { useState } from "react";
import FallCalendar from "@fullcalendar/react";
import {formatDate}  from "@fullcalendar/core"; 
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import InteractionPlugin from "@fullcalendar/interaction";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

import React from 'react'

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents , setCurrentEvents] = useState([]);

    const handleDateClick = (selected) =>{
        const title = prompt("Please enter a new title for your event");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect(); 

        if(title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            })
        };

        
    };

    const handelEventClick =(selected) =>{
        if(window.confirm(`Are you sure you want to delete the event "${selected.event.title}"`)) {
            selected.event.remove();
        }
    };

    return (
        <Box m="0 20px" sx={{
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
            <Header title ="CALENDAR" subtitle={"Full Calendar Interactive Page"}/>

            <Box mt="35px" display="flex" justifyContent="space-between" sx={{
                flexDirection:{
                    xs:"column",
                    md:"row"
                },marginLeft:{
                    xs: "90px",
                    md: "0px"
                }
            }}>
                {/* calendar sidebar */}
                <Box flex="1 1 20%" backgroundColor ={colors.primary[400]} p="15px" borderRadius="4px" sx={{
                    width:{
                        xs:"100%"
                    }
                }}>
                    <Typography variant="h5">
                        Events
                    </Typography>
                    <List>
                        {currentEvents.map((event) => (
                            <ListItem
                            key = {event.id}
                            sx ={{backgroundColor: colors.greenAccent[500], margin: "10px 0", borderRadius: "2px"}}
                            >
                                <ListItemText
                                primary={event.title}
                                secondary={
                                    <Typography>
                                        {
                                            formatDate(event.start , {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric"
                                            })
                                        }
                                    </Typography>
                                }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/* cALENDAR */}
                <Box flex="1 1 100%" ml= "15px">
                    <FallCalendar
                        height ="75vh"
                        plugins={
                            [dayGridPlugin,
                            timeGridPlugin,
                            InteractionPlugin,
                            listPlugin]
                        }
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                        }}
                        initialView= "dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents ={true}
                        select={handleDateClick}
                        eventClick = {handelEventClick}
                        eventsSet = {(events) => setCurrentEvents(events)}
                        initialEvents={[
                            { id: "1234", title: "All-day event", date: "2023/8/11" },
                            { id: "4321", title: "Timed event", date: "2023/9/1" },
                        ]}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Calendar;