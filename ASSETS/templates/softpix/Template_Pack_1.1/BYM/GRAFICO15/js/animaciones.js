








function runAnimationIN() {
  let dur = 0.5;

    


  if (window.top.spxRenderer && window.top.spxRenderer.fps) {
    gsap.ticker.fps(window.top.spxRenderer.fps);
    console.log("spxRenderer: " + window.top.spxRenderer.fps + " FPS");

    gsap.set("#cont1", { delay: 0.2, opacity: 0});
    gsap.set("#info1", { delay: 0.1, opacity: 0});
 
  }

      setTimeout(()=>{

        const animateInfo = (selector, delayTime, xOffset) => {
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
            { x: xOffset },
            { delay: delayTime, duration: dur - 0.2, x: 0, ease: "back.out(1.2)" }
          );
        };
        const info_button = (selector, delayTime, xOffset) => {
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
            { delay: delayTime, duration: dur - 0.2, y: 0, ease: "back.out(1.2)" }
          );
        };
        
        const dur = 0.5; 
        
        
        // Animaciones para info C Y E
      
      
      
        animateInfo("#info1", 0.2, -50);
        animateInfo("#info2", 0.4, -50);
        animateInfo("#info3", 0.6, -50);
        animateInfo("#info4", 0.8, -50);
        animateInfo("#info5", 0.9, -50);
        animateInfo("#logos_equipo", 0.2, 50);


      },700)





}


function runAnimationOUT() {
  gsap.set("#container", { delay: 0.1, opacity: 0});
  
}