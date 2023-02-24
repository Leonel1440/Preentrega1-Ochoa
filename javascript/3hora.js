/*Temas:
1-Valores booleanos
2-Operador de igualdad
3-Operador de igualdad estricta
4-Practica cómo comparar valores
5-Operador de desigualdad
6-Operador de desigualdad estricta
7-Operador mayor que
8-Operador mayor o igual que
9-Operador menor que
10-Operador menor o igual que
11-Operador lógico and
12-Operador lógico or
13-Operador lógico not
14-Sentencias condicionales
15-Cláusula "else"
16-Cláusula "else if"
17-Condicionales: orden lógico
18-Encadenar sentencias
*/


//Valores booleanos: son true o false. Seran muy utiles con condicionales, comparaciones de valores y al trabajar con operadores lógicos.
console.log(true);
console.log(false);



//Operador de igualdad: comparar valores para ver si son iguales o no. Veremos si el 5 es igual al 5, será true si son iguales y false si no. No se debería comparar arreglos ([1,2,3] == [1,2,3]) porque este operador el "==" nos dará false porque no compara los elementos del arreglo, solo si los arreglos en la memoria representan el mismo objeto.
console.log(5 == 5);// true
console.log("Hola" == "Hola")//true
console.log("Hola" == "hola")//false



//Operador de igualdad estricta: comparar si ambos tipos de datos son lo mismos.
console.log(9 == 9)//son dos valores del mismo tipo de dato -> true
console.log(9 == "9")//son de distintos tipos de datos, pero representan el mismo número -> true.
console.log(9 === 9)//aca se aplica la igualdad estricta.
console.log(9 === "9")//aca compararemos 9 como un número y "9" como una cadena de caracteres, este resultado será false porque no se van a convertir a un tipo de dato en común. Se compara el tipo de dato.



//Práctica cómo comparar valores:
var a;
var b;

a = 5;
b = 5;
console.log(a == b);//este es el operador de igualdad, y será true
console.log(a === b)//este es operador de igualdad estricticta, también dará true porque ambos son del mismo tipo de datos, son enteros, son números.

//si cambiamos el valor de "b":
b = 8;
console.log(a == b);// false
console.log(a === b)// false, los valores son distintos aunque sean del mismo tipo de dato.

b = "5"// lo transformamos al 5 a una cadena de caracteres "5"
console.log(a == b)//true porque usamos el operador de igualdad.
console.log(a ===b)//false porque son distintos tipos de datos

//Otro ejemplo:
a = "Javascript";
b = "Javascript";
console.log(a == b)//true
console.log(a ===b)//true



//Operador de desigualdad: compara dos valores y retorna "true" si su valor es distinto, y retorna "false" si son iguales.
console.log(9!= 6);//9 no es igual a 6, como es verdadero esto, nos dará true.
console.log(9 != 9);//9 es distinto a 9, como es falso esto, nos dará false.
console.log("Javascript" != "Javascript");//false
console.log([1,2,3] != [1,2,3]);//nos dará true, pero porque son objetos independiente en la memoria de la maquina del dispositivo.



//Operador de desigualdad estricta: similar al de igualdad estricta, pero compara desigualdad estricta.
console.log(1 != "1");//esto nos daría false porque este operador, ambos valores a un tipo de dato en común antes de hacer la comparación, se detectan como el mismo valor aunque uno sea un número y el otro una cadena de caracteres.
console.log(1 !== "1");//true porque también está comparando si ambos valores son del mismo tipo de dato, no los convierte a un tipo de dato en común.



//Operador "Mayor que": comparar el valor relativo de dos valores, si un valor es mayor, igual o menor que el otro.
console.log(6 > 5);//true
console.log(3 > 10);//false
console.log("B" > "A")//true, estamos diciendo que el B viene después de la letra A según el orden alfabetico, por tanto, es true.
console.log("ACB" > "ABC")//true, C viene después de B, comparamos el segundo caracter, ya que las dos A son iguales, de esta forma se decide el resultado de la expresión.
console.log("AB" > "A");//true, porque tiene más caracteres.
console.log("Mundo" > "Hola");//true, también por orden alfabetico de M y H.
//también se pueden usar para variables, por ejemploÑ:
var a = 15;
var b = 7;
console.log(a > b);//true
console.log(b > a);//false



//Operador "Mayor o igual que": nos permite incluir en el caso de que ambos valores sean iguales.
console.log(5 > 5);//false, porque 5 no es mayor que 5.
console.log(5 >= 5);//true, ya que ambos valores son iguales. De esta forma vamos a empezar a escribir condiciones en nuestro código que van a decidir qué es lo que pasa en el programa, y dependiendo del valor de estas condiciones (true or false) vamos a ejecutar ciertos bloques de código o no.



