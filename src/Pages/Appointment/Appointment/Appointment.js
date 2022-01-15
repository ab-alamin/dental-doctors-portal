import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailAbleAppointments from '../AvailableAppointments/AvailAbleAppointments';

const Appointment = () => {
  const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailAbleAppointments date={date}></AvailAbleAppointments>
        </div>

    );
};

export default Appointment;