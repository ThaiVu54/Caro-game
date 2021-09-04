var co = true;
var dem = 0;

function ham(btn) {
    var node = document.getElementsByTagName("button")[btn];
    node.innerHTML = co ? "X" : "O";
    node.style.backgroundColor = co ? "red" : "yellow";
    node.setAttribute("disables", "true");
    co = !co;
    dem += 1;
    if (dem == 8) {
        alert("game over")
        location.reload();
    }
}