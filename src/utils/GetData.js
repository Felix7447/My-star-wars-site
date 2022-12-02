import axios from 'axios';

export const getDataInfo = async (parent) => {
    let promises = [];
    let info = [];
    parent.forEach(element => {
      const getInfo = new Promise((resolve, _reject) => {
        resolve(axios.get(element.url))
      });
      promises.push(getInfo);
    })
  
    await Promise.all(promises).then(values => {
      values.forEach(element => {
        info.push(element.data.result.properties);
      })
    })
  
    info.forEach((element, index) => {
      parent[index].properties = element;
    })
  
    return parent;
}