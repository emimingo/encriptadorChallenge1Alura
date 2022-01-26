// REGLAS DE ENCRYPTACION Y DESENCRIPTACION
const encryptRules = {
    e: 'enter',
    i: 'imes',
    a: 'ai',
    o: 'ober',
    u: 'ufat'
};

const desencryptRules = {
    enter: 'e',
    imes: 'i',
    ai: 'a',
    ober: 'o',
    ufat: 'u'
};

// CAPTURA DE INPUTS Y BOTONES
let inputTxt = document.querySelector('#input-texto');
let btnEncrypt = document.querySelector('#btn-encriptar');
let btnDesencrypt = document.querySelector("#btn-desencriptar");
let btnCopy = document.querySelector('#btn-copy');
let btnCopiar = document.querySelector('.btn-copiar');
let msgError = document.querySelector('.mensaje-error');

// EVENTOS DEL MOUSE
btnEncrypt.addEventListener('click', function(event){
    event.preventDefault();
    let txtToEncrypt = inputTxt.value;
    // funccion para validar el input
    let isTxtValid = validateStr(txtToEncrypt);

    if(!isTxtValid){
        showErrorMessage();
        return;
    }
    let txtEncrypted = encryptAndDesencrypt(txtToEncrypt, encryptRules);
    showMessage(txtEncrypted);
});

btnDesencrypt.addEventListener('click', function(event){
    event.preventDefault();
    let txtToDesencrypt = inputTxt.value;
    let isTxtValid = validateStr(txtToDesencrypt);

    if(!isTxtValid){
        showErrorMessage();
        return;
    }
    let txtDesencrypted = encryptAndDesencrypt(txtToDesencrypt, desencryptRules);
    showMessage(txtDesencrypted);  
});

btnCopy.addEventListener('click', function(){
    let msg = document.querySelector('#msg').textContent;
    navigator.clipboard.writeText(msg);
    inputTxt.focus();
});

// FUNCIONES
function encryptAndDesencrypt(txt, obj){

    let keys = Object.keys(obj);
    keys.forEach(key => { 
        let reg = new RegExp(key, "g");
        txt = txt.replace(reg, obj[key]);
    });
    return txt;
}

function showMessage(message){
    let msg = document.querySelector('#msg');
    msg.textContent = message;
    btnCopiar.classList.add('visible');
    msgError.classList.remove('visible');
    inputTxt.value = '';
    inputTxt.focus();
}

function validateStr(txt){
    let reg = new RegExp(/^[a-z0-9\s]+$/g);
    let isValid = reg.test(txt);

    return isValid;
}

function showErrorMessage(){
    btnCopiar.classList.remove('visible');
    msg.textContent = '';
    msgError.classList.add('visible');
}
