import cipher from './cipher.js';

const botaocod = document.getElementById("cripto");
botaocod.addEventListener("click",event => {
    event.preventDefault()                                     // previne o carregamento da pagina
    let offset = Number(document.getElementById("offset").value);         // deslocamento 
    let text = document.getElementById("text").value;           // pegar a mensagem
    let numOffset = parseInt(offset);                            //mensagem para numero
    document.getElementById("code").innerHTML=cipher.encode(numOffset, text);
    //console.log (botaocod);
});

const botaodec = document.getElementById("decripto");
botaodec.addEventListener("click",event => {
    event.preventDefault()                                     // previne o carregamento da pagina
    let offset = Number(document.getElementById("offset").value);         // deslocamento 
    let text = document.getElementById("text").value;           // pegar a mensagem
    let numOffset = parseInt(offset);                            //mensagem para numero
    document.getElementById("code").innerHTML=cipher.decode(numOffset, text);
    //console.log (botaodec);
});

//console.log(cipher);