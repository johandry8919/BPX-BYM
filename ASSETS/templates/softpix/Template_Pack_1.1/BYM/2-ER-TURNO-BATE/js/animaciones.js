  
  
  function runAnimationIN(result ,result2) {
    if (window.top.spxRenderer && window.top.spxRenderer.fps) {
        gsap.ticker.fps(window.top.spxRenderer.fps);
        console.log("spxRenderer: " + window.top.spxRenderer.fps + " FPS");
    
      }

      const animateLogo_equipo = (selector, delayTime, Offset) => {
        const dur = 0.5;
        const dur2 = 0.7;
      
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
          { y: Offset },
          {
             delay: delayTime, duration: dur - 0.2, y: 0, ease: "back.out(0.2)",
             onComplete: () => {
              

              gsap.fromTo(
                '#animate_fondo',
                { opacity: 0 },
                {
                  delay: 0.5,
                  duration: dur2 - 0.2,
                  opacity: 1,
                  ease: "Power4.easeOut",
                }
              );

              gsap.fromTo(
                '#animate_fondo',
                { x:-20},
                { delay: 0.5, duration: dur2 - 0.2, x: 0, ease: "back.out(0.2)" ,
              
              
              }
              );

            gsap.to('#animate_fondo', {
              delay: delayTime + 2, // 2 segundos de pausa
              duration: 0.3, // Duración muy corta para evitar animación visible
              y: 100, 
              onComplete: () => {
                gsap.fromTo(
                  '#inning',
                  { opacity: 0 },
                  {
                    delay: 0.1,
                    duration: dur2 - 0.1,
                    opacity: 1,
                    ease: "Power4.easeOut",
                  }
                );
                gsap.fromTo(
                  '#alta_vaja',
                  { opacity: 0 },
                  {
                    delay: 0.1,
                    duration: dur2 - 0.1,
                    opacity: 1,
                    ease: "Power4.easeOut",
                    onComplete: () => {

                      gsap.fromTo(
                        '#animacion_aout',
                        { opacity: 0 },
                        {
                          delay: 0.1,
                          duration: dur2 - 0.1,
                          opacity: 1,
                          ease: "Power4.easeOut",
                        }
                      );
                      gsap.fromTo(
                        '#animacion_O',
                        { opacity: 0 },
                        {
                          delay: 0.2,
                          duration: dur2 - 0.1,
                          opacity: 1,
                          ease: "Power4.easeOut",
                        }
                      );
                      gsap.fromTo(
                        '#animacion_U',
                        { opacity: 0 },
                        {
                          delay: 0.3,
                          duration: dur2 - 0.1,
                          opacity: 1,
                          ease: "Power4.easeOut",
                        }
                      );
                      gsap.fromTo(
                        '#animacion_T',
                        { opacity: 0 },
                        {
                          delay: 0.4,
                          duration: dur2 - 0.1,
                          opacity: 1,
                          ease: "Power4.easeOut",
                          onComplete: () => {

                          }
                        }
                      );

                                      
                  gsap.to('#animacion_aout', {
                    delay: delayTime + 2, 
                    duration: 0.001, 
                    opacity: 0, 
                    onComplete: () => {

                      gsap.fromTo(
                        '#outs',
                        { opacity:0, scale: 1.5 ,bottom:20 }, // Escala inicial de 2
                        {
                          delay: 0.2,
                          duration: dur - 0.1,
                          opacity: 1,
                          scale: 1.5,
                          bottom:20,
                          ease: "Power3.easeOut",
                          onComplete: () => {

                          gsap.fromTo(
                        '#outs',
                        { opacity:1, scale: 1.5  }, // Escala inicial de 2
                        {
                          delay: 0.2,
                          duration: dur - 0.1,
                          opacity: 1,
                          scale: 1,
                          bottom:5,
                          ease: "Power3.easeOut",
                          onComplete: () => {
                            gsap.fromTo(
                              '#cont-base',
                              { opacity:0, }, // Escala inicial de 2
                              {
                                delay:0.1,
                                duration: dur - 0.1,
                                opacity: 1,
                                ease: "Power3.easeOut",
                                onComplete: () => {

                                    const dur2 = 0.5; 
                                  const right_img = (selector, delayTime, xOffset) => {
                                    gsap.fromTo(
                                      selector,
                                      { opacity: 0 },
                                      {
                                        delay: delayTime,
                                        duration: dur2 - 0.2,
                                        opacity: 1,
                                        ease: "Power4.easeOut",
                                      }
                                    );
                                  
                                    gsap.fromTo(
                                      selector,
                                      { y: xOffset },
                                      { delay: delayTime, duration: dur2 - 0.2, y: 0, ease: "back.out(0.2)" }
                                    );
                                  };

                                  right_img('#bolas',0.2,-100)
                                  right_img('#xrt',0.3,-100)
                                  right_img('#strain',0.4,-100)
                                  right_img('#f1_gfx',0.3,30)
                                  right_img('#f0_gfx',0.3,30)
                                  right_img('#cont-5',0.5,-30)

                                     const videoElement = document.getElementById("video");
                                    const sourceElement = document.createElement("source");
                                    sourceElement.src = 'media/AGUILAS-3D.webm';
                                    sourceElement.type = "video/webm";
                                    videoElement.appendChild(sourceElement);
                                 
 
                                }
                              }
                            );
                            
                          }
                        }
                      );

                          }
                        }
                      );
                    }
                  });
                      

                    }

                  }
                );
              }
             
            });
                        
              

            },
         }
        );
      };

      animateLogo_equipo("#id_equipo_homeclub", 0.1, 10 );
      animateLogo_equipo("#id_equipo_visitante", 0.1, 10 );   

 const animateBar = (selector, delayTime, property, value, duration ,data_jugador ,lis_jugadores, posiciones_jugadores_1_4) => {
  

  const proximo_al_bate = document.getElementById("temporada");
  proximo_al_bate.innerHTML= `<p>TEMPORADA 23-22</p>`;

  let animationCompleted = false;
  const options = {
    opacity: 1,
    delay: 0.2,
    duration: duration - 0.2,
    ease: "Power4.easeOut",
  };

  const animationProps = {};
  animationProps[property] = value;

  gsap.fromTo(selector, { opacity: 1 }, options);
  gsap.fromTo(selector, animationProps, {
     delay: delayTime,
      duration, 
      [property]: 0,
       ease: "back.out(0.2)" ,
      });

};
let {
parte,
posicion_bateo_homeclub,
posicion_bateo_visitante,
id_equipo_visitante
  
} = result.data.juego;

