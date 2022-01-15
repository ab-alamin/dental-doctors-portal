import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';


const appoinmentBanner ={
    background:`url(${bg})`,
    backgroundColor:'rgba(45, 58, 74, 0.8)',
    backgroundBlendMode:'darken, luminosity',
    marginTop:175
}
const AppointmentBanner = () => {
    return (
        <Box style={appoinmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <img
            style={{width: 400, marginTop: '-110px'}} src={doctor} alt=""/>
        </Grid>
        <Grid item xs={12} md={6}  sx={{ 
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            textAlign: 'left' }}>
            <Box>
            <Typography variant="h6" sx={{mb: 5}} style={{color: '#5CE7Ed'}}>
                Appointment
            </Typography>
            <Typography variant="h4"  style={{color: 'white'}}>
                Make an Appointment today
            </Typography>
            <Typography variant="h6"sx={{my: 5}}  style={{ color:'white', fontSize:14, fontWeight:300}}>
            Make an Appointment todayMake an Appointment todayMake an Appointment todayMake an Appointment today. lorem20
            </Typography>
            <Button variant="contained" style={{backgroundColor: '#5CE7Ed'}}>Learn More</Button>
            </Box>

        </Grid>
      </Grid>
    </Box>
    );
};

export default AppointmentBanner;