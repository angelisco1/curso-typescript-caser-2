import axios from 'axios';
import Swal from 'sweetalert2';

console.log('Hola mundo!!!');

const FB_URL: string = 'https://ejemplos-dc1c1.firebaseio.com/tareas';

function getTareas(): Promise<Array<string>> {
  return axios.get(FB_URL + '.json')
    .then((resp) => {
      console.log(resp.data);
      const tareasIds = Object.keys(resp.data);
      // alert(tareasIds)
      Swal.fire({
        title: 'The Internet?',
        text: JSON.stringify(tareasIds),
        icon: 'question'
      })
    //   getTareaById(tareasIds[2]);
      return Promise.resolve(tareasIds);
    });
}

getTareas();