let diccionario =  ['JARRA','VASO','PLATO','CUCHARA','TENEDOR','REGLA','LAPIZ','MOCHILA','PELOTA','SOGA','CAJA','ZAPATILLA',
                    'PANTALON','PINCEL','OLLA','PAPEL','CARPETA','CUADERNO','LIBRO','CELULAR','TELEFONO','LIBRETA','TIJERA',
                    'AGUJA','HILO','BROCHE','JABON','MARTILLO','ESCOBA','CLAVO'];
// let diccionario=['UNO','DOS'];
// let nuevasPalabras=[];
var repetidasLetras=[];
var letrasRepetidas=[];
var incognita;
var cadenaTemporal;
let errores;


////////////////////////////////////////////////////////////////////// QUITA LOS ELEMENTOS NO NECESARIOS
function desaparecer(){
        document.getElementById('pie').style.display="none";
        document.getElementById('inicio').style.display="none";
        document.getElementById('nuevaPalabra').style.display="none";
}


////////////////////////////////////////////////////////////////////// INICIA EL JUEGO
function newGame() {
        
    desaparecer();
    document.getElementById('thegame').style.display="contents";
    document.getElementById('guessletter').value="";
    document.getElementById('underlines').value="";
    palabraAzar();
}


////////////////////////////////////////////////////////////////////// ESCOGE UNA PALABRA AL AZAR DEL DICCIONARIO
function palabraAzar(){
    errores=1;
    repetidasLetras=[];
    letrasRepetidas=[];
    patibulo(11);
    document.getElementById('guessletter').value="";
    document.getElementById('guessletter').focus();
    document.getElementById('repetidas').value="";

    palabra = diccionario[Math.round(Math.random()*diccionario.length)];    
    // alert(palabra);
    incognita = palabra.split('');
    reemplazar(incognita,1);
}


////////////////////////////////////////////////////////////////////// PONE LAS LETRAS DESCONOCIDAS
function reemplazar(mensaje, nuevo) {
    var cadena=[];
    
    if(nuevo){
        for(let pos=0; pos<mensaje.length;pos++){
            cadena[pos]='_';
        }
        cadenaTemporal=cadena;
    }

    else{
        cadena=cadenaTemporal;
        for(let pos=0; pos<incognita.length;pos++){
            if(incognita[pos]==mensaje){
                cadena[pos]=mensaje;
            }
        }
        cadenaTemporal=cadena;
    }

    aCadena(cadena);
    checkWin(cadena);
}



///////////////////////////////// VERIFICA SI SE ENCONTRÓ LA PALABRA Y/O ENVIA PARA CHECAR LAS LETRAS
function verificar(event){    
    let key = event.key;
    key = key.toUpperCase();
    let valorLetra=event.which;

    if (valorLetra >= 65 && valorLetra <= 90){
        document.getElementById('guessletter').focus();  
        document.getElementById('guessletter').value=" ";

        if(palabra.includes(key)){
            reemplazar(key,null);
        }
        else{
            repetidas(key);
            patibulo(errores);
            errores+=1;
        }
    }
    else{
        alert('SOLO LETRAS');
        document.getElementById('guessletter').focus(); 
        document.getElementById('guessletter').value=" ";
    }
}

////////////////////////////////////////////////////////////////////// VERIFICA E IMPRIME LETRAS REPETIDAS
function repetidas(key){

    if(repetidasLetras.includes(key)){
        letrasRepetidas += key;
        document.getElementById('repetidas').value=letrasRepetidas;
    }
    repetidasLetras+=key;    
}


////////////////////////////////////////////////////////////////////// PREPARA LA CADENA PARA SU IMPRESION
function aCadena(cadena){
    cadena=cadena.toString();
    cadena=cadena.replace(/[',']/g, '');
    document.getElementById('underlines').value=cadena;
}



////////////////////////////////////////////////////////////////////// VERIFICAR PALABRA COMPLETADA
function checkWin(cadena){
    let conta=0;
    let pos=0;
    
    while(cadena[pos]==incognita[pos] && pos<palabra.length){
        conta+=1;
        pos++;
    }
    if(conta==palabra.length){
        patibulo(12);
    }
}


////////////////////////////////////////////////////////////////////// REGRESA A INDEX (INICIO)
function resetear(){
    window.open("index.html", "_self");
}


////////////////////////////////////////////////////////////////////// AGREGA PALABRAS AL DICCIONARIO
function newWord(){
    desaparecer();
    document.getElementById('thegame').style.display="none";
    document.getElementById('nuevaPalabra').style.display="contents";
}

function nuevaPalabra(){
    var palabra=document.getElementById('caja-nuevaPalabra').value;
    diccionario[(diccionario.length)]=palabra.toUpperCase();
    newGame();
}


////////////////////////////////////////////////////////////////////// HACER PATIBULO

function patibulo(errores){
    var pantalla = document.querySelector('canvas');
    var pincel = pantalla.getContext('2d');
    var img = new Image();

    
    switch (errores) {
        case 1:
            img.src = "./img/mono/1.png";
            dibujarParte(pincel,img,10,390);
            break;
        case 2:
            img.src = "./img/mono/2.png";
            dibujarParte(pincel,img,155,35);
            break;
        case 3:
            img.src = "./img/mono/3.png";
            dibujarParte(pincel,img,155,35);
            break;
        case 4:
            img.src = "./img/mono/4.png";
            dibujarParte(pincel,img,330,35);
            break;
        case 5:
            img.src = "./img/mono/5.png";
            dibujarParte(pincel,img,302,80);
            break;
        case 6:
            img.src = "./img/mono/6.png";
            dibujarParte(pincel,img,330,140);
            break;
        case 7:
            img.src = "./img/mono/7.png";
            dibujarParte(pincel,img,332,150);
            break;
        case 8:
            img.src = "./img/mono/8.png";
            dibujarParte(pincel,img,295,150);
            break;
        case 9:
            img.src = "./img/mono/9.png";
            dibujarParte(pincel,img,295,270);
            break;
        case 10:
            img.src = "./img/mono/10.png";
            dibujarParte(pincel,img,332,270);
            aCadena(palabra);
            img.src = "./img/lose.png";
            dibujarParte(pincel,img,150,100);
            break;

        case 11:
            pincel.fillStyle = "#F3F5FC";
            pincel.fillRect(0,0,600,400);
            break;
        
        case 12:
            img.src= "./img/win.png";
            dibujarParte(pincel, img,150,100);
            break;
    
        default:
            break;
    }
}

function dibujarParte(pincel,img,posx,posy){
    img.onload = function(){
        pincel.drawImage(img,posx,posy);
    }
}