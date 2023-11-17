




function runAnimationIN() {

    let dur = 0.5;
  
    if (window.top.spxRenderer && window.top.spxRenderer.fps) {
      gsap.ticker.fps(window.top.spxRenderer.fps);
      console.log("spxRenderer: " + window.top.spxRenderer.fps + " FPS");

      gsap.set("#container", { delay: 0.1, opacity: 0});
      gsap.set("#box-left", { delay: 0.1, opacity: 0});
      gsap.set("#box-right", { delay: 0.1, opacity: 0});
      gsap.set("#box-center", { delay: 0.1, opacity: 0});
      gsap.set("#star", { delay: 0.1, opacity: 0});
      gsap.set("#styles-left", { delay: 0.1, opacity: 0});
      gsap.set("#styles-right", { delay: 0.1, opacity: 0});
    }

    gsap.fromTo(
      "#container",
      { opacity: 0 },
      {
        delay: 0.2,
        duration: dur - 0.2,
        opacity: 1,
        ease: "Power3.easeOut",
      }
    );

    

    gsap.fromTo(
      "#container",
      { opacity: 0 },
      {
        delay: 0.2,
        duration: dur - 0.2,
        opacity: 2,
        ease: "Power3.easeOut",
      }
    );
    

    setTimeout(()=>{
      gsap.fromTo(
        "#box-center",
        { opacity: 0 },
        {
          delay: 0.2,
          duration: dur - 0.2,
          opacity: 1,
          ease: "Power3.easeOut",
        }
      );

      gsap.fromTo(
        "#box-center",
        { y: 400 },
        { delay: 0.2, duration: dur - 0.2, y: 0, ease: "back.out(0.3)" }
      );
  
      
  
      gsap.fromTo(
        "#box-center",
        { opacity: 0 },
        {
          delay: 0.2,
          duration: dur - 0.2,
          opacity: 2,
          ease: "Power3.easeOut",
        }
      );
    },100)


   
    setTimeout(()=>{
      gsap.fromTo(
        "#box-left",
        { opacity: 0 },
        {
          delay: 0.2,
          duration: dur - 0.2,
          opacity: 3,
          ease: "Power3.easeOut",
        }
      );
  
      gsap.fromTo(
        "#box-left",
        { x: 400 },
        { delay: 0.3, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
      );
  
      gsap.fromTo(
        "#box-left",
        { opacity: 0 },
        {
          delay: 0.2,
          duration: dur - 0.2,
          opacity: 2,
          ease: "Power3.easeOut",
        }
      );

      //box-right

      gsap.fromTo(
        "#box-right",
        { opacity: 0 },
        {
          delay: 0.2,
          duration: dur - 0.2,
          opacity: 3,
          ease: "Power3.easeOut",
        }
      );
  
      gsap.fromTo(
        "#box-right",
        { x: -400 },
        { delay: 0.3, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
      );
  
      gsap.fromTo(
        "#box-right",
        { opacity: 0 },
        {
          delay: 0.2,
          duration: dur - 0.2,
          opacity: 2,
          ease: "Power3.easeOut",
        }
      );
    },400)


    setTimeout(()=>{
      gsap.fromTo(
        "#star",
        { opacity: 0 },
        {
          delay: 0.2,
          duration: dur - 0.2,
          opacity: 1,
          ease: "Power3.easeOut",
        }
      );

      gsap.fromTo(
        "#star",
        { y: 50 },
        { delay: 0.2, duration: dur - 0.2, y: 0, ease: "back.out(0.3)" }
      );
  
      
  
      gsap.fromTo(
        "#star",
        { opacity: 0 },
        {
          delay: 0.2,
          duration: dur - 0.2,
          opacity: 2,
          ease: "Power3.easeOut",
        }
      );



      gsap.fromTo(
        "#styles-left",
        { opacity: 0 },
        {
          delay: 0.2,
          duration: dur - 0.2,
          opacity: 1,
          ease: "Power3.easeOut",
        }
      );
  
      gsap.fromTo(
        "#styles-left",
        { x: 500 },
        {
          delay: 0.3,
          duration: dur,
          opacity: 0,
  
          x: 0,
          ease: "back.out(0.3)",
        })
      gsap.fromTo(
        "#styles-right",
        { opacity: 0 },
        {
          delay: 0.2,
          duration: dur - 0.2,
          opacity: 1,
          ease: "Power3.easeOut",
        }
      );
  
      gsap.fromTo(
        "#styles-right",
        { x: 0 },
        {
          delay: 0.3,
          duration: dur,
          opacity: 1,
  
          x: 500,
          ease: "back.out(0.3)",
        })

    },800)



     
  }
  
  
  
  function runAnimationOUT() {
    gsap.set("#container", { delay: 0.1, opacity: 0});
    
  }