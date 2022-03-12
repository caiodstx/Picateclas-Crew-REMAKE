document.getElementById("happy").onclick = (a) => {
    document.getElementById("happy").style.color="green";
    document.getElementById("sad").style.color="gray";
} 
document.getElementById("sad").onclick = function() {changeState()};
function changeState() {
    document.getElementById("sad").style.color = "red";
    document.getElementById("happy").style.color="gray";
}