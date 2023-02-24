/* Temas:
1-Valores por defecto para parámetros:
2-Operador rest
3-Operador Spread
4-Sintaxis de desestructuración 
5-Sintaxis de desestructuración: objetos anidados
6-Sintaxis de desestructuración: arreglos
7-Sintaxis de desestructuración con el operador rest
8-Sintaxis de desestructuración: pasar objeto como argumento
9-Métodos
10-Definir una clase
11-Getters y setters
*/


//Valores por defecto para parámetros: esto es util cuando el usuario omita algún argumento, para usar el valor por defecto. Agregamos el "= 1"
const incrementar = (num, valor = 1) => num + valor;
console.log(incrementar(5));//6
console.log(incrementar(5, 3));//8 (como le asignamos valor, se bloquea el valor por defecto)



//Operador rest: permite pasar cualquier número de argumentos a una función, y que se agrupen en un arreglo. Consiste en poner ... +parametro
function miFuncion(...args){
    console.log(args);
}
miFuncion(1);//[1]
miFuncion(1, 2);//[1, 2]Si hubiera usado console.log(args,lenght) me daría 2, porque tenemos dos valores.
miFuncion([1, 2, 3], [4, 5, 6]);//[[1, 2, 3], [4, 5, 6]]. Si hubiera usado console.log(args,lenght) me daría 2, porque tenemos dos arreglos.

//Ejemplo 2: modificar una función manteniendo su funcionalidad o extendiendola.
const sumar = (...args) => {
    const args = [x, y ,z];
    return args.reduce ((a, b) => a + b, 0);
}



//Operador spread: hace lo contrario al operdor rest; toma un arreglo y los descompone en sus elementos individuales para que la función pueda recibirlo y asignarlo a su parámetros correspondientes. Usamos ... +variable
const numeros = [1, 2, 3];
function sumar(x, y ,z) {
    console.log(x);
    console.log(y);
    console.log(z);
    return x + y + z;
}
console.log(sumar(...numeros));



//Sintaxis de desestructuración: nos permite asignar las propiedades de un objeto a variables que podemos usar en nuestro programa.
const usuario = {
    nombre: "Gino smith",
    edad: 34
};
//antes para asignar las propiedades "nombre" y "edad" a variables, haciamos eso:
// const nombre = usuario.nombre;
// const edad = usuario.edad;
//pero podemos hacer esto en una sola línea:
const {nommbre, eddad} = usuario;//buscará dentro del objeto "usuario" si existen esas dos propiedades.

//Ejemplo 2:
var coordenadas = {
    x: 4,
    y: 6,
    z: 12
};
//antes haríamos eso:
// const x = coordenadas.x;
// const y = coordenadas.y;
// const z = coordenadas.z;
//ahora haríamos esto:
const {x, y, z} = coordenadas;//4, 6, 12.



//Sintaxis de desestructuración: objetos anidados: 
const user = {
    johnDoe : {//este es el objeto anidado
        edad: 27,
        correo: "johnDoe@gmail.com"
    }
};
const {johnDoe: {edddad, correo}} = user;// tambien le podemos agregar un nuevo nombre a la variable: {edddad: edadDelUsuario, correo: correoDelUsuario}, entonces debería usar console.log(edadDelusuario)
console.log(edddad);
console.log(correo);

//Ejemplo 2: 
const PRONOSTICO_LOCAL = {
    "ayer" : {
        minima: 61,
        maxima: 75
    },
    "hoy": {
        minima: 64,
        maxima: 77
    },
    "mañana": {
        minima: 68,
        maxima: 80
    }
};
const minimaHoy = PRONOSTICO_LOCAL.hoy.minima;
const maximaHoy = PRONOSTICO_LOCAL.hoy.maxima;
console.log(minimaHoy);//64
console.log(maximaHoy);//77

//Ejemplo 3 con sintaxis de desestructuración:
const {hoy: {minima: minimoHoy}} = PRONOSTICO_LOCAL;
console.log(minimoHoy);//64

//Ejemplo 4:
const {hoy: {maxima: maximoHoy}} = PRONOSTICO_LOCAL;
console.log(minimoHoy);//77

//Ejemplo 5: ambas juntas
const {hoy: {minima: minimeHoy, maxima: maximeHoy}} = PRONOSTICO_LOCAL;
console.log(minimeHoy, maximeHoy);//64 77



//Sintaxis de desestructuración: arreglos: nos permite asignar valores a variables usando arreglos.
var a;
var b;
var c;
[a, b,,, c] = [1, 2, 3, 4, 5 ,6];//",,," cada "," indica cuanto  queremos saltar y, en este caso, llegar a la quinta
console.log(a);//1
console.log(b);//2
console.log(c);//5

//Ejemplo 2: cómo le cambiamos los valores en viceversa. En el segundo arreglo ponemos los nuevos valores que queremos asignarle
var a = 8;
var b = 6;
[b, a] = [a, b];//en este último arreglo, a se asignará para b y b para a.
console.log("a: " + a)
console.log("b: " + b)



//Sintaxis de desestructuración con el Operador Rest: para reasignar un arreglo en varias variables. Usamos "... + variable"
var a;
var b;
var arr;
[a, b, ...arr] = [1, 2, 3, 4, 5, 6, 7]
console.log(a);//1
console.log(b);//2
console.log(arr);//[3, 4, 5, 6, 7]

//Ejemplo 2: remover los tres primeros elemento de un arreglo
const arregloInicial = [1, 2, 3, 4, 5, 6, 7, 8];
function removerTresPrimerosElementos (arreglo) {
    const [ ,,, ...nuevoArreglo] = arreglo;
    return nuevoArreglo; 
}
const arregloFinal = removerTresPrimerosElementos(arregloInicial);
console.log(arregloFinal);//[4, 5, 6, 7 ,8]



