// let diccionario =  ['JARRA','VASO','PLATO','CUCHARA','TENEDOR','REGLA','LAPIZ','MOCHILA','PELOTA','SOGA','CAJA','ZAPATILLA',
//                     'PANTALON','PINCEL','OLLA','PAPEL','CARPETA','CUADERNO','LIBRO','CELULAR','TELEFONO','LIBRETA','TIJERA',
//                     'AGUJA','HILO','BROCHE','JABON','MARTILLO','ESCOBA','CLAVO'];
let diccionario=['UNO','DOS'];
let nuevasPalabras=[];
var incognita;
var cadenaTemporal;
let errores;



// QUITA LOS ELEMENTOS NO NECESARIOS
function desaparecer(){
    document.getElementById('inicio').style.display="none";
    document.getElementById('pie').style.display="none";
}


// INICIA EL JUEGO
function newGame() {
        
    desaparecer();
    errores=1;
    document.getElementById('thegame').style.display="contents";
    document.getElementById('guessletter').value="";
    palabraAzar();
}


// ESCOGE UNA PALABRA AL AZAR DEL DICCIONARIO
function palabraAzar(){
    palabra = diccionario[Math.round(Math.random()*diccionario.length)];    
    alert(palabra);
    incognita = palabra.split('');
    reemplazar(incognita,1);
}

//PONE LAS LETRAS DESCONOCIDAS
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

// VERIFICA SI SE ENCONTRÓ LA PALABRA Y/O ENVIA PARA CHECAR LAS LETRAS
function verificar(event){    
    let key = event.key;
    key = key.toUpperCase();

    if(errores>=4){
        alert('HAS PERDIDO');
    }

    document.getElementById('guessletter').value="";
    document.getElementById('guessletter').focus();    
    if(palabra.includes(key)){
        reemplazar(key,null);
    }
    else{
        errores+=1;
    }
}


// PREPARA LA CADENA PARA SU IMPRESION
function aCadena(cadena){
    cadena=cadena.toString();
    cadena=cadena.replace(/[',']/g, '');
    document.getElementById('underlines').value=cadena;
}

// VERIFICAR PALABRA COMPLETADA
function checkWin(cadena){
    let conta=0;
    let pos=0;
    while(cadena[pos]==incognita[pos] && pos<palabra.length){
        conta+=1
        pos++;
    }
    if(conta==palabra.length){
        alert('GANASTE')
    }
}

// ABRE LA PAGINA PARA UNA NUEVA PALABRA
function newWord() {
    window.open("/newWord.html", "_self");        
}

// AGREGA PALABRAS AL DICCIONARIO
function agregarPalabra(){
    palabra=document.getElementById('palabraNueva').value;
    nuevasPalabras[nuevasPalabras.length]=palabra.toUpperCase();
}

// REGRESA A INDEX (INICIO)
function resetear(){
    window.open("/index.html", "_self");
}