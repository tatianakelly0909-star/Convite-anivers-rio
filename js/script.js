
// ==========================================
// NAVEGAÇÃO ENTRE AS TRÊS ETAPAS
// ==========================================

function mudarTela(telaAtual, proximaTela) {

    document.getElementById(telaAtual).classList.remove("active");

    document.getElementById(proximaTela).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ETAPA 1: ABRIR CORRESPONDÊNCIA

const openLetter = document.getElementById("openLetter");

openLetter.addEventListener("click", function() {

    mudarTela("screenLetter", "screenTerms");

});


// ETAPA 2: ACEITAR TERMOS

const acceptTerms = document.getElementById("acceptTerms");

const acceptMission = document.getElementById("acceptMission");

acceptTerms.addEventListener("change", function() {

    acceptMission.disabled = !acceptTerms.checked;

});

acceptMission.addEventListener("click", function() {

    if (!acceptTerms.checked) {
        return;
    }

    mudarTela("screenTerms", "screenInvite");

    iniciarContagem();

});


// ==========================================
// CONTAGEM REGRESSIVA
// ==========================================

// Novembro = mês 10 no JavaScript
// Horário local: 19h

const dataMissao = new Date(2026, 10, 28, 19, 0, 0);

let intervaloContagem = null;

function iniciarContagem() {

    if (intervaloContagem !== null) {
        return;
    }

    atualizarContagem();

    intervaloContagem = setInterval(atualizarContagem, 1000);

}

function atualizarContagem() {

    const agora = new Date();

    const diferenca = dataMissao - agora;

    if (diferenca <= 0) {

        document.querySelector(".countdown-area").innerHTML =
            "<h2>CHEGOU O GRANDE DIA! ❤️</h2>";

        clearInterval(intervaloContagem);

        return;
    }

    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferenca / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
        (diferenca / (1000 * 60)) % 60
    );

    const segundos = Math.floor(
        (diferenca / 1000) % 60
    );

    document.getElementById("days").textContent =
        String(dias).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(segundos).padStart(2, "0");

}


// ==========================================
// CONFIRMAÇÃO PELO WHATSAPP
// ==========================================

const mensagem =
    "Confirmo minha participação na Operação: Aniversário. " +
    "Estou ciente de que o destino é confidencial e prometo " +
    "comparecer com fome. Missão aceita! ❤️";

const whatsappButton =
    document.getElementById("whatsappButton");

whatsappButton.href =
    "https://wa.me/?text=" + encodeURIComponent(mensagem);


// ==========================================
// CONTROLE DA MÚSICA
// ==========================================

const music = document.getElementById("backgroundMusic");

const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click", async function() {

    if (music.paused) {

        try {

            await music.play();

            musicButton.textContent = "♫ PAUSAR TRILHA SONORA";

        } catch (error) {

            musicButton.textContent = "NÃO FOI POSSÍVEL REPRODUZIR";

        }

    } else {

        music.pause();

        musicButton.textContent = "♫ ATIVAR TRILHA SONORA";

    }

});
