const Carreras_homeclub = document.querySelector(".carreras_homeclub");
const Carreras_visitante = document.querySelector(".carreras_visitante");
const Id_equipo_homeclub = document.getElementById("id_equipo_homeclub");
const Id_equipo_visitante = document.getElementById("id_equipo_visitante");
const cont = document.getElementById("cont");
const Inning = document.getElementById("inning");
const Initt_alta_baja = document.getElementById("initt_alta-baja");
const Hombre_primera = document.getElementById("hombre_primera");
const Hombre_segunda = document.getElementById("hombre_segunda");
const Hombre_tercera = document.getElementById("hombre_tercera");
const video_logo = document.getElementById("video_logo");

function runTemplateUpdate() {
    const url1 = new URL("https://bss.qualitybeisbol.com/api/boxscore");
    const url2 = new URL("https://bss.qualitybeisbol.com/api/lineup");
    
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

          
            if (result1 ,result2) {
                let {
                    carreras_homeclub,
                    carreras_visitante,
                    hombre_primera,
                    hombre_segunda,
                    hombre_tercera,
                    id_bateador_homeclub,
                    id_bateador_visitante,
                    id_lanzador_homeclub,
                    id_lanzador_visitante,
                    id_equipo_homeclub,
                    id_equipo_visitante,
                    inning,
                    outs,
                    parte,
                    secuencia_lanzamientos,
                    lanzador_homeclub_bolas,
                    lanzador_homeclub_foul,
                    lanzador_homeclub_strikes,
                    lanzador_visitante_bolas,
                    lanzador_visitante_foul,
                    lanzador_visitante_strikes,
                    posicion_bateo_homeclub,
                      posicion_bateo_visitante
                    
                } = result1.data.juego;

            

                let homeclub_lanzadores = result1.data.boxscore.homeclub.lanzadores;
                let homeclub_peloteros =result1.data.boxscore.homeclub.peloteros;
                let peloteros_visitante = result1.data.boxscore.visitante.peloteros;
                let lanzadores_visitante = result1.data.boxscore.visitante.lanzadores;

                       
                    inning ? inning : inning = "0";
                    Inning.innerText = inning;

                
            const barraEquiposElement = document.getElementById('barras');
            barraEquiposElement.style.backgroundImage = `url(${Barra_equipos[id_equipo_visitante].img_url})`; 
            const f1_gfx1 = document.getElementById("f1_gfx1");
            id_equipo_visitante == 2 ? f1_gfx1.style.color='black' : '';   

                document.getElementById('fondo_homeclut').src = Fondo_equipos[id_equipo_homeclub].img_url
                document.getElementById('fondo_visitante').src =Fondo_equipos[id_equipo_visitante].img_url
                document.getElementById('lineuP').src =Lineup[id_equipo_homeclub].img_url



                let totalS = 0;
                let totalB = 0;

                for (let i = 0; i < secuencia_lanzamientos.length; i++) {
                    if (secuencia_lanzamientos[i] === 'S') {
                        totalS++;
                    } else if (secuencia_lanzamientos[i] === 'B') {
                        totalB++;
                    }
                }

                 document.getElementById("bolas").innerText =  totalB ;
               document.getElementById("strain").innerText = totalS;

                if (parte === 0) {
                    const totalStrikesBolasFoul = lanzador_homeclub_strikes + lanzador_homeclub_bolas + lanzador_homeclub_foul;
                    Initt_alta_baja.src = alta_baja[1].img_url
                    Initt_alta_baja.src = './img/alta.png'
                     //data / boxscore / homeclub /lanzador 
                        homeclub_lanzadores.forEach(element => {
                        if(element.id_picher == id_lanzador_homeclub){
                           let nombre = element.nombre;

                           document.getElementById("f1_gfx").innerHTML =  ` <p>${nombre} </p>
                           <p>AVG ${totalStrikesBolasFoul}</p>  `;

                           document.getElementById("f1_gfx1").innerHTML =  ` 
                           <p id="">${nombre}</p>
                           <p id="">AVG  .${element.AVE == null ? '0' : element.AVE}</p>
                           <p id="">HR  .${element.HR == null ? '0' : element.HR}</p>
                           <p id="">CI  .${element.CI == null ? '0' : element.CI}</p>
                           <p id="">OPS  .${element.OBP == null ? '0' : element.OBP}</p> `;
                           
                          
                        }
            
                       });

                    //data / boxscore / visitante /visitante 
                       peloteros_visitante.forEach(element => {
                       if(element.id_pelotero == id_bateador_visitante){
                        let nombres = element.nombre;
                        let apellidos = element.apellido;
                        const inicia = nombres.charAt(0);
                        document.getElementById("f0_gfx").innerText = nombres ;

                    }

                  });
                 
                } if (parte === 1){
                    const totalStrikesBolasFoul = lanzador_visitante_bolas + lanzador_visitante_foul + lanzador_visitante_strikes;

                      Initt_alta_baja.src = alta_baja[0].img_url
                    homeclub_peloteros.forEach(element => {

                    
                     if(element.id_pelotero == id_bateador_homeclub){
                        let nombre = element.nombre;
                        element.AVE == null ?  element.AVE = '0.00' : element.AVE

                        document.getElementById("f1_gfx").innerHTML =  ` <p>${nombre.charAt(0)} ${element.apellido} </p>
                        <p>${element.AVE == null?element.AVE ='0.00':element.AVE}</p>  `;

                         }
         
                    });
                    lanzadores_visitante.forEach(element => {
                    if(element.id_picher == id_lanzador_visitante){
                        let nombre = element.nombre;
                        document.getElementById("f0_gfx").innerHTML =  ` <p>${nombre.charAt(0)} ${element.apellido}</p>
                        <p>L ${totalStrikesBolasFoul} </p>  `

                        document.getElementById("f1_gfx1").innerHTML =  ` 
                        <p id="">${nombre}</p>
                        <p id="">AVG  .${element.AVE == null ? '0' : element.AVE}</p>
                        <p id="">HR  .${element.HR == null ? '0' : element.HR}</p>
                        <p id="">CI  .${element.CI == null ? '0' : element.CI}</p>
                        <p id="">OPS  .${element.OBP == null ? '0' : element.OBP}</p> `;

                    }
               });
  
                }

            let colorDebase = "red";
            if (hombre_primera == 1){Hombre_primera.style.backgroundColor = colorDebase;}
             
            if (hombre_segunda){ Hombre_segunda.style.backgroundColor = colorDebase;}
               
            if (hombre_tercera === 1){ Hombre_tercera.style.backgroundColor = colorDebase;}
            Carreras_homeclub.innerText =  carreras_homeclub  ? carreras_homeclub  :carreras_homeclub=  '00' 
            Carreras_visitante.innerText = carreras_visitante ? carreras_visitante  : carreras_visitante=  '00'

            id_equipo_visitante == 2 ? Carreras_visitante.style.color='black' : '';

            runAnimationIN(result1,result2)
        }
        else {console.error("Error fetching data:", response.statusText);}})
        .catch(error => {
            console.error("Error en una de las solicitudes:", error);
        });
    
    
 
    }



    const fin_animaciones = (selector, delayTime, xOffset) => {
        const dur = 0.5;
        gsap.fromTo(
          selector,
          { opacity: 0 },
          {
            delay: delayTime,
            duration: dur - 0.2,
            opacity: 1,
            ease: "Power4.easeOut",
          }
        );
  
          gsap.fromTo(
          selector,
          { y: xOffset },
          { delay: delayTime, duration: dur - 0.2, y: 40, ease: "back.out(1.2)" }
        );
  
        const animationConfig = {
          delay: delayTime,
          duration: dur - 0.2,
          opacity: 0,
          ease: "Power4.easeOut",
        };
        
        gsap.fromTo('#lineup', { opacity: 0 }, animationConfig);
        gsap.fromTo('#temporada', { opacity: 0 }, animationConfig);
        gsap.fromTo('#barras_text', { opacity: 0 }, animationConfig);
        
        gsap.fromTo(
          '#bolas',
          { opacity: 0 },
          {
            delay: 0.1,
            duration:0.1,
            opacity: 0,
          }
        );
        gsap.fromTo(
          '#strain',
          { opacity: 0 },
          {
            delay: 0.1,
            duration: 0.1,
            opacity: 0,
          }
        );
        
        gsap.fromTo(
          '#cont-5',
          { x: 0 },
          { delay: delayTime, duration: 1, x: -180, ease: "back.out(0.3)" }
        );
  
         
        gsap.fromTo(
          '#cont-6',
          { x: 0 },
          { delay: delayTime,
             duration: +0.9,
              x: -180,
               ease: "back.out(0.3)",
               onComplete:()=>{
                const barraEquiposElement = document.getElementById('barras');
                barraEquiposElement.style.backgroundImage = `url(${Barra_equipos[id_equipo_homecub].img_url})`;  
               
               
                 let nombre_1 , nombre_2 ,nombre_3
  
                 nombre_1 = nombre_jugadores[0]
                 nombre_2 = nombre_jugadores[1]
                 nombre_3 = nombre_jugadores[2]
  
  
                 const proximo_al_bate = document.getElementById("temporada");
                 proximo_al_bate.innerHTML= `<p>PROXIMO AL BATE</p>`;
                const f1_gfx1 = document.getElementById("f1_gfx1");
  
                 id_equipo_visitante == 2 ? f1_gfx1.style.color='black' : '';
                f1_gfx1.innerText= `1-${nombre_1.nombre} ${nombre_1.apellido } CF  2-${nombre_2.nombre} ${nombre_2.apellido } SS  3-${nombre_3.nombre} ${nombre_3.apellido }`;
  
                const commonAnimationConfig = {
                  delay: 0.2,
                  duration: dur - 0.2,
                  ease: "Power4.easeOut",
                };
                
                gsap.fromTo('#temporada', { opacity: 0, y: 50 }, { opacity: 1, y: 0, ...commonAnimationConfig });
                
                gsap.fromTo('#barras_text', { opacity: 0, y: 50 }, { opacity: 1, y: 0, ...commonAnimationConfig });
               }
              
              
              }
        );
      };
  
    
      fin_animaciones('.name_1', 80 ,0 )
      fin_animaciones('.name_2', 80 ,0 )