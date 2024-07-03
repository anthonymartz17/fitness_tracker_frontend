import React from "react";
import Workout from "./Workout";
import { useState, useEffect } from "react";

const API = import.meta.env.VITE_APP_BASE_URL;
export default function Workouts() {
	const [workouts, setWorkouts] = useState([]);
	useEffect(() => {
		fetch(`${API}/workouts`)
			.then((res) => res.json())
			.then((data) => {
				setWorkouts(data);
			});
	}, []);
	return (
		<div>
			<h1>Workouts</h1>
			{workouts.map((workout) => (
				<Workout workout={workout} key={workout.id} />
			))}
		</div>
	);
}
