function runAnimationIN() {
  let dur = 0.5;

  if (window.top.spxRenderer && window.top.spxRenderer.fps) {
    gsap.ticker.fps(window.top.spxRenderer.fps);
    console.log("spxRenderer: " + window.top.spxRenderer.fps + " FPS");

    gsap.set("#efec_left", { delay: 0.1, opacity: 0});
    gsap.set("#efec_right", { delay: 0.1, opacity: 0});
    gsap.set("#color", { delay: 0.1, opacity: 0});
    gsap.set("#apariciones_left", { delay: 0.1, opacity: 0});
    gsap.set("#apariciones_right", { delay: 0.1, opacity: 0});
    gsap.set("#GP_left", { delay: 0.1, opacity: 0});
    gsap.set("#GP", { delay: 0.1, opacity: 0});
    gsap.set("#ip_left", { delay: 0.1, opacity: 0});
    gsap.set("#ip_right", { delay: 0.1, opacity: 0});
    gsap.set("#k_left", { delay: 0.1, opacity: 0});
    gsap.set("#k_right", { delay: 0.1, opacity: 0});
    gsap.set("#op_avg_right", { delay: 0.1, opacity: 0});
    gsap.set("#cont-2", { delay: 0.1, opacity: 0});
    gsap.set("#cont-3", { delay: 0.1, opacity: 0});
  }

  //title

  gsap.fromTo(
      "#cont-2",
      { opacity: 0 },
      {
        delay: 0.4,
        duration: dur - 0.2,
        opacity: 1,
        ease: "Power3.easeOut",
      }
    );

    gsap.fromTo(
      "#cont-2",
      { y: 200 },
      { delay: 0.4, duration: dur - 0.2, y: 0, ease: "back.out(0.3)" }
    );

    gsap.fromTo(
      "#cont-2",
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
          "#cont-1",
          { opacity: 0 },
          {
            delay: 0.6,
            duration: dur - 0.2,
            opacity: 0,
            ease: "Power3.easeOut",
          }
        );
    
        gsap.fromTo(
          "#cont-1",
          { y: 100 },
          { delay: 0.6, duration: dur - 0.2, y: 0, ease: "back.out(0.3)" }
        );
    
        gsap.fromTo(
          "#cont-1",
          { opacity: 0 },
          {
            delay: 0.6,
            duration: dur - 0.2,
            opacity: 1,
            ease: "Power3.easeOut",
          }
        );
          gsap.fromTo(
              "#cont-3",
              { opacity: 0 },
              {
                delay: 0.6,
                duration: dur - 0.2,
                opacity: 1,
                ease: "Power3.easeOut",
              }
            );
        
            gsap.fromTo(
              "#cont-3",
              { y: -100 },
              { delay: 0.6, duration: dur - 0.2, y: 0, ease: "back.out(0.3)" }
            );
        
            gsap.fromTo(
              "#cont-3",
              { opacity: 0 },
              {
                delay: 0.6,
                duration: dur - 0.2,
                opacity: 2,
                ease: "Power3.easeOut",
              }
            );
      
      },500)

      setTimeout(()=>{
          

        // right
  gsap.fromTo(
      "#apariciones_right",
      { opacity: 0 },
      {
        delay: 0.2,
        duration: dur - 0.2,
        opacity: 1,
        ease: "Power3.easeOut",
      }
    );

    gsap.fromTo(
      "#apariciones_right",
      { x: 200 },
      { delay: 0.2, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
    );

    gsap.fromTo(
      "#apariciones_right",
      { opacity: 0 },
      {
        delay: 0.2,
        duration: dur - 0.2,
        opacity: 2,
        ease: "Power3.easeOut",
      }
    );

    //GP_left
  gsap.fromTo(
      "#GP",
      { opacity: 0 },
      {
        delay: 0.4,
        duration: dur - 0.2,
        opacity: 1,
        ease: "Power3.easeOut",
      }
    );

    gsap.fromTo(
      "#GP",
      { x: 300 },
      { delay: 0.4, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
    );

    gsap.fromTo(
      "#GP",
      { opacity: 0 },
      {
        delay: 0.4,
        duration: dur - 0.2,
        opacity: 2,
        ease: "Power3.easeOut",
      }
    );
    //efec_right
  gsap.fromTo(
      "#efec_right",
      { opacity: 0 },
      {
        delay: 0.6,
        duration: dur - 0.2,
        opacity: 1,
        ease: "Power3.easeOut",
      }
    );

    gsap.fromTo(
      "#efec_right",
      { x: 300 },
      { delay: 0.6, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
    );

    gsap.fromTo(
      "#efec_right",
      { opacity: 0 },
      {
        delay: 0.6,
        duration: dur - 0.2,
        opacity: 2,
        ease: "Power3.easeOut",
      }
    );
  gsap.fromTo(
      "#color",
      { opacity: 0 },
      {
        delay: 0.6,
        duration: dur - 0.2,
        opacity: 1,
        ease: "Power3.easeOut",
      }
    );

    gsap.fromTo(
      "#color",
      { x: 300 },
      { delay: 0.6, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
    );

    gsap.fromTo(
      "#color",
      { opacity: 0 },
      {
        delay: 0.6,
        duration: dur - 0.2,
        opacity: 2,
        ease: "Power3.easeOut",
      }
    );
    //ip_right
  gsap.fromTo(
      "#ip_right",
      { opacity: 0 },
      {
        delay: 0.8,
        duration: dur - 0.2,
        opacity: 1,
        ease: "Power3.easeOut",
      }
    );

    gsap.fromTo(
      "#ip_right",
      { x: 300 },
      { delay: 0.8, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
    );

    gsap.fromTo(
      "#ip_right",
      { opacity: 0 },
      {
        delay: 0.8,
        duration: dur - 0.2,
        opacity: 1,
        ease: "Power3.easeOut",
      }
    );
  gsap.fromTo(
      "#k_right",
      { opacity: 0 },
      {
        delay: 0.8,
        duration: dur - 0.2,
        opacity: 1,
        ease: "Power3.easeOut",
      }
    );

    gsap.fromTo(
      "#k_right",
      { x: 300 },
      { delay: 0.8, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
    );

    gsap.fromTo(
      "#k_right",
      { opacity: 0 },
      {
        delay: 0.8,
        duration: dur - 0.2,
        opacity: 1,
        ease: "Power3.easeOut",
      }
    );

    //op_avg_right
  gsap.fromTo(
      "#op_avg_right",
      { opacity: 0 },
      {
        delay: 0.9,
        duration: dur - 0.1,
        opacity: 1,
        ease: "Power3.easeOut",
      }
    );

    gsap.fromTo(
      "#op_avg_right",
      { x: 300 },
      { delay: 0.9, duration: dur - 0.1, x: 0, ease: "back.out(0.3)" }
    );

    gsap.fromTo(
      "#op_avg_right",
      { opacity: 0 },
      {
        delay: 0.9,
        duration: dur - 0.1,
        opacity: 1,
        ease: "Power3.easeOut",
      }
    );
      // right

      // Left
  gsap.fromTo(
      "#apariciones_left",
      { opacity: 0 },
      {
        delay: 0.2,
        duration: dur - 0.2,
        opacity: 1,
        ease: "Power3.easeOut",
      }
    );

    gsap.fromTo(
      "#apariciones_left",
      { x: -200 },
      { delay: 0.2, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
    );

    gsap.fromTo(
      "#apariciones_left",
      { opacity: 0 },
      {
        delay: 0.2,
        duration: dur - 0.2,
        opacity: 2,
        ease: "Power3.easeOut",
      }
    );

    //GP_left
  gsap.fromTo(
      "#GP_left",
      { opacity: 0 },
      {
        delay: 0.4,
        duration: dur - 0.2,
        opacity: 1,
        ease: "Power3.easeOut",
      }
    );

    gsap.fromTo(
      "#GP_left",
      { x: -300 },
      { delay: 0.4, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
    );

    gsap.fromTo(
      "#GP_left",
      { opacity: 0 },
      {
        delay: 0.4,
        duration: dur - 0.2,
        opacity: 2,
        ease: "Power3.easeOut",
      }
    );
    //efec_left
  gsap.fromTo(
      "#efec_left",
      { opacity: 0 },
      {
        delay: 0.6,
        duration: dur - 0.2,
        opacity: 1,
        ease: "Power3.easeOut",
      }
    );

    gsap.fromTo(
      "#efec_left",
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
    //ip_right
  gsap.fromTo(
      "#ip_left",
      { opacity: 0 },
      {
        delay: 0.8,
        duration: dur - 0.2,
        opacity: 1,
        ease: "Power3.easeOut",
      }
    );

    gsap.fromTo(
      "#ip_left",
      { x: -300 },
      { delay: 0.8, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
    );

    gsap.fromTo(
      "#ip_left",
      { opacity: 0 },
      {
        delay: 0.8,
        duration: dur - 0.2,
        opacity: 1,
        ease: "Power3.easeOut",
      }
    );
  gsap.fromTo(
      "#k_left",
      { opacity: 0 },
      {
        delay: 0.8,
        duration: dur - 0.2,
        opacity: 1,
        ease: "Power3.easeOut",
      }
    );

    gsap.fromTo(
      "#k_left",
      { x: -300 },
      { delay: 0.8, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
    );

    gsap.fromTo(
      "#k_left",
      { opacity: 0 },
      {
        delay: 0.8,
        duration: dur - 0.2,
        opacity: 1,
        ease: "Power3.easeOut",
      }
    );
    //op_avg_left
  gsap.fromTo(
      "#op_avg_left",
      { opacity: 0 },
      {
        delay: 0.9,
        duration: dur - 0.2,
        opacity: 1,
        ease: "Power3.easeOut",
      }
    );

    gsap.fromTo(
      "#op_avg_left",
      { x: -300 },
      { delay: 0.9, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
    );

    gsap.fromTo(
      "#op_avg_left",
      { opacity: 0 },
      {
        delay: 0.9,
        duration: dur - 0.2,
        opacity: 1,
        ease: "Power3.easeOut",
      }
    );
      //op_avg_left
      },1200)
  //container
}




function runAnimationOUT() {
  gsap.set("#container", { delay: 0.1, opacity: 0});
  
}