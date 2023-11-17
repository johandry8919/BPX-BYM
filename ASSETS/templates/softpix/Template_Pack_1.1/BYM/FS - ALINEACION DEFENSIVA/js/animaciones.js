





function runAnimationIN() {

    

  let dur = 0.5;

  if (window.top.spxRenderer && window.top.spxRenderer.fps) {
    gsap.ticker.fps(window.top.spxRenderer.fps);
    console.log("spxRenderer: " + window.top.spxRenderer.fps + " FPS");

    gsap.set("#cont1", { delay: 0.1, opacity: 0});
    gsap.set("#text_posicion_9", { delay: 0.1, opacity: 0});
    gsap.set("#text_posicion_1", { delay: 0.1, opacity: 0});
    gsap.set("#text_posicion_2", { delay: 0.1, opacity: 0});
    gsap.set("#text_posicion_3", { delay: 0.1, opacity: 0});
 
   
  }



      setTimeout(()=>{


        gsap.fromTo(
            "#text_posicion_9",
            { opacity: 0 },
            {
              delay: 0.1,
              duration: dur - 0.2,
              opacity: 1,
              ease: "Power3.easeOut",
            }
          );
      
          gsap.fromTo(
            "#text_posicion_9",
            { y: 25 },
            { delay: 0.1, duration: dur - 0.2, y: 0, ease: "back.out(0.3)" }
          );
      
          gsap.fromTo(
            "#text_posicion_9",
            { opacity: 0 },
            {
              delay: 0.1,
              duration: dur - 0.2,
              opacity: 1,
              ease: "Power3.easeOut",
            }
    
          );

          gsap.fromTo(
            "#text_posicion_1",
            { opacity: 0 },
            {
              delay: 0.6,
              duration: dur - 0.2,
              opacity: 1,
              ease: "Power3.easeOut",
            }
          );
      
          gsap.fromTo(
            "#text_posicion_1",
            { y: 25 },
            { delay: 0.6, duration: dur - 0.2, y: 0, ease: "back.out(0.1)" }
          );
      
          gsap.fromTo(
            "#text_posicion_1",
            { opacity: 0 },
            {
              delay: 0.6,
              duration: dur - 0.2,
              opacity: 1,
              ease: "Power3.easeOut",
            }
    
          );


          
        gsap.fromTo(
            "#text_posicion_2",
            { opacity: 0 },
            {
              delay: 0.4,
              duration: dur - 0.2,
              opacity: 1,
              ease: "Power3.easeOut",
            }
          );
      
          gsap.fromTo(
            "#text_posicion_2",
            { y: 25 },
            { delay: 0.4, duration: dur - 0.2, y: 0, ease: "back.out(0.1)" }
          );
      
          gsap.fromTo(
            "#text_posicion_2",
            { opacity: 0 },
            {
              delay: 0.4,
              duration: dur - 0.2,
              opacity: 1,
              ease: "Power3.easeOut",
            }
    
          );



        gsap.fromTo(
            "#text_posicion_3",
            { opacity: 0 },
            {
              delay: 0.2,
              duration: dur - 0.2,
              opacity: 1,
              ease: "Power3.easeOut",
            }
          );
      
          gsap.fromTo(
            "#text_posicion_3",
            { y: 25 },
            { delay: 0.2, duration: dur - 0.2, y: 0, ease: "back.out(0.1)" }
          );
      
          gsap.fromTo(
            "#text_posicion_3",
            { opacity: 0 },
            {
              delay: 0.2,
              duration: dur - 0.2,
              opacity: 1,
              ease: "Power3.easeOut",
            }
    
          );

     

      },600)




  //container



}


function runAnimationOUT() {
  gsap.set("#container", { delay: 0.2, opacity: 0});
  
}