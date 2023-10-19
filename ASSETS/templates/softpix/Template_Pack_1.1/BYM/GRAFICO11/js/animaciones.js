






function runAnimationIN() {
  let dur = 0.5;

  if (window.top.spxRenderer && window.top.spxRenderer.fps) {
    gsap.ticker.fps(window.top.spxRenderer.fps);
    console.log("spxRenderer: " + window.top.spxRenderer.fps + " FPS");

    gsap.set("#principal_right", { delay: 0.1, opacity: 0});
    gsap.set("#primera_right", { delay: 0.1, opacity: 0});
    gsap.set("#segunda_right", { delay: 0.1, opacity: 0});
    gsap.set("#tercera_right", { delay: 0.1, opacity: 0});
    gsap.set("#principal_left", { delay: 0.1, opacity: 0});
    gsap.set("#primera_left", { delay: 0.1, opacity: 0});
    gsap.set("#segunda_left", { delay: 0.1, opacity: 0});
    gsap.set("#tercera_left", { delay: 0.1, opacity: 0});
    gsap.set("#video-container", { delay: 0.1, opacity: 0});
   
  }



      setTimeout(()=>{

        function gsapAnimation(target, startProps, endProps) {
          gsap.fromTo(target, startProps, endProps);
      }
      
      const easePower = "Power3.easeOut";
      const easeBack = "back.out(0.5)";
      const commonDuration = { duration: dur - 0.2 };
      const commonOpacity = { opacity: 1 };
      
      // Refactor for #cont1 and #video
      ["#cont1", "#video"].forEach(selector => {
          gsapAnimation(selector, commonOpacity, {
              delay: 0.1,
              ...commonDuration,
              ...commonOpacity,
              ease: easePower
          });
      });
      
      // Refactor for Right and Left with an array of objects
      const elements = [
          { id: "#principal_", delay: 0.2 },
          { id: "#primera_", delay: 0.3 },
          { id: "#segunda_", delay: 0.4 },
          { id: "#tercera_", delay: 0.5 }
      ];
      
      elements.forEach(el => {
          ["right", "left"].forEach(direction => {
              const id = el.id + direction;
      
              // Opacity animation
              gsapAnimation(id, { opacity: 0 }, {
                  delay: el.delay,
                  ...commonDuration,
                  ...commonOpacity,
                  ease: easePower
              });
      
              // Position animation
              gsapAnimation(id, { x: direction === "right" ? 300 : -300 }, {
                  delay: el.delay,
                  ...commonDuration,
                  x: 0,
                  ease: easeBack
              });
          });
      });
      //left
      //left

      },700)




  //container



}


function runAnimationOUT() {
  gsap.set("#container", { delay: 0.1, opacity: 0});
  
}