
let presion = document.getElementById("btn_presion")
btn_presion.addEventListener("click",hipertension)
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

let boton1 = document.getElementById("botonPectoral")
botonPectoral.addEventListener("click",sweetAlert)

const imgPectoral = "pectoralMayor.jpg"
function sweetAlert(){
    swal({
        title: "Pectoral mayor",
        text: "El músculo Pectoral Mayor se encuentra inervado por: Los Nervios pectorales lateral y medial.Irrigado por Ramas pectorales de la arteria toracoacromial, ramas perforantes de la arteria torácica interna.En cuanto a sus inserciones, su origen está en la Porción clavicular: cara anterior de la mitad medial de la clavícula Porción esternocostal: cara anterior del esternón, cartílagos costales 1-6 Porción abdominal: capa anterior de la vaina de los músculos rectos del abdomen y se insertan en Cresta del tubérculo mayor del húmero.",
        icon: "pectoralMayor.jpg",
    });
}

let boton2 = document.getElementById("botonDorsal")
botonDorsal.addEventListener("click",sweetAlert2)

const imgDorsal = "dorsalAncho.jpg"
function sweetAlert2(){
    swal({
        title: "Dorsal ancho",
        text: "El músculo Dorsal ancho se encuentra inervado por: Los Nervio toracodorsal.Irrigado por Arteria toracodorsal, arterias intercostales posteriores, ramas perforantes 9-11 y arterias lumbares 1-3.En cuanto a sus inserciones, su origen está en la Porción vertebral: procesos espinosos de las vértebras T7-T12, fascia toracolumbar Porción ilíaca: tercio posterior de la cresta ilíaca Porción costal: costillas 9-12 Porción escapular: ángulo inferior de la escápula y se insertan en Surco intertubercular del húmero, entre los músculos pectoral mayor y redondo mayor.",
        icon: "dorsalAncho.jpg",
    });
}


let boton3 = document.getElementById("botonBiceps")
botonBiceps.addEventListener("click",sweetAlert3)

const imgBiceps = "bicepsBraquial.jpg"
function sweetAlert3(){
    swal({
        title: "Biceps braquial",
        text: "El músculo Biceps braquial se encuentra inervado por: Los Nervio musculocutáneo (C5- C6).Irrigado por Ramas de la arteria braquial.En cuanto a sus inserciones, su origen está en la Cabeza corta: vértice del proceso coracoides de la escápula Cabeza larga: tubérculo supraglenoideo de la escápula y se insertan en Tuberosidad del radio Fascia profunda del antebrazo (inserción de la aponeurosis del músculo bíceps braquial o bicipital).",
        icon: "bicepsBraquial.jpg",
    });
}




// const nombre = document.getElementById("nombre");
// const email = document.getElementById("email");
// const materia = document.getElementById("materia");
// const boton = document.getElementById("btn-enviar");
// const resultado = document.querySelector(".resultado");

// boton.addEventListener("click",(e)=>{
//     e.preventDefault()
//     let error = validarCampos();
//     if (error[0]){
//         resultado.innerHTML = error[1];
//         resultado.classList.add("red");
//     }else{
//         resultado.innerHTML = "Solicitud enviada correctamente";
//         resultado.classList.add("green");
//         resultado.classList.remove("red");
//     }
// })

// const validarCampos = ()=>{
//     let error = [];
//     if (nombre.value.length < 5 || nombre.value.length > 40 ){
//         error[0] = true;
//         error[1] = "El nombre es inválido"
//         return error;
//     }else if (email.value.length < 5 ||
//                 email.value.length > 40 || 
//                 email.value.indexOf("@") == -1 || 
//                 email.value.indexOf(".") == -1){
//         error[0] = true;
//         error[1] = "El mail es inválido";
//         return error;
//     }else if (materia.value < 4 || materia.value > 40){
//         error[0] = true;
//         error[1] = "La materia no existe"
//     }

//     error[0] = false;
//     return error;
// }

// HACER UNA FUNCIÓN QUE AL HACER CLICK A UN BOTON, ME GUARDE TODOS LOS DATOS EN EL LOCALSTORAGE
// const titulo = document.querySelector(`#titulo`)
// const btnNombre = document.querySelector(`#btnNombre`)

// let nombre = ''
// const nombreLS = localStorage.getItem('nombre')

