import config from '@config/config';
import axios from 'axios';
import '@styles/cards.scss'

const planets = async () => {
  try {
    const info = await axios.get(config.API_URL_PLANETS);
    const planets = info.data.results;
    const card = createPlanets(planets);
    const view = `
      <h1>Planets</h1>
      <section class="cards-container">
        ${card}
      </section>
  `;
  return view;
  } catch (error) {
    console.log(error);
  }
};

const createPlanets = (planets) => {
  let view = ``;
  planets.forEach(element => {
    view += `
      <div class="card-info">
        <h2>${element.name}</h2>
        <img src="../assets/images/Planets/${element.name}.png" alt="${element.name}">
        <div class="card-info-text">
            <h3>Description</h3>
            <p>Climate: ${element.climate} <br>
                Diameter: ${element.diameter} meters <br>
                Gravity: ${element.gravity} <br>
                Orbital Period: ${element.orbital_period} days<br>
                Population: ${element.population} <br>
                Terrain: ${element.terrain} <br>
                Rotation Period: ${element.rotation_period} hours</p>
        </div>
      </div>
    `
  });
  return view;
}

export default planets;
