var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
window.addEventListener( "keypress", doKeyDown, false );


var y = 10
function doKeyDown(e) {
    ctx.fillText("", 10, 50);
    var text = e.key;
    ctx.fillStyle = "white";
    ctx.font = "30px Comic Sans MS";
    y+=15;
    ctx.fillText(text, y, canvas.height/2);
    
    if(y > canvas.width){
       ctx.clearRect(0, 0, canvas.width, canvas.height);
        y = 10;
        }
    }