
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
            // console.log(posicion.coords.latitude)
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b15628d82432859e4dd6fc11d3ea81fa`;

            // console.log(url)
            fetch(url)
                .then( response => {return response.json()})
                .then ( data => {
                    let temp = Math.round(data.main.temp)
                    temperaturaValor.textContent = `${temp} ˚C`

                    let desc = data.weather[0].description
                    temperaturaDescripcion.textContent = desc.toUpperCase()


                    ubicacion.textContent = data.name

                    vientoVelocidad.textContent = `${data.wind.speed} m/s`

                    // const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`
                    
                    switch (data.weather[0].main) {
                        case 'Thunderstorm':
                          iconoAnimado.src='animated/thunder.svg'
                          console.log('TORMENTA');
                          break;
                        case 'Drizzle':
                          iconoAnimado.src='animated/rainy-2.svg'
                          console.log('LLOVIZNA');
                          break;
                        case 'Rain':
                          iconoAnimado.src='animated/rainy-7.svg'
                          console.log('LLUVIA');
                          break;
                        case 'Snow':
                          iconoAnimado.src='animated/snowy-6.svg'
                            console.log('NIEVE');
                          break;                        
                        case 'Clear':
                            iconoAnimado.src='animated/day.svg'
                            console.log('LIMPIO');
                          break;
                        case 'Atmosphere':
                          iconoAnimado.src='animated/weather.svg'
                            console.log('ATMOSFERA');
                            break;  
                        case 'Clouds':
                            iconoAnimado.src='animated/cloudy-day-1.svg'
                            console.log('NUBES');
                            break;  
                        default:
                          iconoAnimado.src='animated/cloudy-day-1.svg'
                          console.log('por defecto');
                      }

                })
                .catch( error => {
                    console.log(error)
                })
        })
    }
})




























