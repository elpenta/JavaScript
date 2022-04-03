//fUNCION AUTO EJECUTABLE, VISTO EN CAP 32.
(() => {
  //Instancio un tipo objeto XMLHttpRequest
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  console.log(xhr);
  //Abro el listener para escuchar cualquier cambio de evento
  xhr.addEventListener("readystatechange", (e) => {});
  //Aca va el Endpoint de la api, y genero /preparo la solicitud que voy a hacer. metodo, endpoint
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  //Envio la solicitud
  xhr.send();
})();
