
function validarFormulario() {
  var nome = document.forms["formulario"]["nome"].value;
  var segundoNome = document.forms["formulario"]["segundoNome"].value;
  var email = document.forms["formulario"]["email"].value;
  var senha = document.forms["formulario"]["senha"].value;
  var confirmacaoSenha = document.forms["formulario"]["confirmaçãoSenha"].value;

  // Verifica se todos os campos estão preenchidos
  if (nome == "" || segundoNome == "" || email == "" || senha == "" || confirmacaoSenha == "") {
    alert("Por favor, preencha todos os campos!");
    return false;
  }

  // Coloca um minimo de letras  verifica
  if (nome.length < 5 || segundoNome.length < 5 || email.length < 5) {
    alert("Digite pelo menos 5 letras nos campos Nome, Segundo Nome e Email.");
    return false;
  }

  // Verifica o comprimento mínimo e máximo de 6 a 8 letras 
  if (senha.length < 6 || senha.length > 8) {
    alert("A senha deve ter entre 6 e 8 letras.");
    return false;
  }

  // Verificar se a senha e a confirmação de senha são iguais
  if (senha !== confirmacaoSenha) {
    alert("Atenção, as senhas digitadas não são iguais.");
    return false;
  }

  return true;
}

// Puxa os campos do HTML
document.addEventListener("DOMContentLoaded", () => {
  const inputNome = document.getElementById("nome");
  const labelNome = document.querySelector("label[for='nome']");
  const inputSegundoNome = document.getElementById("segundoNome");
  const labelSegundoNome = document.querySelector("label[for='segundoNome']");
  const inputEmail = document.getElementById("email");
  const labelEmail = document.querySelector("label[for='email']");
  const inputSenha = document.getElementById("senha");
  const labelSenha = document.querySelector("label[for='senha']");
  const inputConfirmacaoSenha = document.getElementById("confirmaçãoSenha");
  const labelConfirmacaoSenha = document.querySelector("label[for='confirmaçãoSenha']");

  
// Adiciona uma borda vermelha até o campo estar validado
  inputNome.addEventListener("keyup", () => {
    if (inputNome.value.length < 5) {
      inputNome.style.outlineColor = "#ff0000";
    } else {
      inputNome.style.outlineColor = "#00ff00";
    }
  });

  inputSegundoNome.addEventListener("keyup", () => {
    if (inputSegundoNome.value.length < 5) {
      inputSegundoNome.style.outlineColor = "#ff0000";
    } else {
      inputSegundoNome.style.outlineColor = "#00ff00";
    }
  });

  inputEmail.addEventListener("keyup", () => {
    if (inputEmail.value.length < 5 || !inputEmail.value.includes("@")) {
      inputEmail.style.outlineColor = "#ff0000";
    } else {
      inputEmail.style.outlineColor = "#00ff00";
    }
  });

  inputSenha.addEventListener("keyup", () => {
    if (inputSenha.value.length < 6 || inputSenha.value.length > 8) {
      inputSenha.style.outlineColor = "#ff0000";
    } else {
      inputSenha.style.outlineColor = "#00ff00";
    }
  });

  inputConfirmacaoSenha.addEventListener("keyup", () => {
    if (inputConfirmacaoSenha.value !== inputSenha.value) {
      inputConfirmacaoSenha.style.outlineColor = "#ff0000";
    } else {
      inputConfirmacaoSenha.style.outlineColor = "#00ff00";
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  const inputDarkMode = document.getElementById('input-dark-mode')
      
  inputDarkMode.addEventListener('change', () => {
      if(inputDarkMode.checked){
          html.setAttribute("dark", "true")
      }else{
          html.removeAttribute("dark")
      }
  })
})