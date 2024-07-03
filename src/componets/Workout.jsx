import React from "react";
import { Link } from "react-router-dom";
export default function Workout({ workout }) {
	return (
		<Link to={`/workouts/${workout.id}`}>
			<p>
				<b>{workout.type}</b>
			</p>
		</Link>
	);
}
