
function runAnimationIN() {
    let dur = 0.5;
  
    if (window.top.spxRenderer && window.top.spxRenderer.fps) {
      gsap.ticker.fps(window.top.spxRenderer.fps);
      console.log("spxRenderer: " + window.top.spxRenderer.fps + " FPS");
    }
  
  
    gsap.set("#TG", { delay: 0.0, opacity: 0 });
    gsap.set("#miElemento", { delay: 0.0, opacity: 0 });
    gsap.set("#line1", { delay: 0.0, opacity: 1 });
    gsap.set("#box-top", { delay: 0.0, opacity: 0 });
    gsap.set("#box-botton", { delay: 0.0, opacity: 0 });
    gsap.set("#fondoLogo1", { delay: 0.0, opacity: 1 });
    gsap.set("#fondoLogo2", { delay: 0.0, opacity: 1 });
    gsap.set("#carreras_homeclub", { delay: 0.1, opacity: 0 });
    gsap.set("#id_equipo_homeclub", { delay: 0.1, opacity: 0 });
    gsap.set("#id_equipo_visitante", { delay: 0.1, opacity: 0 });
    gsap.set("#styles", { delay: 0.1, opacity: 0 });

    gsap.set("#cont-base", { delay: 0.1, opacity: 0});
    gsap.set("#outs", { delay: 0.1, opacity: 0});
    gsap.set("#inning-strikes", { delay: 0.1, opacity: 0});
  
    gsap.fromTo(
      "#miElemento",
      { opacity: 0 },
      {
        delay: 0.2,
        duration: dur - 0.2,
        opacity: 1,
        ease: "Power2.easeOut",
      }
    );
  
    gsap.fromTo(
      "#miElemento",
      dur,
      {
        width: 0,
      },
      {
        width: function (i, target) {
          target.style.width = "390px";
          var width = target.offsetWidth;
          target.style.width = "0px";
          return width;
        },
        ease: "back.out(0.1)",
      }
    );
  
    setTimeout(() => {
      gsap.fromTo(
        "#TG",
        { opacity: 0 },
        {
          delay: 0.1,
          duration: dur - 0.2,
          opacity: 1,
          ease: "Power3.easeOut",
        }
      );
  
      gsap.fromTo(
        "#TG",
        dur,
        {
          width: 0,
         
        },
        {
          width: function (i, target) {
            target.style.width = "390px";
            var width = target.offsetWidth;
            target.style.width = "0px";
            return width;
          },
          ease: "back.out(0.5)",
        }
      );
  
     
     
    }, 100);


    setTimeout(()=>{
      gsap.fromTo(
        "#id_equipo_homeclub",
        { opacity: 0 },
        {
          delay: 0.2,
          duration: dur - 0.2,
          opacity: 1,
          ease: "Power3.easeOut",
        }
      );
  
      gsap.fromTo(
        "#id_equipo_homeclub",
        { x: 25 },
        { delay: 0.3, duration: dur - 0.2, x: 0, ease: "back.out(0.3)" }
      );
  
      gsap.fromTo(
        "#id_equipo_visitante",
        { opacity: 0 },
        {
          delay: 0.2,
          duration: dur - 0.2,
          opacity: 2,
          ease: "Power3.easeOut",
        }
      );
  
      gsap.fromTo(
        "#id_equipo_visitante",
        { x: 25 },
        { delay: 0.3, duration: dur - 0.3, x: 0, ease: "back.out(0.3)" }
      );

      gsap.fromTo(
        "#inning-strikes",
        { opacity: 0 },
        {
          delay: 0.2,
          duration: dur - 0.2,
          opacity: 2,
          ease: "Power3.easeOut",
        }
      );
      
      gsap.fromTo(
        "#inning-strikes",
        { y: 10 },
        { delay: 0.2, duration: dur - 0.2, y: 0, ease: "back.out(0.1)" }
      );
      
      gsap.fromTo(
        "#carreras_homeclub",
        { opacity: 0 },
        {
          delay: 0.2,
          duration: dur - 0.2,
          opacity: 1,
          ease: "Power3.easeOut",
        }
      );
  
      gsap.fromTo(
        "#carreras_homeclub",
        { y: -50 },
        { delay: 0.2, duration: dur - 0.2, y: 0, ease: "back.out(0.1)" }
      );
  
      gsap.fromTo(
        "#carreras_visitante",
        { opacity: 0 },
        {
          delay: 0.2,
          duration: dur - 0.2,
          opacity: 1,
          ease: "Power3.easeOut",
        }
      );
  
      gsap.fromTo(
        "#carreras_visitante",
        { y: 50 },
        { delay: 0.2, duration: dur - 0.2, y: 0, ease: "back.out(0.1)" }
      );
      gsap.fromTo(
        "#cont-base",
        { opacity: 0 },
        {
          delay: 0.2,
          duration: dur - 0.2,
          opacity: 1,
          ease: "Power3.easeOut",
        }
      );
  
      gsap.fromTo(
        "#cont-base",
        { y: 30 },
        { delay: 0.2, duration: dur - 0.2, y: 0, ease: "back.out(1.1)" }
      );
      gsap.fromTo(
        "#outs",
        { opacity: 0 },
        {
          delay: 0.2,
          duration: dur - 0.2,
          opacity: 1,
          ease: "Power3.easeOut",
        }
      );
  
      gsap.fromTo(
        "#outs",
        { y: 30 },
        { delay: 0.2, duration: dur - 0.2, y: 0, ease: "back.out(1.1)" }
      );
  
    },300)
  
    setTimeout(() => {
      gsap.fromTo(
        "#box-top",
        { opacity: 0 },
        {
          delay: 0.3,
          duration: dur - 0.2,
          opacity: 1,
          ease: "Power3.easeOut",
        }
      );
  
      gsap.fromTo(
        "#box-top",
        { y: -30 },
        { delay: 0.2, duration: dur - 0.2, y: 0, ease: "back.out(0.1)" }
      );
  
      
    }, 400);
  
    setTimeout(() => {
      gsap.fromTo(
        "#box-botton",
        { opacity: 0 },
        {
          delay: 0.3,
          duration: dur - 0.2,
          opacity: 1,
          ease: "Power2.easeOut",
        }
      );
  
      gsap.fromTo(
        "#box-botton",
        { y: -40 },
        { delay: 0.3, duration: dur - 0.2, y: 0, ease: "back.out(1.5)" }
      );
  
      const boxTop = document.querySelector('.box-top');
      boxTop.classList.add('activate')
      const boxBotton = document.querySelector('.box-botton');
      boxBotton.classList.add('activate')
    }, 600);
   
  
   
  
  const boxBotton = document.querySelector('.box-botton');
  }
  
  

  
  function runAnimationOUT() {
    let dur = 0.7;
    gsap.to("#line1", {
      delay: 0.0,
      duration: dur,
      width: 0,
      ease: "back.in(1.2)",
    });
  
    gsap.to("#line1", {
      delay: 0.0,
      duration: dur,
      height: 0,
      ease: "back.in(1.2)",
    });
  
    gsap.set("#line1", { delay: dur + 0.0, opacity: 0 });
    gsap.set("#miElemento", { delay: dur + 0.0, opacity: 0 });
    gsap.set("#TG", { delay: dur - 0.0, opacity: 0 });
  }