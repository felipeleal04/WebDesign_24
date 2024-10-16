function ContaVogais (texto)
{
    let cont =0;
    let i;
    for (i=0; i< texto.length; i++)
    {
        let char = texto[i].toLowerCase();

        if (char==='a'|| char ==='e' || char ==='i' || char==='o' || char==='u')
        {
            cont++;
        }
    }
    return cont;
}

console.log(ContaVogais("Java"));
console.log(ContaVogais("Felipe Leal"));