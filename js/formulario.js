// SDKs Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBY3d0gkKhcqzEm3tABYqKyPb3by81jBaM",
    authDomain: "datacare-73bd2.firebaseapp.com",
    databaseURL: "https://datacare-73bd2-default-rtdb.firebaseio.com",
    projectId: "datacare-73bd2",
    storageBucket: "datacare-73bd2.appspot.com",
    messagingSenderId: "927788415506",
    appId: "1:927788415506:web:36fefc2d8f9de094f5b6cb",
    measurementId: "G-TCCGF13LW0"
  };
  
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  
  const form = document.getElementById("formulario");
  const sucesso = document.getElementById("sucesso");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
  
    database.ref("contatos").push({
      nome,
      email,
      mensagem,
      data: new Date().toLocaleString()
    });
  
    sucesso.style.display = "block";
    form.reset();
  });
  