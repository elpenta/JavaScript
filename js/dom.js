/*console.log(window.document);
console.log(document);
console.log("Hola Dom");
console.log(document.head);
console.log(document.body);
console.log(document.doctype);
console.log(document.links);
console.log(document.images);
console.log(document.scripts);
//Cuando lo ejecuto, tengo q seleccionar y te lo muestra lo que seleccione
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 3000);*/

/*
console.log(document.getElementsByTagName("li")); //devuelve toda la lista de li del doc html
console.log(document.getElementsByClassName("card")); //devuelve todas las clases etiquetadas con "card"
console.log(document.getElementsByName("nombre")); //Devuelve el objeto etiquetado con nombre, que en el html seria:  <input type="text" name="nombre" placeholder="Nombre">
console.log(document.getElementById("menu"));

//Los dos primeros metedos fueron reemplazados por los siguientes

console.log(document.querySelector("#menu")); //<li><a href="#">Seccion 5</a></li>
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));

console.log(document.querySelectorAll("a").length);

document.querySelectorAll("a").forEach((el) => console.log(el));

console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]); //Elijo la figura 2
console.log(document.querySelectorAll("#menu li"));
console.log(document.querySelector("#menu li")); */

/*
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

//Una buena practica es anteponer al nombre $ delane de la variable o constante para indicar que es variable del DOM/HTML
const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM);

$linkDOM.setAttribute("target", "_blank"); //te abre otra pestaña o lo q le digas.
//$linkDOM.setAttribute("href", "https://youtube.com/jonmircha");

$linkDOM.setAttribute("rel", "noopener"); //para evitar cualquier inseguridad de la pestaña. no hay dependencia de la nueva ventana y la q abri

console.log($linkDOM.hasAttribute("rel")); //has verifico si el atributo rel existe

$linkDOM.removeAttribute("rel"); //remuevo el atributo rel
console.log($linkDOM.hasAttribute("rel")); //has verifico si el atributo rel existe

//Data-Attributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de objeto del documento");
console.log($linkDOM.dataset.description);
*/
const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM.style); //devuelve todas las propiedades de style
console.log($linkDOM.getAttribute("style")); //devuelve el valor que agregue al html
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);

//Editar el stilo
$linkDOM.style.setProperty("text-decoration", "none"); //quita el subrayado de DOM
$linkDOM.style.setProperty("display", "block"); //Lo pone en toda la pantalla
$linkDOM.style.width = "50%"; //Lo pone al 50 porciento de la pantalla.
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRigth = "auto";
$linkDOM.style.padding = "1rem"; //Lo hace tipo boton
$linkDOM.style.borderRadius = ".5rem"; //redodndea las puntas

