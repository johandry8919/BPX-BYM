/* 
----------------------------------------------------------------
(c) Copyright 2021- spx.graphics
----------------------------------------------------------------
SEE LICENSE_PREMIUM.TXT FOR TERMS AND CONDITIONS.
----------------------------------------------------------------
*/

function process(data) {
  data = JSON.parse(data) // <-- This works only with JSON data templates (not XML).
  for (var fField in data) {
    // console.log('fField', fField);
    var domElement = document.getElementById(fField);
    if (domElement) {
      let value = data[fField].text || data[fField] || '';
      if ( value == "null" || value == "undefined" ) value = "";
      domElement.innerHTML = value;
    }
  }
}

function play() {
  runAnimationIN()
}


function stop() {
  runAnimationOUT()
}

function update(data) {
  process(data)
}

function next(data) {
  runAnimationNEXT()
}

let _u = {
  getNode: function(s) {
    return document.querySelector(s);
  },
  getNodes: function(s) {
    return document.querySelectorAll(s);
  }
};

function htmlDecode(txt) {
  var doc = new DOMParser().parseFromString(txt, "text/html");
  return doc.documentElement.textContent;
}

function e(elementID) {
  return document.getElementById(elementID);
}
