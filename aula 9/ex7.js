function InverteString(texto)
{
    let textoinvertido = "";

    let i;
    for (i= texto.lenght -1; i>=0; i--)
    {
        textoinvertido += texto[i];
    }
    return textoinvertido;
}

console.log(InverteString("JavaScript"));