// if (nombreLS) {
//     nombre = nombreLS
// } else {
//     nombre = prompt('Ingrese su nombre')
//     localStorage.setItem('nombre', nombre)
// }

// titulo.innerText = `Bienvenido ${nombre}`

// btnNombre.addEventListener('click', () => {
//     localStorage.removeItem('nombre')
//     window.location.reload()
// })



let usuarios = []
const usuariosLS = JSON.parse( localStorage.getItem('usuarios') )

if (usuariosLS) {
    usuarios = usuariosLS
}

const userInput = document.querySelector(`#userInput`)
const emailInput = document.querySelector(`#emailInput`)
const selectCurso = document.querySelector(`#selectCurso`)
const btnAgregar = document.querySelector(`#btnAgregar`)

btnAgregar.addEventListener('click', () => {
    const nombre = userInput.value
    const email = emailInput.value
    const curso = selectCurso.value

    if (nombre === '' && email === '') return

    const user = {
        id: usuarios.length + 1,
        nombre: nombre,
        email: email,
        curso: curso
    }

    usuarios.push(user)
    userInput.value = ""
    emailInput.value = ""

    localStorage.setItem('usuarios', JSON.stringify(usuarios))
})


































































// class Anatomia{
//     constructor(name, inervacion, irrigacion, origen, inserciones){
//         this.name = name;
//         this.inervacion = inervacion;
//         this.irrigacion = irrigacion;
//         this.origen = origen;
//         this.inserciones = inserciones;
//     }
//     musculoInfo(){
//         // alert(`El músculo <b>${this.name}</b> se encuentra inervado por:<br> Los <b>${this.inervacion}</b><br>Irrigado por <b>${this.irrigacion}</b><br>En cuanto a sus inserciones, su origen está en la <b>${this.origen}</b> y se insertan en <b>${this.inserciones}</b>.` + "<br>" + "<br>")
//         alert(`El músculo ${this.name} se encuentra inervado por: Los ${this.inervacion}.Irrigado por ${this.irrigacion}.En cuanto a sus inserciones, su origen está en la ${this.origen} y se insertan en ${this.inserciones}.`)
//     }
// }

// const pectoralMayor = new Anatomia ("Pectoral Mayor","Nervios pectorales lateral y medial","Ramas pectorales de la arteria toracoacromial, ramas perforantes de la arteria torácica interna","Porción clavicular: cara anterior de la mitad medial de la clavícula Porción esternocostal: cara anterior del esternón, cartílagos costales 1-6 Porción abdominal: capa anterior de la vaina de los músculos rectos del abdomen", "Cresta del tubérculo mayor del húmero")
// const dorsalAncho = new Anatomia ("Dorsal ancho","Nervio toracodorsal","Arteria toracodorsal, arterias intercostales posteriores, ramas perforantes 9-11 y arterias lumbares 1-3","Porción vertebral: procesos espinosos de las vértebras T7-T12, fascia toracolumbar Porción ilíaca: tercio posterior de la cresta ilíaca Porción costal: costillas 9-12 Porción escapular: ángulo inferior de la escápula","Surco intertubercular del húmero, entre los músculos pectoral mayor y redondo mayor")
// const bicepsBraquial = new Anatomia("Biceps braquial","Nervio musculocutáneo (C5- C6)","Ramas de la arteria braquial","Cabeza corta: vértice del proceso coracoides de la escápula Cabeza larga: tubérculo supraglenoideo de la escápula","Tuberosidad del radio Fascia profunda del antebrazo (inserción de la aponeurosis del músculo bíceps braquial o bicipital)")

// let pectoral = document.getElementById("btn")
// btn.addEventListener("click",llamarPectoral)
// function llamarPectoral(){
//     pectoralMayor.musculoInfo();
// }

// let dorsal = document.getElementById("dorsalBoton")
// dorsalBoton.addEventListener("click",llamarDorsal)
// function llamarDorsal(){
//     dorsalAncho.musculoInfo();
// }

// let bicepss = document.getElementById("bicepsBoton")
// bicepsBoton.addEventListener("click",llamarBiceps)
// function llamarBiceps(){
//     bicepsBraquial.musculoInfo();
// }





