const cipher = {
  encode: function (offset, string) {
    if (typeof offset !== 'number' || typeof string !== 'string') {
      throw new TypeError
    }
    let code = "";

    for (let i = 0; i < string.length; i++) {        // i vai ser o valor da letra
     let codeMensagem = string.charCodeAt(i);        // busca no site 
      if (codeMensagem >= 65 && codeMensagem <= 90) {
       let encript = ((codeMensagem - 65 + offset) %26 ) + 65;
       code += String.fromCharCode(encript);
    }
  }
  //console.log (code);
  return code;
  },

  decode: function (offset, string) {
    if (typeof offset !== 'number' || typeof string !== 'string') {
      throw new TypeError
    }
  let decode = "";

  for (let i = 0; i < string.length; i++) {        // i vai ser o valor da letra
   let decodeMensagem = string.charCodeAt(i);        // busca no site 
    if (decodeMensagem >= 65 && decodeMensagem <= 90) {
     let decript = ((decodeMensagem - 90 - offset) %26 ) + 90;
     decode += String.fromCharCode(decript);
  }
  }
  //console.log (decode);
  return decode;
  }
};

export default cipher;
