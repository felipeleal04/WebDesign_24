function ehPalindromo(texto) {
    let textoInvertido = "";
    
    // Percorre a string de trás para frente e inverte
    for (let i = texto.length - 1; i >= 0; i--) {
      textoInvertido += texto[i];
    }
  
    // Compara a string original com a invertida
    return texto === textoInvertido;
  }
  
  // Teste
  console.log(ehPalindromo("arara")); // true
  console.log(ehPalindromo("palindromo")); // false