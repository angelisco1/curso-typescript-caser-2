import { usuarios } from './usuario';
import { proyectos } from './proyecto';
import { AuthToken } from './token';

import Swal from 'sweetalert2'


export enum Views {
  Home,
  Login
}

function getLoginPage() {
  return `
    <div>
      <div>
        <label for="user">Usuario:</label>
        <input type="text" id="user" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="text" id="password" />
      </div>
      <button type="button" id="btn-login">Login</button>
    </div>
  `;
}

function getHomePage(proyectos) {
  const listaProyectos = proyectos.map(p => `<li>${p.nombre}<button type="button" data-nombre="${p.nombre}">Ver info</button></li>`).join('');
  return `
    <div>
      <div>
        <h2>Mis proyectos</h2>
        <button type="button" id="btn-logout">Logout</button>
        <ul id="lista-proyectos">
          ${listaProyectos}
        </ul>
        <pre>
          <p id="info-proyecto"></p>
        </pre>
      </div>
    </div>
  `;
}

function logout() {
  AuthToken.removeToken();
  setView();
}

function login() {
  AuthToken.setToken();
  setView(Views.Home);
}

function initListenersHome() {
  let btnLogout: HTMLButtonElement = document.querySelector('#btn-logout');
  btnLogout.addEventListener('click', (event) => {
    logout();
  });

  let buttonsInfo: NodeListOf<HTMLButtonElement> = document.querySelectorAll('#lista-proyectos > li > button');

  buttonsInfo.forEach(btn => {
    btn.addEventListener('click', event => {
      let nombreProyecto = btn.getAttribute('data-nombre');
      let proyecto = proyectos.find(p => p.nombre == nombreProyecto);
      try {
        document.querySelector('#info-proyecto').textContent = proyecto.getInfo();
      } catch(err) {
        Swal.fire({
          type: 'error',
          title: 'ERROR!',
          text: err
        }).then(() => {
          logout();
        })
      }
    })
  })
}

function initListenersLogin() {
  let btnLogin: HTMLButtonElement = document.querySelector('#btn-login');
  btnLogin.addEventListener('click', (event) => {
    let userInput: HTMLInputElement = document.querySelector('#user');
    let passwordInput: HTMLInputElement = document.querySelector('#password');

    let usuario = usuarios.find(u => u.username == userInput.value && u.password == passwordInput.value);

    if (usuario) {
      login()
    }
  })
}

export function setView(view: Views = Views.Login) {
  let contenedor: HTMLDivElement = document.querySelector('#container');
  if (view == Views.Home) {
    contenedor.innerHTML = getHomePage(proyectos);
    initListenersHome();
  } else {
    contenedor.innerHTML = getLoginPage();
    initListenersLogin();
  }
}