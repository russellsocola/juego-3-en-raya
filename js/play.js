let turno = 0;//
let XY = [];
//todas las posibles combinaciones en las que se pueden ganar
var comboG = [[0, 1, 2], [3, 4, 5], [6, 7, 8],

[0, 3, 6], [1, 4, 7], [2, 5, 8],

[0, 4, 8], [2, 4, 6]

];
//detecto cuando se pulza sobre cualquier boton
//el primer parametro marca el evento y el segundo el indice 
document.querySelectorAll('button').forEach((Obj, index)=> Obj.addEventListener('click', (e)=>{
    turno = turno +1;//por cada click en un boton se aumenta en 1
    let btn = e.target;
    //si es par o impar se pinta del color que corresponde
    let caracter = turno % 2 ?'X' : 'O';
    btn.innerHTML = caracter;
    XY[index] = caracter;
    if(prueba())alert('!Has Ganado');//para terminos practicos de uso un alert para mostrar el mensaje de el ganador
}));

//comparamos con las filas luego con las columnas y por ultimo con las diagolaes, hasta encontrar un ganador.
let ganador = document.querySelector(".parrafo_ganador");
function prueba() {
    if(XY[0]==XY[1] && XY[0]==XY[2] && XY[0]){
        return true;
    }else if(XY[3] == XY[4] && XY[3] == XY[5] && XY[3]){
        return true
    }else if(XY[6] == XY[7] && XY[6] == XY[8] && XY[6]){
        return true
    }else if(XY[0] == XY[3] && XY[0] == XY[6] && XY[0]){
        return true
    }else if(XY[1] == XY[4] && XY[1] == XY[7] && XY[1]){
        return true
    }else if(XY[2] == XY[5] && XY[2] == XY[8] && XY[2]){
        return true
    }else if(XY[0] == XY[4] && XY[0] == XY[8] && XY[0]){
        return true
    }else if(XY[2] == XY[4] && XY[2] == XY[6] && XY[2]){
        return true
    }return false
}



//esto me permite recargar la pagina para comenzar un nuevo intento
document.querySelector('#btn').addEventListener('click',()=>{
    location.href= location.href;
});