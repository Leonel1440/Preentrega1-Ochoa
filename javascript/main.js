
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

hipertension();


class Anatomia{
    constructor(name, inervacion, irrigacion, origen, inserciones){
        this.name = name;
        this.inervacion = inervacion;
        this.irrigacion = irrigacion;
        this.origen = origen;
        this.inserciones = inserciones;
    }
    musculoInfo(){
        document.write(`El músculo <b>${this.name}</b> se encuentra inervado por:<br> Los <b>${this.inervacion}</b><br>Irrigado por <b>${this.irrigacion}</b><br>En cuanto a sus inserciones, su origen está en la <b>${this.origen}</b> y se insertan en <b>${this.inserciones}</b>.` + "<br>" + "<br>")
    }
}

const pectoralMayor = new Anatomia ("Pectoral Mayor","Nervios pectorales lateral y medial","Ramas pectorales de la arteria toracoacromial, ramas perforantes de la arteria torácica interna","Porción clavicular: cara anterior de la mitad medial de la clavícula Porción esternocostal: cara anterior del esternón, cartílagos costales 1-6 Porción abdominal: capa anterior de la vaina de los músculos rectos del abdomen", "Cresta del tubérculo mayor del húmero")
const dorsalAncho = new Anatomia ("Dorsal ancho","Nervio toracodorsal","Arteria toracodorsal, arterias intercostales posteriores, ramas perforantes 9-11 y arterias lumbares 1-3","Porción vertebral: procesos espinosos de las vértebras T7-T12, fascia toracolumbar Porción ilíaca: tercio posterior de la cresta ilíaca Porción costal: costillas 9-12 Porción escapular: ángulo inferior de la escápula","Surco intertubercular del húmero, entre los músculos pectoral mayor y redondo mayor")
const bicepsBraquial = new Anatomia("Biceps braquial","Nervio musculocutáneo (C5- C6)","Ramas de la arteria braquial","Cabeza corta: vértice del proceso coracoides de la escápula Cabeza larga: tubérculo supraglenoideo de la escápula","Tuberosidad del radio Fascia profunda del antebrazo (inserción de la aponeurosis del músculo bíceps braquial o bicipital)")
pectoralMayor.musculoInfo();
dorsalAncho.musculoInfo();
bicepsBraquial.musculoInfo();


function otrosMusculos(){
    const musculoSuperior = ["trapecio", "masetero","risorio","buccinador","cigomático mayor y menor"];
    const musculoTorax = ["pectoral menor","serrator posterior, superior e inferior","subcostales","intercostales externos, internos e íntimos"];
    const musculoBrazos = ["deltoides","triceps braquial","coracobraquial","ancóneo"];
    const musculoMiembroInferior = ["poplíteo","plantar delgado","triceps sural","flexor largo del dedo gordo","tibial anterior","cuádriceps femoral","sartorio"]

    const musculosJuntos = musculoSuperior.concat(musculoTorax, musculoBrazos,musculoMiembroInferior);
    alert(`Estos son otros músculos que no figuran en nuestra página: ${musculosJuntos}`)
}
otrosMusculos();



function agregarDatos(){
    let trapecio = " es un músculo grande, pareado y de forma triangular que se localiza en el aspecto posterior del cuello y el tórax. Se encuentra inervado por el nervio accesorio(motor) y los nervios anteriores C3- C4 (motor/sensitivo). Su irrigación depende de la arteria occipital, cervical superficial y arterial dorsal de la scapula "
    let masetero = " es un músculo pareado, fuerte, grueso y de forma rectangular que tiene su origen en el arco cigomático y se extiende hasta el ángulo de la mandíbula. Está constituido por una porción superficial y otra profunda. Se encuentra inervado por el nervio maseterino (rama del nervio mandibular). Su irrigación depende de la arteria maseterina"
    let risorio = " es un músculo delgado de la cara que pertenece al grupo de los músculos bucolabiales. Es muy variable e inconsistente. Se encuentra inervado por la rama bucal del nervio facial (VII par craneal). Su irrigación depende de la rama labial superior de la arteria facial"
    let tricepsBraquial = " es un músculo de tres cabezas (tri-tres cep-cabeza) ubicado en la región del brazo. Corresponde al único constituyente del grupo muscular posterior de la región braquial, y se extiende a lo largo de casi toda la extensión longitudinal del húmero. Consta de tres cabezas: larga, lateral y medial; las cuales provienen desde sus orígenes respectivos en el húmero y la escápula, para insertarse distalmente mediante un tendón común en la ulna. Se encuentra inervado por el nervio radial (C6-C8). Su irrigación depende de la arterial braquial profunda y la arteria colateral ulnar superior"
    let pectoralMenor = " es un pequeño musculo situado entre escápula y tórax, por detrás del pectoral mayor. Tiene como función la de movilizar la cintura escapular, participa en la respiración, su retracción o acortamiento ocasiona síndromes como el de hombros adelantados. Se encuentra inervado por los nervios pectorales medial y lateral (C5-T1). Su irrigación depende de la arteria toracoacromial."
    let tricepsSural = " es un músculo de la pierna constituido por la unión de los músculos gastrocnemios, conocidos como gemelos, y el sóleo, que se insertan conjuntamente en el calcáneo del pie mediante el tendón calcáneo, comúnmente conocido como tendón de Aquiles. Se encuentra inervado por el nervio tibial, especificamente, por las raíces nerviosas de L4-S3. Su irrigación depende de la arteria tibial posterior"
    const datosMusculos = [
        {nombre: "El trapecio"},
        {nombre: "El masetero"},
        {nombre: "El risorio"},
        {nombre: "El triceps braquial"},
        {nombre: "El pectoral menor"},
        {nombre: "El triceps sural"},
    ]
    let pregunta = prompt("¿Cual de los siguientes músculos te gustaría saber más?: 1-trapecio; 2-masetero; 3-risorio; 4-triceps braquial; 5-pectoral menor; 6-triceps sural")
    if (pregunta == "trapecio") {
        const infoExtra = datosMusculos.map((elementos)=> elementos.nombre + trapecio)
        alert(infoExtra[0]);
    }else if(pregunta == "masetero"){
        const infoExtra2 = datosMusculos.map((elementos)=> elementos.nombre + masetero)
        alert(infoExtra2[1]);
    }else if(pregunta == "risorio"){
        const infoExtra3 = datosMusculos.map((elementos)=> elementos.nombre + risorio)
        alert(infoExtra3[2]);
    }else if(pregunta == "triceps braquial"){
        const infoExtra4 = datosMusculos.map((elementos)=> elementos.nombre + tricepsBraquial)
        alert(infoExtra4[3]);
    }else if(pregunta == "pectoral menor"){
        const infoExtra5 = datosMusculos.map((elementos)=> elementos.nombre + pectoralMenor)
        alert(infoExtra5[4]);
    }else if(pregunta == "triceps sural"){
        const infoExtra6 = datosMusculos.map((elementos)=> elementos.nombre + tricepsSural)
        alert(infoExtra6[5]);
    }else{
        alert("Por favor introduzca alguno de los músculos mencionados previamente")
    }
}

function pregunta(){
    let preguntaInicial = prompt("¿Te gustaría saber más acerca de algunos músculos no mencionados?")
    if (preguntaInicial == "si"){
        agregarDatos();
    }else{
        alert("Ok")
    }
}

pregunta();






