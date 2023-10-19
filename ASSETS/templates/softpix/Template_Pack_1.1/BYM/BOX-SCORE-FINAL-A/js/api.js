
const Id_equipo_visitante = document.getElementById('id_equipo_visitante')
const Id_equipo_homeclub = document.getElementById('id_equipo_homeclub')
const homeclub = document.getElementById('homeclub')
const posicion_1_visitante = document.getElementById('posicion_1_visitante')
const posicion_2_visitante = document.getElementById('posicion_2_visitante')
const posicion_3_visitante = document.getElementById('posicion_3_visitante')
const posicion_4_visitante = document.getElementById('posicion_4_visitante')
const posicion_5_visitante = document.getElementById('posicion_5_visitante')
const posicion_6_visitante = document.getElementById('posicion_6_visitante')
const posicion_7_visitante = document.getElementById('posicion_7_visitante')
const posicion_8_visitante = document.getElementById('posicion_8_visitante')
const posicion_9_visitante = document.getElementById('posicion_9_visitante')


const posicion_1_homeclub = document.getElementById('posicion_1_homeclub')
const posicion_2_homeclub = document.getElementById('posicion_2_homeclub')
const posicion_3_homeclub = document.getElementById('posicion_3_homeclub')
const posicion_4_homeclub = document.getElementById('posicion_4_homeclub')
const posicion_5_homeclub = document.getElementById('posicion_5_homeclub')
const posicion_6_homeclub = document.getElementById('posicion_6_homeclub')
const posicion_7_homeclub = document.getElementById('posicion_7_homeclub')
const posicion_8_homeclub = document.getElementById('posicion_8_homeclub')
const posicion_9_homeclub = document.getElementById('posicion_9_homeclub')

const Carreras_visitante = document.getElementById('Carreras_visitante')
const Carreras_homeclub = document.getElementById('Carreras_homeclub')
const Hits_visitante = document.getElementById('hits_visitante')
const Hits_homeclub = document.getElementById('hits_homeclub')
const Errores_visitante = document.getElementById('errores_visitante')
const Errores_homeclub = document.getElementById('errores_homeclub')

function runTemplateUpdate() {
    //e('fxt').innerHTML = htmlDecode(e('f0').innerText)
    const url1 = new URL("https://bss.qualitybeisbol.com/api/boxscore");
    const url2 = new URL("https://bss.qualitybeisbol.com/api/linescore");

    document.getElementById('G').innerText = htmlDecode(e('f1').innerText)
    document.getElementById('P').innerText = htmlDecode(e('f2').innerText)
    document.getElementById('S').innerText = htmlDecode(e('f3').innerText)
    
    function ajustarCadena(cadena) {
        cadena = cadena.replace(/\+/g, ' ');
        cadena = cadena.replace(/\+/g, ' ');
        return cadena;
      }
      
      const expresion = htmlDecode(e('f0').innerText);
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
    
    
    Promise.all([request1, request2])
        .then(([result1, result2]) => {

          

          if (result1 && result2) {
      
            let { carreras_homeclub,
                 carreras_visitante,
                  hombre_primera,
                   hombre_segunda,
                    hombre_tercera,
                     id_bateador_homeclub,
                      id_bateador_visitante,
                       id_equipo_homeclub,
                        id_equipo_visitante,
                         inning, outs, parte,
                         hits_homeclub,
                         hits_visitante,

                         errores_homeclub,
                        errores_visitante
                         } = result1.data.juego;
    
                      
                            Id_equipo_visitante.src = Logos_equipos[id_equipo_visitante].img_url;
                            Id_equipo_homeclub.src = Logos_equipos[id_equipo_homeclub].img_url;

                            
                        // posicion de la pizarra del 0 al 9 visitante


                        posicion_1_visitante.innerText  = result2.data.visitante[0] ? result2.data.visitante[0] :'0'
                        posicion_2_visitante.innerText  = result2.data.visitante[1] ? result2.data.visitante[1] :'0'
                        posicion_3_visitante.innerText  = result2.data.visitante[2] ? result2.data.visitante[2] : '0'
                        posicion_4_visitante.innerText  = result2.data.visitante[3] ? result2.data.visitante[3] : '0'
                        posicion_5_visitante.innerText  = result2.data.visitante[4] ? result2.data.visitante[4] : '0'
                        posicion_6_visitante.innerText  = result2.data.visitante[5] ? result2.data.visitante[5] : '0'
                        posicion_7_visitante.innerText  = result2.data.visitante[6] ? result2.data.visitante[6] : '0'
                        posicion_8_visitante.innerText  = result2.data.visitante[7] ? result2.data.visitante[7] : '0'
                        posicion_9_visitante.innerText  = result2.data.visitante[8] ? result2.data.visitante[8] : '0'
                      
                       
                         // posicion de la pizarra del 0 al 9 visitante


                        // posicion de la pizarra del 0 al 9 homeclub


                        posicion_1_homeclub.innerText  = result2.data.homeclub[0]
                        posicion_2_homeclub.innerText  = result2.data.homeclub[1]
                        posicion_3_homeclub.innerText  = result2.data.homeclub[2] ? result2.data.homeclub[2] : '0'
                        posicion_4_homeclub.innerText  = result2.data.homeclub[3] ? result2.data.homeclub[3] : '0'
                        posicion_5_homeclub.innerText  = result2.data.homeclub[4] ? result2.data.homeclub[4] : '0'
                        posicion_6_homeclub.innerText  = result2.data.homeclub[5] ? result2.data.homeclub[5] : '0'
                        posicion_7_homeclub.innerText  = result2.data.homeclub[6] ? result2.data.homeclub[6] : '0'
                        posicion_8_homeclub.innerText  = result2.data.homeclub[7] ? result2.data.homeclub[7] : '0'
                        posicion_9_homeclub.innerText  = result2.data.homeclub[8] ? result2.data.homeclub[8] : '0'
                       
                       
                         // posicion de la pizarra del 0 al 9 homeclub
                       
                         // posicion de la pizarra del 0 al 9 homeclub

                         Carreras_visitante.innerText = carreras_visitante
                         Carreras_homeclub.innerText = carreras_homeclub
                         Hits_visitante.innerText = hits_visitante
                         Hits_homeclub.innerText = hits_homeclub

                         Errores_visitante.innerText = errores_visitante
                         Errores_homeclub.innerText =  errores_homeclub
                  
            runAnimationIN();
        }
        else {console.error("Error fetching data:", response.statusText);}})
        .catch(error => {
            console.error("Error en una de las solicitudes:", error);
        });
    
      
    
    
    }






