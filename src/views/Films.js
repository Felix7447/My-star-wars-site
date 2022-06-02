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
        <img src="https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop1x1.320w.jpg" alt="Character">
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