let = posicion_bateo = '';
let data_pelotero;



     posicion_bateo =  posicion_bateo_visitante == 9 ? posicion_bateo_visitante = 8 : posicion_bateo_visitante
    data_pelotero = result.data.boxscore.visitante

    function mostrarIndices(valor) {
      var jugadores = data_pelotero.peloteros
      const datos_jugadores = []
    
      if (valor >= 0 && valor < jugadores.length) {
        var inicio = Math.max(0, valor -1);
        var fin = Math.min(valor + 2, jugadores.length);
        var valoresAMostrar = jugadores.slice(inicio, fin);

        valoresAMostrar.forEach(element => {
          datos_jugadores.push(element)
         
        });
      } else {
        console.log("El valor está fuera del rango de índices.");
      }

       return datos_jugadores 
    }
    
   
   let  nombre_jugadores = mostrarIndices(posicion_bateo);
   data_pelotero.peloteros.forEach(element => {
       if(element.id_pelotero ==nombre_jugadores[0].id_jugador){
        nombre_jugadores[0] = element 
       }
       if(element.id_pelotero ==nombre_jugadores[1].id_jugador){
        nombre_jugadores[1] = element 
       }
       if(element.id_pelotero ==nombre_jugadores[2].id_jugador){
        nombre_jugadores[2] = element 
       }
      
    });

   
  const lis_jugadores = data_pelotero.peloteros

  const posiciones_jugadores_1_4 = ['0','1','2']
  const posiciones_jugadores_4_6 = ['3','4','5']
  const posiciones_jugadores_4_9 = ['6','7','8']


    animateBar('#barras', 8, 'x', -2000, 2);
    animateBar('#temporada', 9, 'y', 150, 0.5);
    animateBar('#barras_text', 8, 'x', 950, 1.5,nombre_jugadores[0] ,lis_jugadores ,posiciones_jugadores_1_4);
    animateBar('#barras_text', 30, 'x', 950,  1.5,nombre_jugadores[1],lis_jugadores,posiciones_jugadores_4_6);
    animateBar('#barras_text', 50, 'x', 950, 1.5 ,nombre_jugadores[2],lis_jugadores,posiciones_jugadores_4_9);   

   
  }
 
  
  function runAnimationOUT() {
    const container = document.getElementById('container');
    gsap.to(container, {
      x: -2000, 
      opacity: 1,
      duration: 2, 
      onComplete: function() {
        container.style.display = 'none';
      }
    });
  }
 
  
  
  
  
  
  