var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
var table = document.getElementsByTagName("tbody")[0];
var trows = document.getElementsByClassName("data-row");
// tr class = "data-row" >
//     <
//     td class = "column1" > 28 < /td> <
//     td class = "column2" > Larisa < /td> <
//     td class = "column3" > Llaneza < /td> <
//     td class = "column4" > SCallison @non.org < /td> <
//     td class = "column5" > (763) 248 - 9034 < /td> <
//     /tr>
// var xhttp = new XMLHttpRequest();
// xhttp.open("GET", url, true);
// xhttp.send();
// xhttp.onreadystatechange = function() {
//     if (xhttp.readyState == 4) {
//         var resp = JSON.parse(xhttp.responseText);
//         console.log(resp);
//         for (var i = 0; i < resp.length; i++) {
//             createrow(resp[i].id, resp[i].firstName, resp[i].lastName, resp[i].email, resp[i].phone);
//         }



//     }
// }
for (var i = 0; i < trows.length; i++) {
    console.log(trows);
    trows[i].addEventListener("click", function(e) {
        console.log(e.target);
        e.target.classList.add("active");
    })
}

function createrow(tid, fname, lname, email, phone) {
    var row = document.createElement("tr");
    row.classList.add("data-row");
    var col1 = document.createElement("td");
    col1.classList.add("column1");
    col1.innerHTML = tid;
    row.appendChild(col1);
    var col2 = document.createElement("td");
    col2.classList.add("column2");
    col2.innerHTML = fname;
    row.appendChild(col2);
    var col3 = document.createElement("td");
    col3.classList.add("column3");
    col3.innerHTML = lname;
    row.appendChild(col3);
    var col4 = document.createElement("td");
    col4.classList.add("column4");
    col4.innerHTML = email;
    row.appendChild(col4);
    var col5 = document.createElement("td");
    col5.classList.add("column5");
    col5.innerHTML = phone;
    row.appendChild(col5);
    table.appendChild(row);


}