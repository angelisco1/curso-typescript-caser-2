import axios from 'axios';

const FB_URL: string = 'https://ejemplos-dc1c1.firebaseio.com/tareas';

function getTareas() {
  return axios.get(FB_URL + '.json')
    // .then((resp) => {
    //   console.log(resp.data);
    //   const tareasIds = Object.keys(resp.data);
    //   getTareaById(tareasIds[2]);
    // });
}

function getTareaById(id: string) {
  return axios.get(`${FB_URL}/${id}.json`)
    // .then((resp) => {
    //   console.log(resp.data)
    // })
}


getTareas()
  .then((resp) => {
    console.log(resp.data);
    const tareasIds = Object.keys(resp.data);
    return getTareaById(tareasIds[2])
  })
  .then((resp) => {
    // Cambia el dato
    // Añade este dato
    const p1 = Promise.resolve(1);
    const p2 = Promise.resolve(3);
    return Promise.all([p1, p2])
    // console.log(resp.data)
  })
  .then(vals => console.log(vals));


// const p = new Promise((resolve, reject) => {
//   resolve('Algo ha ido bien')
//   reject('Algo ha ido mal');
// })

// p.then(() => {
//   console.log('Ha ido bien')
// }).catch(err => {
//   console.log(err);
// })


// function a() {
//   getTareas()
//     .then((resp) => {
//       console.log(resp.data);
//       const tareasIds = Object.keys(resp.data);
//       return getTareaById(tareasIds[2])
//     })
//     .then((resp) => {
//       console.log(resp.data)
//     });
// }

// function b() {
//   getTareas()
//     .then((resp) => {
//       console.log(resp.data);
//     })
// }

// getTareas()
//   .then((resp) => {
//     console.log(resp.data);
//   });

// console.log(0)
// setTimeout(() => {
//   console.log(1)
// }, 1)
// console.log(2)