/*Temas:
1-Arreglos
2-Arreglos anidados
3-Acceder a los elementos de un arreglo
4-Modificar elementos de una arreglo
5-Acceder a arreglos multidimensionales
6-Método.push()
7-Método.pop()
8-Método.shift()
9-Método.unshift()
10-Lista de compras
11-Funciones
12-Parámetros y Argumentos
13-Ámbito global y variables globales
14-Ámbito local y variables locales
15-Ámbito global vs ámbito local
16-Retornar un valor
17-Undefined
18-Asignar un valor retornado a una variable
19-Permanece en fila
*/


//TEMA: ARREGLOS (2hs 5minutos)
//esto sirve para acceder a los distintos arreglos, el primer corchete escoge uno de los tres anidados, y el segundo número escoge uno de los tres números dentro del corchete que hayamos elegido
//veremos en la consola: 6
var miArreglo = [[1,2,3], [4,5,6], [7,8,9]];
console.log(miArreglo[1][2])



//_CUATROS METODOS PRINCIPALES PARA TRABAJAR CON EL PRINCIPIO Y FINAL DE UN ARREGLO: push - pop - shift - unshift
//.push() sería añadir un elemento al final de un arreglo, o esa agregar algo que no estaba puesto previamente, 
//veremos en la consola :Inviernos, Otoño, Primavera, Verano.
var estaciones = ["Inviernos", "Otoño", "Primavera"];
estaciones.push("Verano");



//pop()es para remover el último elemento de un arreglo
//veremos en la consola 1: Inviernos, Otoño, Primavera
//veremos en la consola 2: Verano
var estaciones;
var estacion;
estaciones= ["Inviernos", "Otoño", "Primavera", "Verano"];
estaciones.pop();//esto me remueve si o si el último elemento
estacion = estaciones.pop();//aca le asigno el valor del último elemento removido



//shift()remueve el primer elemento, casi como el pop pero al reves
//veremos en la consola: Otoño, Primavera, Verano
var estaciones= ["Inviernos", "Otoño", "Primavera", "Verano"];
estaciones.shift();//los parentesis indican a javascript que ejecute esta acción
console.log(estaciones);



//unshift()agregar un elemento al principio de un arreglo
//veremos en la consola: Verano,Inviernos, Otoño, Primavera
var estaciones = ["Inviernos", "Otoño", "Primavera"];
estaciones.unshift("Verano");
console.log(estaciones)



//Lista de compras: arreglo anidados (proyecto)
var milistaDeCompras = [["cereal", 3], ["leche",2],["galletas",4],["pan",5], ["refresco", 7],["pollo", 7]]
console.log("Voy a comprar" + milistaDeCompras[0][1] + "unidades de " + milistaDeCompras[0][0] + ".")//cereal
console.log("Voy a comprar" + milistaDeCompras[1][1] + "unidades de " + milistaDeCompras[1][0] + ".")//leche
console.log("Voy a comprar" + milistaDeCompras[2][1] + "unidades de " + milistaDeCompras[2][0] + ".")//galletas
console.log("Voy a comprar" + milistaDeCompras[3][1] + "unidades de " + milistaDeCompras[3][0] + ".")//pan
console.log("Voy a comprar" + milistaDeCompras[4][1] + "unidades de " + milistaDeCompras[4][0] + ".")//refrescos
console.log("Voy a comprar" + milistaDeCompras[5][1] + "unidades de " + milistaDeCompras[5][0] + ".")//pollo



//FUNCIONES (código reutilizable): podemos escribir codigo que podremos reutilizar en nuestro programa, solamente usando el mostrarMensaje podremos "activar" el mensaje ¡Hola, Mundo! sin tener que escribirla otra vez; se puede ejecutar las veces que queramos, de esta manera nos ahorramos muuucho código.
function mostrarMensaje() {
    console.log("¡Hola, Mundo!")
}
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();



//ARGUMENTOS (son los valores que asignamos a los parametros): son funciones también, pero pueden recibir valores, se utilizarán parametros (a, b) o (pepe1, pepe2) o (x, y), son cualquier nombre que le queramos asignar a un valor que se tomará cuando llamemos a la función.
//en la consola veremos: El resultado de 5 + 3 es: 8 
function sumar(a, b) {
    var suma = a + b;
    console.log("El resultado de " + a + " + " + b + " es: " + suma)
}
sumar(5, 3);//Los valores se asignan en el mismo orden que aparecen en la lista de parametros, el valor 5 será para "a" y el valor 3 será para "b", luego si se suman esos valores, lo veremos en la consola
sumar(8, 9);//esto nos
sumar(2, 4);//ahorra código

