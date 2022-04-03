const d = document;
//input: la entrada de las busqueda
//selector: donde va a buscar
export default function searchFilters(input, selector) {
  //keyup: a medida q el usuario va escribiendo y liberando la tecla, se dispara la busqueda
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      // console.log(e.key);
      //..includes(e.targe...) evalua si el texto o obj enviado se encuentra dentro del elemento que estoy buscando
      //la Clase "filter" es la que si la add quiere decir q la card la oculto, si la remove quiere decir q la muestro

      //esto lo ggrego para cuando apriete ESC limpie el filtro, igualmente ya lo hace por default el browser
      if (e.key === "Escape") e.target.value = "";

      //console.log(e.target.value);

      d.querySelectorAll(selector).forEach((el) =>
        el.textContent.toLowerCase().includes(e.target.value) //o sea si conside, devuel True o False. y luego paso por promesas y evaluo q muestro
          ? el.classList.remove("filter")
          : el.classList.add("filter")
      );
    }
  });
}
