function runTemplateUpdate() {
  const url1 = new URL("https://bss.qualitybeisbol.com/api/boxscore");
  const url2 = new URL("https://bss.qualitybeisbol.com/api/lineup");

  document.getElementById("info_button").innerHTML = htmlDecode(
    e("f1").innerText
  );

  if (e("f3")) {
    if (e("f3").innerText == "none") {
      e("logoPatrocinio").style = "opacity: 0;";
    } else if (e("f3").innerText) {
      e("logoPatrocinio").src = e("f3").innerText;
    }
  }

  function ajustarCadena(cadena) {
    cadena = cadena.replace(/\+/g, " ");
    cadena = cadena.replace(/\+/g, " ");
    return cadena;
  }

  const expresion = htmlDecode(e("f0").innerText);
  let Periodo = htmlDecode(e("f7").innerText);


  const cadenaAjustada = ajustarCadena(expresion);

  const params = {
    id_juego: `${cadenaAjustada}`,
  };

  Object.keys(params).forEach((key) => {
    url1.searchParams.append(key, params[key]);
    url2.searchParams.append(key, params[key]);
  });

  const headers = {
    Authorization: "Bearer 45eadc85b650776e48bdf666120d0fbc",
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const request1 = fetch(url1, {
    method: "GET",
    headers,
  }).then((response) => response.json());

  const request2 = fetch(url2, {
    method: "GET",
    headers,
  }).then((response) => response.json());

  Promise.all([request1, request2])
    .then(([result1, result2]) => {
      if (result1) {
        let { 
          id_equipo_homeclub,
           id_equipo_visitante,
            parte 
          } = result1.data.juego;

        var jugadores;
        var id_equipos;

        parte == 1 ? (jugadores = result2.data.homeclub.peloteros) : (jugadores = result2.data.visitante.peloteros);
        parte == 1 ? (id_equipos = id_equipo_homeclub) : (id_equipos = id_equipo_visitante);

        posicion_poscampo = [
          "BD",
          "BD",
          " C",
          "1B",
          "2B",
          "3B",
          " SS",
          "LF",
          "CF",
          "RF",
        ];


      


        const contenedores = document.getElementById("cont");

        function compararPorPosicionBateo(a, b) {
          return a.posicion_bateo - b.posicion_bateo;
        }

        // Ordenar el arreglo de jugadores
        let resul = jugadores.sort(compararPorPosicionBateo);
        let number = 0;

        resul.forEach((element, index) => {


         
          let div = document.createElement("div");
          if (element.posicion_bateo) {
            const url = new URL(
              "https://bss.qualitybeisbol.com/api/anual-pelotero-ave"
            );

           

            const params = {
              id_bateador: element.id_jugador,
              periodo: Periodo,
              temporada: "2023",
            };

            for (const key in params) {
              url.searchParams.append(key, params[key]);
            }

            fetch(url, {
              method: "GET",
              headers,
            })
              .then((response) => response.json())
              .then((data) => {

                console.log(data)
                function convertirNumero(numero) {
                  if (numero === null || typeof numero === "undefined") {
                    numero = ".000";
                  }
                  return numero.toString().substring(1);
                }

              
                let AVE = convertirNumero(data.data[0].AVE);

                if (data.data[0].id_pelotero === element.id_jugador) {

                  
                  div.innerHTML = `
                                    <div class="info info${index}">
                                        <div class="a">${element.mano_bateo}</div>
                                        <div id="info${index}_B" class="b">${element.nombre} ${element.apellido}</div>
                                        <div id="info${index}_C" class="c">${posicion_poscampo[element.posicion_campo]}</div>
                                        <div id="info${index}_E" class="e">${AVE}</div>
                                    </div>
                                `;

                              
                                
                               
                }
               

              
               
              })
              .catch((error) => {
                console.error("Error:", error);
              });

              contenedores.appendChild(div);
          }

          if (index == 8) {
            const videoElement = document.getElementById("video");

            // Crea y configura el elemento source una sola vez
            const sourceElement = document.createElement("source");
            sourceElement.src = Logos_equipos[id_equipos].img_url;
            sourceElement.type = "video/webm";
            // Agrega el elemento source al video y carga el video
            videoElement.appendChild(sourceElement);
            const video = document.getElementById("video");
            const zoomableDivs = document.querySelector(".logo");

            video.addEventListener("play", () => {
              runAnimationIN();

              zoomableDivs.classList.add("zoomed");
            });
          }
        });
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    })
    .catch((error) => {
      console.error("Error en una de las solicitudes:", error);
    });
}
