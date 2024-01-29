






function runAnimationIN() {


  if (window.top.spxRenderer && window.top.spxRenderer.fps) {
    gsap.ticker.fps(window.top.spxRenderer.fps);
    console.log("spxRenderer: " + window.top.spxRenderer.fps + " FPS");

    //gsap.set("#cont1", { delay: 0.1, opacity: 0});
  
   
  }
  let dur = 0.5;

setTimeout(() => {
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
  
  const dur = 0.8; 
  
  
  // Animaciones para info C Y E


  animateInfo("#info0_C", 0.1, 50);
  animateInfo("#info0_E", 0.1, -50);
  
  animateInfo("#info1_C", 0.2, 50);
  animateInfo("#info1_E", 0.2, -50);

  animateInfo("#info2_C", 0.4, 50);
  animateInfo("#info2_E", 0.4, -50);

  animateInfo("#info3_C", 0.6, 50);
  animateInfo("#info3_E", 0.6, -50);

  
  animateInfo("#info4_C", 0.8, 50);
  animateInfo("#info4_E", 0.8, -50);

  animateInfo("#info5_C", 1.0, 50);
  animateInfo("#info5_E", 1.0, -50);


  animateInfo("#info6_C", 1.2, 50);
  animateInfo("#info6_E", 1.2, -50);

  animateInfo("#info7_C", 1.4, 50);
  animateInfo("#info7_E", 1.4, -50);

  animateInfo("#info8_C", 1.8, 50);
  animateInfo("#info8_E", 1.8, -50)
  

  // Animaciones para info C Y E



  
  // Animaciones para info B


  animateInfo("#info0_B", 0.2, -50);
  animateInfo("#info1_B", 0.4, -50);
  animateInfo("#info2_B", 0.6, -50);
  animateInfo("#info3_B", 0.8, -50);
  animateInfo("#info4_B", 1.0, -50);
  animateInfo("#info5_B", 1.2, -50);
  animateInfo("#info6_B", 1.4, -50);
  animateInfo("#info7_B", 1.8, -50);
  animateInfo("#info8_B", 1.9, -50);


  info_button("#info_button", 2, 50);
  animateInfo(".a", 0.2, -50);

}, 1700);


}


function runAnimationOUT() {
  gsap.set("#container", { delay: 0.1, opacity: 0});
  
}