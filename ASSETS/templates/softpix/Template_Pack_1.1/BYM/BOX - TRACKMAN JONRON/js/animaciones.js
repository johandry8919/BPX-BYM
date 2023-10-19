

function runAnimationIN() {
   
  
    if (window.top.spxRenderer && window.top.spxRenderer.fps) {
      gsap.ticker.fps(window.top.spxRenderer.fps);
      console.log("spxRenderer: " + window.top.spxRenderer.fps + " FPS");
  
      gsap.set("#container", { delay: 0.1, opacity: 0 });
      gsap.set("#cont-2", { delay: 0.1, opacity: 0 });

    }

    const animateInfo = (selector, delayTime, xOffset) => {
        const dur = 0.6; 
        gsap.fromTo(
          selector,
          { opacity: 0 },
          {
            delay: delayTime,
            duration: dur - 0.2,
            opacity: 1,
            ease: "Power3.easeOut",
          }
        );
      
        gsap.fromTo(
          selector,
          { y: xOffset },
          { delay: delayTime, duration: dur - 0.2, y: 0, ease: "back.out(0.2)" }
        );
      };
    const logo_equipo = (selector, delayTime, xOffset) => {
        const dur = 0.6; 
        gsap.fromTo(
          selector,
          { opacity: 0 },
          {
            delay: delayTime,
            duration: dur - 0.2,
            opacity: 1,
            ease: "Power3.easeOut",
          }
        );
      
        gsap.fromTo(
          selector,
          { x: xOffset },
          { delay: delayTime, duration: dur - 0.2, x: 0, ease: "back.out(0.2)" }
        );
      };
 
      
    
     

      animateInfo("#cont2", 0.2, 10);
      logo_equipo("#logo_equipo", 0.3, 10);
      animateInfo("#cont-3", 0.8, -15);
      animateInfo("#cont-4", 1.4, -15);
      animateInfo("#cont-1", 1.8, 15);
     
  
 
  }
  
  
  
  function runAnimationOUT() {
    gsap.set("#container", { delay: 0.1, opacity: 0 });
  
  
  
  }