//Variables CSS - Custom Properties CSS
const $html = document.documentElement,
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color"),
  varWhiteColor = getComputedStyle($html).getPropertyValue("--white-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor; //cambio el color de fondo
$body.style.color = varYellowColor; //cambiar el color de las letras

//Cambiar el color definido en la variables, por pink
$html.style.setProperty("--dark-color", "pink");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"); //redefino el color a rosa

$body.style.setProperty("background-color", varDarkColor); //para q el body tome el color definido

//Vuelvo al color negro
$html.style.setProperty("--dark-color", "#222");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"); //redefino el color a rosa

$body.style.setProperty("background-color", varDarkColor); //para q el body tome el color definido

//Vuelvo al color blanco
$body.style.setProperty("background-color", varWhiteColor); //para q el body tome el color definido

//y letras neggras
$body.style.color = varDarkColor;

//-------------------------------------
//Style CSS
const $card = document.querySelector(".card"); //Accedo a la clase definida en el html

console.log($card);
console.log($card.className); //Obtengo el nombre de la clase que guarde en $card-.
console.log($card.classList);
console.log($card.classList.contains("rotate-45")); //chequeo si el objeto CARD tiene el metodo "rotate-45".
$card.classList.add("rotate-45"); //Asigno el metodo al objeto CARD.
console.log($card.classList); //Listo los metodos y me aparece el ultimo q agregue.
$card.classList.remove("rotate-45"); //Borro el metodo del objeto
console.log($card.classList);
$card.classList.toggle("rotate-45"); //Este metodo lo que hace es verificar si CARD tiene el metodo "rotate-45" si no lo tiene lo asigna, ahora si lo tiene, se lo saca. es por ejemplo como un ON/OFF
console.log($card.classList);
$card.classList.toggle("rotate-45"); //Este metodo lo que hace es verificar si CARD tiene el metodo "rotate-45" si no lo tiene lo asigna, ahora si lo tiene, se lo saca. es por ejemplo como un ON/OFF
$card.classList.replace("rotate-45", "rotate-135"); //Reemplaza el metodo 45 por 135 en CARD, para hacer esta prueba en el codigo, tengo q comentar la linea del toogle anterior, solo una de ellas.
$card.classList.add("opacity-80", "sepia"); //Agregar varios metodos al objeto
$card.classList.remove("opacity-80", "sepia"); //remover varios

//Para interactar con el HTML y por ejemplo editar un texto del HTML

const $whatIsDOM = document.getElementById("que-es");

let text = `
    <p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
    Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
    `;

$whatIsDOM.innerText = text; //Este metodo "innerText" es creado solo para internet explorer, lo que hace es reemplazar literalmente con los espacios, tabulaciones, etc lo q paso por text
$whatIsDOM.textContent = text; //Este metodo es el estandard y es el que se utiliza, este reemplaza tal cual, pero no respeta espacios, enter o tabulaciones.
$whatIsDOM.innerHTML = text; //Este metodo reemplaza pero respetando el formato html que paso por codigo.
//si paso texto sin formato, uso TEXTCONTENT, y si paso formato HTML uso INNERHTML.
$whatIsDOM.outerHTML = text; //La diferencia con INNERHTML es que este borra el id "que-es" y en su lugar copia los q pase por text. INNEHTML, lo reemplaza y la etiqueta sigue llamandose "que-es"

////Para poner un marco en la sesion cards
/*.cards {
      border: thin solid var(--dark-color);
      padding: 1rem;
    }
    */

///Para recorrer el DOM con metodos
const $cards = document.querySelector(".cards");

console.log($cards); //Lista el contenido de ese elemnto del dom
console.log($cards.children); //Los hijos de esa session "cards" que son las card, las figuras
console.log($cards.children[2]); //Puntualmente identificar uno de esos elementos
console.log($cards.parentElement); //Padre de ese elemento cards.
console.log($cards.firstElementChild); //Primer elemento de esa seccion, en este caso la figura 1
console.log($cards.lastElementChild); //Idem anterior pero el ultimo
console.log($cards.previousElementSibling); //El elemento anterior a la session cards
console.log($cards.nextElementSibling); //Idem anterior pero el siguiente
console.log($cards.children[3].closest("section")); //Cual la section  mas cercano al elemento seleccionado

//----------------------------------------------Clase 68

//AGREGAR NODO AL HTML, EN ESTE CASO SE AGREGA UNA FIGURA
//voy a crear constantes para los diferentes atributos que necesito para agregar un nodo el html
const $figure = document.createElement("figure"), //nodo tipo figure
  $img = document.createElement("img"), //va a tener la imagen a mostrar
  $figcaption = document.createElement("figcaption"), //
  $figcaptionText = document.createTextNode("Animales!"), //label de la figura
  $cards2 = document.querySelector(".cards"); //clase padre

//Configuracion de la imagen
$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

//Agrego todos los atributos a la constnate figure
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards2.appendChild($figure);

//Otra forma de crear nodos es:
$figure2 = document.createElement("figure");

$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People" >
<figcaption> People</figcaption>
`;
$figure2.classList.add("card");
$cards2.appendChild($figure2);

//------------------------------------------------------------------
const continentes = ["Africa", "America", "Asia", "Europa"],
  $ul2 = document.createElement("ul"); //crea un elemento del tipo ul. para etiquetas

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = ""; //inicializamos el elemento, por mejores practicas
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`)); // Agrega un li por cada iteracion del forEach

//Otra menera de ahcerlo es
const estaciones = ["Primavera", "verano", "Otoño", "invierno"],
  $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li); //va agregando al dom las li del array
});

