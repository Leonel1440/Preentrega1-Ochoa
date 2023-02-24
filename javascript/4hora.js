/*Temas:
1-Código de Golf
2-Sentencias switch
3-Sentencias switch: opción predeterminada
4-Sentencias switch: múltiples casos
5-Reemplazar "if...else" por "switch"
6-Retornar valores booleanos
7-Patrón de retorno anticipado
8-Conteo de cartas
9-Crear objetos
*/



//Código de golf (proyecto): cada hoyo tienen un par que reprsenta el número promedio de goles que se espera que haga un golfista para iontroducir la pelota en el hoyo. Hay un nombre diferente dependiendo de qué tan por encima o por debajo del par estén tus golpes. 
//Tu función tomará los argumentos "par" y "golpes". El par es el promedio de los golpes esperados y golpes es el número que realmente realizó el golfista en el hoyo especifico. Retorna la cadena correcta según esta tabla que muestra los golpes en orden de mayor a menor prioridad
/* Golpes                   Retornar
----------------------------------------------------
    1                       "Hole-in-one!"
    <= par - 2               "Eagle"
    par - 1                  "Birdie"
    par                      "Par"
    par + 1                  "Bogey"
    par + 2                  "Double Bogey"
    >= par + 3               "Go Home!"

    par y golpes siempre serán numéricos y positivos.
  */

function puntajeDeGolf(par, golpes) {
    if(golpes == 1){//si golpes es igual a 1, retornar el siguiente msj:
        return "Hole-in-one!";
    }else if (golpes <= par - 2){
        return "Eagle";
    }else if (golpes == par - 1){
        return "Birdie";
    }else if (golpes == par){
        return "Par";
    }else if (golpes == par + 1){
        return"Bogey";
    }else if (golpes == par + 2){
        return "Double Bogey"
    }else if (golpes >= par + 3){
        return "Go Home!"
    }

}

console.log(puntajeDeGolf)(4,1);//"Hole-in-one!"
console.log(puntajeDeGolf)(4,2);// par = 4; y golpes = 2; entonces 4 - 2 me da 2, 2=2; me mostrará "Eagle".
console.log(puntajeDeGolf)(4,3);// (par = 4) - 1 = 3, dará "Birdie".
console.log(puntajeDeGolf)(4,4);// iguales, dará "Par"
console.log(puntajeDeGolf)(4,5);// 4 + 1 = 5, "Bogey"
console.log(puntajeDeGolf)(4,6);// 4 + 2 = 6, "Double Bogey".
console.log(puntajeDeGolf)(4,7);// 4 + 7 = 11, "Go Home", ya que es mayor.



//Sentencias Switch: es una forma de reemplazar los condicionales. Pero nos permite, a partir de una expresión o valor, decidir qué va a pasar en base a ese solo valor o el resultado de esa expresión entre parentesis. Definimos casos especificos para el valor de la variable "valor", si ese valor es igual a otro valor "case 1", entonces el código se ejecuta y siempre se termina con un "break", y todo lo demás se ignorará. Es como un condicional, pero más especifico, ya que nos permite decidir qué ocurrirá solo en base al valor entre parentesis.
function clasificarValor(valor){
    var respuesta;
    switch (valor) {
        case 1:// si el valor es igual a 1, vamos a asignar la cadena alpha a la variable respuesta
            respuesta = "alpha";
            break;
        case 2:// si el valor de la variable es 2, la respuesta será beta.
            respuesta = "beta";
            break;
        case 3:
            respuesta = "gamma";
            break;
        case 4:
            respuesta = "delta";
            break;
    }
    return respuesta;// ponemos esto fuera de las cadenas porque no es parte del switch, y donde retornamos el valor de la respuesta

}

console.log(clasificarValor)(1);//alpha
console.log(clasificarValor)(2);//beta
console.log(clasificarValor)(3);//gamma
console.log(clasificarValor)(4);//delta

//Otro ejemplo de switch pero con cadenas de caracteres:
var producto = "hamburguesa";

switch (producto){
    case "pizza":
        console.log("La pizza básica cuesta $10.55");
        break;
    case "hamburguesa":
        console.log("Las hamburguesas cuestan $6.78");
        break;
    case "helado":
        console.log("El helado cuesta $2.8");
        break;
}
//en primer lugar veríamos el segundo mensaje porque el valor producto es igual a hamburguesa, o sea, se ejecuta el segundo código.
console.log("luego de switch");// se mostrará después este mensaje porque el "break" saltéa todos los otros códigos.
//si cambiamos el nombre de hamburguesa a helado o pizza, cambiará el msj.



//Sentencias Switch: Opcion predeterminada: esta opción se ejecutará si ninguno de los valores es el valor de la variable/expresión.
function seleccionarIdioma(valor){
    var idioma;//no definimos su valor porque esto lo definirá el switch.
    switch(valor){
        case 1:
            idioma = "Español";
            break;
        case 2:
            idioma = "Francés";
            break;
        case 3:
            idioma = "Italiano";
            break;
        default: //es como un else, un respaldo, si ninguna de las anteriores concuerda.
            idioma = "Inglés";
            break;
    }
}

console.log(seleccionarIdioma(1));//Español.
console.log(seleccionarIdioma(2));//Francés.
console.log(seleccionarIdioma(3));//Italiano.
console.log(seleccionarIdioma(2022));//Inglés.



//Sentencias Switch: Múltiples Casos: ejecutar un código especifico para varios valores.
function clasificarVolumen(valor){
    var volumen;
    switch(valor){
        case 1:
            volumen = "bajo";
            break;
        case 2:
        case 3:
            volumen = "intermedio";
            break;
        case 4:
        case 5:
        case 6:
            volumen = "alto";
            break;
        
    }
    return volumen;
}

