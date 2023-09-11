// script for index page//
// let username=[];
//var username = document.getElementById("username");

// var url_string = window.location;
// var url = new URL(url_string);
// var name = url.searchParams.get("name");
// var btngroup = url.searchParams.get("btngroup");

// document.getElementsByTagName("h3").innerHTML = btngroup;
// document.getElementById('selected-catogery-by-user').innerHTML = btngroup;

function smbt() {
    
    var user = document.getElementsByTagName("name").value;
    var options = document.querySelector('input[name="btngroup"]:checked').value;
    localStorage.setItem('Name', user);
    localStorage.setItem('Options', options);
    prompt(localStorage.getItem('Options'));
    

}