//Esta forma es la mas utilizada y performante que hay, USAR ESTA!!
const meses = ["Enero", "Febrero", "Marzo", "Abril"],
  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment(); //Esta variable guardara todo los elementos del array para luego agregarlo al DOM

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li); //agrega los fragmentos
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);

//-------------------Clase 69--------------------------------------------------------------------
//Template
const $cards3 = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content, //me quedo con el contenido del template.
  $fragment2 = document.createDocumentFragment(),
  cardContent = [
    {
      tittle: "Tecnologia",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      tittle: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      tittle: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
  ];

cardContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.tittle);
  $template.querySelector("figcaption").textContent = el.tittle;

  let $clone = document.importNode($template, true); //lo que hace es importar el template, true seria el contenido de la constante template, si pongo False, seria su estructura
  $fragment2.appendChild($clone); //agrego a fragmentos todo, para luego agregarlo al boy
});

$cards3.appendChild($fragment2);

//--------------CLASE 71 es para agregar una imagen o texto antes, despues, primer hijo o ultimo hijo. En diferentes Posiciones
//insertAdjacentHTML("beforeend" o afterbegin) etc

//Clase 72..Manejador de botones con eventos
function holaMundo() {
  alert("Hola Mundo");
  console.log(event);
}

const $eventoSemantico = document.getElementById("evento-semantico"),
  $eventoMultiple = document.getElementById("evento-multiple"),
  $eventoRemover = document.getElementById("evento-remover");

$eventoSemantico.onclick = holaMundo; //sin parentesis, sino se ejecutara la funcion. tiene q ir ()

//onClick solo pemite una sola funcion a la vez.
//ejemplo ahora toma esta funcion, y no la holaMundo.
$eventoSemantico.onclick = function (e) {
  //la "e" es del evento, representa evento
  alert("Hola mundo manejador de eventos semantico");
  console.log(e); //cualquiera de las dos linea e o evento, es lo mismo
  console.log(event);
};

//Ahora manejador multiple de eventos, para que el boton pueda manejar diferentes eventos y no solo el ultimo
$eventoMultiple.addEventListener("click", holaMundo); //Listener seria el segundo parametro y va el nombre de la funcion
$eventoMultiple.addEventListener("click", (e) => {
  //Le asigno otro evento al boton, y ejecuta las dos funciones.
  alert("Hola Mundo manejador de eventos multiple");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(event);
});

////----------------clase 73 pasar parametros a eventos o removerlos
function saludar(nombre = "Desconocid@") {
  alert(`Hola ${nombre} `);
}
$eventoMultiple.addEventListener("click", () => {
  saludar();
  saludar("Pablo");
}); //De esta menera se tiene q agregar para que reciba el parametro, tenes q agregar la ArrowFunction. asi podes pasar parametros

//Remover un evento de un boton despues de ejecutarlo.
const removerDobleClick = (e) => {
  alert(`Removiendo el evento de tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disabled = true; //Deshabilta el boton
};

$eventoRemover.addEventListener("dblclick", removerDobleClick); //ejecuta el evento del boton luego del doble click. la funcion invocada luego de mostrar, deshabilita el mismo
//****************************************************************************************************** */

//Clase 74 Flujo de eventos Burbujas y capturas en DOM MUY BUENO

const $divsEventos = document.querySelectorAll(".eventos-flujo div"); //Esto es un node list. se puede iterar.

console.log($divsEventos);

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo origino ${e.target.className} `
  );
  //e.stopPropagation();
}

$divsEventos.forEach((div) => {
  //Fase de Burbuja
  // div.addEventListener("click", flujoEventos, false); //Por default es false, va del hijo al padres, o sea, 3, 2, 1
  //Fase de captura
  //div.addEventListener("click", flujoEventos, true); //Se usa poco con true, seria mas optimo. es de padres al hijo, o sea, 1, 23
  //Pasando un objeto como terce parametro
  div.addEventListener("click", flujoEventos, {
    capture: false,
    once: false,
  }); //de esta menera usas una variable con una opcion de ONCE por ejemplo para que solo se ejecute una vez. ejemplo
});

