// AppointmentForm.jsx

import React, { useState } from "react";

const AppointmentForm = ({ addAppointment }) => {
	const [name, setName] = useState("");
	const [date, setDate] = useState("");
	const [task, setTask] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		addAppointment({ name, date, task });
		setName("");
		setDate("");
		setTask("");
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="md:container relative">
				<div class="grid grid-cols-4">
					<div class="">
						<label for="fname" style={{ fontWeight: 'bold' }} className= " text-indigo-800">Email</label>
					</div>
					<div class="">
						<input
							type="text"
							id="fname"
							name="firstname"
							placeholder="Your email..."
							value={name}
							onChange={(e) => setName(e.target.value)}
							className=""
						/>
					</div>
				</div>
				<div class="grid grid-cols-4">
					<div class=" ">
						<label for="fname" style={{ fontWeight: 'bold' }} className= " text- text-indigo-800">Available Time </label>
					</div>
					<div class="">
						<input
							id="fname"
							name="firstname"
							placeholder="Your name.."
							type="datetime-local"
							value={date}
							onChange={(e) => setDate(e.target.value)}
							className="mt-2 ml-1 mr-40 "
						/>
					</div>
				</div>
				<div class="grid grid-cols-4">
					<div class="">
						<label for="fname" style={{ fontWeight: 'bold' }} className= " text-indigo-800">Task</label>
					</div>
					<div class="">
						<select
							type="text"
							id="fname"
							name="firstname"
							placeholder="Your task..."
							value={task}
							onChange={(e) => setTask(e.target.value)}
							className="">
						
							<option value="grapefruit">Grapefruit</option>
							<option value="lime">Lime</option>
							<option value="coconut">Coconut</option>
							<option value="mango">Mango</option>
						</select>
					</div>
				</div>
				<div class="grid grid-cols-4 mt-3">
					<div></div>
					<input type="submit" value="Add" className="background-color-blue" />
				</div>
			</form>
		</div>
	);
};

export default AppointmentForm;