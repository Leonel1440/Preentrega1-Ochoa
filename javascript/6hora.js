/*Temas:
1-Ciclo "while"
2-Ciclo "for"
3-Ciclos "for": números impares
4-Ciclos "for": contar hacia atrás
5-Iterar sobre un arreglo con un ciclo "for"
6-Ciclos "for" anidados
7-Ciclos "do...while"
8-Búsqueda de perfil
*/



//los ciclos (loop/bucle) nos permite repetir una secuencia de instrucciones un número especifico de veces. Hay dos tipos de ciclos, los "while" y los "for"
//Ciclo (loop) "while": se usan cuando no tenemos un número especifico de iteraciones (repetición de bloque de código) que queremos realizar, pero si sabemos qué si tiene que ser cierto para continuar con el proceso.

var i = 0;
while (i<=3){//mientras esta condición sea verdera, ejecutaremos el código debajo// se repetirá 4 veces más
    console.log("Hola, Mundo");
    i++;
}
//en consola veríamos esto: Hola, Mundo | Hola, Mundo | Hola, Mundo | Hola, Mundo

//Otro ejemplo:
var miArreglo = [];
var i = 0;
console.log(miArreglo)
while (i < 10) {//se ejecutará 10 veces, si hubiese un "<=" se ejecutaría una vez más.
    miArreglo.push(i);
    i++;
}
console.log(miArreglo);
//en consola veríamos esto: [0, 1, 2, 3, 4 ,5 ,6 , 7, 8, 9]

//Ejemplo 2:
var numeros = [2, 3, 4, 5, 6, 8, 9, 34];
while (numeros.length > 4) {
    numeros.pop();
}
console.log(numeros);
//en consola veríamos: [2, 3, 4, 5]



//Ciclo (loop)"for": se usa cuando sabemos cuantas iteraciones serán necesarias.
var miArreglo = [];
for (var i = 0; i < 10; i++){//1: primero inicializar la variable, puede ser var, let o const; 2: mientras que i sea < que 10 el ciclo va a continuar; 3:ponemos si queremos aumentar o disminuir en 1.
    miArreglo.push(i);

}
console.log(miArreglo);
//en consola veríamos esto: [0, 1, 2, 3, 4 ,5 ,6 , 7, 8, 9]; si en vez de poner i++, si hubiese puesto "i = i + 2" o "i+= 2", lo estaríá aumentando en 2, y me daría [0, 2, 4, 6, 8].



//Ciclos "for" números impares: 
var miArreglo = [];//aca vamos a guardar los números impares.
for (var i = 1; i < 20; i +=2) {//comenzamos en 1 y luego incrementados en 2, asi lo hacemos impar
    miArreglo.push(i);
    
}
console.log(miArreglo);
//en consola veríamos: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19].



//Ciclos "for": contar hacia atrás: 
for (var i = 15; i >= 10; i--){
    console.log(i);
}
//en consola veríamos: 15, 14, 13, 12, 11, 10. También lo podríamos haber reducido en 2 con "i -= 2"

//Ejemplo 2:
var miArreglo = [];

for (var i = 10; i > 0; i -=2){
    miArreglo.push(i);
}
console.log(miArreglo);
//en consola veríamos: [10, 8, 6, 4, 2]



//Iterar sobre un arreglo con un ciclo "for": vamos a tener cada uno de los elementos de esos arreglos y los podremos usar en el cuerpo del ciclo, o sea, podremos hacer algo con cada uno de los elementos de ese arreglo.
var miArreglo = [4, 6, 8, 2];
var total = 0;

for (var i = 0; i < miArreglo.length; i++){//mientras "i" sea menor que la longitud del arreglo (tene en cuenta que i si tiene un valor, comienza de cero, la primera parte lo define "var i = 0")
    total += miArreglo[i];
}
console.log(total);
//en consola veremos: 20

//Ejemplo 2:
var lenguajes = ["Javascript", "Python", "Java", "C++"];

for (var i = 0;i < lenguajes.length; i++){
    console.log(lenguajes [i]).toUpperCase;//esto lo convierte a mayusculas a la cadena de caracteres.
}
//en consola veremos: JAVASCRIPT, PYTHON, JAVA, C++.

