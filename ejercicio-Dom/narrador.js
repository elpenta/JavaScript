const d = document,
  w = window;
export default function speedchReader() {
  const $speechSelect = d.getElementById("speech-select"),
    $speechTextarea = d.getElementById("speech-text"),
    $speechBtn = d.getElementById("speech-btn"),
    speechMessage = new SpeechSynthesisUtterance();

  console.log(speechMessage);

  let voices = [];

  d.addEventListener("DOMContentLoaded", (e) => {
    //console.log(w.speechSynthesis);
    //console.log(w.speechSynthesis.getVoices);

    w.speechSynthesis.addEventListener("voiceschanged", (e) => {
      // console.log(e);
      //Afuera del EventListener no anduvo el speechSynthesis.getVoices. porque tenia q acceder al metodo voiceschanged, es por esto que hizo listener con una arrow function y luego si aparecieron las 22 voces. tener en cuenta.

      voices = w.speechSynthesis.getVoices();
      //console.log(voices);

      voices.forEach((voice) => {
        const $option = d.createElement("option");
        $option.value = voice.name;
        $option.textContent = `${voice.name} - ${voice.lang}`;
        $speechSelect.appendChild($option);
      });
    });
  });

  //Aca se programa q lo q se lecciono en el combo lo tome para narrar
  d.addEventListener("change", (e) => {
    if (e.target === $speechSelect) {
      speechMessage.voice = voices.find(
        (voice) => voice.name === e.target.value
      ); //Aca digo cuando encuentra un Cambio "change" dispara la busqueda dentro del array de voice cargado antes, si es igual, lo cargo en speechMessage
    }
    //console.log(speechMessage);
  });

  d.addEventListener("click", (e) => {
    if (e.target === $speechBtn) {
      speechMessage.text = $speechTextarea.value;
      w.speechSynthesis.speak(speechMessage);
    }
  });
}