//Clase 75 --Stop Propagacion y preventDefault
/*function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo origino ${e.target.className} `
    e.stopPropagation();
  );
}
Si tengo una funcion dentro de una de las divisiones, ejemplo la 3, y no quiero que se ejecute 2 y 1, pongo el e.stopPropagation(); dentro de la funcion de la div 3 para que no se ejecuten las otras dos divisiones.
*/
//***************************************************************** */
//***************************************************************** */
//***************************************************************** */
//clase 76
//Generar un listener para todo el documento, en el cual, cualquier click sea detectado y origine una accion (programatica). Este evento "click" o "dblclick" depende del padre, por lo cual no es necesario detener la propagacion de eventos.

//Esto reemplaza todo lo anterior, es lo q usa JON

const $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos2(e) {
  console.log(
    `Hola te saluda ${this}, el click lo origino ${e.target.className} `
  );
  //e.stopPropagation(); No es necesario
}
//target.matches= busca un selector valido
document.addEventListener("click", (e) => {
  console.log("Click en ", e.target);

  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos2(e);
  }

  if (e.target.matches(".eventos-flujo a")) {
    alert("hola soy tu amigo y docente digital");
    e.preventDefault(); //Este metodo realiza el stop propagation y no es necesario forzar detenerlo
  }
});

//************************************************************************ */
///Clase 77 BOM
//************************************************************************ */
document.write("<h5>------------------------------</h5>");
document.write("<h4>CLASS -  BOM</h4>");
document.write("<h5>------------------------------</h5>");

window.addEventListener("resize", (e) => {
  //Tomas el eventos resize
  console.clear();
  console.log("**********Evento Resize*************");
  console.log(window.innerHeight);
  console.log(window.innerWidth);
  console.log(window.outerHeight);
  console.log(window.outerWidth);

  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);

  //Si ahora muevo o agrando el browser, muestra en consola el tamaño
});

//evento scroll
//Lo comento porque loguea mucho
/*
window.addEventListener("scroll", (e) => {
  //Tomas el eventos resize
  //console.clear();
  console.log("**********Evento Scroll*************");

  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);

  //Si ahora achico o agrando el browser, muestra en consola el tamaño
});
*/

//Lo comento porque loguea mucho
/*
//evento  Load que te dice donde se levanto el browser con respecto a la/s pantallas
window.addEventListener("load", (e) => {
  //Tomas el eventos en la primer recarga sale el evento

  console.log("**********Evento Load*************");

  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});*/

//evento  DOMContentLoaded que te dice donde se levanto el browser con respecto a la/s pantallas
//Este evento por MEJORES PRACTICAS SE DEBE USAR ANTES QUE EL LOAD, YA QUE CARGA MAS RAPIDO
//Load carga todo, Style, html, todo el dom, completo antes de presentar la pantalla.

//Lo deshabilite por que logeua mucho
/*
window.addEventListener("DOMContentLoaded", (e) => {
  //Tomas el eventos en la primer recarga sale el evento

  console.log("**********Evento DOMContentLoaded*************");

  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});
*/
///Clase 78

//window.alert("Alerta");//Alerta
//window.confirm("confiirmacion"); //Cinfirmacion
//window.prompt("Aviso");//Aviso
//alert("Alerta"); //es lo mismo

const $btnAbrir = document.getElementById("abrir-ventana"),
  $btnCerrar = document.getElementById("cerrar-ventana"),
  $btnImprimir = document.getElementById("imprimir-ventana");

let ventana; //Guarda la referencia del metodo windows.open

$btnAbrir.addEventListener("click", (e) => {
  ventana = window.open("https://jonmircha.com");
});
$btnCerrar.addEventListener("click", (e) => {
  ventana.close();
});
$btnImprimir.addEventListener("click", (e) => {
  window.print();
});

//Clase 79: URL, historial.
console.log("******************Objeto URL(location)************");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash); //http://127.0.0.1:5500/dom.html#pablo
console.log(location.pathname);
console.log(location.search); //http://127.0.0.1:5500/dom.html?nombre=jon%edad=36

console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker); //Convertir una web a aplicacion. Instalable como extension en chrome.
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);
