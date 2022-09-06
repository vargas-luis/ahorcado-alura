function patibulo(){
    var pantalla = document.querySelector('canvas');
    var pincel = pantalla.getContext('2d');

    
    //CANVAS
    pincel.fillStyle = 'black';
    pincel.strokeRect(0,0,600,400);
    
    //CABEZA
    pincel.fillStyle = 'green';
    pincel.fillRect(125,50,350,300);
    
    //OJOS
    pincel.fillStyle = 'black';
    pincel.fillRect(175,110,90,90);
    pincel.fillRect(335,110,90,90);

    //NARIZ
    pincel.fillStyle = 'black';
    pincel.fillRect(265,200,70,100);
    
    //BOCA
    pincel.fillStyle= 'black';
    pincel.fillRect(225,240,40,110);
    pincel.fillRect(335,240,40,110);

    //CENTRO
    pincel.fillStyle = 'black';
    pincel.fillRect(300,200,2,2);
}