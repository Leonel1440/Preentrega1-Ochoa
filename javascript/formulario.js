
let temperaturaValor = document.getElementById('temperatura-valor')
let temperaturaDescripcion = document.getElementById('temperatura-descripcion')

let ubicacion = document.getElementById('ubicacion')
let iconoAnimado = document.getElementById('icono-animado')

let vientoVelocidad = document.getElementById('viento-velocidad')


window.addEventListener('load',()=>{
    let lon
    let lat
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( posicion => {
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b15628d82432859e4dd6fc11d3ea81fa`;

            fetch(url)
                .then( response => {return response.json()})
                .then ( data => {
                    let temp = Math.round(data.main.temp - 273)
                    temperaturaValor.textContent = `${temp} ˚C`

                    let desc = data.weather[0].description
                    temperaturaDescripcion.textContent = desc.toUpperCase()


                    ubicacion.textContent = data.name

                    vientoVelocidad.textContent = `${data.wind.speed} m/s`
                    
                    switch (data.weather[0].main) {
                        case 'Thunderstorm':
                            iconoAnimado.src='./animated/thunder.svg'
                            console.log('TORMENTA');
                            break;
                        case 'Drizzle':
                            iconoAnimado.src='./animated/rainy-2.svg'
                            console.log('LLOVIZNA');
                            break;
                        case 'Rain':
                            iconoAnimado.src='./animated/rainy-7.svg'
                            console.log('LLUVIA');
                            break;
                        case 'Snow':
                            iconoAnimado.src='./animated/snowy-6.svg'
                            console.log('NIEVE');
                            break;                        
                        case 'Clear':
                            iconoAnimado.src='./animated/day.svg'
                            console.log('LIMPIO');
                            break;
                        case 'Atmosphere':
                            iconoAnimado.src='./animated/weather.svg'
                            console.log('ATMOSFERA');
                            break;  
                        case 'Clouds':
                            iconoAnimado.src='./animated/cloudy-day-1.svg'
                            console.log('NUBES');
                            break;  
                        default:
                            iconoAnimado.src='./animated/cloudy-day-1.svg'
                            console.log('por defecto');
                        }

                })
                .catch( error => {
                    console.log(error)
                })
        })
    }
})



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
        icon: imgPectoral,
    });
}

let boton2 = document.getElementById("botonDorsal")
botonDorsal.addEventListener("click",sweetAlert2)

const imgDorsal = "./img/dorsalAncho.jpg"
function sweetAlert2(){
    swal({
        title: "Dorsal ancho",
        text: "El músculo Dorsal ancho se encuentra inervado por: Los Nervio toracodorsal.Irrigado por Arteria toracodorsal, arterias intercostales posteriores, ramas perforantes 9-11 y arterias lumbares 1-3.En cuanto a sus inserciones, su origen está en la Porción vertebral: procesos espinosos de las vértebras T7-T12, fascia toracolumbar Porción ilíaca: tercio posterior de la cresta ilíaca Porción costal: costillas 9-12 Porción escapular: ángulo inferior de la escápula y se insertan en Surco intertubercular del húmero, entre los músculos pectoral mayor y redondo mayor.",
        icon: imgDorsal,
    });
}


let boton3 = document.getElementById("botonBiceps")
botonBiceps.addEventListener("click",sweetAlert3)

const imgBiceps = "./img/bicepsBraquial.jpg"
function sweetAlert3(){
    swal({
        title: "Biceps braquial",
        text: "El músculo Biceps braquial se encuentra inervado por: Los Nervio musculocutáneo (C5- C6).Irrigado por Ramas de la arteria braquial.En cuanto a sus inserciones, su origen está en la Cabeza corta: vértice del proceso coracoides de la escápula Cabeza larga: tubérculo supraglenoideo de la escápula y se insertan en Tuberosidad del radio Fascia profunda del antebrazo (inserción de la aponeurosis del músculo bíceps braquial o bicipital).",
        icon: imgBiceps,
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
    const curso = selectCurso.value
    const email = emailInput.value

    if (nombre === '') return

    const user = {
        id: usuarios.length + 1,
        nombre: nombre,
        email: email,
        curso: curso
    }

    usuarios.push(user)
    userInput.value = ""

    localStorage.setItem('usuarios', JSON.stringify(usuarios))
})







