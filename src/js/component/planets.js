import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { myContext } from "../store/appContext";

export const Planets = props => {
	const { actions } = useContext(myContext);

	return (
		<div className="card col-md-3 text-white bg-dark mb-3">
			<img
				className="card-img-top"
				src="https://media1.giphy.com/media/1rQm9dN6pVj4EyhM1c/giphy.gif"
				alt="Card image cap"
			/>

			<div className="card-body">
				<h5 className="card-title">{props.planet.name}</h5>

				<ul className="list-unstyled">
					<li className="text-muted">Population: {props.planet.population}</li>

					<li className="text-muted">Terrain: {props.planet.terrain}</li>

					<li className="text-muted">Climate: {props.planet.climate}</li>
				</ul>

				<Link to={`/planets/${props.planet.id}`}>
					<button href="#" className="btn btn-outline-primary">
						View Planet
					</button>
				</Link>
				<button href="#" className="btn btn-warning" onClick={() => actions.addFavorites(props.planet.name)}>
					<i className="fas fa-heart" />
				</button>
			</div>
		</div>
	);
};

Planets.propTypes = {
	planet: PropTypes.object
};
