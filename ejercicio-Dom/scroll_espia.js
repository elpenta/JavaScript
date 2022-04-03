const d = document;
//A medida que hago focus voy capturando las secciones
export default function scrollSpy() {
  const $sections = d.querySelectorAll("section[data-scroll-spy]");

  const cb = (entries) => {
    //console.log("Entries:", entries);
    entries.forEach((entry) => {
      //console.log("Entry:",entry);
      const id = entry.target.getAttribute("id");
      //console.log(id);
      if (entry.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add(
          "active"
        );
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove(
          "active"
        );
      }
    });
  };

  const observer = new IntersectionObserver(cb, {
    //root : Es todo el doc, es el default
    //rootMargin: "-250px", //indica que hasta que no haya pasa los 250px, no lo muestra.
    threshold: 0.5, //Este maneja porcentajes, o sea, es el 50%.
  });

  $sections.forEach((el) => observer.observe(el));
}
