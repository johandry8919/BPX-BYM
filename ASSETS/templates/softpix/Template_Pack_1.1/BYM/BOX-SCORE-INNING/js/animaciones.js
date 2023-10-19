

function runAnimationIN() {
    let dur = 0.5;
  
    if (window.top.spxRenderer && window.top.spxRenderer.fps) {
      gsap.ticker.fps(window.top.spxRenderer.fps);
      console.log("spxRenderer: " + window.top.spxRenderer.fps + " FPS");
  

      gsap.set("#cont-1", { delay: 0.1, opacity: 0});
      gsap.set("#logo_team", { delay: 0.1, opacity: 0});
     
  
    
    }
  
    //title
  
    gsap.fromTo(
        "#cont-left",
        { opacity: 0 },
        {
          delay: 0.2,
          duration: dur - 0.1,
          opacity: 1,
          ease: "Power4.easeOut",
        }
      );
  
      gsap.fromTo(
        "#cont-left",
        { y: 300 },
        { delay: 0.2, duration: dur - 0.1, y: 0, ease: "back.out(0.1)" }
      );
  
      gsap.fromTo(
        "#cont-left",
        { opacity: 0 },
        {
          delay: 0.2,
          duration: dur - 0.1,
          opacity: 1,
          ease: "Power4.easeOut",
        }

      );
    gsap.fromTo(
        "#mtg",
        { opacity: 0 },
        {
          delay: 0.2,
          duration: dur - 0.1,
          opacity: 1,
          ease: "Power4.easeOut",
        }
      );
  
      gsap.fromTo(
        "#mtg",
        { y: 300 },
        { delay: 0.2, duration: dur - 0.1, y: 0, ease: "back.out(0.1)" }
      );
  
      gsap.fromTo(
        "#mtg",
        { opacity: 0 },
        {
          delay: 0.2,
          duration: dur - 0.1,
          opacity: 1,
          ease: "Power4.easeOut",
        }

      );
    //title

    //number_pizarra
  
    gsap.fromTo(
        ".number1",
        { opacity: 0 },
        {
          delay: 0.9,
          duration: dur - 0.2,
          opacity: 1,
          ease: "Power4.easeOut",
        }
      );
  
      gsap.fromTo(
        ".number1",
        { y: 30 },
        { delay: 0.9, duration: dur - 0.2, y: 0, ease: "back.out(0.5)" }
      );
  
      gsap.fromTo(
        ".number1",
        { opacity: 0 },
        {
          delay: 0.9,
          duration: dur - 0.2,
          opacity: 2,
          ease: "Power4.easeOut",
        }

      );
    gsap.fromTo(
        ".number2",
        { opacity: 0 },
        {
          delay:1.0,
          duration: dur - 0.1,
          opacity: 1,
          ease: "Power4.easeOut",
        }
      );
  
      gsap.fromTo(
        ".number2",
        { y: 20 },
        { delay: 1.0, duration: dur - 0.1, y: 0, ease: "back.out(0.5)" }
      );
  
      gsap.fromTo(
        ".number2",
        { opacity: 0 },
        {
          delay:1.0,
          duration: dur - 0.1,
          opacity: 1,
          ease: "Power4.easeOut",
        }

      );
    gsap.fromTo(
        ".CHE",
        { opacity: 0 },
        {
          delay: 0.8,
          duration: dur - 0.1,
          opacity: 1,
          ease: "Power4.easeOut",
        }
      );
  
      gsap.fromTo(
        ".CHE",
        { y: 20 },
        { delay: 0.8, duration: dur - 0.1, y: 0, ease: "back.out(0.1)" }
      );
  
      gsap.fromTo(
        ".CHE",
        { opacity: 0 },
        {
          delay: 0.8,
          duration: dur - 0.1,
          opacity: 2,
          ease: "Power4.easeOut",
        }

      );
    //number_pizarra
  
    gsap.fromTo(
        "#cont-center",
        { opacity: 0 },
        {
          delay: 0.2,
          duration: dur - 0.1,
          opacity: 1,
          ease: "Power4.easeOut",
        }
      );
  
      gsap.fromTo(
        "#cont-center",
        { y: 300 },
        { delay: 0.2, duration: dur - 0.1, y: 0, ease: "back.out(0.1)" }
      );
  
      gsap.fromTo(
        "#cont-center",
        { opacity: 0 },
        {
          delay: 0.2,
          duration: dur - 0.1,
          opacity: 1,
          ease: "Power3.easeOut",
        }

      );





   
      //cont-right
    gsap.fromTo(
        "#cont-right",
        { opacity: 0 },
        {
          delay: 1.5,
          duration: dur - 0.1,
          opacity: 1,
          ease: "Power4.easeOut",
        }
      );
  
      gsap.fromTo(
        "#cont-right",
        { x: -50 },
        { delay: 1.5, duration: dur - 0.1, x: 0, ease: "back.out(0.3)" }
      );
  
      gsap.fromTo(
        "#cont-right",
        { opacity: 0 },
        {
          delay: 1.5,
          duration: dur - 0.1,
          opacity: 1,
          ease: "Power4.easeOut",
        }

      );
      //cont-logo
    gsap.fromTo(
        "#cont-logo",
        { opacity: 0 },
        {
          delay: 2.5,
          duration: dur - 0.2,
          opacity: 1,
          ease: "Power3.easeOut",
        }
      );
  
      gsap.fromTo(
        "#cont-logo",
        { x: -40 },
        { delay: 2.5, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
      );
  
      gsap.fromTo(
        "#cont-logo",
        { opacity: 0 },
        {
          delay: 2.5,
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