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

console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));
