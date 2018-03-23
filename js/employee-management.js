/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var employee_list = [["Zak Ruvalcaba", "Engineering", 3333],
                 ["Sally Smith", "Quality Assurance", 3424],
                 ["Fred Franklin", "Sales", 3346],
                 ["John Smith", "Marketing", 3232],
                 ["Jane Caruthers", "Finance", 3451]];



var add_employee = $("add");
add_employee.addEventListener("click", function () {
    "use strict";
    var errorMessage = "<span style=\"color:red\">This field is required.</span>", blank = "&nbsp;";
    if ($("name").value === "" || $("title").value  === "" || $("extension").value  === "") {
        if ($("name").value === "") {$("msg1").innerHTML = errorMessage; } else {$("msg1").innerHTML =  blank; }
        if ($("title").value === "") {$("msg2").innerHTML = errorMessage; } else {$("msg2").innerHTML =  blank; }
        if ($("extension").value === "") {$("msg3").innerHTML = errorMessage; } else {$("msg3").innerHTML =  blank; }
    } else {
        employee_list[employee_list.length] = [$("name").value, $("title").value, $("extension").value];
        var i, html = "<tr><td>Showing " + employee_list.length + " Employees</td></tr>";
        html += "<tr><td>Name</td><td>Title</td><td>Extension</td><td>&nbsp;</td></tr>";
        for (i = 0; i < employee_list.length; i += 1) {
            html += "<tr><td>" + employee_list[i][0] + "</td><td>" + employee_list[i][1] + "</td><td>" + employee_list[i][2] + "</td><td><input type=\"button\" id=\"" + i + "\" value=\"delete\" onclick=\"delEmployee(" + i + ")\"></td></tr>";
        }
        $("employees").innerHTML = html;
        $("msg1").innerHTML =  blank;
        $("msg2").innerHTML =  blank;
        $("msg3").innerHTML =  blank;
        $("name").value = "";
        $("title").value = "";
        $("extension").value = "";
    }
});

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