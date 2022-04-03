const d = document,
  w = window;
export default function scrollTopButton(btn) {
  const $scrollBtn = d.querySelector(btn);

  w.addEventListener("scroll", (e) => {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop; //utilizo el || como operador de cortoCircuito, esto es que si el browser es muy viejo y no reconoce pageYOffset utiliza el documentElement q es el default.

    if (scrollTop > 600) {
      $scrollBtn.classList.remove("hidden");
    } else {
      $scrollBtn.classList.add("hidden");
    }

    //console.log(w.pageYOffset, d.documentElement.scrollTop);
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      //scrollTo te dice, a donde quieres ir, por eso se usa para subir
      w.scrollTo({
        behavior: "smooth", //smooth es el efecto que hace para subir.
        top: 0,
      });
    }
  });
}
