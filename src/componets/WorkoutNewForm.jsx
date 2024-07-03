import React, { useState } from "react";
const API = import.meta.env.VITE_APP_BASE_URL;
import { useNavigate } from "react-router-dom";
export default function WorkoutNewForm() {
  const navigate = useNavigate()
	const [newWorkout, setNewWorkout] = useState({
		type: "",
		caloriesBurned: "",
		date: "",
		durationInMinutes: "",
	});

	function handleTextChange(e) {
		const { id, value } = e.target;
		setNewWorkout((prev) => ({
			...prev,
			[id]:
				id === "caloriesBurned" || id === "durationInMinutes"
					? Number(value)
					: value,
		}));
		console.log("working");
	}

	function handleSubmit(e) {
		e.preventDefault();

		fetch(`${API}/workouts`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newWorkout),
		})
			.then((res) => res.json())
			.then((data) => {
				navigate("/workouts")
			});

		setNewWorkout({
			type: "",
			caloriesBurned: "",
			date: "",
			durationInMinutes: "",
		});
	}
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="type">Type:</label>
				<input
					type="text"
					id="type"
					value={newWorkout.type}
					onChange={handleTextChange}
				/>
			</div>
			<div>
				<label htmlFor="caloriesBurned">Calories Burned:</label>
				<input
					type="text"
					id="caloriesBurned"
					value={newWorkout.caloriesBurned}
					onChange={handleTextChange}
				/>
			</div>
			<div>
				<label htmlFor="date">Date:</label>
				<input
					type="date"
					id="date"
					value={newWorkout.date}
					onChange={handleTextChange}
				/>
			</div>
			<div>
				<label htmlFor="durationInMinutes">Duration:</label>
				<input
					type="text"
					id="durationInMinutes"
					value={newWorkout.durationInMinutes}
					onChange={handleTextChange}
				/>
			</div>
			<button>Submit</button>
		</form>
	);
}
