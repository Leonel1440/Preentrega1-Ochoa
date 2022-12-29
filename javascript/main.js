
function hipertension(){
    let tension = 0;
    do {
        let tensionUsuario = parseInt(prompt("Ponga aqui los valores de su presion arterial sistólica en caso de conocerlo de la siguiente manera: 120"))
        if (parseInt(tensionUsuario) < 120) {
            alert("Optimo")
        }else if (parseInt(tensionUsuario)  === 120){
            alert("Normal");
        }else if (parseInt(tensionUsuario)  <= 130){
            alert("Normal alta");
        }else if(parseInt(tensionUsuario)  <= 140){
            alert("Hipertensión grado 1");
        }else if (parseInt(tensionUsuario)  <= 160){
            alert("Hipertensión grado 2");
        }else if (parseInt(tensionUsuario)  >= 180){
            alert("Hipertensión grado 3")
        } else{
            alert("Por favor introduzca los valores solicitados")
        }
        tension = tensionUsuario;
    } while (tension <1000);
    
}

hipertension();








