
// criar Form
// Grupo: Anna Gabriele Lopes, Alexandre Pedro, Guiovany da Luz, Israel Almeida, Luana Borges. 

let form = document.createElement('form');

let login = document.createElement('h1');
login.innerText = "Login";
form.appendChild(login);

let email = document.createElement('input')
email.setAttribute('type', 'email');
email.setAttribute('placeholder', 'Email');
form.appendChild(email);

let senha = document.createElement('input')
senha.setAttribute('type', 'password');
senha.setAttribute('placeholder', 'Senha');
form.appendChild(senha);

let botaoEnviar = document.createElement ('button');
botaoEnviar.setAttribute('type', 'submit');
botaoEnviar.innerText="Enviar";
form.appendChild(botaoEnviar);

let botaoReset = document.createElement ('button');
botaoReset.setAttribute('type', 'cancel');
botaoReset.innerText="Cancelar";
form.appendChild(botaoReset);

email.setAttribute('disabled',true);

form.style.display = "flex";
form.style.flexDirection = "column";
form.style.gap = "16px";
form.style.maxWidth = "640px";
form.style.margin = "0 auto";

email.removeAttribute ('placeholder');

document.body.appendChild(form);

