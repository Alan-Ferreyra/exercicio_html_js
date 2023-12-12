const form = document.getElementById("form-comparacao");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let CampoA = parseInt(document.getElementById("campo-A").value);
  let CampoB = parseInt(document.getElementById("campo-B").value);
  let mensagemSucesso = "<b>Sucesso</b>";
  let MensagemInvalido = "<b>Invalido</b>";

  if (CampoA < CampoB) {
    let containerMensagemSucesso = document.querySelector("#mensagem");
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = "block";
    containerMensagemSucesso.style.backgroundColor = "#4caf50";
    CampoA = "";
    CampoB = "";
  } else {
    let containerMensagemInvalido = document.querySelector("#mensagem");
    containerMensagemInvalido.innerHTML = MensagemInvalido;
    containerMensagemInvalido.style.display = "block";
    containerMensagemInvalido.style.backgroundColor = "#ff0000";
    CampoA = "";
    CampoB = "";
  }
  CampoA = "";
  CampoB = "";
});
