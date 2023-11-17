
window.SETTINGS = {

    // See SPX Knowledge Base for details:
    // https://spxgc.tawk.help/article/spx-scoreboard


    // Window size and position
    'popup': {
        'left': 50,
        'top': 150,
        'width': 570,
        'height': 680,
        'playButtonText' : 'IN',
        'stopButtonText' : 'OUT',
        'overlay': ''
    },

    'playoutSettings': {
        'server': 'OVERLAY',
        'channel': 1,
        'layer': 19
    },

    // Templates 
    'templates': [
     
        {
            'name': 'MARCARDO_OFF',
            'file': 'softpix/SPX_Scoreboard_1_1_1/SPX_Scoreboard_BYM.html',
        }
    ],

    // Game clock preferences
    'clock': {
        'count': 'up',
        'hours': false
    },

    // Teams list for home and away selections
    // Note the teamnames are used as image names
    // in the Bug template variant. BLA = BLA.png
    'teams': [
        'Tigres',
        'Águilas',
        'Navegantes',
        'Leones',
        'Tiburones',
        'Cardenales',
        'Caribes',
        'Bravos',
        
    ], 

    // -/+ buttons for score values. Configure as needed.
    'allowNegativeDisplay': false,
    'scoreButtons': [
        { 'buttonText': '-1', 'scoreValueChange' : -1  },
        { 'buttonText': '+1', 'scoreValueChange' : 1   },
        { 'buttonText': '+2', 'scoreValueChange' : 2   },
        { 'buttonText': '+5', 'scoreValueChange' : 5   },
    ],


    'extras': [

        {
            'title': 'OUTS',
            'templatefunctioncall': 'updateSOUTS',
            'options': [
                {
                    'text': 'OUTS-1',
                    'value': 1
                },
                {
                    'text': 'OUTS-2',
                    'value': 2
                },
                
            ],
        },
        {
            'title': 'PRIMERA',
            'templatefunctioncall': 'periodDisplay',
            'options': [
                {
                    'text' : 'PRIMERA',
                    'value': 1
                },
               
            ],
        },
        {
            'title': 'SEGUNDA',
            'templatefunctioncall': 'footerTextDisplay',
            'options': [
                {
                    'text': 'SEGUNDA',
                    'value': 1
                },
               
            ],
        },
        
        {
            'title': 'TERCERA',
            'templatefunctioncall': 'updateSponsorLogo',
            'options': [
                {
                    'text': 'TERCERA',
                    'value': 1
                },
                
            ],
        },
       
    ]
}