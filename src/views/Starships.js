import config from '@config/config';
import loader from '@utils/Loader';
import { ScrollUp } from '@utils/ScrollUp';
import axios from 'axios';
import '@styles/cards.scss'

const starships = async () => {
  try {
    const info = await axios.get(config.API_URL_STARSHIPS);
    const starships = info.data.results;
    const cards = createStarships(starships);

    const scrollUpButton = ScrollUp();
    const loading = loader();

    const view = `
      ${loading}
      ${scrollUpButton}
      <h1>Starships</h1>
      <section class="cards-container">
        ${cards}
      </section>
    `
    return view;
    
  } catch (error) {
    const message = `
      <h1>${error.message}</h1>
      <h3>Please try again later...</h3>
    `
    return message;
  }
};

const createStarships = (starships) => {
  let view = ``;
  starships.forEach(element => {
    const image = require(`@images/Starships/${element.name}.png`);
    view += `
      <div class="card-info">
        <h2>${element.name}</h2>
        <img src=${image} alt="${element.name}">
        <div class="card-info-text">
            <h3>Description</h3>
            <p>Model: ${element.model} <br>
            Manufacturer: ${element.manufacturer} <br>
            Max Atmosphering Speed: ${element.max_atmosphering_speed} <br>
            Passengers: ${element.passengers} <br>
            Length: ${element.length} <br>
            Cargo Capacity: ${element.cargo_capacity} <br>
            Starship Class: ${element.starship_class}</p>
        </div>
      </div>
    `
  });
  return view;
}

export default starships;
