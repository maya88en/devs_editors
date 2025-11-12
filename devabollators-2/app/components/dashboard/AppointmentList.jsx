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
	const [editedTask, setEditedTask] = useState("");

	const handleEdit = (index) => {
		setEditedIndex(index);
		setEditedName(appointments[index].name);
		setEditedDate(appointments[index].date);
		setEditedTask(appointments[index].task);
	};

	const handleSaveEdit = (index) => {
		editAppointment(index, editedName, editedDate, editedTask);
		setEditedIndex(null);
		setEditedName("");
		setEditedTask("");
	};

	const handleCancelEdit = () => {
		setEditedIndex(null);
		setEditedName("");
		setEditedTask("");
	};

	return (
		<div>
			<h1 className="text-blue-500 mb-5 mt-5 text-3xl bg-black">Devabollators Available Times</h1>
			<table id="list">
				<thead>
					<tr>
						<th>ID</th>
						<th>Email</th>
						<th>Date</th>
						<th>Action</th>
						<th>Task</th>
						<th>Matched Devabollator</th>
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

											disabled
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
							<td>
								{editedIndex === index ? (
									<input
										type="text"
										value={editedTask}
										onChange={(e) =>
											setEditedTask(e.target.value)
										}
									/>
								) : (
									appointment.task
								)}
							</td>
							<td>
								<a className="text-orange-400 ml-7" href="https://sharetext.vercel.app/index.html?unique=14481" target="_blank" ><u className="text-center">sharetext</u></a>
          						<p hidden className="text-green-400 ml-7" >password &nbsp;2323</p>
								<a className="text-pink-300 ml-7" href="https://sharetext.vercel.app/index.html?unique=26384" target="_blank" ><u className="text-center">sharetext</u></a>
          						<p hidden className="text-green-400 ml-7" >password &nbsp;2424</p>
								<a className="text-blue-400 ml-7" href="https://sharetext.vercel.app/index.html?unique=11499" target="_blank" ><u className="text-center">sharetext</u></a>
          						<p hidden className="text-green-400 ml-7" >password &nbsp;2525</p>
								<a className="text-purple-400 ml-7" href="https://sharetext.vercel.app/index.html?unique=37576" target="_blank" ><u className="text-center">sharetext</u></a>
          						<p hidden className="text-green-400 ml-7" >password &nbsp;2626</p>
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