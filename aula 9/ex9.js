function validaEmail(email) {
    let arrobaIndex = email.indexOf('@'); // Índice do '@'
    let pontoIndex = email.indexOf('.', arrobaIndex); // Índice do '.' após o '@'
  
    // Verifica se existe um '@' e um '.' depois do '@'
    if (arrobaIndex > 0 && pontoIndex > arrobaIndex + 1) {
      return true;
    }
    return false;
  }
  
  // Teste
  console.log(validaEmail("exemplo@dominio.com")); // true
  console.log(validaEmail("exemplo@dominio")); // false
  console.log(validaEmail("exemplodominio.com")); // false