const d = document;
export function digitalClock(clock, btnPlay, btnStop) {
  let clockTempo;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3> ${clockHour}</h3>`;
      }, 1000);
      e.target.disabled = true;
    }
    if (e.target.matches(btnStop)) {
      clearInterval(clockTempo);
      d.querySelector(clock).innerHTML = null;
      d.querySelector(btnPlay).disabled = false;
    }
  });
}
export function alarm(sound, btnPlay, btnStop) {
  let alarmTempo;
  const $alarm = d.createElement("audio"); //Creo una etiqueta audio, por mas que no muestre nada. es para que el browser la vea
  $alarm.src = sound;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      if (e.target.matches(btnPlay)) {
        alarmTempo = setTimeout(() => {
          $alarm.play();
        }, 2000);
        e.target.disabled = true;
      }
    }
    if (e.target.matches(btnStop)) {
      clearTimeout(alarmTempo);
      $alarm.pause();
      $alarm.currentTime = 0; //vuelve al inicio el audio
      d.querySelector(btnPlay).disabled = false;
    }
  });
}