//Operador "Menor que":
console.log(5 < 6);//true.
console.log(10 < 3);//false.
console.log("A" < "B");//true, porque A viene antes que B en orden alfabetico.
console.log("ABC" < "ACB");//true, lo mismo, será por orden alfabetico.
var a = 15;
var b = 7;
console.log(a < b);//false.
console.log(b < a);//true.



//Operador "Menor o igual que": es igual que el operador "menor que", pero también incluirá el caso en que ambos valores sean iguales.
console.log(5 < 5);//false, 5 no es menor que 5.
console.log(5 <= 5);//true, 5 es igual a 5.



//Operador lógico "and": nos permiten combinar distintas expresiones para formar condiciones más complejas, el primer operador lógico que veremos es "and". Estos operadores tienen tablas de verdad que determinan cual va a ser el resultado de una expresión que usa ese operador, por ejemplo, si tenemos dos expresión "X && Y" y esos valores son verdaderos y falso, y los unimos con el operador "and" que en js es un &&, si X es verdadera y Y también, el resultado será verdadero, si uno no lo es, será falso, y si ambos tampoco lo son, también el resultado será falso. La operación solo es verdadera cuando ambos operandos son verdaderos.
console.log(true && true);//true, porque ambos valores son verdaderos
console.log(true && false);//false, porque uno de los valores son falsos.
console.log(false && true);//false, porque uno de los valores son falsos.
console.log(false && false);//false, porque ambos valores son falsos.
//Ejemplo con condiciones:
var a = 8;
console.log ((a > 5) && (a < 10));//la primer parte es verdadera (a > 5) y la segunda parte es verdadera (a < 10), por tanto, el resultado será true.
//Si cambiamos el valor de a=3, la primer parte será falso, por tanto el resultado será false. 
//Si le cambiamos a valor 15, la primera parte será verdadera, la segunda no, el resultado será false.
//console.log((a > 5)&& (a == 3)); si var a = 1, nos dará que ambas partes son falsas.
//Todo esto nos ayudará a decidir si alguna parte del código se ejecuta o no.



//Operador Lógico "or": también tiene su propia tabla de verdad, en vez de usar && se usan ||(está a la izquierda del 1 la tecla). La expresión es verdadera si alguno de los dos operandos es verdadera o ambos lo son. Y  es falsa si ambos son falsos.
console.log(true && true);//true, porque ambos valores son verdaderos
console.log(true && false);//true, porque uno de los valores es verdadero.
console.log(false && true);//true, porque uno de los valores es verdadero.
console.log(false && false);//false, porque ambos valores son falsos.
//Ejemplo con variables:
var a = 8;
console.log ((a < 5) || (a > 15));//false, ambos operandos son falsos, por tanto su expresión también.
var a = 2;//ahora la condición es verdadera porque la primera parte es true y la otra es false, con uno solo basta para que la expresión sea verdadera.
var a = 20;//la primer parte es falsa, y la segunda parte es verdadera, por tanto el resultado será true.
console.log((a == 5)|| (a < 15));//ambos son true.



//Operador Lógico "not": se usa para negar el valor de verdad de una expresión, usamos el símbolo "!+expresión", por ejemplo, !X. Si la expresión es verdadera, agregandole este operador convertimos el resultado en falso, y viceverso.
console.log(!true);//false.
console.log(!false);//true.
//Ejemplo con variable:
var a = 8;
// !(a > 5) --> !true --> false= invertimos su valor real (miralo primero sin ver el !).
console.log(!(a > 5));
// !(a < 5) --> !false --> true= invertimos su valor real (miralo primero sin ver el !).
console.log(!(a < 5));



//Sentencias condicionales: nos permiten decidir si un bloque de código se ejecute o no dependiendo de una condición, nos brindá control. Sintaxis:
if (condition) {//si esta condición es verdadera
    //hacemos lo que está aca escrito
}
//ejemplo:
var x = 5;
if (x > 2) {
    console.log("La condición es verdadera")
}
//si X es mayor que 2, muestra el mensaje debajo, no solo se usa el ">", podemos usar otros operadores vistos antes, not, and, or, <, =, etc., pero siempre va a ser una expresión que evalua verdadero o falso. Si es falso el codigo de arriba no se ejecutará.
//ejemplo 2:
var x = 5;
if (x < 2) {
    console.log("La condición es verdadera")
}//aca no se ejecuta porque 5 no es menor que 2.
//ejemplo 3:
var x = 5;
if (x > 2 && x < 10) {// si X es mayor que 2 y menor que 10 ejecute el código.
    console.log("La condición es verdadera")
}
//ejemplo 4:
var estacion = "Invierno";// si fuese "Verano", no se ejecutaría, sería false.
if (estacion == "Invierno") {// se ejecutará también, es true.
    console.log("¡Sí! Me encanta el invierno")
}

