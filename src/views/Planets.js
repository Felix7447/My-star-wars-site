import config from '@config/config';
import loader from '@utils/Loader';
import { ScrollUp } from '@utils/ScrollUp';
import { getDataInfo } from '@utils/GetData';
import axios from 'axios';
import '@styles/cards.scss'

const planets = async () => {
  try {
    const info = await axios.get(config.API_URL_PLANETS);
    const planets = info.data.results;
    const planetsInfo = await getDataInfo(planets);
    const card = createPlanets(planetsInfo);

    const scrollUpButton = ScrollUp();
    const loading = loader();

    const view = `
      ${loading}
      ${scrollUpButton}
      <h1>Planets</h1>
      <section class="cards-container">
        ${card}
      </section>
    `
    return view;
    
  } catch (error) {
    const message = `
      <h1>${error.message}</h1>
      <h3>Please try again later...</h3>
    `
    console.log(error);
    return message;
  }
};

const createPlanets = (planets) => {
  let view = ``;
  planets.forEach(element => {
    const image = require(`@images/Planets/${element.name}.png`);
    view += `
      <div class="card-info">
        <h2>${element.name}</h2>
        <img src=${image} alt="${element.name}">
        <div class="card-info-text">
            <h3>Description</h3>
            <p>Climate: ${element.properties.climate} <br>
                Diameter: ${element.properties.diameter} meters <br>
                Gravity: ${element.properties.gravity} <br>
                Orbital Period: ${element.properties.orbital_period} days<br>
                Population: ${element.properties.population} <br>
                Terrain: ${element.properties.terrain} <br>
                Rotation Period: ${element.properties.rotation_period} hours</p>
        </div>
      </div>
    `
  });
  return view;
}

export default planets;
