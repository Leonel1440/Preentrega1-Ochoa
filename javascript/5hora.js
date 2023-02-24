/*Temas:
1-Acceder a propiedades: notación de punto
2-Acceder a propiedades: notación de corchetes
3-Acceder a propiedades: variables
4-Actualizar propiedades
5-Agregar propiedades
6-Eliminar propiedades
7-Objetos para búsquedas
8-Verificar propiedades
9-Objetos complejos
10-Objetos anidados
11-Arreglos anidos
12-Colección de discos
*/



//Acceder a Propiedades: Notación de Punto: acceder a las propiedades de los objetos
var miPerro = {
    "nombre": "Gino",
    "edad" : 5,
    "peso" : 6,
    "raza" : "Beagle"
};

console.log(miPerro.nombre);//variable + . +  propiedad
console.log(miPerro.edad);//variable + . +  propiedad
console.log(miPerro.peso);//variable + . +  propiedad
console.log(miPerro.raza);//variable + . +  propiedad



//Acceder a Propieades: notación de corchetes: 
var miCuaderno = {
    "color" : "verde",
    "categoria" : 3,
    "numero de paginas" : 200,
    "numero de hojas" : 100
};

console.log(miCuaderno.color);//verde
console.log(miCuaderno.categoria);
console.log(miCuaderno["numero de paginas"]);
console.log(miCuaderno["numero de hojas"]);



//Acceder a Propiedades: variables
var resultados = {
    1: "nora256",
    2: "gino577",
    3: "estef543",
    4: "kiara566"
};

var posicion = 4;
console.log(resultados [posicion]);//kiara566
var posicion = 1;
console.log(resultados [posicion]);//nora256



//Actualizar propiedades: para permitir que el objeto cambie durante la ejecución del programa.
var mochila = {
    "color" : "azul",
    "tamaño" : "mediano",
    "contenido" : ["botella de agua", "cuaderno"]
};

console.log(mochila.color);//azul.
//para actualizarlo se pone el nombre de la variable + . + propiedad que queremos actualizar = el valor que queremos asignar:
mochila.color = "verde";
console.log(mochila.color);//verde.
//ejemplo 2: agregar un elemento al final del arreglo
mochila.contenido.push("lápiz");
console.log(mochila.contenido);//["botella de agua", "cuaderno", "lápiz"]
//ejemplo 3: si queremos reasignar arreglos completamente nuevo:
mochila.contenido = []
console.log(mochila.contenido);// []



//Agregar propiedades: agregar otra piedad al objeto, se pone el nombre de la propiedad que queremos agregar + el valor que queremos asignar.
var curso = {
    "titulo" : "Aprende Javascript desde Cero",
    "idioma" : "Español",
    "duracion" : 30
};

curso.vistas = 34500;
console.log(curso.vistas);//34500.



//Eliminar propiedades: delete + variable + . + nombre de la propiedad + ;
var curso = {
    "titulo" : "Aprende Javascript desde Cero",
    "idioma" : "Español",
    "duracion" : 30
};

delete curso.duracion;
console.log(curso.duracion);



//Objetos para búsquedas:  código más sencillo.
function buscarElementoQuimico (simbolo){
    // var elementoQuimico = "";

    var simbolosQuimicos = {
        "Al" : "Aluminio",
        "S" : "Azufre",
        "CL" : "Cloro",
        "He" : "Helio",
        "B" : "Boro",
        "LI" : "Litio"
    };
    return simbolosQuimicos [simbolo];//esto nos retornará el valor asociado a ese "simbolo".
    // switch(simbolo){
    //     case "AI":
    //         elementoQuimico = "Aluminio";
    //         break;
    //     case "S":
    //         elementoQuimico = "Azufre";
    //         break;
    //     case "CL":
    //         elementoQuimico = "Cloro";
    //         break;
    //     case "He":
    //         elementoQuimico = "Helio";
    //         break;
    //     case "B":
    //         elementoQuimico = "Boro";
    //         break;
    //     case "LI":
    //         elementoQuimico = "Litio";
    //         break;
    // }
}

console.log(buscarElementoQuimico("AL"));//Alumnio
console.log(buscarElementoQuimico("S"));//Azufre
console.log(buscarElementoQuimico("CL"));//Cloro



//Verificar propiedades: verificar si tiene o no una propiedad ese objeto.
var miCuaderno = {
    "color" : "verde",
    "categoria" : 3,
    "precio" : 4.56
};

console.log(miCuaderno.hasOwnProperty("color"));//el resultado será true; muy util para los condicionales.
console.log(miCuaderno.hasOwnProperty("origen"));//false.
//Demostración en condicional:
function verificarPropiedad(obj, propiedad) {
    if(obj.hasOwnProperty(propiedad)){
        return "Propiedad: " + obj[propiedad];
    }else {
        return "El objeto no tiene esta propiedad";
    }
}
var miCuaderno = {
    "color" : "verde",
    "categoria" : 3,
    "precio" : 4.56
};

console.log(verificarPropiedad("color"));// Propiedad: verde
console.log(verificarPropiedad("origen"));// "El objeto no tiene esta propiedad"



