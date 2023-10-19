

function runAnimationIN() {
  let dur = 0.5;

  if (window.top.spxRenderer && window.top.spxRenderer.fps) {
    gsap.ticker.fps(window.top.spxRenderer.fps);
    console.log("spxRenderer: " + window.top.spxRenderer.fps + " FPS");

    gsap.set("#container", { delay: 0.1, opacity: 0 });
    gsap.set("#cont-left", { delay: 0.1, opacity: 0 });
    gsap.set("#cont-center", { delay: 0.1, opacity: 0 });
    gsap.set("#cont-right", { delay: 0.1, opacity: 0 });
    gsap.set(".number1", { delay: 0.1, opacity: 0 });
    gsap.set(".number2", { delay: 0.1, opacity: 0 });
    gsap.set("#CHE", { delay: 0.1, opacity: 0 });



  }

  //cont-left

  gsap.fromTo(
    "#cont-left",
    { opacity: 0 },
    {
      delay: 0.2,
      duration: dur - 0.2,
      opacity: 1,
      ease: "Power3.easeOut",
    }
  );

  gsap.fromTo(
    "#cont-left",
    { x: 100 },
    { delay: 0.2, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
  );

  gsap.fromTo(
    "#cont-left",
    { opacity: 0 },
    {
      delay: 0.2,
      duration: dur - 0.2,
      opacity: 2,
      ease: "Power3.easeOut",
    }

  );
  //cont-left


  //cont-center

  gsap.fromTo(
    "#cont-center",
    { opacity: 0 },
    {
      delay: 0.1,
      duration: dur - 0.2,
      opacity: 1,
      ease: "Power3.easeOut",
    }
  );

  gsap.fromTo(
    "#cont-center",
    { x: -100 },
    { delay: 0.1, duration: dur - 0.2, x: 0, ease: "back.out(0.5)" }
  );

  gsap.fromTo(
    "#cont-center",
    { opacity: 0 },
    {
      delay: 0.1,
      duration: dur - 0.2,
      opacity: 2,
      ease: "Power3.easeOut",
    }

  );
  //cont-center

  //cont-right

  gsap.fromTo(
    "#cont-right",
    { opacity: 0 },
    {
      delay: 1.0,
      duration: dur - 0.1,
      opacity: 1,
      ease: "Power3.easeOut",
    }
  );

  gsap.fromTo(
    "#cont-right",
    { x: -80 },
    { delay: 1.0, duration: dur - 0.1, x: 0, ease: "back.out(0.5)" }
  );

  gsap.fromTo(
    "#cont-right",
    { opacity: 0 },
    {
      delay: 1.0,
      duration: dur - 0.1,
      opacity: 1,
      ease: "Power3.easeOut",
    }

  );
  //cont-right

  //number_pizarra

  gsap.fromTo(
    ".number1",
    { opacity: 0 },
    {
      delay: 0.5,
      duration: dur - 0.2,
      opacity: 1,
      ease: "Power3.easeOut",
    }
  );

  gsap.fromTo(
    ".number1",
    { y: 30 },
    { delay: 0.5, duration: dur - 0.2, y: 0, ease: "back.out(0.5)" }
  );

  gsap.fromTo(
    ".number1",
    { opacity: 0 },
    {
      delay: 0.5,
      duration: dur - 0.2,
      opacity: 2,
      ease: "Power3.easeOut",
    }

  );

  gsap.fromTo(
    "#final",
    { opacity: 0 },
    {
      delay: 0.9,
      duration: dur - 0.2,
      opacity: 1,
      ease: "Power3.easeOut",
    }
  );

  gsap.fromTo(
    "#final",
    { y: 30 },
    { delay: 0.9, duration: dur - 0.2, y: 0, ease: "back.out(0.5)" }
  );

  gsap.fromTo(
    "#final",
    { opacity: 0 },
    {
      delay: 0.9,
      duration: dur - 0.2,
      opacity: 2,
      ease: "Power3.easeOut",
    }

  );


  gsap.fromTo(
    "#banerTop",
    { opacity: 0 },
    {
      delay: 0.9,
      duration: dur - 0.2,
      opacity: 1,
      ease: "Power3.easeOut",
    }
  );

  gsap.fromTo(
    "#banerTop",
    { y: 30 },
    { delay: 0.9, duration: dur - 0.2, y: 0, ease: "back.out(0.5)" }
  );

  gsap.fromTo(
    "#banerTop",
    { opacity: 0 },
    {
      delay: 0.9,
      duration: dur - 0.2,
      opacity: 2,
      ease: "Power3.easeOut",
    }

  );
  gsap.fromTo(
    "#baner_botton",
    { opacity: 0 },
    {
      delay: 0.9,
      duration: dur - 0.2,
      opacity: 1,
      ease: "Power3.easeOut",
    }
  );

  gsap.fromTo(
    "#baner_botton",
    { y: -30 },
    { delay: 0.9, duration: dur - 0.2, y: 0, ease: "back.out(0.5)" }
  );

  gsap.fromTo(
    "#baner_botton",
    { opacity: 0 },
    {
      delay: 0.9,
      duration: dur - 0.2,
      opacity: 2,
      ease: "Power3.easeOut",
    }

  );

  gsap.fromTo(
    ".number2",
    { opacity: 0 },
    {
      delay: 1.3,
      duration: dur - 0.2,
      opacity: 1,
      ease: "Power3.easeOut",
    }
  );

  gsap.fromTo(
    ".number2",
    { y: 20 },
    { delay: 1.3, duration: dur - 0.2, y: 0, ease: "back.out(0.5)" }
  );

  gsap.fromTo(
    ".number2",
    { opacity: 0 },
    {
      delay: 1.3,
      duration: dur - 0.2,
      opacity: 2,
      ease: "Power3.easeOut",
    }

  );
  //CHE
  gsap.fromTo(
    "#CHE",
    { opacity: 0 },
    {
      delay: 1.5,
      duration: dur - 0.2,
      opacity: 1,
      ease: "Power3.easeOut",
    }
  );

  gsap.fromTo(
    "#CHE",
    { y: 20 },
    { delay: 1.5, duration: dur - 0.2, y: 0, ease: "back.out(0.5)" }
  );

  gsap.fromTo(
    "#CHE",
    { opacity: 0 },
    {
      delay: 1.5,
      duration: dur - 0.2,
      opacity: 2,
      ease: "Power3.easeOut",
    }

  );

}



function runAnimationOUT() {
  gsap.set("#container", { delay: 0.1, opacity: 0 });



}