const d = document;

export default function contactFormValidations() {
  const $form = d.querySelector(".conctact-form"),
    $inputs = d.querySelectorAll(".contact-form [required");
  //las variables q usan $, es de buena practica utilizar $ para las variables deo DOM, para identificarlas.

  console.log(`Inputs: ${$inputs}`);
  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("keyup", (e) => {
    //El textarea no acepta pratones en HTML5 por eso creeamos el data-pattern
    if (e.target.matches(".contact-form [required]")) {
      let $input = e.target, //e.target lo meti en input para no repetir siempre "e.target"
        pattern = $input.pattern || $input.dataset.pattern; //los imput tienen pattern y los textarea tienen dataset.pattern por eos uso el operador de cortocicuito ||
      //console.log($input.pattern);
      if (pattern && $input.value !== "") {
        //el input.value!=="" es para que almenos tenga caracteres
        //console.log("El input tiene patron");
        let regex = new RegExp(pattern);
        return !regex.exec($input.value) //Valido que la informacion ingresa se le aplique el patron
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }

      if (!pattern) {
        //console.log("El input NO tiene patrons");
        return $input.value === ""
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }

      if ($input.value === "") {
        d.getElementById($input.name).classList.remove("is-active");
      }
    }
  });
  d.addEventListener("submit", (e) => {
    // e.preventDefault(); Para que envie el mail
    alert("Enviado Formulario");

    const $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contact-form-response");

    $loader.classList.remove("none");

    setTimeout(() => {
      $loader.classList.add("none"); //quito el loader
      $response.classList.remove("none"); //Pongo los datos han sido enviados
      //$form.reset(); //limpio el formlario luego de "enviarlos"
      d.forms["form1"].reset(); //limpio el formlario luego de "enviarlos"
      setTimeout(() => $response.classList.add("none"), 3000);
    }, 3000);
  });
}
