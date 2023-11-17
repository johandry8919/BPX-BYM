/*
    Scoreboard plugin for SPX
    -------------------------

    This will need to be installed along with other required
    files to ASSETS/plugins/spxScoreboard.

    PLEASE SEE PREMIUM_LICENSE.TXT for term of use.
    ▸ spx.graphics | Copyright 2021- Softpix Ltd.

    DO NOT MODIFY THIS FILE.

*/



var from="spx.graphics";var docs="https://spxgc.tawk.help/article/spx-scoreboard";
var TICKTOCK;
const LS_STATE="SPX_Scoreboard_running";
const LS_HTEAM="SPX_Scoreboard_homeTeam";
const LS_HSCOR="SPX_Scoreboard_homeScore";
const LS_ATEAM="SPX_Scoreboard_awayTeam";
const LS_BOLA="SPX_Scoreboard_bolaTeam";
const LS_STRIKES="SPX_Scoreboard_STRIKESTeam";
const LS_ASCOR="SPX_Scoreboard_awayScore";
const LS_CLOCK="SPX_Scoreboard_totalSeconds";
const LS_PARTE="SPX_Scoreboard_parte";
const LS_PRIMERA="SPX_Scoreboard_primera";



// Función para actualizar el valor de los elementos BOLA y STRINGG
function updateScoreInput(elementId, newValue) {
    let inputElement = e(elementId);
    if (inputElement) {
        inputElement.value = newValue;
    }
}

// Función para manejar la puntuación de BOLA y STRINGG
function scoreBolaStraing(scoreType, change = 0) {
    let currentVal = parseInt(e(scoreType).value) || 0;
    let newVal = currentVal + change;

    // Asegurarse de que el valor no sea negativo si no se permite
    if (!SETTINGS.allowNegativeDisplay) {
        newVal = Math.max(0, newVal);
    }

    // Actualizar el valor del input correspondiente
    updateScoreInput(scoreType, newVal);

    // Enviar la actualización al servidor si es necesario
    sendUpdate(scoreType, newVal);
}



