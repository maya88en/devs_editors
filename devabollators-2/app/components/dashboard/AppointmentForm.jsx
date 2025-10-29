// AppointmentForm.jsx

import React, { useState } from "react";

const AppointmentForm = ({ addAppointment }) => {
	const [name, setName] = useState("");
	const [date, setDate] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		addAppointment({ name, date });
		setName("");
		setDate("");
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="container">
				<div class="row">
					<div class="col-25">
						<label for="fname" className= "text-4xl text-indigo-800">Email</label>
					</div>
					<div class="col-75">
						<input
							type="text"
							id="fname"
							name="firstname"
							placeholder="Your email..."
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="mt-3"
						/>
					</div>
				</div>
				<div class="row">
					<div class="col-25">
						<label for="fname" className= "text-4xl text-indigo-800">Your available Time </label>
					</div>
					<div class="col-75">
						<input
							id="fname"
							name="firstname"
							placeholder="Your name.."
							type="datetime-local"
							value={date}
							onChange={(e) => setDate(e.target.value)}
							className="mt-12 ml-5"
						/>
					</div>
				</div>
				<div class="row mt-10">
					<input type="submit" value="Add Appointment" />
				</div>
			</form>
		</div>
	);
};

export default AppointmentForm;