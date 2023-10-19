

function runAnimationIN() {
    let dur = 0.5;
  
    if (window.top.spxRenderer && window.top.spxRenderer.fps) {
      gsap.ticker.fps(window.top.spxRenderer.fps);
      console.log("spxRenderer: " + window.top.spxRenderer.fps + " FPS");
  

      gsap.set("#cont-1", { delay: 0.1, opacity: 0});
      gsap.set("#logos_equipos", { delay: 0.1, opacity: 0});
     
  
    
    }
  
    //title
  
    gsap.fromTo(
        "#cont-1",
        { opacity: 0 },
        {
          delay: 0.2,
          duration: dur - 0.2,
          opacity: 1,
          ease: "Power3.easeOut",
        }
      );
  
      gsap.fromTo(
        "#cont-1",
        { y: 200 },
        { delay: 0.2, duration: dur - 0.2, y: 0, ease: "back.out(0.3)" }
      );
  
      gsap.fromTo(
        "#cont-1",
        { opacity: 0 },
        {
          delay: 0.2,
          duration: dur - 0.2,
          opacity: 2,
          ease: "Power3.easeOut",
        }

      );

      // logos_equipos
    gsap.fromTo(
        "#logos_equipos",
        { opacity: 0 },
        {
          delay: 0.8,
          duration: dur - 0.2,
          opacity: 1,
          ease: "Power3.easeOut",
        }
      );
  
      gsap.fromTo(
        "#logos_equipos",
        { x: 200 },
        { delay: 0.8, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
      );
  
      gsap.fromTo(
        "#logos_equipos",
        { opacity: 0 },
        {
          delay: 0.8,
          duration: dur - 0.2,
          opacity: 1,
          ease: "Power3.easeOut",
        }

      );
      //cont-3
    gsap.fromTo(
        "#cont-3",
        { opacity: 0 },
        {
          delay: 0.8,
          duration: dur - 0.2,
          opacity: 1,
          ease: "Power3.easeOut",
        }
      );
  
      gsap.fromTo(
        "#cont-3",
        { x: -80 },
        { delay: 0.8, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
      );
  
      gsap.fromTo(
        "#cont-3",
        { opacity: 0 },
        {
          delay: 0.8,
          duration: dur - 0.2,
          opacity: 1,
          ease: "Power3.easeOut",
        }

      );

    }
  
  
  
  
    //title
  
    //container
  
       
     
            
  
  
  
  function runAnimationOUT() {
    gsap.set("#container", { delay: 0.1, opacity: 0});
    
  }