//Sintaxis de desestructuración: pasar objeto como argumentos: 
var nuevoPerfilCliente = {
    nombre: "Jane Doe",
    edad: 24,
    nacionalidad: "Española",
    ubicacion: "España"
};
const actualizarPerfil = (informacionDePerfil) => {
    const {nombre, edad, nacionalidad, ubicacion} = informacionDePerfil;
    console.log(nombre);
    console.log(edad);
    console.log(nacionalidad);
    console.log(ubicacion);

};
actualizarPerfil(nuevoPerfilCliente);//Jane Doe 24 Española España

//Ejemplo 2: descomponer el objeto directamente en la lista de parámetros para asignarlo a variables individuales:
const actualizarPerfill = ({nombre, edad, nacionalidad}) => {
    console.log(nombre);
    console.log(edad);
    console.log(nacionalidad);
    console.log(ubicacion);
};
actualizarPerfil(nuevoPerfilCliente);//Jane Doe 24 Española España

//Ejemplo 3: pasar un objeto a una función flecha:
const estadisticas = {
    max: 56.78,
    desviacionEstandar : 4.34,
    mediana: 34.54,
    moda: 23.87,
    min: -0.75,
    promedio: 35.85
};
//pasandola: que calcula la mitad o el punto medio entre el maximo y el mínimo del conjunto de estadisticas
const mitad = ({max, min}) => (max + min) / 2.0;
console.log(mitad(estadisticas));//28.015



//Plantillas literales: es un tipo especial de cadena de caracteres que nos permite crear cadenas con varias lineas y reemplazar los valores de las variables que necesitemos en una cadena. Sus características son: 1)se definen usando el acento invertido ´´ en lugar de comillas; 2) pueden contener comillas simples y dobles; 3) las líneas se preservan como se escriben en el código; 4) para reemplazar una variable se escribe ${variable}; 5)dentro de ${}también puedes escribir expresiones.
var a = 6;
console.log(`El valor de a es ${a}`)//El valor es 6; este valor fue remplazado

//Ejemplo 2:
var nombre = "Nora";
var edad = 6;
console.log(`Mi nombre es ${nombre} y tengo ${edad} años.`)

//Ejemplo 3 con array:
var miArreglo = [1, 2, 3, 4];
console.log(`El arreglo ${JSON.stringify(miArreglo)} `);//JSON convierte un valor a una string.

//Ejemplo 4: también podemos reemplazar el valor de las propiedades de un objeto.
var persona = {
    nombre: "Gino Cass",
    edad: 10
};
const SALUDO = `¡Hola! Mi nombre es ${persona.nombre} y tengo ${persona.edad} años.`;//¡Hola! Mi nombre es Gino Cass y tengo 10 años.



//Crear objetos de Forma Concisa: 
const crearPersona = (nombre, edad, idioma) => {
    return {//retornará un objeto
        nombre: nombre,
        edad: edad,
        idioma: idioma
    };
};
console.log(crearPersona("Gino Smith", 28, "Español"));
//Forma más concisa:
const crearPersonita = (nombre, edad, idioma) => ({nombre, edad, idioma});
console.log(crearPersona("Gino Smith", 28, "Español"));



//Métodos: declarar funciones dentro de los objetos que creemos. Si el valor de una propiedad es una función, se denomina "método"
const personita = {
    nombre: "Isabel",
    presentarse(){//esta sería la "función", pero más breve
        return `¡Hola! Mi nombre es ${this.nombre}`;// con "this" esta propiedad (nombre) se buscará
    }
};
console.log(persona.presentarse());//¡Hola! Mi nombre es Isabel.



//Definir una clase: una clase es un "plano de un edificio/objeto" que nos permite crear muchos objetos con la misma estructura, las mismas propiedades y la misma funcionalidad. De esta manera creamos código una sola vez y reusarlo para crear tantos objetos como necesitemos en nuestro programa.
class TransbordadorEspacial {
    constructor(planeta) {
        this.planeta = planeta;//decimos: vamos a asignar el valor de parametro a la propiedad "planeta" del objeto que estamos creando.
    }
}
var zeus = new TransbordadorEspacial("Jupiter");
console.log(zeus.planeta);//En consola veremos: jupiter.

var apolo = new TransbordadorEspacial("Marte");
console.log(apolo.planeta);//Marte.

//Ejemplo 2:
class Mascota {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
var miMascota = new Mascota("Nora", 5);
console.log(miMascota.nombre);//Nora
console.log(miMascota.edad);//5
//Podemos reutilizar este código para crear cuantos objetos necesitamos, por ejemplo:
var tuMascota = new Mascota("Gino", 2);//estamos reutilizando el codigo para crear dos mascotas distintas y cada una tendrá sus propios valores para sus propidades y serán independientes.



//Getters y Setters: getters nos permiten obtener el valor de una propiedad privada accediendo de forma indirecta sin necesidad de cambiarlo. Get + propiedad. Un setter es una función que nos permite actualizar el valor de una propiedad, son utiles porque podemos verificar el valor nuevo antes de asignarlo.
class Libro {
    constructor(autor) {
        this._autor = autor;//podemos proteger esta data para que nuestras variables sean privadas, agregando un "_" antes del nombre de la propiedad, esto les indica a otros desarrollados que no lo modifiquen.
    }
    get autor() {
        return this._autor;
    }
    set autor(nuevoAutor) {
        this._autor = nuevoAutor;
    }
}

const libro = new Libro("anónimo");
console.log(libro.autor);//anónimo. No hace falta usar el "_autor" gracias al uso del get.

//uso del setter al actualizar:
libro.autor = "Gino Smith";
console.log(libro.autor);//Gino Smith.