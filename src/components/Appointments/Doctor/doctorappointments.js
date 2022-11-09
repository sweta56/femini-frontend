import React from "react";

import {
    pendingAppointments,
    approvedAppointments,
    rejectedAppointments,
} from "../parappointments"

import DAppointmentsList from "./doctorapplist"

const DoctorAppointments = () => {
    return (
        <div className="ml-[200px]">
            <h2 className="text-xl">Hello, Doctor</h2>
            <h5>Here are your appointments:</h5>

            <div className="mt-5">
                <DAppointmentsList
                    list={pendingAppointments}
                    status="Pending"
                    role="user"
                />
            </div>

            <div className="mt-5">
                <DAppointmentsList
                    list={approvedAppointments}
                    status="Approved"
                    role="user"
                />
            </div>

            <div className="mt-5">
                <DAppointmentsList
                    list={rejectedAppointments}
                    status="Rejected"
                    role="user"
                />
            </div>
        </div>
    );
};

export default DoctorAppointments;