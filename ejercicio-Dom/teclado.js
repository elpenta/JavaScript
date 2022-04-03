const d = document;

let x = 0,
  y = 0;

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage);

  const limitBall = $ball.getBoundingClientRect(),
    limitStage = $stage.getBoundingClientRect();

  //  console.log(limitBall, limitStage);

  // console.log(e.keyCode);
  //console.log(e.key);

  //const move = (direction) => {};

  switch (e.keyCode) {
    case 37:
      //move("left");
      //e.preventDefault(); //Dentego los botnes defautl, cosa q no se mueva todo  el html
      if (limitBall.left > limitStage.left) {
        e.preventDefault();
        x--;
      }
      break;
    case 38:
      //move("up");

      if (limitBall.top > limitStage.top) {
        e.preventDefault();
        y--;
      }
      break;
    case 39:
      //move("right");
      //  e.preventDefault();
      if (limitBall.right < limitStage.right) {
        e.preventDefault();
        x++;
      }
      break;
    case 40:
      // move("down");

      if (limitBall.bottom < limitStage.bottom) {
        e.preventDefault();
        y++;
      }
      break;

    default:
      break;
  }

  $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}

export function shortcuts(e) {
  /*console.log(e);
  console.log(e.type);
  console.log(e.keyCode);
  console.log(e.ctrlKey); //devuelve true o false
  console.log(e.altKey); //devuelve true o false
  console.log(e.shiftKey); //devuelve true o false*/

  if (e.key === "a" && e.altKey) alert("Has lanzado una alerta con el teclado");
  if (e.key === "c" && e.altKey)
    confirm("Has lanzado una confirmacion con el teclado");
  if (e.key === "p" && e.altKey)
    prompt("Has lanzado una prompt con el teclado");
}
