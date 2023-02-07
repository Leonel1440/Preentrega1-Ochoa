
let btn_presion = document.getElementById("btn_presion");
btn_presion.addEventListener("click",hipertension)
const resultado = document.getElementById("resultado");


function hipertension(){
    const tensionUsuario = parseInt(document.getElementById("inputPresion").value);
        if (tensionUsuario < 120) {
            resultado.innerHTML = "Optimo"
        }else if (tensionUsuario === 120){
            resultado.innerHTML = "Normal"
        }else if (tensionUsuario  <= 130){
            resultado.innerHTML = "Normal alta"
        }else if(tensionUsuario <= 140){
            resultado.innerHTML = "Hipertensión grado 1"
        }else if (tensionUsuario <= 160){
            resultado.innerHTML = "Hipertensión grado 2"
        }else if (tensionUsuario >= 180){
            resultado.innerHTML = "Hipertensión grado 3"
        } else{
            resultado.innerHTML = "Por favor introduzca los valores solicitados"
        }
}

let boton1 = document.getElementById("botonPectoral")
botonPectoral.addEventListener("click",sweetAlert)

const imgPectoral = "./img/pectoralMayor.jpg"
function sweetAlert(){
    swal({
        title: "Pectoral mayor",
        text: "El músculo Pectoral Mayor se encuentra inervado por: Los Nervios pectorales lateral y medial.Irrigado por Ramas pectorales de la arteria toracoacromial, ramas perforantes de la arteria torácica interna.En cuanto a sus inserciones, su origen está en la Porción clavicular: cara anterior de la mitad medial de la clavícula Porción esternocostal: cara anterior del esternón, cartílagos costales 1-6 Porción abdominal: capa anterior de la vaina de los músculos rectos del abdomen y se insertan en Cresta del tubérculo mayor del húmero.",
        icon: "./img/pectoralMayor.jpg",
    });
}

let boton2 = document.getElementById("botonDorsal")
botonDorsal.addEventListener("click",sweetAlert2)

const imgDorsal = "./img/dorsalAncho.jpg"
function sweetAlert2(){
    swal({
        title: "Dorsal ancho",
        text: "El músculo Dorsal ancho se encuentra inervado por: Los Nervio toracodorsal.Irrigado por Arteria toracodorsal, arterias intercostales posteriores, ramas perforantes 9-11 y arterias lumbares 1-3.En cuanto a sus inserciones, su origen está en la Porción vertebral: procesos espinosos de las vértebras T7-T12, fascia toracolumbar Porción ilíaca: tercio posterior de la cresta ilíaca Porción costal: costillas 9-12 Porción escapular: ángulo inferior de la escápula y se insertan en Surco intertubercular del húmero, entre los músculos pectoral mayor y redondo mayor.",
        icon: "./img/dorsalAncho.jpg",
    });
}


let boton3 = document.getElementById("botonBiceps")
botonBiceps.addEventListener("click",sweetAlert3)

const imgBiceps = "./img/bicepsBraquial.jpg"
function sweetAlert3(){
    swal({
        title: "Biceps braquial",
        text: "El músculo Biceps braquial se encuentra inervado por: Los Nervio musculocutáneo (C5- C6).Irrigado por Ramas de la arteria braquial.En cuanto a sus inserciones, su origen está en la Cabeza corta: vértice del proceso coracoides de la escápula Cabeza larga: tubérculo supraglenoideo de la escápula y se insertan en Tuberosidad del radio Fascia profunda del antebrazo (inserción de la aponeurosis del músculo bíceps braquial o bicipital).",
        icon: "./img/bicepsBraquial.jpg",
    });
}

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



