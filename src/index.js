import cipher from './cipher.js';

const botaocod = document.getElementById("cripto");
botaocod.addEventListener("click",event => {
    event.preventDefault()                                     // previne o carregamento da pagina
    let offset = document.getElementById("offset").value;         // deslocamento 
    let text = document.getElementById("text").value;           // pegar a mensagem
    let numOffset = parseInt(offset);                            //mensagem para numero
    document.getElementById("code").innerHTML=cipher.encode(numOffset, text);
    console.log (botaocod);
});

const botaodec = document.getElementById("decripto");
botaodec.addEventListener("click",event => {
    event.preventDefault()                                     // previne o carregamento da pagina
    let offset = document.getElementById("offset").value;         // deslocamento 
    let text = document.getElementById("text").value;           // pegar a mensagem
    let numOffset = parseInt(offset);                            //mensagem para numero
    document.getElementById("code").innerHTML=cipher.decode(numOffset, text);
    console.log (botaodec);
});

console.log(cipher);























/* let cifra = prompt("Gostaria de inicar a Criptografia? Responda com sim ou não");
console.log(cifra); 

if (cifra.toLowerCase() == "não") {
        alert("Então tchau!");
}
else if (cifra.toLowerCase() === "sim") {
        alert("Coloque a mensagem que gostaria de enviar")
};

function cipher(str, num) {
    num = num % 26;
    var lowerCaseStr = str.tolowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.s[lit('')];
    var newStr = '';

    for(var i = 0; i < lowerCaseStr.length; i++) {
        var currentLetter = lowerCaseStr[i];
        if(currentLetter === ' ') {
            newStr += currentLetter;
            continue;
        }
        var currentIndex = alphabet.indexOf(currentLetter);
        var newIndex = currentIndex + num;
        if(newIndex > 25) newIndex = newIndex - 26;
        if(newIndex < 0) newIndex = newIndex + 26;
        if(str[i] === str[i].toUpperCase()) {
            newStr += alphabet[newIndex].toUpperCase();
        }
        else newStr += alphabet[newIndex];
    }
    return newStr;
}

/* let (CodigoDaletra + 7 ) % 26
((codigoDaletraASC - cod1aLetra + desloc) % tamDoalfabeto) + cod1aLetra;

function cifra(string) {
    return
}*/
//console.log(cipher);