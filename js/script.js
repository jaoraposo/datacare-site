console.log("JavaScript está funcionando!");

document.addEventListener("DOMContentLoaded", () => {
  // 1. Scroll suave nos links do menu
  const menuLinks = document.querySelectorAll("nav a[href^='#']");
  menuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // 2. Botão "Saiba mais" da seção inicial (classe)
  const saibaMaisBtn = document.querySelector(".inicial_datacare button");
  if (saibaMaisBtn) {
    saibaMaisBtn.addEventListener("click", () => {
      const sobre = document.querySelector("#sobre-datacare");
      if (sobre) {
        sobre.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // 3. Botão "Saiba mais" com ID (caso tenha outro)
  const btnSaibaMais = document.getElementById("btn-saiba-mais");
  if (btnSaibaMais) {
    btnSaibaMais.addEventListener("click", () => {
      const contato = document.getElementById("contato");
      if (contato) {
        contato.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // 4. Envio de formulário com Firebase (caso o form exista)
  if (typeof firebase !== "undefined" && firebase.initializeApp && typeof firebaseConfig !== "undefined") {
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();

    const formContato = document.getElementById("formContato");
    if (formContato) {
      formContato.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = e.target.nome.value;
        const email = e.target.email.value;
        const mensagem = e.target.mensagem.value;

        database.ref("contatos").push({
          nome,
          email,
          mensagem,
          data: new Date().toISOString()
        });

        e.target.reset();

        const msgOk = document.getElementById("mensagem-ok");
        if (msgOk) {
          msgOk.style.display = "block";
        }
      });
    }
  }

  // 5. Mostrar reCAPTCHA ao clicar em "Ver Contato"
  const verContatoBtn = document.getElementById("ver-contato-btn");
  const captchaContainer = document.getElementById("captcha-container");

  if (verContatoBtn && captchaContainer) {
    verContatoBtn.addEventListener("click", () => {
      captchaContainer.style.display = "block";
      verContatoBtn.style.display = "none";
    });
  }
});

// 6. Função chamada automaticamente após o reCAPTCHA ser resolvido
function mostrarContato() {
  const dadosContato = document.getElementById("dados-contato");
  if (dadosContato) {
    dadosContato.style.display = "block";
  }
}
