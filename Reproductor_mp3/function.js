const cancion =new Audio("heroes-davidbowie.mp3");

const play = document.getElementById('control')
play.innerHTML = '▶';

const Reproductor = () =>{
    return{
        playAudio: function() {
            if (cancion.paused) {
                cancion.play();
                play.innerHTML = '▶';
            } else {
                cancion.pause();
                play.innerHTML = '❚❚';
               
            }
          },
    }

}

var reproducir = Reproductor();
