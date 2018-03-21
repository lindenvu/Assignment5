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
btn3.addEventListener("click", writeMessage('Button 3: '));

//STEP 4
var btn4 = window.document.getElementById("step4");
btn4.addEventListener("click", function () { "use strict"; window.alert("Button 4: I have been clicked!"); });

//STEP 5

//STEP 6

//STEP 7

//STEP 8

//STEP 9

//STEP 10
