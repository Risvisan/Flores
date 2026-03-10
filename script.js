onload = () => {
  document.body.classList.remove("container");

};
document.addEventListener("DOMContentLoaded", function(){

    document.addEventListener("click", iniciarMusica, { once: true });
    document.addEventListener("touchstart", iniciarMusica, { once: true });

    function iniciarMusica(){

        const audio = document.getElementById("musica");

        if(audio){
            audio.volume = 0;
            audio.play();

            let volumen = 0;

            const fade = setInterval(()=>{

                if(volumen < 1){
                    volumen += 0.02;
                    audio.volume = volumen;
                }else{
                    clearInterval(fade);
                }

            },100);
        }
    }

});
