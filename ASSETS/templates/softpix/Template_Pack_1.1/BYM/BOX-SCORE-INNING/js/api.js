
const Id_equipo_visitante = document.getElementById('id_equipo_visitante')
const Id_equipo_homeclub = document.getElementById('id_equipo_homeclub')


const Carreras_homeclub = document.getElementById('Carreras_homeclub')
const Carreras_visitante = document.getElementById('Carreras_visitante')
const Hits_visitante = document.getElementById('Hits_visitante')
const Hits_homeclub = document.getElementById('Hits_homeclub')
const Errores_visitante = document.getElementById('Errores_visitante')
const Errores_homeclub = document.getElementById('Errores_homeclub')


const url1 = new URL("https://bss.qualitybeisbol.com/api/boxscore");
const url2 = new URL("https://bss.qualitybeisbol.com/api/lineup");

function runTemplateUpdate() {

     e('mtg').innerHTML = htmlDecode(e('f0').innerText)

    if(e('f3').innerText == 'none'){
        e('logoPatrocinio').style="opacity: 0;"
        e('cont-logo').style="display:none;"

    }else if (e('f3').innerText){
        e('logoPatrocinio').src = e('f3').innerText

    } 
        
    function ajustarCadena(cadena) {
        cadena = cadena.replace(/\+/g, ' ');
        cadena = cadena.replace(/\+/g, ' ');
        return cadena;
      }
      
      const expresion = htmlDecode(e('f1').innerText);
      const cadenaAjustada = ajustarCadena(expresion);
    

    const params = {
        id_juego:  `${cadenaAjustada}`,
    };
    


Object.keys(params).forEach(key => {
    url1.searchParams.append(key, params[key]);
    url2.searchParams.append(key, params[key]);
   
});

const headers = {
    "Authorization": "Bearer 45eadc85b650776e48bdf666120d0fbc",
    "Content-Type": "application/json",
    "Accept": "application/json",
};


const request1 = fetch(url1, {
    method: "GET",
    headers,


}).then(response => response.json());
const request2 = fetch(url2, {
    method: "GET",
    headers,


}).then(response => response.json());



Promise.all([request1 ,request2])
    .then(([result1 ,result2]) => {

      if (result1) {

        let { 
            carreras_homeclub,
            carreras_visitante,
                  id_equipo_homeclub,
                   id_equipo_visitante,
                      parte,
                      hits_homeclub,
                      hits_visitante,
                      errores_homeclub,
                      errores_visitante,
                      posicion_bateo_homeclub,
                      posicion_bateo_visitante
                    } = result1.data.juego;

                    let = posicion_bateo = 0;
                    var jugadores ;
                    var id_equipos;
   
          
                    if(parte == 1){
                        posicion_bateo = posicion_bateo_homeclub == 9 ? posicion_bateo_homeclub = 8 : posicion_bateo_homeclub
                        jugadores = result2.data.homeclub.peloteros
                        id_equipos = id_equipo_homeclub

                    }else{
                     
                        posicion_bateo =  posicion_bateo_visitante == 9 ? posicion_bateo_visitante = 8 : posicion_bateo_visitante
                        jugadores = result2.data.visitante.peloteros
                        id_equipos = id_equipo_visitante

                    }

                    posicion_poscampo =['BD' ,'BD' , ' C' , '1B', '2B' , '3B' ,' SS' , 'LF' ,'CF' , 'RF']

                    const contenedores =  document.getElementById('cont-right');
                   
                    function mostrarIndices(valor) {
                        if (valor >= 0 && valor < jugadores.length) {

                         
                          var inicio = Math.max(0, valor -1);
                          var fin = Math.min(valor + 2, jugadores.length);
                          var valoresAMostrar = jugadores.slice(inicio, fin);

                          valoresAMostrar.forEach(element => {
                            const inicial = element.nombre.charAt(0)
                            let div = document.createElement("div")
                            div.innerHTML = `

                            <div class="text-cont ">
                            <div class="bfx">${posicion_poscampo[element.posicion_campo]}</div>
                            <div class="bfp">${inicial}.${element.apellido}</div>
                             </div>
                            
                            `
                            contenedores.appendChild(div)
                          });
                        } else {
                          console.log("El valor está fuera del rango de índices.");
                        }
                      }
                      
                     
                      mostrarIndices(posicion_bateo);
                     

                    carreras_homeclub  ? carreras_homeclub:carreras_homeclub=  '0' 
                    carreras_visitante ? carreras_homeclub:carreras_homeclub=  '0'

                    Carreras_homeclub.innerText= carreras_homeclub
                    Carreras_visitante.innerText= carreras_visitante

                    Hits_visitante.innerText = hits_visitante
                    Hits_homeclub.innerText = hits_homeclub
                    Errores_visitante.innerText = errores_visitante
                    Errores_homeclub.innerText =  errores_homeclub

                    Id_equipo_homeclub.src =Logos_equipos[id_equipo_homeclub].img_url;
                    Id_equipo_visitante.src = Logos_equipos[id_equipo_visitante].img_url;
  
       
        runAnimationIN();
    }
    else {console.error("Error fetching data:", response.statusText);}})
    .catch(error => {
        console.error("Error en una de las solicitudes:", error);
    });

 

    //e('fxt').innerHTML = htmlDecode(e('f0').innerText)
    

    }





