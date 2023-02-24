/* Temas:
1-Números aleatorios
2-Números enteros aleatorios en un rango
3-Función parseInt()
4-Función parseInt() con una base
5-Operador condicional (ternario)
6-Múltiples operadores condicionales
7-Var vs let
8-Ámbito de var vs let
9-Const de Javascript
10-Mutar un arreglo declarado con const
11-Crear un objeto inmutable
12-Funciones flecha
13-Funciones flecha con parámetros
*/


//Números aleatorios: como generar un número aleatorio. Solo usamos la palabra "math"
//la "palabra math" usa funciones matemáticas básicas, como la función "random", esta función no necesita argumentos para retornar valor aleatorios, retorna entre 0 y 1; aunque el 1 no es incluido en los resultados.
function generarFraccionAleatoria (){
    return Math.random();
}
console.log(generarFraccionAleatoria());//0.53346346752345754687
console.log(generarFraccionAleatoria());//0.12345243653573563451

//Ejemplo 2: también podemos llamarlo directamente:
console.log(Math.random());

//Ejemplo 3: pero con variable.
var numeroAleatorio = Math.random();
console.log(numeroAleatorio);



//Números enteros aleatorios: ".floor" es una función que lo que hace es returnarn el mayor número entero que es mayor o igual a su argumento número (al número que pasamos entre parentesis, el ".random"); ya este argumento lo tenemos que multiplicar por un entero para transformar el valor en un entero para tener el rango que queremos.
var numeroAleatorioEntre0y19 = Math.floor(Math.random() * 20);
console.log( numeroAleatorioEntre0y19); //12.

//Ejemplo 2: vamos a definir una función que genera un número entero aleatorio.
function generarEnteroAleatorio(limiteSuperior) {
    //Generar un entero aleatorio entre 0 y el límite superior (sin incluirlo)
    return Math.floor(Math.random() * limiteSuperior);
}
console.log(generarEnteroAleatorio(5));//0
console.log(generarEnteroAleatorio(5));//4
console.log(generarEnteroAleatorio(5));//3
console.log(generarEnteroAleatorio(5));//3
console.log(generarEnteroAleatorio(5));//2

//Ejemplo 3 con ciclo:
var numeroAleatorioEntre0y19 = Math.floor(Math.random() * 20);
console.log( numeroAleatorioEntre0y19);
function generarEnteroAleatorio(limiteSuperior) {
    return Math.floor(Math.random() * limiteSuperior);
}
for (var i = 0; i <15; i++){
    console.log(generarEnteroAleatorio(5));
}
//en consola veríamos que se ejecuta el código 15 veces: 0, 0, 1 , 1, 3, 4, etc...



//Números enteros aleatorios en un rango:
function rangoAleatorio(limiteInferior, limiteSuperior){
    return Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + limiteSuperior;
}
console.log(rangoAleatorio(3, 8));//5
console.log(rangoAleatorio(3, 8));//5
console.log(rangoAleatorio(3, 8));//3
console.log(rangoAleatorio(3, 8));//4
console.log(rangoAleatorio(3, 8));//7
console.log(rangoAleatorio(3, 8));//4

//Ejemplo 2 con ciclo:
function rangoAleatorio(limiteInferior, limiteSuperior){
    return Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + limiteSuperior;
}
for (var i =0; i <15; i++){
    console.log(rangoAleatorio(3, 8));
}
//en consola veremos que se repite 15 veces: 8, 6, 7, 4 ,6 (todos números entre rangos de 3-8)etc.



//Función parseInt():podemos usar esta función para convertir una cadena de caracteres que representa un número --> en un número, ya que "5" no es igual a 5, el primero es una string y el segundo es un número entero. "Parse" convierte una cadena de caracteres a un entero, la cual estará entre parentesis (5). Si ponemos un número decimal, se trunca y se vuelve entero para abajo, si ponemos "6.7" nos dará 6, o sea que nos permite convertir un número decimal a uno entero.
//Si ponemos un valor que no es número, por ejemplo "abc" nos dará en consola "NaN" ya que no es un número.
console.log(parseInt("5"));

