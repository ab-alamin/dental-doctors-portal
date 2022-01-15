import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Grid from '@mui/material/Grid';
import { Button, Typography,Container } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg ={
  background: `url(${bg})`
 
}
const verticalCenter = {
  display: 'flex',
  alignItems: 'center',
  height:400
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item style={{...verticalCenter, textAlign: 'left'}} xs={12} md={6}>
          <Box>
          <Typography variant="h3">
              Your New Smile <br/>
              Starts Here
          </Typography>
          <Typography variant="h6" sx={{my:3, fontSize:13, fontWeight:300, color: 'gray'}}>
          Not Alow Lorem ok. Dilamna .Not Alow Lorem ok. Dilamna .Not Alow Lorem ok. Dilamna .Not Alow Lorem ok. Dilamna .Not Alow Lorem ok. Dilamna .Not Alow Lorem ok. Dilamna .Not Alow Lorem ok. Dilamna .
          </Typography>
          <Button variant="contained" style={{backgroundColor: '#5CE7Ed'}}>Get Appointment</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
            <img style={{width:'350px'}} src={chair} alt=""/>
        </Grid>
      </Grid>
    </Container>
    );
};

export default Banner;