const d = document,
  n = navigator,
  w = window;
export default function webCam(id) {
  const $video = d.getElementById(id);

  if (n.mediaDevices.getUserMedia) {
    //Lo que sigue son promesas, ya explicado anteriormente, es como switch Case
    n.mediaDevices
      .getUserMedia({ video: false, audio: false }) //activa el audio  (lo deje en false para que no acople) y camara
      .then((stream) => {
        console.log(stream);
        $video.srcObject = stream; //guarda el video en video
        $video.play(); //reporduce video
      })
      .catch((err) => {
        $video.insertAdjacentHTML(
          "beforeBegin", //imprime en el html antes del bloque de video
          `<p>Sucedio el siguiente Error!!: <mark> ${err}</mark></p>`
        );
        console.log(`Sucedio el siguiente error!!: ${err}`);
      });
  }
}
