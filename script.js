onload = () => {
  document.body.classList.remove("container");
};

function iniciarMusica(){

const audio = document.getElementById("musica");
if(!audio) return;

audio.volume = 0;

audio.play().then(()=>{

let volumen = 0;

const fade = setInterval(()=>{

volumen += 0.02;

if(volumen >= 1){
audio.volume = 1;
clearInterval(fade);
}else{
audio.volume = volumen;
}

},100);

}).catch(err=>{
console.log("Autoplay bloqueado:", err);
});

}

// detectar cualquier interacción del usuario
["click","touchstart","pointerdown"].forEach(evento=>{
document.addEventListener(evento, iniciarMusica, { once:true });
});
