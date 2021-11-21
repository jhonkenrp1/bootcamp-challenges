
const Reproductor=function(){
    this.cancion=new Audio("heroes-davidbowie.mp3");
    this.play=document.getElementById('control');
};

Reproductor.prototype.playAudio=function(){
    if (this.cancion.paused) {
        this.cancion.play();
        this.play.innerHTML = '▶';
    } else {
        this.cancion.pause();
        this.play.innerHTML = '❚❚';
       
    }
}

 const reproducir =new  Reproductor();
