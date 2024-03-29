import config from '@config/config';
import loader from '@utils/Loader';
import { ScrollUp } from '@utils/ScrollUp';
import { getDataInfo } from '@utils/GetData';
import axios from 'axios';
import '@styles/cards.scss'

const vehicles = async () => {
  try {
    const info = await axios.get(config.API_URL_VEHICLES);
    const vehicles = info.data.results;
    const vehiclesInfo = await getDataInfo(vehicles);
    const cards = createVehicles(vehiclesInfo);

    const scrollUpButton = ScrollUp();
    const loading = loader();

    const view = `
      ${loading}
      ${scrollUpButton}
      <h1>Vehicles</h1>
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

const createVehicles = (vehicles) => {
  let view = ``;
  vehicles.forEach(element => {
    let name = element.name;
    if(name.indexOf("/") >= 0) {
      let position = name.indexOf("/");
      name = name.substring(0, position) + "-" + name.substring(position + 1, name.length);
    }
    const image = require(`@images/Vehicles/${name}.png`);
    view += `
      <div class="card-info">
        <h2>${element.name}</h2>
        <img src=${image} alt="${element.name}">
        <div class="card-info-text">
            <h3>Description</h3>
            <p>Model: ${element.properties.model} <br>
              Manufacturer: ${element.properties.manufacturer} <br>
              Max Atmosphering Speed: ${element.properties.max_atmosphering_speed} <br>
              Passengers: ${element.properties.passengers} <br>
              Length: ${element.properties.length} <br>
              Cargo Capacity: ${element.properties.cargo_capacity} <br>
              Vehicle Class: ${element.properties.vehicle_class}</p>
        </div>
      </div>
    `
  });
  return view;
}

export default vehicles;
