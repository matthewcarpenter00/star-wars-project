const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			charactersList: [],
			planetsList: [],
			favoritesList: []
		},

		actions: {
			getCharacters: () => {
				// fetch to get initial data from api
				fetch("https://swapi.dev/api/people/")
					.then(resp => resp.json())
					.then(data => setStore({ characterList: data.results }))
					.catch(err => "There was an error loading the data");
			},

			getPlanets: () => {
				// fetch to get initial data from api
				fetch("https://swapi.dev/api/planets/")
					.then(resp => resp.json())
					.then(data => setPlanetsList({ planetList: data.results }))
					.catch(err => "There was an error loading the data");
			},

			addFavorites: name => {
				let favsList = getStore().favoritesList;
				if (!getStore().favoritesList.find(item => item == name)) {
					favsList.push(name);
				}
				setStore({ favoritesList: favsList });
			},
			deleteFavorite: name => {
				let filterFavorites = getStore().favoritesList.filter(
					(favoriteToRemove, index) => name != favoriteToRemove
				);
				setStore({ favoritesList: filterFavorites });
			}
		}
	};
};

export default getState;
