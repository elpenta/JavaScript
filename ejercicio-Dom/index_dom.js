//console.log("HOLA");

import hamburguerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
//import { shortcuts } from "./teclado.js";
import { moveBall, shortcuts } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilters from "./filtro_busquedas.js";
import draw from "./sorteo.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll_espia.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidations from "./validaciones_formilario.js";
import speedchReader from "./narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "Apr 10, 2022 00:12:19", "Feliz cumpleaños");
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://youtu.be/glwwN1rRs8I" target ="_blank" rel="noopener">Ver Video </a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/glwwN1rRs8I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );

  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/uNPB7FaLRKCqDeEt7" target ="_blank" rel="noopener">Ver Mapa </a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13125.847337492225!2d-58.584979030395495!3d-34.668291749861545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7b45857a139%3A0xf71dd4c9038c0529!2sLabard%C3%A9n%203282%2C%20B1753EKD%20Villa%20Luzuriaga%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1647734959853!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam");
  getGeolocation("geolocation");
  searchFilters(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidations();
});
/* CUANDO PRESIONO LA TECLA*/
d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode"); //dark-mode es el nombre de la clase q va a tener el altributo de cada objeto del html que debe cambiar a Dark.

/* CUANDO SUELTO LA TECLA
d.addEventListener("keyup", (e) => {
  shortcuts(e);
});*/
/* LAS VECES QUE SE DISPARA EL EVENTO MIENTRAS TENGO PRESIONADO LA TECLA
d.addEventListener("keypress", (e) => {
  shortcuts(e);
});
*/

networStatus();
speedchReader(); //Se invocan afuera del listener del DOM porque usan obj del DOM.
