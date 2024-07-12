var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var span = document.getElementById('cross');

btn.onclick = function () {
    modal.style.animation = "slideIn 0.5s forwards";
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.animation = "slideOut 0.5s forwards";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.animation = "slideOut 0.5s forwards";
    }
}
