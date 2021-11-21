const reproducir={
    cancion:new Audio("heroes-davidbowie.mp3"),
    play:document.getElementById('control'),

    playAudio:function(){
        if (this.cancion.paused) {
            this.cancion.play();
            this.play.innerHTML = '▶';
        } else {
            this.cancion.pause();
            this.play.innerHTML = '❚❚';
           
        }
    }
}
