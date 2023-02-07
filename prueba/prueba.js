
let btn_presion = document.getElementById("btn_presion");
btn_presion.addEventListener("click",hipertension)
const resultado = document.getElementById("resultado");


function hipertension(){
    const tensionUsuario = parseInt(document.getElementById("inputPresion").value);
        if (tensionUsuario < 120) {
            resultado.innerHTML = "Optimo"
        }else if (tensionUsuario === 120){
            resultado.innerHTML = "Normal"
        }else if (tensionUsuario  <= 130){
            resultado.innerHTML = "Normal alta"
        }else if(tensionUsuario <= 140){
            resultado.innerHTML = "Hipertensión grado 1"
        }else if (tensionUsuario <= 160){
            resultado.innerHTML = "Hipertensión grado 2"
        }else if (tensionUsuario >= 180){
            resultado.innerHTML = "Hipertensión grado 3"
        } else{
            resultado.innerHTML = "Por favor introduzca los valores solicitados"
        }
}

//mmm qué sera?mmmm que raro, reinicio la pc?, okaaa
//che hay a veces que la pantalla se me apaga, por un microsegundo, y cómo se soluciona? ahhh ahhh joya caimos en un bucle, no?
//entonces podríamos hacer un if normal, no?
//asi? si si, si, esto es una condicional?, ahhh claro, al pedo porque tenemos los eventios, que al apretarlo se repite cuantas veces queramos segun las veces que lo apretamos, claro claro
//joya joya
//con un innerthml? claro claro asdasdd es un igual ====, xd, niceee
//joyita, gracias por tu tiempo, te quiero, sis i descansa, te lo merecesss, tkmmm, byeeeeee