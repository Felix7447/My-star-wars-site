import config from '@config/config';
import loader from '@views/Loader';
import axios from 'axios';
import '@styles/cards.scss'

const characters = async () => {
  try {
    const info = await axios.get(config.API_URL_FILMS);
    const films = info.data.results;
    const card = createFilms(films);
    const loading = loader();
    
    const view = `
      ${loading}
      <h1>Films</h1>
      <section class="cards-container">
        ${card}
      </section>
  `;
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
    const image = require(`@images/Films/${element.title}.png`);
    view += `
      <div class="card-info">
        <h2>${element.title}</h2>
        <img src=${image} alt="${element.title}">
        <div class="card-info-text">
            <h3>Description</h3>
            <p> Director: ${element.director} <br>
                Epidosde: ${element.episode_id} <br>
                Producer: ${element.producer} <br>
                Release Date: ${element.release_date}</p>
        </div>
      </div>
    `
  });
  return view;
}

export default characters;
