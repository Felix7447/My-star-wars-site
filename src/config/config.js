const config = {
    API_URL: process.env.API,
    API_URL_FILMS: `${process.env.API}/films/`,
    API_URL_PEOPLE: `${process.env.API}/people/`,
    API_URL_PLANETS: `${process.env.API}/planets/`,
    API_URL_SPECIES: `${process.env.API}/species/`,
    API_URL_VEHICLES: `${process.env.API}/vehicles/`,
    API_URL_STARSHIPS: `${process.env.API}/starships/`,
}

module.exports = config;