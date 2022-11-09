import React from "react";
import DoctorAppointment from "./doctorpov"

const DAppointmentsList = ({ list, role, status }) => {
    return (
        <div className="w-[900px]">
            <h3 className="mb-1 mt-9  text-xl font-semibold text-gray-600">
                {status} Appointments
            </h3>

            {list.map((appointment, index) => {
                return (
                    <DoctorAppointment
                        {...appointment}
                        key={appointment._id}
                        role={role}
                        index={index}
                    />
                );
            })}
        </div>
    );
};

export default DAppointmentsList;