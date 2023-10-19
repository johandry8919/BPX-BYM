





function runAnimationIN() {
    let dur = 0.5;
  
    if (window.top.spxRenderer && window.top.spxRenderer.fps) {
      gsap.ticker.fps(window.top.spxRenderer.fps);
      console.log("spxRenderer: " + window.top.spxRenderer.fps + " FPS");

      gsap.set("#cont1", { delay: 0.1, opacity: 0});
      gsap.set("#principal_right", { delay: 0.1, opacity: 0});
      gsap.set("#primera_right", { delay: 0.1, opacity: 0});
      gsap.set("#segunda_right", { delay: 0.1, opacity: 0});
      gsap.set("#tercera_right", { delay: 0.1, opacity: 0});
      gsap.set("#principal_left", { delay: 0.1, opacity: 0});
      gsap.set("#primera_left", { delay: 0.1, opacity: 0});
      gsap.set("#segunda_left", { delay: 0.1, opacity: 0});
      gsap.set("#tercera_left", { delay: 0.1, opacity: 0});
      gsap.set("#title", { delay: 0.1, opacity: 0});
    }

    //title

    gsap.fromTo(
        "#title",
        { opacity: 0 },
        {
          delay: 0.4,
          duration: dur - 0.2,
          opacity: 1,
          ease: "Power3.easeOut",
        }
      );
  
      gsap.fromTo(
        "#title",
        { y: 200 },
        { delay: 0.4, duration: dur - 0.2, y: 0, ease: "back.out(0.3)" }
      );
  
      gsap.fromTo(
        "#title",
        { opacity: 0 },
        {
          delay: 0.4,
          duration: dur - 0.2,
          opacity: 2,
          ease: "Power3.easeOut",
        }
      );




    //title

    //container

        setTimeout(()=>{
            gsap.fromTo(
                "#cont1",
                { opacity: 0 },
                {
                  delay: 0.6,
                  duration: dur - 0.2,
                  opacity: 1,
                  ease: "Power3.easeOut",
                }
              );
          
              gsap.fromTo(
                "#cont1",
                { y: -300 },
                { delay: 0.6, duration: dur - 0.2, y: 0, ease: "back.out(0.3)" }
              );
          
              gsap.fromTo(
                "#cont1",
                { opacity: 0 },
                {
                  delay: 0.6,
                  duration: dur - 0.2,
                  opacity: 2,
                  ease: "Power3.easeOut",
                }
              );
        
        },300)

        setTimeout(()=>{
            

          // right
    gsap.fromTo(
        "#principal_right",
        { opacity: 0 },
        {
          delay: 0.2,
          duration: dur - 0.2,
          opacity: 1,
          ease: "Power3.easeOut",
        }
      );
  
      gsap.fromTo(
        "#principal_right",
        { x: 200 },
        { delay: 0.2, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
      );
  
      gsap.fromTo(
        "#principal_right",
        { opacity: 0 },
        {
          delay: 0.2,
          duration: dur - 0.2,
          opacity: 2,
          ease: "Power3.easeOut",
        }
      );

      //primera_right
    gsap.fromTo(
        "#primera_right",
        { opacity: 0 },
        {
          delay: 0.4,
          duration: dur - 0.2,
          opacity: 1,
          ease: "Power3.easeOut",
        }
      );
  
      gsap.fromTo(
        "#primera_right",
        { x: 300 },
        { delay: 0.4, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
      );
  
      gsap.fromTo(
        "#primera_right",
        { opacity: 0 },
        {
          delay: 0.4,
          duration: dur - 0.2,
          opacity: 2,
          ease: "Power3.easeOut",
        }
      );
      //segunda_right
    gsap.fromTo(
        "#segunda_right",
        { opacity: 0 },
        {
          delay: 0.6,
          duration: dur - 0.2,
          opacity: 1,
          ease: "Power3.easeOut",
        }
      );
  
      gsap.fromTo(
        "#segunda_right",
        { x: 300 },
        { delay: 0.6, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
      );
  
      gsap.fromTo(
        "#segunda_right",
        { opacity: 0 },
        {
          delay: 0.6,
          duration: dur - 0.2,
          opacity: 2,
          ease: "Power3.easeOut",
        }
      );
      //tercera_right
    gsap.fromTo(
        "#tercera_right",
        { opacity: 0 },
        {
          delay: 0.8,
          duration: dur - 0.2,
          opacity: 1,
          ease: "Power3.easeOut",
        }
      );
  
      gsap.fromTo(
        "#tercera_right",
        { x: 300 },
        { delay: 0.8, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
      );
  
      gsap.fromTo(
        "#tercera_right",
        { opacity: 0 },
        {
          delay: 0.8,
          duration: dur - 0.2,
          opacity: 2,
          ease: "Power3.easeOut",
        }
      );
        // right

        // Left
    gsap.fromTo(
        "#principal_left",
        { opacity: 0 },
        {
          delay: 0.2,
          duration: dur - 0.2,
          opacity: 3,
          ease: "Power3.easeOut",
        }
      );
  
      gsap.fromTo(
        "#principal_left",
        { x: -200 },
        { delay: 0.2, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
      );
  
      gsap.fromTo(
        "#principal_left",
        { opacity: 0 },
        {
          delay: 0.2,
          duration: dur - 0.2,
          opacity: 2,
          ease: "Power3.easeOut",
        }
      );

      //primera_right
    gsap.fromTo(
        "#primera_left",
        { opacity: 0 },
        {
          delay: 0.4,
          duration: dur - 0.2,
          opacity: 1,
          ease: "Power3.easeOut",
        }
      );
  
      gsap.fromTo(
        "#primera_left",
        { x: -300 },
        { delay: 0.4, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
      );
  
      gsap.fromTo(
        "#primera_left",
        { opacity: 0 },
        {
          delay: 0.4,
          duration: dur - 0.2,
          opacity: 2,
          ease: "Power3.easeOut",
        }
      );
      //segunda_right
    gsap.fromTo(
        "#segunda_left",
        { opacity: 0 },
        {
          delay: 0.6,
          duration: dur - 0.2,
          opacity: 1,
          ease: "Power3.easeOut",
        }
      );
  
      gsap.fromTo(
        "#segunda_left",
        { x: -300 },
        { delay: 0.6, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
      );
  
      gsap.fromTo(
        "#segunda_left",
        { opacity: 0 },
        {
          delay: 0.6,
          duration: dur - 0.2,
          opacity: 2,
          ease: "Power3.easeOut",
        }
      );
      //tercera_right
    gsap.fromTo(
        "#tercera_left",
        { opacity: 0 },
        {
          delay: 0.8,
          duration: dur - 0.2,
          opacity: 1,
          ease: "Power3.easeOut",
        }
      );
  
      gsap.fromTo(
        "#tercera_left",
        { x: -300 },
        { delay: 0.8, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
      );
  
      gsap.fromTo(
        "#tercera_left",
        { opacity: 0 },
        {
          delay: 0.8,
          duration: dur - 0.2,
          opacity: 1,
          ease: "Power3.easeOut",
        }
      );
        //left

        },1200)




    //container


  
}


function runAnimationOUT() {
    gsap.set("#container", { delay: 0.1, opacity: 0});
    
  }