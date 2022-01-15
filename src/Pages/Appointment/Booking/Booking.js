import { Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking, date}) => {
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    const {time, name,space} = booking;
    return (
       <>
        <Grid item xs={12} sm={6} md={4}>
             <Paper elevation={3} sx={{ py: 5}}>
             <Typography sx={{ color: 'info.main', fontWeight:600 }} variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
             <Typography variant="h6" gutterBottom component="div">
                    {time}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                   {space} Spaces AvailAble
               </Typography>
                <Button onClick={handleBookingOpen} variant="contained">Book Appointment</Button>
                </Paper>
             </Grid>
              <BookingModal
                     date={date}
                    booking={booking}
                    openBooking = {openBooking}
                  handleBookingClose ={handleBookingClose}
              
              >
              </BookingModal>
       </>
    );
};

export default Booking;