//Ejemplo 2:
var a = "5";
var b = "7";
console.log(a + b);//si son strings, solo se concatenarán y dará "57":
//entonces haremos lo siguiente:
var a = parseInt("5");
var b = parseInt("7");
console.log(a + b);//esto nos dará 12, ya que ahora si son números.



//Función parseInt() con una Base: esto es más potente, podemos convertir una cadena de caracteres en otro sistema numericos, al sistema decimal como un entero.
console.log(parseInt("110111", 2));//especificamos que es binario al poner el "2" que sería la base. En consola se vería 55 porque es la traducción de esos números binarios.

//Ejemplo 2: 
console.log(parseInt("3E0A", 16));//sistema hexagecimal, nos daría 15882.



//Operador Condicional (Ternario): nos permite compactar lo que sería un condicional en una sola línea.
function retornarMinimo(x, y){
    if(x < y){
        return x;
    } else{
        return y;
    }
}
//Compactaremos lo que hicimos arriba, y este será el resultado:
function retornarMinimo(x, y){
    return x < y ? x : y;// el signo "?" dice, si esta condición es verdadera "x < y" retorna este valor "x", si no, retorna este valor "y"; Con console.log(x < y ? x : y);
}
console.log(retornarMinimo(4, 7));//4.
console.log(retornarMinimo(8, 2));//2.
console.log(retornarMinimo(5, 5));//5.

//Ejemplo 2:
var a = 5;
var b = 9;
console.log(a > b ? a + 2 : b * 3);//":"= y si no, se retorna b * 3, en consola veremos 27, ya que la primera condición es falsa. Si "a" fuese 15, la primera condición sería verdadera y veríamos 17.



//Múltiples Operadores Condicionales: uno dentro del otro, parecido al anidado.
function compararNumeros (a, b){
    if (a == b){
        return "a y b son iguales";
    } else if (a > b){
        return "a es mayor que b";
    } else {
        return"b es mayor que a";
    }
}
//Ahora reemplazaremos lo de arriba:
function compararNumeros(a, b){
    return a == b ? "a y b son iguales" 
        : a > b ? "a es mayor que b"
        : "b es mayor que a";
}
//También lo podría haber puesto de esta manera: return a == b ? "a y b son iguales" : a > b ? "a es mayor que b": "b es mayor que a". O sea así todo seguido.
console.log(compararNumeros(11,27));//b es mayor que a.
console.log(compararNumeros(27,11));//a es mayor que b
console.log(compararNumeros(15,15));// a y b son iguales.



//var vs let: una de las diferencias principales, es que cuando declaramos una variable con "var", vamos a poder declara una variable más de una vez:
var campista = "James";
var campista = "David";
console.log(campista);//David
//Pero con let no se puede declarar una variable más de una vez.
let campista = "James";
let campista = "David";
console.log(campista);//"SyntaxError: unknown: Identifier 'campista' has already been declared".



//Ámbito de var vs let: cuando usamos var estamos o creando una variable global si está en el programa princiapl o  una variable local si está defnida en una función, esta última se podrá usar en toda esa función, pero no fuera. Resumiendo var se puede usar a nive global y let no.
//fuera:
var miVariableGlobal = 5;
console.log(miVariableGlobal);
//local:
function miFuncion() {
    var miVariableLocal = 8;
    console.log(miVariableLocal);
}
miFuncion();
//cuando usamos "let" estamos restringiendo aún más:
for (var i = 0; i < 3; i++) {
    console.log(i);//Si escribimos let en vez de var, la variable solo se podrá usar dentro del mismo ciclo, no la podremos usar fuera
}
console.log("Variable: " + i);//0, 1 , 2 , Variable: 3
//si usamos var en un ciclo, esa variable va a tener el ambito que corresponda a dónde está definido el ciclo, en el caso de arriba sería un ámbito global porque está en el programa principal, si estuviese dentro de una función, sería local y solo se podría usar dentro de la misma.
//Por otro lado, si usamos let en un condicional, solo se podrá usar en ese bloque de código (if)
var mostrarColor = true;
if (mostrarColor) {
    let color = "verde";
    console.log("Mi color favorito es: " + color)//solo se podrá hacer aca dentro, veremos el siguiente mensaje "Mi color favorito es : verde"
}
console.log(color);//ReferenceError: color is not defined. Si usara var, este error no se produciría.