// function otrosMusculos(){
//     const musculoSuperior = ["trapecio", "masetero","risorio","buccinador","cigomático mayor y menor"];
//     const musculoTorax = ["pectoral menor","serrator posterior, superior e inferior","subcostales","intercostales externos, internos e íntimos"];
//     const musculoBrazos = ["deltoides","triceps braquial","coracobraquial","ancóneo"];
//     const musculoMiembroInferior = ["poplíteo","plantar delgado","triceps sural","flexor largo del dedo gordo","tibial anterior","cuádriceps femoral","sartorio"]

//     const musculosJuntos = musculoSuperior.concat(musculoTorax, musculoBrazos,musculoMiembroInferior);
//     alert(`Estos son otros músculos que no figuran en nuestra página: ${musculosJuntos}`)
// }
// otrosMusculos();



// function agregarDatos(){
//     let trapecio = " es un músculo grande, pareado y de forma triangular que se localiza en el aspecto posterior del cuello y el tórax. Se encuentra inervado por el nervio accesorio(motor) y los nervios anteriores C3- C4 (motor/sensitivo). Su irrigación depende de la arteria occipital, cervical superficial y arterial dorsal de la scapula "
//     let masetero = " es un músculo pareado, fuerte, grueso y de forma rectangular que tiene su origen en el arco cigomático y se extiende hasta el ángulo de la mandíbula. Está constituido por una porción superficial y otra profunda. Se encuentra inervado por el nervio maseterino (rama del nervio mandibular). Su irrigación depende de la arteria maseterina"
//     let risorio = " es un músculo delgado de la cara que pertenece al grupo de los músculos bucolabiales. Es muy variable e inconsistente. Se encuentra inervado por la rama bucal del nervio facial (VII par craneal). Su irrigación depende de la rama labial superior de la arteria facial"
//     let tricepsBraquial = " es un músculo de tres cabezas (tri-tres cep-cabeza) ubicado en la región del brazo. Corresponde al único constituyente del grupo muscular posterior de la región braquial, y se extiende a lo largo de casi toda la extensión longitudinal del húmero. Consta de tres cabezas: larga, lateral y medial; las cuales provienen desde sus orígenes respectivos en el húmero y la escápula, para insertarse distalmente mediante un tendón común en la ulna. Se encuentra inervado por el nervio radial (C6-C8). Su irrigación depende de la arterial braquial profunda y la arteria colateral ulnar superior"
//     let pectoralMenor = " es un pequeño musculo situado entre escápula y tórax, por detrás del pectoral mayor. Tiene como función la de movilizar la cintura escapular, participa en la respiración, su retracción o acortamiento ocasiona síndromes como el de hombros adelantados. Se encuentra inervado por los nervios pectorales medial y lateral (C5-T1). Su irrigación depende de la arteria toracoacromial."
//     let tricepsSural = " es un músculo de la pierna constituido por la unión de los músculos gastrocnemios, conocidos como gemelos, y el sóleo, que se insertan conjuntamente en el calcáneo del pie mediante el tendón calcáneo, comúnmente conocido como tendón de Aquiles. Se encuentra inervado por el nervio tibial, especificamente, por las raíces nerviosas de L4-S3. Su irrigación depende de la arteria tibial posterior"
//     const datosMusculos = [
//         {nombre: "El trapecio"},
//         {nombre: "El masetero"},
//         {nombre: "El risorio"},
//         {nombre: "El triceps braquial"},
//         {nombre: "El pectoral menor"},
//         {nombre: "El triceps sural"},
//     ]
//     let pregunta = prompt("¿Cual de los siguientes músculos te gustaría saber más?: 1-trapecio; 2-masetero; 3-risorio; 4-triceps braquial; 5-pectoral menor; 6-triceps sural")
//     if (pregunta == "trapecio") {
//         const infoExtra = datosMusculos.map((elementos)=> elementos.nombre + trapecio)
//         alert(infoExtra[0]);
//     }else if(pregunta == "masetero"){
//         const infoExtra2 = datosMusculos.map((elementos)=> elementos.nombre + masetero)
//         alert(infoExtra2[1]);
//     }else if(pregunta == "risorio"){
//         const infoExtra3 = datosMusculos.map((elementos)=> elementos.nombre + risorio)
//         alert(infoExtra3[2]);
//     }else if(pregunta == "triceps braquial"){
//         const infoExtra4 = datosMusculos.map((elementos)=> elementos.nombre + tricepsBraquial)
//         alert(infoExtra4[3]);
//     }else if(pregunta == "pectoral menor"){
//         const infoExtra5 = datosMusculos.map((elementos)=> elementos.nombre + pectoralMenor)
//         alert(infoExtra5[4]);
//     }else if(pregunta == "triceps sural"){
//         const infoExtra6 = datosMusculos.map((elementos)=> elementos.nombre + tricepsSural)
//         alert(infoExtra6[5]);
//     }else{
//         alert("Por favor introduzca alguno de los músculos mencionados previamente")
//     }
// }