var x = 5;
var y = 3;
sumar(x, y);//aca le estamos asignando el valor de "x" a la "a" y el valor de "y" a la "b", nos dará el mismo resultado.

function concatenarTresCadenas(cadena1, cadena2, cadena3){
    console.log(cadena1 + " " + cadena2 + " " + cadena3);
}
concatenarTresCadenas("Estoy", "aprendiendo", "a programar");//estoy = cadena1; aprendiendo = cadena2; a programar = cadena3.



//Ámbito global: no todas las variables pueden usarse en todas las distintas partes del programa, tenemos variables globales y variables locales. Una variable con ámbito global se puede usar en cualquier lugar del programa porque está definida en el programa principal (o sea, no está dentro de una función, es directo).
var miVariableGlobal = 5;
console.log(miVariableGlobal);

function miFuncion(){
    console.log(miVariableGlobal);
}

miFuncion();
console.log(miVariableGlobal);
//en el ejemplo de arriba, de las tres maneras mostramos al 5 en la consola.



//Ámbito local: son locales para una función, son variables que definimos dentro de una función y solo pueden usarse dentro de esa función. si definimos una función y dentro de esa función declaramos una variable, usando var, vamos a mostrar el valor de esa variable dentro de esa función, y vamos a llamar a la función para probar que la variable esté definida.
function miFuncion() {
    var miFuncionLocal = 4;
    console.log(miVariableLocal);
}
miFuncion();



//Ámbito global vs Ámbito local: cuando tenemos ambas variables, pero con el mismo nombre, cuál se usará? la local tiene prioridad (solo si tienen el mismo nombre en una función), depende qué uses, si usas console.log se verá la global.
var miNombre = "Nora";

function mostrarMiNombre(){
    var miNombre = "Gino";
    console.log(miNombre);
}

mostrarMiNombre();//Gino
console.log(miNombre);//Nora



//Retornar un valor: las funciones pueden retornar un valor además de recibir valores. Return permite que la función retorne un valor cuando se ejecute esa linea. O sea, se reemplazará el valor asignado que era "a y b" y se volverá "5 y 3", por tanto veremos en la consola "8" cuando, sin esto, no se mostraría nada.
function sumar(a, b){
    return a + b;
}
console.log(sumar (5, 3));



//Undefined: podemos no retornar ningun valor de la funcion, pero aun asi la funcion retornara algun valor por defecto, este es el "undefined". Como no estamos retornando nada en este ejemplo, en la consola se verá undefined.
function sumar(a, b){
    console.log(a + b);

}



//Asignar un valor retornado: esto es muy util para guardar un valor y luego usarlo. Asignamos el valor a una variable, o sea, al "sumar(5, 3) le agregar el var" 
function sumar(a, b){
    return a + b;
}
var resultado = sumar(5, 3);//de esta manera nos retornará el valor 8
console.log(resultado);
//Otro ejemplo, aca en consola veremos "Mi meta es aprender Javascript", el valor retornado se reemplaza y luego se asigna a la variable.
function crearCadenaConMeta (lenguajeDeProgramacion){
    return "Mi meta es aprender " + lenguajeDeProgramacion;
}

var miMeta = crearCadenaConMeta("Javascript");
console.log(miMeta);



//Permanece en fila (una cola=queue): es una estructura de datos abstracta en la cual los elementos se mantienen en orden. Los nuevos elementos se pueden añadir al final de la cola y los elementos previos se retiran del principio de la cola.
//Proyecto: Define una función proximoEnLaFila que tome un arreglo (arreglo) y un número (elemento) como argumentos. Agrega el número al final del arreglo y luego elima el primer elemento del arreglo. La función proximoEnLaFila debe retornar el elemento que fue removido.
function proximoEnLaFila(arreglo, elemento){
    arreglo.push(elemento);// Agregar al final del arreglo.
    return arreglo.shift();// Remover el primer elemento, con el shift, podemos solo ponerle el return para retornar el elemento eliminado anteriormente.

}

var miArreglo = [1, 2, 3, 4, 5];
console.log("Antes: " + JSON.stringify(miArreglo));//esto nos permite para mostrar los arreglos en la consola, nos permite mostrar el arreglo de forma más presentable en la consola.
console.log(proximoEnLaFila(miArreglo, 6));
console.log("Después: " + JSON.stringify(miArreglo));


