document.addEventListener("DOMContentLoaded", () => {

    function iniciarMusica() {

        const audio = document.getElementById("musica");
        if (!audio) return;

        audio.volume = 0;

        const playPromise = audio.play();

        if (playPromise !== undefined) {
            playPromise.then(() => {

                let volumen = 0;

                const fade = setInterval(() => {

                    volumen += 0.02;

                    if (volumen >= 1) {
                        audio.volume = 1;
                        clearInterval(fade);
                    } else {
                        audio.volume = volumen;
                    }

                }, 100);

            }).catch(err => {
                console.log("Autoplay bloqueado:", err);
            });
        }

    }

    document.addEventListener("click", iniciarMusica, { once: true });
    document.addEventListener("touchstart", iniciarMusica, { once: true });

});
