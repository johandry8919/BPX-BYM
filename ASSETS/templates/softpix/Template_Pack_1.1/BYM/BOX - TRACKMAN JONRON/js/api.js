
function runTemplateUpdate(){


    if(e('f3')){
        if(e('f3').innerText == 'none'){
            e('logoPatrocinio').style="opacity: 0;"
            e('cont-1').style.display = 'none'
           
           
    
        }else if (e('f3').innerText){
            e('logoPatrocinio').src = e('f3').innerText
          

        } 

     }

    runAnimationIN()

}

