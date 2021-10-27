import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { myContext } from "../store/appContext";

export const Characters = props => {
	const { actions } = useContext(myContext);

	return (
		<div className="card col-md-3 text-white bg-dark mb-3">
			<img
				className="card-img-top"
				src="https://media3.giphy.com/media/3ornk6SwoWUWoOYEzC/giphy.gif"
				alt="Card image cap"
			/>

			<div className="card-body">
				<h5 className="card-title">{props.character.name}</h5>

				<ul className="list-unstyled">
					<li className="text-muted">Gender: {props.character.gender}</li>

					<li className="text-muted">Hair color: {props.character.hair_color}</li>

					<li className="text-muted">Eyes Color: {props.character.eye_color}</li>
				</ul>
				<Link
					to={`/people/${props.character.id}`}
					state={{
						title: props.character.name,
						image: "https://media3.giphy.com/media/3ornk6SwoWUWoOYEzC/giphy.gif",
						label1: "Gender",
						value1: props.character.gender,
						label2: "Hair Color",
						value2: props.character.hair_color
					}}>
					<button href="#" className="btn btn-outline-primary">
						View Character
					</button>
				</Link>
				<button
					href="#"
					className="btn btn-warning btn-outline-primary"
					onClick={() => actions.addFavorites(props.character.name)}>
					<i className="fas fa-heart" />
				</button>
			</div>
		</div>
	);
};

Characters.propTypes = {
	character: PropTypes.object
};