//Objetos complejos: 
var ordenesDePizzas = [
    {
        "tipo" : "margarita",
        "tamaño" : "individual",
        "precio" : 5.67,
        "toppings": [
            "extra queso",
            "champiñones",
            "piña"
        ],
        "paraLlevar": true
    },
    {
        "tipo" : "cuatro quesos",
        "tamaño" : "familiar",
        "precio" : 18.34,
        "toppings" : [
            "extra queso",
            "pimentón"
        ],
        "paraLlevar": false
    },
    {
        "tipo" : "napolitana",
        "tamaño" : "individual",
        "precio" : 6.78,
        "toppings" : [],
        "paraLlevar" : true
    }
];

console.log(ordenesDePizzas[0])//nos retorna el primer grupo 
console.log(ordenesDePizzas[1])//nos retorna el segundo grupo 
//si queremos acceder al tipo de pizza del 0 objeto/grupo:
console.log(ordenesDePizzas[0].tipo)//margarita

console.log(ordenesDePizzas[0].precio)//5.67.
//si queremos acceder al tipo de pizza del primer objeto/grupo:
console.log(ordenesDePizzas[1].tipo)//cuatro quesos.

//si queremos acceder al tipo de pizza del segundo objeto/grupo:
console.log(ordenesDePizzas[2].tipo)//napolitana.



//Objetos anidados: objetos contenidos dentro de otros objetos.
var miReceta = {
    "descripcion" : "mi postre favorito",
    "costo" : 15.6,
    "ingredientes" : {
        "masa" : {
            "harina" : "100 grs",
            "sal" : "1 cucharadita",
            "agua" : "1 taza"
        },
        "cobertura" : {
            "azucar" : "120 grs",
            "chocolate" : "4 cucharadas",
            "mantequilla" : "200 grs"
        }
    }
};

console.log(miReceta.descripcion);//mi postre favorito.
console.log(miReceta.costo);//15.6
console.log(miReceta.ingredientes);//todo lo que está anidado.
// si queremos acceder a más cosas en ingredientes:
console.log(miReceta.ingredientes.masa);//harina: 100 grs, sal : 1 cucharadita, agua: 1 taza.
console.log(miReceta.ingredientes.masa.harina);// 100 grs.
console.log(miReceta.ingredientes.masa.sal);//  1 cucharadita.
console.log(miReceta.ingredientes.masa.agua);// 1 taza.



//Arreglos anidados: 
var misPlantas = [
    {
        tipo: "flores",
        listas: [
            "rosas",
            "tulipanes",
            "dientes de leon"

        ]
    },
    {
        tipo: "arboles",
        lista: [
            "abeto",
            "pino",
            "abedul"
        ]
    }
];

var primeraFlor = misPlantas[0].lista[0];
console.log(primeraFlor);// rosas, leo del futuro pensá cómo hiciste para llegar a rosas.
//otro ejemplo:

var segundoArbol = misPlantas[1].lista[1];//pino
console.log(segundoArbol);//pino



//Colección de Discos (proyecto):
/* Tenemos un objeto que reprsenta parte de una colección de álbunes musicales.
Cada álbum tiene un número de identificación único (id) asociado a otras propiedades.

No todos los álbumes tienen la información completa.

*/

var coleccionDeDiscos = {
    7853: {
        tituloDelAlbum: "Bee Gees Greatest",
        artista: "Bee Gees",
        canciones: ["Stayin´ Alive"]
    },
    5439: {
        tituloDelAlbum: "ABBA Gold"
    }
};


/* Defina una función actualizarDiscos que tome los siguientes parámetros:
-discos (el objeto que representa la colección de discos).
-id
-propiedad ("artista" o "canciones")
-valor
Tu meta es completar la función implementando las siguientes reglas para modificar el objeto pasado a la función:
-Si "valor" es una cadena vacía, elimina la propiedad del album correspondiente.

-Si "propiedad" es igual a la cadena de caracteres "canciones, pero el álbum no tiene una propiedad llamada "canciones", crea un arreglo vacío y agrega "valor" a ese arreglo.(2)

-Si "propiedad" es igual a la cadena de caracteres "canciones" y "valor" no es una cadena vacía, agrega "valor" al final del arreglo de canciones del álbum correspondiente.(3)

-Si "valor" no es una cadena vacía y "propiedad" no es igual a "canciones", asigna el valor del parámetro "valor" a la propiedad.(4)
Si la propieda no existe, debes crearla y asignar este valor.*/

function actualizarDiscos(discos, id, propiedad, valor){
    if (valor === ""){
        delete discos[id][propiedad];
    } else if (propiedad === "canciones"){// 2 y 3
        discos [id][propiedad] = discos [id][propiedad] || [];//5:58 hs video
        discos [id][propiedad].push(valor);
    } else {
        discos [id][propiedad] = valor;//4
    }
}

console.log(coleccionDeDiscos[7853].tituloDelAlbum);//Bee Gees Greatest

actualizarDiscos(coleccionDeDiscos, 7853, "tituloDelAlbum", "");

console.log(coleccionDeDiscos[7853].tituloDelAlbum);//undefinied.

//otro ejemplo:
console.log(coleccionDeDiscos[5439].canciones);//undefinied.

actualizarDiscos(coleccionDeDiscos, 7853, "canciones", "Mamma Mia");

console.log(coleccionDeDiscos[5439].canciones);//Mamma Mia.

//otro ejemplo:
console.log(coleccionDeDiscos[5439].artista);//undefinied.

actualizarDiscos(coleccionDeDiscos, 7853, "artista", "ABBA");

console.log(coleccionDeDiscos[5439].artista);//ABBA.