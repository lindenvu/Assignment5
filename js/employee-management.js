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
/*
var processEntries = function () {
    "use strict";
    var emp = $("employee_form");
    window.console.log(emp);
    $("employee_form").submit();
    window.console.log($("name").value);
    window.console.log($("title").value);
    window.console.log($("extension").value);
};*/

function delEmployee(id) {
    "use strict";
    var new_list = [], z, x = 0, y = parseInt(id, 10);
    for (z = 0; z < employee_list.length; z += 1) {
        if (z !== y) {
            new_list[x] = employee_list[z];
            x += 1;
        }
    }
    employee_list = new_list;
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
};

window.addEventListener("load", showEmployees);
var add_employee = $("add");
add_employee.addEventListener("click", function () {
    "use strict";
    window.console.log($("name").value);
    window.console.log($("title").value);
    window.console.log($("extension").value);
    employee_list[employee_list.length] = [$("name").value, $("title").value, $("extension").value];
    var i, html = "<tr><td>Showing " + employee_list.length + " Employees</td></tr>";
    html += "<tr><td>Name</td><td>Title</td><td>Extension</td><td>&nbsp;</td></tr>";
    for (i = 0; i < employee_list.length; i += 1) {
        html += "<tr><td>" + employee_list[i][0] + "</td><td>" + employee_list[i][1] + "</td><td>" + employee_list[i][2] + "</td><td><input type=\"button\" id=\"" + i + "\" value=\"delete\" onclick=\"delEmployee(" + i + ")\"></td></tr>";
    }
    $("employees").innerHTML = html;
});

