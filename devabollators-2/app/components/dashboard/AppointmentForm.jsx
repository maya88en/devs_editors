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
			<form onSubmit={handleSubmit} className="container relative">
				<div class="row">
					<div class="col-25">
						<label for="fname" style={{ fontWeight: 'bold' }} className= " text-indigo-800">Email</label>
					</div>
					<div class="col-75">
						<input
							type="text"
							id="fname"
							name="firstname"
							placeholder="Your email..."
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="mt-3 mb-3"
						/>
					</div>
				</div>
				<div class="row">
					<div class="col-25 ">
						<label for="fname" style={{ fontWeight: 'bold' }} className= " text- text-indigo-800">Available Time </label>
					</div>
					<div class="col-25">
						<input
							id="fname"
							name="firstname"
							placeholder="Your name.."
							type="datetime-local"
							value={date}
							onChange={(e) => setDate(e.target.value)}
							className="mt-2 ml-1 mr-40"
						/>
					</div>
				</div>
				<div class="absolute right-1 bottom-1">
					<input type="submit" value="Add Appointment" />
				</div>
			</form>
		</div>
	);
};

export default AppointmentForm;