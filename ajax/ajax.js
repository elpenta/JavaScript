//fUNCION AUTO EJECUTABLE, VISTO EN CAP 32.

//Traer info con XMLHttpRequest, ya deprecada.
(() => {
  //Instancio un tipo objeto XMLHttpRequest
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  //Abro el listener para escuchar cualquier cambio de evento
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;

    console.log(xhr);
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("Exito");
      //console.log(xhr.responseText);//Guardo lo q me traje del endpoint. y lo muestro por consola
      //$xhr.innerHTML = xhr.responseText; //Lo que me traje por el endpoint, lo meto en el html
      let json = JSON.parse(xhr.responseText); //Formateo en JSON lo  q recibo del endpoint
      // console.log(json);
      //Meto el contenido del json en el html
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.mail} --${el.phone}`;
        $fragment.appendChild($li);
      });
      $xhr.appendChild($fragment);
    } else {
      console.log("Error");
      let message = xhr.statusText || "Ocurrio un error!!";
      $xhr.innerHTML = `Error ${xhr.status} : ${message}`;
    }
    console.log("Este mensaje cargara de cualquier forma");
  });
  //Aca va el Endpoint de la api, y genero /preparo la solicitud que voy a hacer. metodo, endpoint
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  //Para leer un json desde un file
  //xhr.open("GET", "assets/file.json");
  //Envio la solicitud
  xhr.send();
})();

//Traer info con Fetch (Mas amigable)
(() => {
  //Instancio un tipo objeto XMLHttpRequest
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  //fetch trabaja con Promesas, por eso lleva then
  //En fetch no es necesario manipular el valor del estado de la trx, ejemplo el nro 4. Ya que devuelve true  o  False. y con las promesas valida el booleano true o false: ok: true
  //Fetch tmb funcion con file locales. fetch("assets/file.json")
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      console.log(res);
      //return res.json();
      //Agregando para que tome el error:
      return res.ok ? res.json() : Promise.reject(res); //Con el promise fuezo a ejecutar el Catch y salir por execpcion al encontrar un error
    })
    .then((json) => {
      console.log(json); //El res.json del Then anterior se paso a este y este lo imprimio, Magico(?)
      //$fetch.innerHTML = json;
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.mail} --${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      // console.log("Estamos en el Catch", err);
      let message = err.statusText || "Ocurrio un error!!";
      $fetch.innerHTML = `Error ${err.status} : ${message}`;
    })
    .finally(() =>
      console.log(
        "Esto se ejecutara independientemente del resultado  de la promesa Fetch"
      )
    );
})();

//Fetch Asincronico
(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      //La variable RES es de Respuesta
      let res = await fetch("https://jsonplaceholder.typicode.com/users"), //el Await es para que sea asyncronica
        json = await res.json(); //Espera con await para transformarlo en json
      console.log(res, json);

      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.mail} --${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetchAsync.appendChild($fragment);
    } catch (err) {
      console.log(err);
      let message = err.statusText || "Ocurrio un error!!";
      $fetchAsync.innerHTML = `Error ${err.status} : ${message}`;
    } finally {
    }
  }
  getData(); //Ejecucion de la funcion
})();

//Axios es una libreria externa. Se usa para resumir el codigo
(() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      console.log(res);
      let json = res.data;

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.mail} --${el.phone}`;
        $fragment.appendChild($li);
      });

      $axios.appendChild($fragment);
    })
    .catch((err) => {
      console.log(err.response);
      let message = err.statusText || "Ocurrio un error!!";
      $axios.innerHTML = `Error ${err.response.status} : ${message}`;
    })
    .finally(() => {
      console.log(
        "Esto se ejecutara independientemente del resultado  de la promesa Axios"
      );
    });
})();

//Axios asyncrona
(() => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

  //axios.get("https://jsonplaceholder.typicode.com/users");

  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users"), //el Await es para que sea asyncronica
        json = await res.data;

      console.log(res, json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.mail} --${el.phone}`;
        $fragment.appendChild($li);
      });

      $axiosAsync.appendChild($fragment);
    } catch (err) {
      console.log(err.response);
      let message = err.statusText || "Ocurrio un error!!";
      $axiosAsync.innerHTML = `Error ${err.response.status} : ${message}`;
    } finally {
      console.log(
        "Esto se ejecutara independientemente del Try...Catch AxiosAsync"
      );
    }
  }

  getData();
})();
