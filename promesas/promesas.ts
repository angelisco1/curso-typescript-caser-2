// import axios from 'axios';

const FB_URL: string = 'https://ejemplos-dc1c1.firebaseio.com/tareas';

function getTareas() {
  axios.get(FB_URL + '.json')
    .then((resp) => {
      console.log(resp.data);
      const tareasIds = Object.keys(resp.data);
      getTareaById(tareasIds[2]);
    });
}

function getTareaById(id: string) {
  axios.get(`${FB_URL}/${id}.json`)
    .then((resp) => {
      console.log(resp.data)
    })
}


getTareas();


// console.log(0)
// setTimeout(() => {
//   console.log(1)
// console.log(2)
// }, 1)