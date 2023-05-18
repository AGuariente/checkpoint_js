
function validarFormulario() {
    var nome = document.forms["formulario"]["nome"].value;
    var segundoNome = document.forms["formulario"]["segundoNome"].value;
    var email = document.forms["formulario"]["email"].value;
    var senha = document.forms["formulario"]["senha"].value;
    var confirmaçãoSenha = document.forms["formulario"]["confirmaçãoSenha"].value;

  
    if (nome == "" || segundoNome == "" || email == "" || senha == "" || confirmaçãoSenha== "") {
      alert("Por favor, preencha todos os campos!");
      return false;
    }

    if (senha != confirmaçãoSenha) {
      alert("Atenção, as senhas digiadas não são iguais");
      return false;
    }
  }