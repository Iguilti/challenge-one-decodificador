// CRIPTOGRAFAR E DESCRIPTOGRAFAR //

const textAreaOne = document.getElementById('textAreaOne');
const textAreaTwo = document.getElementById('textAreaTwo');


// criptografar
function btnCriptografar() {
    const textoCriptografado = criptografar(textAreaOne.value);
    textAreaTwo.value = textoCriptografado;
    textAreaOne.value = "";
}

function criptografar(stringCriptografada) {
    
    let matrizCodigo = [["e","enter"] , ["i","imes"] , ["a","ai"] , ["o","ober"] , ["u", "ufat"]];
    stringCriptografada = stringCriptografada.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringCriptografada.includes(matrizCodigo[i][0])) {
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringCriptografada;
}


// desccriptografar
function btnDescriptografar() {
    const textoDescriptografado = descriptografar(textAreaOne.value);
    textAreaTwo.value = textoDescriptografado;
    textAreaOne.value = "";
}


function descriptografar(stringDescriptografada) {
    
    let matrizCodigo = [["e","enter"] , ["i","imes"] , ["a","ai"] , ["o","ober"] , ["u", "ufat"]];
    stringDescriptografada = stringDescriptografada.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDescriptografada.includes(matrizCodigo[i][1])) {
            stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDescriptografada;
}
