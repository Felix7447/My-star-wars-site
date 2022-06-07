import config from '@config/config';
import axios from 'axios';
import '@styles/cards.scss'

const characters = async () => {
  try {
    const info = await axios.get(config.API_URL_FILMS);
    const films = info.data.results;
    const card = createFilms(films);
    const view = `
      <h1>Films</h1>
      <section class="cards-container">
        ${card}
      </section>
  `;
  return view;
  } catch (error) {
    console.log(error);
  }
};

const createFilms = (films) => {
  let view = ``;
  films.forEach(element => {
    view += `
      <div class="card-info">
        <h2>${element.title}</h2>
        <img src="../assets/images/Films/${element.title}.png" alt="${element.title}">
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
