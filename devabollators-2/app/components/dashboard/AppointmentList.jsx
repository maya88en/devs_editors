// AppointmentList.jsx

import React, { useState } from "react";

const AppointmentList = ({
	appointments,
	deleteAppointment,
	editAppointment,
	clearAppointments,
}) => {
	const [editedIndex, setEditedIndex] = useState(null);
	const [editedName, setEditedName] = useState("");
	const [editedDate, setEditedDate] = useState("");

	const handleEdit = (index) => {
		setEditedIndex(index);
		setEditedName(appointments[index].name);
		setEditedDate(appointments[index].date);
	};

	const handleSaveEdit = (index) => {
		editAppointment(index, editedName, editedDate);
		setEditedIndex(null);
		setEditedName("");
	};

	const handleCancelEdit = () => {
		setEditedIndex(null);
		setEditedName("");
	};

	return (
		<div>
			<h1 className="text-blue-500 mb-5 mt-5 text-3xl bg-black">Devabollators Available Times</h1>
			<table id="list">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Date</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{appointments.map((appointment, index) => (
						<tr key={index}>
							<td>{index + 1}</td>
							<td>
								{editedIndex === index ? (
									<input
										type="text"
										value={editedName}
										onChange={(e) =>
											setEditedName(e.target.value)
										}
									/>
								) : (
									appointment.name
								)}
							</td>
							<td>
								{editedIndex === index ? (
									<input
										type="date"
										value={editedDate}
										onChange={(e) =>
											setEditedDate(e.target.value)
										}
									/>
								) : (
									appointment.date
								)}
							</td>
							<td>
								{editedIndex === index ? (
									<>
										<button
											onClick={() =>
												handleSaveEdit(index)
											}
										>
											Save
										</button>
										<button onClick={handleCancelEdit}>
											Cancel
										</button>
									</>
								) : (
									<>
										<button
											onClick={() => handleEdit(index)}
										>
											Edit
										</button>
										<button
											onClick={() =>
												deleteAppointment(index)
											}
											disabled
										>
											Delete
										</button>
									</>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<button onClick={clearAppointments} disabled>Clear All Dates (for Admin only)</button>
		</div>
	);
};

export default AppointmentList;