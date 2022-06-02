import config from '@config/config';
import axios from 'axios';
import '@styles/cards.scss'

const starships = async () => {
  try {
    const info = await axios.get(config.API_URL_STARSHIPS);
    const starships = info.data.results;
    const cards = createStarships(starships);
    const view = `
      <h1>Starships</h1>
      <section class="cards-container">
        ${cards}
      </section>
  `;
  return view;
  } catch (error) {
    console.log(error);
  }
};

const createStarships = (starships) => {
  let view = ``;
  console.log(starships);
  starships.forEach(element => {
    view += `
      <div class="card-info">
        <h2>${element.name}</h2>
        <img src="https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop1x1.320w.jpg" alt="Character">
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