function ajaxpost(urlPath,data,prepopulated="false"){
    if(prepopulated=="true"){
        data.prepopulated="true"
    }else{
        data.prepopulated="false"
    }
    axios.post(urlPath,data).then(function(response){})["catch"](function(error){
        if(error.response){
            console.log(error.response.data);console.log(error.response.status);console.log(error.response.headers)
        }else if(error.request){console.log(error.request)
        }else{
            console.log("Error",error.message)}console.log(error.config)})}
            function e(id){
                return document.getElementById(id)
            }function encodeStr(rawStr){
                if(!rawStr)return"";
                let temp=rawStr;temp=temp.replace(/\//g,"&sol;");
                temp=temp.replace(/&/g,"&amp;");
                temp=temp.replace(/>/g,"&gt;");
                temp=temp.replace(/</g,"&lt;");
                temp=temp.replace(/"/g,"&quot;");
                temp=temp.replace(/'/g,"&#039;");
                temp=temp.replace(/\\/g,"&#92;");
                return temp
            }
            function defaultData(){
                let data={};
                data.relpath=templateChooser.value;
                data.playserver=SETTINGS.playoutSettings.server;
                data.playchannel=SETTINGS.playoutSettings.channel;
                data.playlayer=SETTINGS.playoutSettings.layer;
                data.webplayout=SETTINGS.playoutSettings.layer;
                data.relpathCCG=data.relpath.split(".htm")[0];
                return data
            }
    function buttonFactory(data,team){
                let buttonClass="bg_green";
                if(data.scoreValueChange<0){
                    buttonClass="bg_red"
                }
    var html=`
    <spxcol class="flexauto" >
        <button
            onclick = "score('${team}Score',${data.scoreValueChange})"
            class="btn ${buttonClass} ripple" id="${team}Dec" 
            style="padding:0 1em;
            width: 100%;
            font-family: 'UI-Black';
            align-self: center;
            font-size: 0.8em;"> ${data.buttonText} </button>
    </spxcol>`;

    return html
}

function extraFactory(data){
    let drops;
    data.options.forEach((item,index)=>{
        drops=drops+`<option value="${item.value}">${item.text}</option>`});
        var html=`
    <spxrow data-extra data-function="${data.templatefunctioncall}">
        <spxcol style="flex: 1;" class="aleft">
            ${data.title}
        </spxcol>
        <spxcol style="flex: 3;">
            <select data-extraoptions id="list" class="gcinput select larger" style="width: 100%; margin:0;">
                <option value=''>-</option>
                ${drops}
            </select>
        </spxcol>
        <spxcol style="flex: 1;" class="aright">
            <button
            onclick=extraInvoke(this);
            class="btn bg_blue ripple" id="homeInc" 
            style="padding:0 1em; width:80%;
            font-size: 1em;"> SET </button>
        </spxcol>
    </spxrow>`;
    return html
}
    
    function extraInvoke(btnReference){
        var fName=btnReference.closest("spxrow").getAttribute("data-function");
        var fParm=btnReference.closest("spxrow").querySelector("#list").value;let data=defaultData();
        data.fields=[];
        data.command="invoke";
        data.invoke=fName+"('"+fParm+"')";
        ajaxpost("/gc/playout",data,"true")}
        
        function getCurrentSeconds(){
            let curHrs,curMin,curSec;
            curMin=Math.max(0,parseInt(clockValMins.value))||0;
          
            return curHrs*3600+curMin*60+curSec
        }



            function initPlugin(){

                if (SETTINGS.bolaButton) {
                    e("bolaButtons").insertAdjacentHTML("beforeend", bolaButtonFactory(SETTINGS.bolaButton));
                }
                
                if (SETTINGS.straingButton) {
                    e("straingButtons").insertAdjacentHTML("beforeend", straingButtonFactory(SETTINGS.straingButton));
                }


                if(SETTINGS.popup.overlay){
                    overlay.innerText=SETTINGS.popup.overlay;
                    overlay.style.display="inline-block"
                }else{
                    overlay.style.display="none"
                }
                window.moveTo(SETTINGS.popup.left,SETTINGS.popup.top);
                window.resizeTo(SETTINGS.popup.width,SETTINGS.popup.height);
                e("playButton").innerText=SETTINGS.popup.playButtonText;
                e("stopButton").innerText=SETTINGS.popup.stopButtonText;
                window.resizeTo(SETTINGS.popup.width,SETTINGS.popup.height);
                templateChooser.innerHTML="";

                SETTINGS.templates.forEach((item,index)=>{
                    var templateItem=document.createElement("option");
                    templateItem.text=item.name;
                    templateItem.value=item.file;
                    templateChooser.add(templateItem)
                });


                    homeDropDown.innerHTML="";
                    awayDropDown.innerHTML="";


                    SETTINGS.teams.forEach((item,index)=>{
                        var homeOption=document.createElement("option");
                        var awayOption=document.createElement("option");
                        homeOption.text=item;awayOption.text=item;
                        homeDropDown.add(homeOption);
                        awayDropDown.add(awayOption)
                    
                    });
                        
                        SETTINGS.scoreButtons.forEach((item,index)=>{
                            e("homeScoreButtons").insertAdjacentHTML("beforeend",buttonFactory(item,"home"));
                            e("awayScoreButtons").insertAdjacentHTML("beforeend",buttonFactory(item,"away"))
                           
                        
                        });
                            if(SETTINGS.extras){
                                let extraSection=`
                                <section id="extras"
                                    class="roundedLight"
                                    style="flex-direction: column;
                                    margin-bottom:0;">
                                </section>`;
                                e("extrasDiv").insertAdjacentHTML("beforeend",extraSection);

                            SETTINGS.extras.forEach((item,index)=>{
                                e("extras").insertAdjacentHTML("beforeend",extraFactory(item))})}
                                homeDropDown.value=localStorage.getItem(LS_HTEAM)||SETTINGS.teams[0];
                                homeScoreVal.value=localStorage.getItem(LS_HSCOR)||0;
                                awayDropDown.value=localStorage.getItem(LS_ATEAM)||SETTINGS.teams[0];
                                awayScoreVal.value=localStorage.getItem(LS_ASCOR)||0;
                                BOLAScoreScoreVal.value=localStorage.getItem(LS_ASCOR)||0;
                                STRIKESScoreVal.value=localStorage.getItem(LS_ASCOR)||0;
                             
                                // PRIMERAcoreScoreVal.value=localStorage.getItem(LS_PRIMERA)||0;
                                let PreviousSecsLS=localStorage.getItem(LS_CLOCK)||0;
                                updateClock(true,PreviousSecsLS);
                                if(SETTINGS.clock.hours===true){
                                   
                                }else{
                                   }
                                    if(localStorage.getItem(LS_STATE)=="false"){
                                        stopClock()
                                    }else{
                                        startClock()}
    }
                    function makeClockString(totalSeconds){

                       
                        let SecNro,hr,mi,se;SecNro=Number(Math.max(0,totalSeconds));
                        hr=Math.floor(SecNro/3600);
                        mi=Math.floor(SecNro%3600/60);
                        se=Math.floor(SecNro%3600%60);
                        let hrmi=hr*60+mi;
                        if(SETTINGS.clock.hours===true){
                           
                           
                            return zeroPad(String(hr))+":"+zeroPad(String(mi))+":"+zeroPad(String(se))}else{clockValMins.value=hrmi;
                                return zeroPad(String(hrmi))+":"+zeroPad(String(se))}}
                                function persistValues(){

                                 
                                    localStorage.setItem(LS_HTEAM,homeDropDown.value);
                                    
                                    localStorage.setItem(LS_HSCOR,homeScoreVal.value);
                                    localStorage.setItem(LS_ATEAM,awayDropDown.value);
                                    localStorage.setItem(LS_ASCOR,awayScoreVal.value);
                                    localStorage.setItem(LS_BOLA,BOLAScoreScoreVal.value);
                                    localStorage.setItem(LS_STRIKES,STRIKESScoreVal.value);
                                    localStorage.setItem(LS_PARTE,PARTEcoreScoreVal.value);
                                    
                                    localStorage.setItem(LS_CLOCK,getCurrentSeconds())}
                                    function playClock(){
                                    let data={};
                                    
                                    data.relpath=templateChooser.value;
                                    data.playserver=SETTINGS.playoutSettings.server;
                                    data.playchannel=SETTINGS.playoutSettings.channel;
                                    data.playlayer=SETTINGS.playoutSettings.layer;
                                    data.webplayout=SETTINGS.playoutSettings.layer;
                                    data.relpathCCG=data.relpath.split(".htm")[0];
                                    return data
                                }
                                    function playItem(){
                                        let data=defaultData();

                                       
                                        data.fields=[
                                            {
                                                field:"homeTeam",
                                                value:homeDropDown.value
                                            },
                                            {
                                                field:"homeScore",
                                                value:homeScoreVal.value
                                            },
                                            {
                                            field:"awayTeam",
                                            value:awayDropDown.value
                                        },
                                        {
                                            field:"awayScore",
                                            value:awayScoreVal.value
                                        },
                                        {
                                            field:"BOLAScore",
                                            value:BOLAScoreScoreVal.value
                                        },
                                        {
                                            field:"STRIKESScore",
                                            value:STRIKESScoreVal.value
                                        },
                                        {
                                            field:"INNING",
                                            value:INNINGcoreScoreVal.value
                                        },
                                        {
                                            field:"PARTE",
                                            value:PARTEcoreScoreVal.value
                                        },
                                       
                                        
                                        {
                                            field:"clock",
                                            value:makeClockString(getCurrentSeconds())
                                        }];

                                        data.command="play";
                                        ajaxpost("/gc/playout",data,"true");
                                        setTimeout(()=>{updateClock(true)},600);
                                        let extraDropdowns=document.querySelectorAll("[data-extraoptions]");
                                        extraDropdowns.forEach((item,index)=>{item.value=""})}
                                        function score(team,change=""){
                                            let curVal,newVal;
                                            curVal=e(team).value;
                                            if(change){
                                                newVal=parseInt(curVal)+parseInt(change)
                                            }else{
                                                newVal=curVal
                                            }if(!SETTINGS.allowNegativeDisplay){
                                                newVal=Math.max(0,newVal)}e(team).value=newVal;
                                                sendUpdate(team)
                                            }
                                            function sendUpdate(type,value=""){


                                               
                                                let tgt,str;
                                                switch(type){

                                                case"changeHomeTeam":tgt="homeTeam";
                                                str=homeDropDown.value;
                                                break;

                                                case"changeAwayTeam":tgt="awayTeam";
                                                str=awayDropDown.value;
                                                break;

                                                case"homeScore":tgt="homeScore";
                                                str=homeScoreVal.value;
                                                break;
                                                case"awayScore":tgt="awayScore";
                                                str=awayScoreVal.value;
                                                break;
                                                case"BOLAScore":tgt="BOLAScore";
                                                str=BOLAScoreScoreVal.value;
                                                break;
                                                case"STRIKESScore":tgt="STRIKESScore";
                                                str=STRIKESScoreVal.value;
                                                break;
                                                case"INNING":tgt="INNING";
                                                str=INNINGcoreScoreVal.value;
                                                break;
                                                case"PARTE":tgt="PARTE";
                                                str=PARTEcoreScoreVal.value;
                                                break;
                                               
                                               

                                                
                                                
                                                case"clock":tgt="clock";
                                                str=value;
                                                break;
                                                default:console.log("Unknown update request ["+type+"]");
                                                return;
                                                break
                                            }
                                            let data=defaultData();
                                            data.fields=[];
                                            data.command="invoke";
                                            data.invoke="updateTemplateField('"+tgt+"','"+str+"')";
                                            ajaxpost("/gc/playout",data,"true");
                                            persistValues()}
                                            function stopItem(){
                                                let data=defaultData();
                                                data.fields=[];
                                                data.command="stop";
                                                ajaxpost("/gc/playout",data,"true")
                                            }


                                            function toggleTimer(){
                                                if(localStorage.getItem(LS_STATE)=="false"){
                                                    localStorage.setItem(LS_STATE,true);
                                                    startClock()}else{
                                                        localStorage.setItem(LS_STATE,false);
                                                        stopClock()}}
                                                        function startClock(){
                                                            clockToggBtn.classList.remove("bg_green");
                                                            clockToggBtn.classList.add("bg_red");
                                                            clockToggBtn.innerText="STOP";
                                                            
                                                            clockValMins.disabled=true;
                                                         
                                                           
                                                            TICKTOCK=setInterval(updateClock,1e3);
                                                          }
                                                            function stopClock(){
                                                                clockToggBtn.classList.remove("bg_red");
                                                                clockToggBtn.classList.add("bg_green");
                                                                clockToggBtn.innerText="START";
                                                               
                                                                clockValMins.disabled=false;
                                                              
                                                               
                                                                clearInterval(TICKTOCK);
                                                                }
                                                                function updateClock(forced=false,secsFromLS=""){
                                                                    let curHrs,curMin,curSec,newSec,newMin,newHrs,CurTot,NewTot,timeDisplay;
                                                                    if(localStorage.getItem(LS_STATE)=="true"||forced){
                                                                        if(secsFromLS){NewTot=secsFromLS}
                                                                        else{CurTot=getCurrentSeconds();
                                                                            if(forced){NewTot=CurTot}
                                                                            else{NewTot=SETTINGS.clock.count==="up"?CurTot+1:CurTot-1}}
                                                                            timeDisplay=makeClockString(NewTot);
                                                                            sendUpdate("clock",timeDisplay)
                                                                        
                                                                        }}



                                                                            function zeroPad(nro){return nro.padStart(2,"0")}
                                                                            function hideOverlay(){
                                                                                overlay.style.display="none"}
                                                                                const homeDropDown=e("homeTeams");
                                                                                const homeScoreInc=e("homeInc");
                                                                                const homeScoreDec=e("homeDec");
                                                                                const homeScoreVal=e("homeScore");
                                                                                const awayDropDown=e("awayTeams");
                                                                                const awayScoreInc=e("awayInc");
                                                                                const awayScoreDec=e("awayDec");
                                                                                const awayScoreVal=e("awayScore");
                                                                                const BOLAScoreScoreVal=e("BOLAScore");
                                                                                const INNINGcoreScoreVal=e("INNING");
                                                                                const PARTEcoreScoreVal=e("PARTE");
                                                                              
                                                                               
                                                                                const STRIKESScoreVal=e("STRIKESScore");
                                                                               
                                                                                const clockValMins=e("minutes");
                                                                               
                                                                                const clockToggBtn=e("clockToggle");
                                                                               
                                                                                const templateChooser=e("templateList");
                                                                                const overlay=e("overlay");
initPlugin();