//Ejemplo 3:
function contarNumerosPares(arreglo){
    var total = 0;

    for (var i = 0; i < arreglo.length; i++){
        if (arreglo[i]% 2 ==0){
            total++;
        }
    }

    return total;
}
console.log(contarNumerosPares([5, 3, 1]));//veriamos 0
console.log(contarNumerosPares([5, 3, 1, 2]));// veriamos 1 porque hay un número par.
console.log(contarNumerosPares([5, 3, 1, 2, 4, 8]))//veriamos 3, porque hay tres numeros pares



//Ciclos "for" anidados: escribir ciclos dentro de otros ciclos.
var miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (var i = 0; i < miArreglo.length; i++){
    console.log(miArreglo[i]);
}
//en consola veremos: [1, 2, 3], [4, 5, 6], [7, 8 ,9]

//ejemplo 2:
var miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (var i = 0; i < miArreglo.length; i++){
    var arregloAnidado = miArreglo[i];//arreglo
    for (var j = 0; j < arregloAnidado.length; j++) {
        console.log(arregloAnidado[j]);//elemento
    }
}



//Ciclos "do..while": hacer "x cosa" mientras una condición sea verdadera.
//ciclo while ejemplo:
var x;
x = 5;
while (x < 10){//si es verdadera ejecutar lo debajo, si no, se saltea.
    console.log(x);
    x++;
}
//ciclo do..while: en la vida real lo podría usar para, cuando el usuario ingrese un valor, tenemos que pedirselo al menos una vez, si es valido continua el programa, si no es valido le continuamos pidiendo los datos hasta que ingrese un valor válido.
var x;
x = 5;
do {
    console.log(x);//se ejecuta antes de evaluar si es verdadera o no. Si es verdadera la ejecutamos nuevamente, y si es falsa, se deja de ejecutar. Esa es la diferencia, en do..while por lo menos una vez si se ejecutará, en el while no.
    x++;
}   while(x < 10);



//Busqueda de perfil: 
var contactos = [//tene en cuenta el corchete, cada uno de los tres objetos pertenecen a un único arreglo, indice 0, 1 y 2.
    {
        "nombre" : "Nora",
        "apellido" : "Nav",
        "numero" : "054326543",
        "gustos" : ["Pizza", "Programación"]
    },
    {
        "nombre" : "Harry",
        "apellido" : "Potter",
        "numero" : "0994372684",
        "gustos" : ["Hogwarts", "Magia"]
    },
    {
        "nombre" : "Sherlock",
        "apellido" : "Holmes",
        "numero" : "0487345643",
        "gustos" : ["Casos interesantes", "Violín"]
    }
];
//incialmente el valor de "i" es igua la cero, porqeu la usaremos como indice, y continuaremos el proceso mientras el valor de "i" sea menor que el tamaño de la lista de contactos, y en cada iteración vamo a incrementar el valor de "i" en más uno.
//inicialmente su valor será 0, por tanto podremos a acceder al primer elemento del arreglo (nora), luego cuando se actualice a uno, podremos a acceder al indice 1 (harry potter) y luego al indice 3 (sherlock) y asi sucesivamente si tuvieramos más indices.
function buscarPerfil(nombre, propiedad){
    for (var i = 0; i < contactos.length; i++){
        if (contactos[i].nombre === nombre)//con "contactos[i]" accedemos al objeto, y con ".nombre" accedemos a su nombre, y luego lo operamos con el operador de igualdad estricta "=== nombre" con el nombre que queremos conseguir.
            return contactos[i][propiedad] || "La propiedad no existe";
    }
    return "El contacto no está en la lista.";// si nunca se consigue el contacto.
}

console.log(buscarPerfil("Nora", "gustos"));//veremos ["Pizza", "Programación"]
console.log(buscarPerfil("Harry", "apellido"));//veremos Potter.
console.log(buscarPerfil("Sherlock", "numero"));//veremos 0487345643
//todo esto funciona correctamente cuando el contacto y la propieadad está en el arreglo.
onsole.log(buscarPerfil("Nora", "direccion"));// veremos "La propiedad no existe" porque Nora no tiene la propiedad "direccion".
onsole.log(buscarPerfil("Bob", "numero"));//veremos "El contacto no está en la lista" porque el ciclo se completó, esta condición nunca fue verdadera (la del if), por tanto se retornó el último mensaje.