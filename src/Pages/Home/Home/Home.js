import React from 'react';
import AppointmentHeader from '../../Appointment/AppointmentHeader/AppointmentHeader';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services'

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader></AppointmentHeader>
            <Banner></Banner>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
            
        </div>
    );
};

export default Home;