console.log("Después del condicional...");// se ejecutará siempre, si agregamos esta consola después de lo anterior, no importa si lo de antes era true o false. Si la condición es verdadera se ejecuta la linea 150, 151 y también la 155, si no, solo la 155.


//Cláusula "else": sirve para expandir nuestros condicionales, establecer qué ocurrirá si la condición es false. El else sería como un "si no verdadera, pues.."
if (true) {//si es falsa, no se ejecuta este código y si lo que está dentro del "else"
    console.log("La condición es verdadera.")
}else{
    console.log("La condición es falsa.")//solo se muestra si la condición del if es falsa.
}
//o se ejecuta el if si es verdadera o else si es falsa, pero NUNCA ambos a la vez.
//ejemplo 1:
var x = 5;
if (x < 2) {// 5 es MAYOR que 2, por tanto esto es false, no se ejecuta.
    console.log("La condición es verdadera.")
}else{
    console.log("La condición es falsa.")
}
//ejemplo 2:
var estacion = "Invierno";

if (estacion === "Verano") {
    console.log ("Comenzó el verano. Ya podemos ir a la playa.");
}else {
    console.log("Ya quiero que llegue el verano para poder ir a la playa");// se mostrará esto porque el if es false.
}



//Cláusula "else if": nos permite manejar condiciones alternativas y decidir qué pasa si alguna de ellas es verdadera.
function clasificarValor(valor){
    if (valor % 2 == 0) {// si el valor dividido entre 2 genera un resto igual a 0, mostramos el siguiente mensaje:
        console.log("Divisible entre 2.");
    } else if(valor % 3 == 0){//si el valor es divisible entre 3, mostrar este msj.
        console.log("Divisible entre 3.");
    }
    
    else{//si no, pues...
        console.log("No es divisible entre las opciones.");
    }
}// si el if es verdadera se ejecuta, si no, pasamos al "else if"(siguiente clausula) , si es verdadera se ejecuta, si es falsa pasamos al "else" (siguiente clausula), y se ejecuta este código. Si todas las condiciones anteriores son falsas, este "else" sirve como respaldo.
clasificarValor(2);//si llamamos al 2, nos mostrará el msj del if ya que es true, ya que 2 dividido 2 es 1 y me deja de resto 0
clasificarValor(15);//si es 15, el if no es divisible por 2, así qeu el if será falsa, pero el "else if" es true porque el 15 si es divisible entre 3, ya que 15 dividido 3 da 5 y de resto 0.
clasificarValor(7)// no es divisible ni entre 2 o entre 3, entonces aca se mostraría la cláusula "else".



//Condicionales: orden lógico: 
function clasificarValor(valor){
    if (valor < 5) {
        console.log("Menor que 5.")
    }else if (valor < 10){
        console.log("Menor que 10.")
    }else{
        console.log("Mayor o igual a 10")
    }
}
clasificarValor(2);// es true, se mostrará el primer mensaje "Menor que 5". No se muestra el segundo mensaje porque solo se ejecuta el código de la primera condición que sea true en la secuencia, por eso es importante el orden en que escribimos las clausulas.
clasificarValor(7);//el if es false, pero el "else if" es true, por tanto, no se mostrará el segundo mensaje "Menor que 10".
clasificarValor(15);//ambas clausulas son false, por tanto se muestra el msj de else, "Mayor o igual a 10", nos sirve como respaldo el "else".



//Encadenar Sentencias "if...else":
function interpretarIMC(indiceDeMasaCorporal){
    if (indiceDeMasaCorporal < 18.5) {//si es false, es porque es menor a esto, asi que no será bajo peso, si no que será peso normal.
        console.log("Bajo peso")
    }else if (indiceDeMasaCorporal <= 24.9){//si es false, es porque es menor a esto, asi que no será de peso normal, si no que será sobrepeso.
        console.log("Normal");
    }else if (indiceDeMasaCorporal <= 29.9){//si es menor a esto, tiene sobrepeso, pero si es false, tiene obesidad y pasamos al else.
        console.log("Sobrepeso");
    }else {
        console.log("Obeso")
    }
}
interpretarIMC(17.8);//Es true en la primer clausula, nos dará "Bajo peso".
interpretarIMC(22.2);//Es true en la segunda clausula, nos dará "Normal".
interpretarIMC(28.5);//Es true en la tercera clausula, nos dará "Sobrepeso".
interpretarIMC(32.2);//Es true en la última clausula, nos dará "Obeso".
//Dato memoria: SIEMPRE solo se ejecutará el primer código/clausula que sea verdadera, por más que las siguiente también lo sean, es por órden o secuencia.