import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";

import {
    pendingAppointments,
    approvedAppointments,
    rejectedAppointments,
} from "../components/Appointments/parappointments"

import AppointmentsList from "../components/Appointments/appointments-list"

const Appointments = () => {
    const navigate = useNavigate();

    useEffect(()=> {
      if (!localStorage.getItem('token')){
        navigate('/login')
      }
    },[])
    return (
        <div className="ml-[200px]">
            <h2 className="text-xl">Hello,user</h2>
            <h5>Here are your appointments:</h5>

            <div className="mt-5">
                <AppointmentsList
                    list={pendingAppointments}
                    status="Pending"
                    role="Doctor"
                />
            </div>

            <div className="mt-5">
                <AppointmentsList
                    list={approvedAppointments}
                    status="Approved"
                    role="Doctor"
                />
            </div>

            <div className="mt-5">
                <AppointmentsList
                    list={rejectedAppointments}
                    status="Rejected"
                    role="Doctor"
                />
            </div>
        </div>
    );
};

export default Appointments;