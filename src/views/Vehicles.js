import config from '@config/config';
import axios from 'axios';
import '@styles/cards.scss'

const vehicles = async () => {
  try {
    const info = await axios.get(config.API_URL_VEHICLES);
    const vehicles = info.data.results;
    const cards = createVehicles(vehicles);
    const view = `
      <h1>Vehicles</h1>
      <section class="cards-container">
        ${cards}
      </section>
  `;
  return view;
  } catch (error) {
    console.log(error);
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
    view += `
      <div class="card-info">
        <h2>${element.name}</h2>
        <img src="../assets/images/Vehicles/${name}.png" alt="${element.name}">
        <div class="card-info-text">
            <h3>Description</h3>
            <p>Model: ${element.model} <br>
              Manufacturer: ${element.manufacturer} <br>
              Max Atmosphering Speed: ${element.max_atmosphering_speed} <br>
              Passengers: ${element.passengers} <br>
              Length: ${element.length} <br>
              Cargo Capacity: ${element.cargo_capacity} <br>
              Vehicle Class: ${element.vehicle_class}</p>
        </div>
      </div>
    `
  });
  return view;
}

export default vehicles;
