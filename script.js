function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    let textoCifrado = texto
                            .replace(/e/gi, "enter")
                            .replace(/i/gi, "imes")
                            .replace(/a/gi, "ai")
                            .replace(/o/gi, "ober")
                            .replace(/u/gi, "ufat");

    if(texto.length!=0)
    {
        document.getElementById("texto").value= textoCifrado;
        tituloMensaje.textContent = "texto encriptado con exito.";
        parrafo.textContent="";
        muñeco.src="./imagenes/cerrado.png";
    }
    else{
        muñeco.src="./imagenes/muñeco.png";
        tituloMensaje.textContent="Ningun mensaje encontrado";
        parrafo.textContent="Ingresa el texto que deseas encriptar";
        swal("Eroor","Debes ingresar un texto","warning");
    }
}

function desencriptar ()
{
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    let textoCifrado = texto
                            .replace(/enter/gi, "e")
                            .replace(/imes/gi, "i")
                            .replace(/ai/gi, "a")
                            .replace(/ober/gi, "o")
                            .replace(/ufat/gi, "u");

    if(texto.length!=0)
    {
        document.getElementById("texto").value= textoCifrado;
        tituloMensaje.textContent = "texto desencriptado con exito.";
        parrafo.textContent="";
        muñeco.src="./imagenes/abierto.png";
    }
    else{
        muñeco.src="./imagenes/muñeco.png";
        tituloMensaje.textContent="Ningun mensaje encontrado";
        parrafo.textContent="Ingresa el texto que deseas encriptar";
        swal("Eroor","Debes ingresar un texto","warning");
    }
}
function copiar() {
texto.select();
navigator.clipboard.writeText(texto.value)
texto.value = "";
swal("Felicidades","texto copiado",);
muñeco.src="./imagenes/muñeco.png";
}