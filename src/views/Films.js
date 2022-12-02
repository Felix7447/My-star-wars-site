import config from '@config/config';
import loader from '@utils/Loader';
import { ScrollUp } from '@utils/ScrollUp';
import axios from 'axios';
import '@styles/cards.scss'

const characters = async () => {
  try {
    const info = await axios.get(config.API_URL_FILMS);
    const films = info.data.result;
    const card = createFilms(films);

    const scrollUpButton = ScrollUp();
    const loading = loader();
    
    const view = `
      ${loading}
      ${scrollUpButton}
      <h1>Films</h1>
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
    return message;
  }
};

const createFilms = (films) => {
  let view = ``;
  films.forEach(element => {
    const image = require(`@images/Films/${element.properties.title}.png`);
    view += `
      <div class="card-info">
        <h2>${element.properties.title}</h2>
        <img src=${image} alt="${element.properties.title}">
        <div class="card-info-text">
            <h3>Description</h3>
            <p> Director: ${element.properties.director} <br>
                Epidosde: ${element.properties.episode_id} <br>
                Producer: ${element.properties.producer} <br>
                Release Date: ${element.properties.release_date}</p>
        </div>
      </div>
    `
  });
  return view;
}

export default characters;
