const d = document;

//draw=sorteo en ingles
export default function draw(btn, selector) {
  const getWinner = (selector) => {
    const $players = d.querySelectorAll(selector),
      random = Math.floor(Math.random() * $players.length), //ESto me devuelve un nro entre 1 y 10, al multiplicar por la cant del array de players
      winner = $players[random]; //winner es un array de un objeto, o puntero a la posicion el array, tengo q extraer el valor con textContent
    console.log($players, random, winner);
    return `El ganador es: ${winner.textContent}`;
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let result = getWinner(selector);
      alert(result);
      console.log(result);
    }
  });
}
//Esta funcion sirve para hacer sorteo en youtube, hizo un scraping del codigo,
//ejecutarlo desde la consola del F12
const getWinnerComment = (selector) => {
  const $players = document.querySelectorAll(selector),
    random = Math.floor(Math.random() * $players.length), //ESto me devuelve un nro entre 1 y 10, al multiplicar por la cant del array de players
    winner = $players[random]; //winner es un array de un objeto, o puntero a la posicion el array, tengo q extraer el valor con textContent
  console.log($players, random, winner);
  return `El ganador es: ${winner.textContent}`;
};
//getWinnerComment("ytd-comment-thread-renderer #author-text span");
