const textArea=document.querySelector(".text-area");
const mensaje= document.querySelector(".mensaje");



function encriptar(mensajeEncriptado){
    let llaveEncriptada=[["e","enter"],["i", "ines"],["a","ai"],["o","ober"],["u","ufat"]];
console.table(llaveEncriptada);
mensajeEncriptado=mensajeEncriptado.toLowerCase();




for(let i=0;i<llaveEncriptada.length;i++){
    if(mensajeEncriptado.includes(llaveEncriptada[i][0])){
        mensajeEncriptado=mensajeEncriptado.replaceAll(llaveEncriptada[i][0],llaveEncriptada[i][1]);
    }
}
return mensajeEncriptado; 
}

function mostrarEncriptado(){
    const textEncriptado=encriptar(textArea.value);
    mensaje.value=textEncriptado;
    textArea.value="";
    mensaje.style.backgroundImage="none";
    console.log(textEncriptado);
}

function desencriptar(mensajeDesencriptado){
    let llaveEncriptada=[["e","enter"],["i", "ines"],["a","ai"],["o","ober"],["u","ufat"]];
console.table(llaveEncriptada);
mensajeDesencriptado=mensajeDesencriptado.toLowerCase();




for(let i=0;i<llaveEncriptada.length;i++){
    if(mensajeDesencriptado.includes(llaveEncriptada[i][1])){
        mensajeDesencriptado=mensajeDesencriptado.replaceAll(llaveEncriptada[i][1],llaveEncriptada[i][0]);
    }
}
return mensajeDesencriptado; 
}

function mostrarDesencriptado(){
    const textEncriptado=desencriptar(textArea.value);
    mensaje.value=textEncriptado;
    textArea.value="";
    console.log(textEncriptado);
}


function copiarTexto(){
    let msj=document.getElementById("m");
    let btn=document.getElementById("b");
   
    navigator.clipboard.writeText(msj.value);
    console.log(msj.value);

    btn.textContent = '¡Copiado!';
    setTimeout(() => {
        btn.textContent = 'Copiar '; 
    }, 2000);
   
} 

// function copiarTexto(){
//     const textoAcopiar=document.getElementById("m");

//     textoAcopiar.select();
//     textoAcopiar.setSelectionRange(0,99999);
//     document.execCommand("copiado");

//     window.getSelection().removeAllRanges();
//     console.log(textoAcopiar);
//     //alert("texto copiado en portapapeles");
// }
 