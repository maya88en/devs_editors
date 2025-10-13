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
			<form onSubmit={handleSubmit}>
				<div class="row">
					<div class="col-25">
						<label for="fname">Email</label>
					</div>
					<div class="col-75">
						<input
							type="text"
							id="fname"
							name="firstname"
							placeholder="Your email..."
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
				</div>
				<div class="row">
					<div class="col-25">
						<label for="fname">Available Time </label>
					</div>
					<div class="col-75">
						<input
							id="fname"
							name="firstname"
							placeholder="Your name.."
							type="date"
							value={date}
							onChange={(e) => setDate(e.target.value)}
						/>
					</div>
				</div>
				<div class="row">
					<input type="submit" value="Add Appointment" />
				</div>
			</form>
		</div>
	);
};

export default AppointmentForm;