//Const: es una abreviación de constante, son variables que solo pueden ser usadas para accede a ese valor, su valor no puede ser modificado si ya fue definido. La usamos cuando queremos que el valor de una variable no cambie durante la ejecución de todo el programa.
const miConstante = 35;
console.log(miConstante);//35
miConstante = 15; //error.

//ejemplo 2:
// const miConstante;
miConstante = 35;
console.log(miConstante);//error, siempre hay que definir la variable, no se puede definir después.

//ejemplo 3:
function calcularAreaCirculo (radio){
    const PI = 3.14;
    if (radio < 0){
        return undefined;
    }
    return PI * (radio ** 2);//** 2=elevado al cuadrado 
}
console.log(calcularAreaCirculo(10));//314.



//Mutar Arreglo Declarado con Const: al declarar una variable con const esto no significa que ese valor no puede cambiar, significa que no podemos asignar un valor nuevo a esa variable. En este caso reasignarle el valor al array.
const MI_ARREGLO = [1, 2, 3, 4];

MI_ARREGLO = [5, 6, 7, 8]; // Error.
//ejemplo de reasginar valor:
MI_ARREGLO[0] = 5;
MI_ARREGLO[1] = 6;
MI_ARREGLO[2] = 7;
MI_ARREGLO[3] = 8;
console.log(MI_ARREGLO);// [5, 6, 7 ,8]



//Crear un objeto inmutable: no se puede modificar ni tampoco borrar (o sea, usar "delete")
let colores = {
    "verde" : "#10e04b",
    "azul" : "#1b50e0",
    "negro" : "#000000",
    "blanco" : "#ffffff"
};
Object.freeze(colores);
colores.amarillo = "#fff200";
console.log(colores);// TypeError.



//Funciones Flecha: son un tipo más compacto de funciones que podemos escribir, se suelen utilizar cuando necesitamos definir funciones anonimas, es decir, funciones sin nombre especificos. Son muy utiles cuando necesitamos pasar una función como argumento a otra función, la escribimos directamente como el argumento.
//Esto es una función anónima:
const fecha = function(){
    return new Date();
};
//Ejemplo de "transformación": le puse "fecho" para que no me marque error con el const de arriba xd.
const fecho = () => new Date();



//Funciones flecha con parámetros:
const sumarTres = function(x) {
    return x + 3;
};
//Si la queremos transformar quedaría así: 
const sumarTrez = (x) => x + 3;
console.log(sumarTrez(4));//7.

//Ejemplo 2: definir una función anónima y vamo a tomar dos parametros: el ".contact" concatena los arreglos.
const concatenarArreglos = function(arri1, arri2) {
    return arri1.concat(arr2);
};
console.log(concatenarArreglos([1, 2], [3, 4 ,5]));// [1, 2, 3, 4, 5].
//Ahora la pasamos a flecha:
const concatenarArregloz = (arr1, arr2) => arr1.concat(arr2);
console.log(concatenarArregloz([1, 2], [3, 4 ,5]));// [1, 2, 3, 4, 5].

//Ejemplo 2: 
const sumar = function(a, b) {
    let num = 6;
    return a + b + num;
}
//pasandola sería así:
const sumarr = (a, b) => {
    let num = 6;
    return a + b + num;
};
console.log(sumar(1, 1));// 8.

