/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var name, title, extension, employee_list = [["Zak Ruvalcaba", "Engineering", 3333],
                 ["Sally Smith", "Quality Assurance", 3424],
                 ["Fred Franklin", "Sales", 3346],
                 ["John Smith", "Marketing", 3232],
                 ["Jane Caruthers", "Finance", 3451]];

var processEntries = function () {
    "use strict";
};

/*
var deleteEmployee = function (id) {
    var new_list = [], i, x = 0, y = parseInt(id, 10);
    window.console.log(typeof y);
    window.console.log(y);
    for (i = 0; i < employee_list.length; i += 1) {
        window.console.log(i !== y);
        if (i !== y) {
            new_list[x] = employee_list[i];
            x += 1;
        }
    }
    employee_list = new_list;

};
*/
function delEmployee(id) {
    "use strict";
    var y = parseInt(id, 10);
    window.console.log(y);
    employee_list = employee_list.splice(y, 1);
    var i, html = "<tr><td>Showing " + employee_list.length + " Employees</td></tr>";
    html += "<tr><td>Name</td><td>Title</td><td>Extension</td><td>&nbsp;</td></tr>";
    for (i = 0; i < employee_list.length; i += 1) {
        html += "<tr><td>" + employee_list[i][0] + "</td><td>" + employee_list[i][1] + "</td><td>" + employee_list[i][2] + "</td><td><input type=\"button\" id=\"" + i + "\" value=\"delete\" onclick=\"delEmployee(" + i + ")\"></td></tr>";
    }
    $("employees").innerHTML = html;
}

var showEmployees = function () {
    "use strict";
    var i, html = "<tr><td>Showing " + employee_list.length + " Employees</td></tr>";
    html += "<tr><td>Name</td><td>Title</td><td>Extension</td><td>&nbsp;</td></tr>";
    for (i = 0; i < employee_list.length; i += 1) {
        html += "<tr><td>" + employee_list[i][0] + "</td><td>" + employee_list[i][1] + "</td><td>" + employee_list[i][2] + "</td><td><input type=\"button\" id=\"" + i + "\" value=\"delete\" onclick=\"delEmployee(" + i + ")\"></td></tr>";
    }
    $("employees").innerHTML = html;
    /*
    var x;
    for (x = 0; x < employee_list.length; x += 1) {
        $(x).addEventListener("click", function () {window.console.log(x)});
    }*/
};

window.addEventListener("load", showEmployees);

var test = [[1,1],[2,2],[3,3]];
var n = parseInt(window.prompt(), 10);
test = test.splice(n,1);
var m;
for (m = 0 ; m < test.length; m += 1) {
    window.console.log(test[m][0]);
    window.console.log(test[m][1]);
}