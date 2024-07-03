import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Edit from "./pages/Edit";
import New from "./pages/New";
import Show from "./pages/Show";
import NotFound from "./pages/NotFound";
import NavBar from "./componets/NavBar";

function App() {
	return (
		<>
			<Router>
				<header>
					<NavBar />
				</header>
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/workouts" element={<Index />} />
						<Route path="/workouts/:id" element={<Show />} />
						<Route path="/workouts/:id/edit" element={<Edit />} />
						<Route path="/workouts/new" element={<New />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
			</Router>
		</>
	);
}

export default App;
