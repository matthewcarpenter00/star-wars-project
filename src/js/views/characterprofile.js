import React from "react";
import { useEffect, useState } from "react";
// add params from react router
import { useParams } from "react-router-dom";

export const CharacterProfile = () => {
	// create variables, params
	let { type, profileid } = useParams();

	// usestate for profile to target info
	const [profile, setProfile] = useState([]);

	useEffect(() => {
		// fetch to get initial data from api
		// use type and profileid params
		fetch(`https://swapi.dev/api/${type}/${profileid}`)
			.then(resp => resp.json())
			.then(data => setProfile(data))
			.catch(err => "There was an error loading the data");
	}, []);

	return (
		// <div>
		// 	<h1 className="text-white">Hello {character.name}</h1>
		// </div>
		<section className="section about-section gray-bg" id="about">
			<div className="container">
				<div className="row align-items-center flex-row-reverse">
					<div className="col-lg-6">
						<div className="about-text go-to">
							{/* here the name is the same for both people and planets */}
							<h2 className="text-white">{profile.name}</h2>

							<p className="text-white">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
								dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
								Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum..
							</p>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="about-avatar">
							<img src="https://media3.giphy.com/media/3ornk6SwoWUWoOYEzC/giphy.gif" title="" alt="" />
						</div>
					</div>
				</div>
				<div className="counter">
					<div className="row">
						<div className="col-6 col-lg-3">
							<div className="count-data text-center text-white">
								{/* use ternary expression to decide whether to show people or planet title */}
								<h2>{type == "people" ? "Height" : "Diameter"}</h2>
								<p className="m-0px font-w-600">
									{/* use ternary expression to decide whether to show people or planet info
									this only works because we just have 2 categories: people and planets.. if we
									add more categories like vehicles we would have to use Switch */}
									{type == "people" ? profile.height : profile.diameter}
								</p>
							</div>
						</div>
						<div className="col-6 col-lg-3">
							<div className="count-data text-center text-white">
								<h2>{type == "people" ? "Hair Color" : "Rotation Period"}</h2>
								<p className="m-0px font-w-600">
									{type == "people" ? profile.hair_color : profile.rotation_period}
								</p>
							</div>
						</div>
						<div className="col-6 col-lg-3">
							<div className="count-data text-center text-white">
								<h2>{type == "people" ? "Eye Color" : "Terrain"}</h2>
								<p className="m-0px font-w-600">
									{type == "people" ? profile.eye_color : profile.terrain}
								</p>
							</div>
						</div>
						<div className="col-6 col-lg-3">
							<div className="count-data text-center text-white">
								<h2>{type == "people" ? "Skin Color" : "Population"}</h2>
								<p className="m-0px font-w-600">
									{type == "people" ? profile.skin_color : profile.population}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
