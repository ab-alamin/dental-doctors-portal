import { Container, Grid, Typography,TextField,Button} from '@mui/material';
import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';

const Register = () => {
    const [loginData, setLoginData] = useState ({})
    const handleOnChange = e => {
        const filled = e.target.name;
        const value= e.target.value;
        const newLoginData = {...loginData };
        newLoginData[filled] = value;
        setLoginData(newLoginData);

    }
    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2) {
        alert('Your-password-did not match');
        }
        e.preventDefault();
    }
    return (
        <Container>
        <Grid container spacing={2}>
<Grid item sx={{mt: 8}} xs={12} md={6}>
<Typography variant="body1" gutterBottom> Register </Typography>
<form onSubmit={handleLoginSubmit}>
  
<TextField 
sx={{width: '75%', m: 1}}
 id="standard-basic"
 name="email"
 type="email"
 onChange={handleOnChange}
 label="Your Email" 
 variant="standard"
  />
<TextField 
sx={{width: '75%', m: 1}}
 id="standard-basic"
 name="password"
 onChange={handleOnChange}
 label="Your Password" 
 type="password"
 variant="standard" />
<TextField 
sx={{width: '75%', m: 1}}
 id="standard-basic"
 name="password2"
 onChange={handleOnChange}
 label="Retype Your Password" 
 type="password"
 variant="standard" />
 <Button sx={{width: '75%', m: 1}} type="submit" variant='contained'> Login</Button>
 <NavLink
  style={{textDecoration:'none'}}
 to="/login">
 <Button variant="text">Already Registered ? Please Login</Button>
 </NavLink>
</form>
</Grid>
<Grid item xs={12} md={6}>
  <img style={{width:'100%'}} src={login} alt="" />
</Grid>

</Grid>
 </Container>
    );
};

export default Register;