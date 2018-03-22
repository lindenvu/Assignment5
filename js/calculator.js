/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};


var textresult = $("result");

var calculate = function () {
    "use strict";
    textresult.value = window.eval(textresult.value);
};

function enter(val) {
    "use strict";
    var button = $(val);
    button.addEventListener("click", function () { textresult.value = textresult.value + button.value; });
}

function init() {
    "use strict";
    var i, buttons = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "zero", "period", "multiply", "divide", "subtract", "add"], buttonequal = $("equal");
    for (i = 0; i < buttons.length; i += 1) {
        enter(buttons[i]);
    }
    buttonequal.addEventListener("click", calculate);
}

//HANDLE PAGE LOAD
window.addEventListener("load", init());
