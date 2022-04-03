export default function hamburguerMenu(panelBtn, panel, menuLink) {
  const d = document;
  d.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
    }
    if (e.target.matches(menuLink)) {
      /*esto es para que cuando seleccione una seccion del menu de hamb se cierre y vaya a esa session. Por eso por parametro recibe "menu a"*/
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(panelBtn).classList.remove("is-active");
    }
  });
}
