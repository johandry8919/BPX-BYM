
import * as UI from "../lib/ui.js";

function PluginInstance() {
    var pluginRootFolder = '/plugins/SPX_Scoreboard_1_1_1/' // within ASSETS (start and end with slash)
    var plug = this;
    this.render = () => {
        console.log('PLUGIN SPX Scoreboard appending to dom...');
        let options = {
            description: 'Scoreboard Extension 1.1.1',
            caption: 'SCOREBOARD',
            color: 'blue'
        }
        this.btn = UI.button(options);    
        var app = document.getElementById("controllerPluginButtons"); 
        app.appendChild(this.btn);  
        this.btn.querySelector('#btn').addEventListener ("click", function() {
            plug.launchUI(this);
        });
    }

    this.launchUI = (referrer) => {
        var w = 550;
        var h = 550;
        var left = (screen.width/2)-(w/2);
        var top = (screen.height/2)-(h/2);
        var OPT = '_blank,toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left;
        window.open(pluginRootFolder + 'index.html', 'SPXGCWIN', OPT);
    };
}

var plugin = plugin || new PluginInstance;
plugin.render();
