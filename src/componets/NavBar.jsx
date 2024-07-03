import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/workouts">Workouts</Link>
        </li>
        <li>
          <Link to="/workouts/new">New</Link>
        </li>
     </ul>

    </div>
  )
}
