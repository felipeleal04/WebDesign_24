function InverteString(texto)
{
    let textoinvertido = "";

    for (let i= texto.length -1; i>=0; i--)
    {
        textoinvertido += texto[i];
    }
    return textoinvertido;
}

console.log(InverteString("JavaScript"));