console.log(clasificarVolumen(1));//bajo.
console.log(clasificarVolumen(2));//intermedio.
console.log(clasificarVolumen(3));//intermedio.
console.log(clasificarVolumen(4));//alto.
console.log(clasificarVolumen(5));//alto.
console.log(clasificarVolumen(6));//alto.



//Reemplazar "if...else" por "switch":
function seleccionarIdioma(valor){
    var idioma;


    //Antes de reemplazarlo usando if...else
    // if (valor == 1){
    //     idioma = "Español";
    // }else if (valor == 2){
    //     idioma = "Francés";
    // }else if (valor == 3){
    //     idioma = "Italiano";
    // }else {
    //     idioma = "Inglés";
    // }
    // return idioma;

    //Después de reemplazarlo usando switch:
    switch (valor) {
        case 1:
            idioma = "Español";
            break;
        case 2:
            idioma = "Francés";
            break;
        case 3:
            idioma = "Italiano";
            break;
        default:
            idioma = "Inglés";
            break;
    }
    return idioma;
}



//Retornar valores booleanos:
function esMenorQue(a, b){

    //En ves de hacer esto...
    // if (a < b){// si a es menor que b retornamos true
    //     return true;
    // }else {
    //     return false;// si a es no es menor que b, retornamos false
    // }
    //podemos hacer esto que es mucho más fácil:
    return a < b;
}
console.log(esMenorQue(3, 6));//true.
console.log(esMenorQue(6, 3));//false.
console.log(esMenorQue(3, 3));//false.



//Patrón de Retorno Anticipado: cuando retornamos un valor de una función, en ese momento la función se detiene completamente, cualquier linea que esté luego del "return" no se va a ejecutar. Es muy util cuando queremos detener la función por alguna condición especifica.
function miFuncion(){
    console.log("Hola");
    return "Mundo";
    console.log("Adios");//no se va a ejecutar.
}
console.log(miFuncion());
//Ejemplo 2:
function calcularRaizCuadrada(num){
    if (num < 0){
        return undefined;//porque la operación no está definida y se detendrá.
    }
    return Math.sqrt(num);//pero si lo de arriba es falso, esto si se ejecutará.
}
console.log(calcularRaizCuadrada(25));// da 5, es falsa la primera linea, asi que se ejecuta la segunda linea.
console.log(calcularRaizCuadrada(-5));// es menor que 0, asi que la primera linea se ejecuta.



//Conteo de cartas (proyecto): e nel juego de casino Blackjack el jugador puede sacarle ventaja a la casa llevando un registro del número relativo de  cartas altas y bajas que quedan en la baraja.
/* Esto se llama "conteo de cartas
Tener más cartas altas en la baraja es una ventaja para el jugador. Se le asigna un valor a cada carta de acuerdo a la siguiente tabla.
-Cuando el conteo es positivo, el jugador debería apostar alto.
-Cuando el conteo es 0 o negativo, el jugador debería apostar bajo.

cambio del conteo       cartas
-------------------------------------------------
+ 1                     2, 3, 4, 5, 6
0                       7, 8 ,9
-1                      10, ´J´, ´Q´, ´K´, ´A´

NUESTRA META ES DEFINIR UNA FUNCIÓN PARA CONTAR CARTAS

La función debe tomar un parámetro "carta" que puede ser un número o una cadena de caracteres y luego aumentar o reducir el valor de la varaiable global "conteo" de acuerdo al valor de la carta (observa la tabla)

La función luego debe retornar una cadena de caracteres con el conteo actual y con esta cadena:
-"Apostar" si el conteo es positivo.
-"Esperar" si el conteo es cero o negativo.

El conteo actual y la decisión del jugador.
("Apostar" o "Esperar") deben estar separados por un espacio
*/

var conteo = 0;//variable global, inicialmente su valor será 0 porque la iremos modificando (aumentando, disminuyendo, dejando igual, etc)
function contarCartas(carta){
    var decision;//solo se podrá usar esta var dentro de la función
    switch (carta){
        case 2:// si el valor es este, aumentar el valor de conteo en +1 
        case 3:// si el valor es este, aumentar el valor de conteo en +1 
        case 4:// si el valor es este, aumentar el valor de conteo en +1 
        case 5:// si el valor es este, aumentar el valor de conteo en +1 
        case 6:// si el valor es este, aumentar el valor de conteo en +1 
            conteo++;//esto nos permite incrementar su valor en +1.
            break;
        //no incluimos " 7, 8 ,9" porque no se modifican el cambio de conteo.
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            conteo--;//con esto la reducimos en -1.
    }
    if (conteo > 0){//si conteo es positivo, retornar el siguiente mensaje
        decision = "Apostar";
    }else {// si no, retornar este mensaje
        decision = "Esperar"
    }
    return conteo + " " + decision;//esta cadena retornaremos.
}

console.log(contarCartas(2));//1 Apostar, esto se verá en consola.
console.log(contarCartas(3));//3 Apostar, esto se verá en consola.
console.log(contarCartas(7));//7 Apostar, esto se verá en consola.
console.log(contarCartas("K"));//1 Apostar, esto se verá en consola porque sigue siendo positivo.
console.log(contarCartas("A"));//0 esperar.



//Crear objetos: los objetos nos permiten guardar una secuencia o conjunto de propiedades(numeros, nombres, etc)que están correlacionas con sus correspondientes valores. Acordate, cosas como el "nombre", "edad", son a lo que llamamos "propiedades", no solamente son palabras, también pueden ser números.
var miPerro = {
    "nombre": "Gino",
    "edad": 5,
    "peso": 6,
    "raza": "Beagle"
};