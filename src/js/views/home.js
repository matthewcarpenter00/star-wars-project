import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Characters } from "../component/characters";
import { Planets } from "../component/planets";

//create your first component
export const Home = () => {
	const [charactersList, setCharactersList] = useState([]);
	const [planetsList, setPlanetsList] = useState([]);

	useEffect(() => {
		// fetch to get initial data from api
		fetch("https://swapi.dev/api/people/")
			.then(resp => resp.json())
			.then(data => setCharactersList(data.results))
			.catch(err => "There was an error loading the data");
	}, []);

	useEffect(() => {
		// fetch to get initial data from api
		fetch("https://swapi.dev/api/planets/")
			.then(resp => resp.json())
			.then(data => setPlanetsList(data.results))
			.catch(err => "There was an error loading the data");
	}, []);

	return (
		<div className="text-center mt-5">
			<div>
				<h2 className="text-white">CHARACTERS</h2>
				<div className="carousel-outer container">
					<div className="row">
						{charactersList &&
							charactersList.map((character, index) => {
								// api was missing id so we created character id using the index
								character.id = index + 1;
								return <Characters key={index} character={character} />;
							})}
					</div>
				</div>
			</div>

			<div>
				<h2 className="text-white">PLANETS</h2>
				<div className="carousel-outer container">
					<div className="row">
						{planetsList &&
							planetsList.map((planet, index) => {
								// api was missing id so we created character id using the index
								planet.id = index + 1;
								return <Planets key={index} planet={planet} />;
							})}
					</div>
				</div>
			</div>
		</div>
	);
};
