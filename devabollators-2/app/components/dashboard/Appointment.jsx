import React, { useState, useEffect } from 'react';
import AppointmentForm from "../dashboard/AppointmentForm";
import AppointmentList from "../dashboard/AppointmentList";

const Appointment = () => {

// const [appointments, setAppointments] = useState([]);

const [appointments, setAppointments] = useState(() => {
        const savedAppointments = localStorage.getItem('appointments');
        return savedAppointments ? JSON.parse(savedAppointments) : [];
     });
	 
useEffect(() => {
        localStorage.setItem('appointments', JSON.stringify(appointments));
      }, [appointments]);

      // ... rest of scheduler logic to add/edit/delete appointments

	const addAppointment = (appointment) => {
	setAppointments([...appointments, appointment]);
	};

	const deleteAppointment = (index) => {
		const deletedAppointments = [...appointments];
		deletedAppointments.splice(index, 1);
		setAppointments(deletedAppointments);
	};

	const editAppointment = (index, editedName, editedDate, editedTask) => {
		const updatedAppointments = [...appointments];
		updatedAppointments[index] = {
			name: editedName,
			date: editedDate,
			task: editedTask,
		};
		setAppointments(updatedAppointments);
	};

	const clearAppointments = () => {
		setAppointments([]);
	};
	
	return (
		
		<div>
			
			<h2 className="text-xl mb-4 text-yellow-300 mt-3">Insert your email and available time </h2>
			<h2 className="text-xl mb-4 text-yellow-300">You will be matched with a devabollator</h2>
			<h2 className="text-xl mb-4 text-yellow-300">The Task will take about 30 mins per day</h2>
			<h2 className='text-lg font-semibold md:text-2xl text-green-500 mb-3 text-center'>
            This Program is All Free, No Cost</h2>
			<AppointmentForm addAppointment={addAppointment} />
			<AppointmentList
				appointments={appointments}
				deleteAppointment={deleteAppointment}
				clearAppointments={clearAppointments}
				editAppointment={editAppointment}
			/>
		</div>
	);
};


export default Appointment;
