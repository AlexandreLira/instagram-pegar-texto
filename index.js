function pegarTexto(imagem = false, tag = "'"){
    console.clear()

    text = document.querySelector('article .ZyFrc img').getAttribute('alt')
 

    // Exclui todos as tag do texto para pegar o texto principal
    
    text = text.slice(text.indexOf(tag) , text.length)
    

    // Transformar a string em um array
    text = text.split(' ')

    // Apaga o primeiro elemento
    text.shift()
 

    // Remove '.' e '"' do final do text
    let ultimaPalavra = text[text.length-1].split("")
    
    if (ultimaPalavra[ultimaPalavra.length - 2] == "'") {
        ultimaPalavra.pop()
        ultimaPalavra.pop()

        // Se não tiver o ponto final no final do texto vai ser adicionado!
        if(ultimaPalavra[ultimaPalavra.length - 1] != '.') {
            ultimaPalavra.push('.')
        }

        ultimaPalavra = ultimaPalavra.join("")

        text.pop()
        text.push(ultimaPalavra)
        
    }

    // transforma o array em um string com espaçamento
    text = text.join(' ').toLocaleLowerCase()
    text = text[0].toUpperCase() + text.slice(1, text.length)
    
    let inputTest = document.createElement("input");
    inputTest.value = text;
    //Anexar o elemento ao body
    document.body.appendChild(inputTest);

    inputTest.select();

    document.execCommand('copy');
    //remove o elemento
    document.body.removeChild(inputTest);


    console.log(text)
    // caso no parâmetro imagem for true, irar abrir uma nova abra com a imagem
    if(imagem) {
    url  = document.querySelector('.eLAPa.kPFhm .KL4Bh img').getAttribute('src')
    window.open(url)
    }
 
}
