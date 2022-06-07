import config from '@config/config';
import loader from '@views/Loader';
import axios from 'axios';
import '@styles/cards.scss'

const characters = async () => {
  try {
    const info = await axios.get(config.API_URL_PEOPLE);
    const characters = info.data.results;
    const char = createCharacters(characters);

    const loading = loader();

    const view = `
      ${loading}
      <h1>Characters</h1>
      <section class="cards-container">
        ${char}
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

const createCharacters = (characters) => {
  let view = ``;
  characters.forEach(element => {
    const image = require(`@images/Characters/${element.name}.png`);
    view += `
      <div class="card-info">
        <h2>${element.name}</h2>
        <img src=${image} alt="${element.name}">
        <div class="card-info-text">
            <h3>Description</h3>
            <p>Height: ${element.height} cm <br>
                Mass: ${element.mass} kg <br>
                Hair Color: ${element.hair_color} <br>
                Skin Color: ${element.skin_color} <br>
                Eye Color: ${element.eye_color} <br>
                Birth Year: ${element.birth_year} <br>
                Gender: ${element.gender}</p>
        </div>
      </div>
    `
  });

  
  return view;
}

export default characters;
