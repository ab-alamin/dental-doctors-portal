import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Booking from '../../Appointment/Booking/Booking';
const bookings = [
    {
        id: 1,
        name: 'Cavity Protection',
        time: '10.00 AM -11.00 PM',
        Space: 5,
    },
    {
        id: 2,
        name: 'vitamin Protection',
        time: '8.00 AM -9.00 PM',
        Space: 5,
    },
    {
        id: 3,
        name: 'Calcium Protection',
        time: '7.00 PM -8.00 PM',
        Space: 5,
    },
    {
        id: 4,
        name: 'Covid Protection',
        time: '3.00 PM -4.00 PM',
        Space: 5,
    },
    {
        id: 5,
        name: 'Penther Protection',
        time: '9.00 PM -10.00 PM',
        Space: 5,
    },
    {
        id: 6,
        name: '18+ Protection',
        time: '11.00 PM -12.00 PM',
        Space: 5,
    },
]
const AvailAbleAppointments = ({ date }) => {
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', mb:2,fontWeight:600 }}> Available Appointments on {date.toDateString()}</Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                    key={booking.id}
                    booking={booking}
                    date ={date}
                    >

                    </Booking> )
                }
            </Grid> 
        </Container>
    );
};

export default AvailAbleAppointments;