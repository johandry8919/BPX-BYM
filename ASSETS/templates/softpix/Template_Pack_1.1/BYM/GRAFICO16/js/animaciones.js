
function runAnimationIN() {
    let dur = 0.5;
  
    if (window.top.spxRenderer && window.top.spxRenderer.fps) {
      gsap.ticker.fps(window.top.spxRenderer.fps);
      console.log("spxRenderer: " + window.top.spxRenderer.fps + " FPS");
  

    
  
    
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
          { delay: delayTime, duration: dur - 0.2, x: 0, ease: "back.out(0.2)" }
        );
      };
 
      
      const dur = 0.8; 
     
      
      
      // Animaciones para info C Y E
    
    
    
      animateInfo("#cont-2", 0.2, 60);
      animateInfo("#cont-3", 0.2, -60);
      animateInfo("#text-left1", 0.2, -60);
      animateInfo("#text-left2", 0.3, -60);
      animateInfo("#text-left3", 0.4, -60);
      animateInfo("#text-left4", 0.5, -60);
      animateInfo("#text-left5", 0.6, -60);

      animateInfo("#text-right1", 0.2, 60);
      animateInfo("#text-right2", 0.3, 60);
      animateInfo("#text-right3", 0.4, 60);
      animateInfo("#text-right4", 0.5, 60);
      animateInfo("#text-right5", 0.6, 60);
      animateInfo("#contImg_right", 0.3, 60);
      animateInfo("#contImg_left", 0.3, -60);
      

     
   
     


    },500)

    setTimeout(()=>{

       const dur2 = 20.0; 
      const right_img = (selector, delayTime, xOffset) => {
        gsap.fromTo(
          selector,
          { opacity: 1 },
          {
            delay: delayTime,
            duration: dur2 - 0.2,
            opacity: 1,
            ease: "Power4.easeOut",
          }
        );
      
        gsap.fromTo(
          selector,
          { x: xOffset },
          { delay: delayTime, duration: dur2 - 0.2, x: 0, ease: "back.out(0.2)" }
        );
      };

      
      right_img("#contImg_right_img", 0.9, -100);
      right_img("#contImg_left_img", 0.9, 100);
    },800)
    const info_button = (selector, delayTime, xOffset) => {
      const dur = 0.4; 
      gsap.fromTo(
        selector,
        { opacity:0, scale: 1.2 }, // Escala inicial de 2
        {
          delay: delayTime,
          duration: dur - 0.1,
          opacity: 1,
          scale: 1, // Escala final de 1
          ease: "Power3.easeOut",
        }
      );
    
      gsap.fromTo(
        selector,
        { y: xOffset },
        { delay: delayTime, duration: dur - 0.1, y: 0, ease: "back.out(0.1)" }
      );
    };
    
    info_button("#cont-center", 0.6, -40);
    info_button("#logo", 0.6, 0);
    info_button(".text-cente", 0.6, 0);

    }
  

  
  
  function runAnimationOUT() {
    gsap.set("#container", { delay: 0.1, opacity: 0});
    
  }