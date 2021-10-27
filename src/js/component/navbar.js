import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(myContext);
	const [isHovering, setisHovering] = React.useState(-1);
	const [showDropdown, setShowDropdown] = useState(false);

	let show = "";

	if (showDropdown) {
		show = "show";
	}

	return (
		<nav className="navbar navbar-dark bg-dark justify-content-between">
			<Link to="/">
				<a className="navbar-brand">StarWars</a>
			</Link>
			<div className="dropdown">
				<button
					className="btn btn-primary dropdown-toggle"
					type="button"
					id="dropdownMenuButton1"
					data-bs-toggle="dropdown"
					aria-expanded="false"
					onClick={() => setShowDropdown(!showDropdown)}>
					Favorites
					<span className="badge bg-secondary mx-1">{store.favoritesList.length}</span>
				</button>
				<ul
					className={store.favoritesList.length > 0 ? "dropdown-menu " + show : "d-none"}
					aria-labelledby="dropdownMenuButton1">
					{store.favoritesList.map((favorite, index) => (
						<li
							key={index}
							onMouseEnter={() => setisHovering(index)}
							onMouseLeave={() => setisHovering(-1)}
							className="px-2 py-1">
							{favorite}
							<span
								className={`text-dark ${isHovering == index ? "" : "hidden"} ps-2`}
								onClick={() => actions.deleteFavorite(favorite)}>
								<i className="fas fa-trash-alt" />
							</span>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};
