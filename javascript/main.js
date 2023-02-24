// const button = document.querySelector('button');

// button.onclick = function() {
//     let name = prompt('¿Cuál es tu nombre?');
//     alert('¡Hola ' + name + ', encantado de verte!');
}
//Otra cosa especial acerca de las variables es que pueden contener casi cualquier cosa, no solo cadenas y números. Las variables también pueden contener datos complejos e incluso funciones completas para hacer cosas asombrosas

// function hipertension(){
//     let tension = 0;
//     do {
//         let tensionUsuario = parseInt(prompt("Ponga aqui los valores de su presion arterial sistólica en caso de conocerlo de la siguiente manera: 120"))//parseInt pasa de string a número.
//         if (parseInt(tensionUsuario) < 120) {
//             alert("Optimo")
//         }else if (parseInt(tensionUsuario)  === 120){
//             alert("Normal");
//         }else if (parseInt(tensionUsuario)  <= 130){
//             alert("Normal alta");
//         }else if(parseInt(tensionUsuario)  <= 140){
//             alert("Hipertensión grado 1");
//         }else if (parseInt(tensionUsuario)  <= 160){
//             alert("Hipertensión grado 2");
//         }else if (parseInt(tensionUsuario)  >= 180){
//             alert("Hipertensión grado 3")
//         } else{
//             alert("Por favor introduzca los valores solicitados")
//         }
//         tension = tensionUsuario;//en cada vuelta se va setear el valor de la variable de arriba, la cual será accesible por el while
//     } while (tension <1000);//NaN = not a number
    
// }

// hipertension();



// class Ambo{
//     constructor(talle, color, precio, diseño,){
//         this.talle = talle;
//         this.color = color;
//         this.precios = Number(precio);
//         this.diseño = diseño;
//         this.compra = compra;
//     }
//     compra(){
//         alert(`Felicidades usted ha comprado lo siguiente: ${compra}`)
//     }
// }

// const ropaMedicine_01 = new Ambo ("L", "bordo", "$10000", "sin diseño", "Ambo bordo talle L sin diseño");
// const ropaMedicine_02 = new Ambo ("XL", "violeta", "$18000", "con diseño", "Ambo violeta talle XL con diseño");
// const ropaMedicine_03 = new Ambo ("M", "azul marino", "$18000", "con diseño", "Ambo azul marino talle M con diseño");
// const ropaMedicine_04 = new Ambo ("S", "negro", "$10000", "sin diseño", "Ambo negrotalle S sin diseño");
// const ropaMedicine_05 = new Ambo ("L", "blanco", "$18000", "con diseño", "Ambo blanco talle L con diseño");


// ropaMedicine_01.compra();

// function comprarAmbo(){
//     let compra = prompt("¿Qué ambo te gustaría comprar?")
//     if (compra == ropaMedicine_01) {
//         alert("Felicidades, usted ha elegido el siguiente modelo: " + ropaMedicine_01)
//     }else if(compra == ropaMedicine_02){
//         alert("Felicidades, usted ha elegido el siguiente modelo: " + ropaMedicine_02)
//     }
//     else if(compra == ropaMedicine_03){
//         alert("Felicidades, usted ha elegido el siguiente modelo: " + ropaMedicine_03)
//     }else if(compra == ropaMedicine_04){
//         alert("Felicidades, usted ha elegido el siguiente modelo: " + ropaMedicine_04)
//     }else if(compra == ropaMedicine_05){
//         alert("Felicidades, usted ha elegido el siguiente modelo: " + ropaMedicine_05)
//     }else{
//         alert("Lo lamentamos, no tenemos ese ambo")
//     }

// }




























































































// let numero1 = 3;
// let numero2 = 6;

// resultado = numero1 * numero2;
// console.log(resultado)


// let numero1 = 3;
// let numero2 = 2;

// numero1 -= numero2;

// console.log(numero1)



//saludo = "Hola Pedro";
//pregunta = "¿Cómo estás";
//frase = saludo + pregunta;
// document.write(frase) es como console log pero se muestra

//variable = parseInt(variable); esto nos sirve para convertir un string a entero