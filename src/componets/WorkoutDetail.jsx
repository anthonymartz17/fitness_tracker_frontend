import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const API = import.meta.env.VITE_APP_BASE_URL;
export default function WorkoutDetail() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [workoutDetail, setWorkoutDetail] = useState({});

	function handleDelete() {
		console.log(id);
		fetch(`${API}/workouts/${id}`, {
			method: "DELETE",
		}).then(() => {
			navigate("/workouts");
		});
	}

	useEffect(() => {
		fetch(`${API}/workouts/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setWorkoutDetail(data);
			});
	}, []);
	return (
		<div>
			<p>
				<b>Workout:</b>
				<span>{workoutDetail.type}</span>
			</p>
			<p>
				<b>Calories Burned:</b>
				<span>{workoutDetail.caloriesBurned}</span>
			</p>
			<p>
				<b>Date:</b>
				<span>{workoutDetail.date}</span>
			</p>

			<p>
				<b>Duration:</b>
				<span>{workoutDetail.durationInMinutes} minutes</span>
			</p>

			<div>
				<Link to={`/workouts/${workoutDetail.id}/edit`}>
					<button>Edit</button>
				</Link>
				<button onClick={() => handleDelete()}>Delete</button>
			</div>
		</div>
	);
}
