const d = document;
export default function countdown(id, limitDate, finalMessage) {
  const $countdown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime(); //convierto a milisegundos

  let countdownTempo = setInterval(() => {
    let now = new Date().getTime(),
      limitTime = countdownDate - now,
      days = Math.floor(limitTime / (1000 * 60 * 60 * 24)), //1000 (milisegund0s tiene una hora)*60(segundos tiene una hora)*60(minutos tiene una hora)*24(horas tiene un dia)
      hours = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).slice(-2), //% me quedo con el resultado despues de la ", " de dividir limitDate/la diferencia en dias
      minutes = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
      ).slice(-2),
      seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2); //El slice se utiliza para ver dos digitos en el reloj
    $countdown.innerHTML = `<h3>Faltan: ${days} Dias ${hours} Horas ${minutes} Minutos ${seconds} Segundos</h3>`;
    //console.log(countdownDate, now);

    if (limitTime < 0) {
      clearInterval(countdownTempo);
      $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
    }
  }, 1000);
}
