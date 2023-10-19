// Selecciona los elementos necesarios una sola vez


function runTemplateUpdate() {

const video = document.getElementById('video');
const img_equipos = document.getElementById('cont-1');
const zoomableDivs = document.querySelectorAll('.cont-1, .logo');
    
    if(e('f3')){
        if(e('f3').innerText == 'none'){
            e('logoPatrocinio').style="opacity: 0;"

        }else if (e('f3').innerText){
            e('logoPatrocinio').src = e('f3').innerText
           
    
        } 

     }
    const videoElement = document.getElementById("video");

    img_equipos.style.backgroundImage = "url('https://www.shutterstock.com/shutterstock/photos/1609616806/display_1500/stock-vector-baseball-player-vector-silhouette-baseball-player-logo-design-sport-club-logo-design-1609616806.jpg')"

         // Crea y configura el elemento source una sola vez
     const sourceElement = document.createElement("source");
     sourceElement.src = Logos_equipos[8].img_url;
     sourceElement.type = "video/webm";
     // Agrega el elemento source al video y carga el video
     videoElement.appendChild(sourceElement);



     video.addEventListener('play', () => {
        zoomableDivs.forEach(div => div.classList.add('zoomed'));
     
       
        
    runAnimationIN();
      
    });

      
    

    
   


}