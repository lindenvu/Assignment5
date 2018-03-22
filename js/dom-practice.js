/*eslint-env browser*/

//STEP 1
function writeMessage(str) {
    "use strict";
    window.alert(str + "I have been clicked!");
}

//STEP 2
var btn2 = window.document.getElementById("step2");
btn2.setAttribute("onclick", "writeMessage('Button 2: ')");

//STEP 3
var btn3 = window.document.getElementById("step3");
var writeMessageButton3 = function () { "use strict"; window.alert("Button 3: I have been clicked!"); };
btn3.addEventListener("click", writeMessageButton3);

//STEP 4
var btn4 = window.document.getElementById("step4");
btn4.addEventListener("click", function () { "use strict"; window.alert("Button 4: I have been clicked!"); });

//STEP 5

//STEP 6
var link6 = window.document.getElementById("redirect");
link6.setAttribute("href", "#");
link6.setAttribute("onclick", "return writeMessage('Link 6: ')");

//STEP 7

//STEP 8

//STEP 9

//STEP 10
