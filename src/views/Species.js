import config from '@config/config';
import loader from '@utils/Loader';
import { ScrollUp } from '@utils/ScrollUp';
import { getDataInfo } from '@utils/GetData';
import axios from 'axios';
import '@styles/cards.scss'

const species = async () => {
  try {
    const info = await axios.get(config.API_URL_SPECIES);
    const species = info.data.results;
    const speciesInfo = await getDataInfo(species);
    const card = createSpecies(speciesInfo);

    const scrollUpButton = ScrollUp();
    const loading = loader();

    const view = `
      ${loading}
      ${scrollUpButton}
      <h1>Species</h1>
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

const createSpecies = (species) => {
  let view = ``;
  species.forEach(element => {
    const image = require(`@images/Species/${element.name}.png`);
    view += `
      <div class="card-info">
        <h2>${element.name}</h2>
        <img src=${image} alt="${element.name}">
        <div class="card-info-text">
            <h3>Description</h3>
            <p>Average Height: ${element.properties.average_height} cm <br>
                Average Lifespan: ${element.properties.average_lifespan} years <br>
                Classification: ${element.properties.classification} <br>
                Designation: ${element.properties.designation} <br>
                Language: ${element.properties.language} <br>
                Hair Colors: ${element.properties.hair_colors}</p>
        </div>
      </div>
    `
  });
  return view;
}

export default species;
