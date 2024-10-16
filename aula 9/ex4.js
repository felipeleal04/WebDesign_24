let NomeCompleto = "Felipe Leal Cardoso";
let partes = NomeCompleto.split(" ");

let primeiroNome = partes[0].toLowerCase();
let ultimoNome = partes[partes.length - 1].toLowerCase();

let email= primeiroNome + "." +ultimoNome + "@facens.br";

console.log(email);