// function pregunta(){
//     let preguntaInicial = prompt("¿Te gustaría saber más acerca de algunos músculos no mencionados?")
//     if (preguntaInicial == "si"){
//         agregarDatos();
//     }else{
//         alert("Ok")
//     }
// }

// pregunta();










































// function rePreguntar(){
//     let preguntaExtra = prompt("¿Hay algun otro músculos más que te gustaría saber de los que mencionamos anteriormente?")
//     do {
//         if(preguntaExtra == "si" || preguntaExtra == "SI"){
//             agregarDatos();
//         }else{
//             alert("Espero que nuestra información te haya sido de utilidad")
//         }
//     } while (preguntaExtra == "si");
    
    
// }

// rePreguntar();

































//ME FALTA AGREGALE UN OBJETO Y UN MÉTODO, YO CREO QUE EL MÉTODO SUPERIOR IDEAL SERÍA .map, YA QUE CREO UN OBJETO CON ARRAYS, LE HACE UNA COPIA Y LE AGREGO MÁS DATOS A LOS MÚSCULOS, PODRÍA IR ACOMPAÑADO PREVIAMENTE DE UN PROMP QUE PREGUNTE AL USUARIO SI QUIERE SABER MÁS DATO DE CIERTO MÚSCULO, SI LA RESPUESTA ES VERDADERA, QUE MUESTRE MÁS INFO.


// function agregarDatos(){
//     const datosMusculos = [
//         {nombre: "trapecio"},
//         {nombre: "masetero"},
//         {nombre: "risorio"},
//         {nombre: "triceps braquial"},
//         {nombre: "pectoral menor"},
//         {nombre: "triceps sural"},
//     ]
//     let pregunta = prompt("Te gustaría saber más datos sobre alguno de los músculos mencionados previammente?")
//     if (pregunta == "si") {
//         const infoExtra = datosMusculos.map((elementos)=> elementos.nombre + " kaka")
//         alert(infoExtra);
//     }else{
//         alert("Okey, no pasa nada master")
//     }
    
// }


// agregarDatos();



//2 INTENTO FALLIDO:
// function agregarDatos(){
//     const datosMusculos = [
//         {nombre: "trapecio"},
//         {nombre: "masetero"},
//         {nombre: "risorio"},
//         {nombre: "triceps braquial"},
//         {nombre: "pectoral menor"},
//         {nombre: "triceps sural"},
//     ]
//     let pregunta = prompt("Te gustaría saber más datos sobre alguno de los músculos mencionados previammente?")
//     if (pregunta == "si" || pregunta == "SI") {
//         let pregunta2 = prompt("¿Cual de los siguientes músculos te gustaría saber más?: 1-trapecio; 2-masetero; 3-risorio; 4-triceps braquial; 5-pectoral menor; 6-triceps sural")
//         if (pregunta2 == "trapecio" || pregunta2 == 1) {
//             const infoExtra = datosMusculos.map((elementos)=> elementos.nombre + " kaka")
//         }else if(pregunta2 == "masetero" || pregunta2 == 2){
//             const infoExtra = datosMusculos[1].map((elementos)=> elementos.nombre + " kieee")
//         }else{
//             alert("no funcionó we :(")
//         }
//         // const infoExtra = datosMusculos.map((elementos)=> elementos.nombre + " kaka")
//         // alert(infoExtra);
//     }else{
//         alert("Okey, no pasa nada master")
//     }
    
// }


// agregarDatos();

















//LO QUE PUSE ACA ABAJO ES MI PRIMER INTENTO DE CONCATENAR FALLIDO XD:
// const musculosJuntos = pectoralMayor.concat(dorsalAncho,bicepsBraquial);
// // document.write(musculosJuntos.musculoInfo());

// // document.write(`
// //     ${musculosJuntos.musculoInfo()} <br>
// // `)
// musculosJuntos.musculoInfo();
//LO QUE PUSE ACA ARRIBA ES MI PRIMER INTENTO DE CONCATENAR FALLIDO XD