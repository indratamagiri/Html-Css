var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

function keyboard(){
context.beginPath();
var y1 = 25;
for (var index = 0; index < 15; index++) {
    
    context.fillStyle = '#FFFFFF'; 
    context.fillRect(y1,72,32,25);
    context.fill();
    y1 += 40;
}
y1 = 25
for (var index = 0; index < 13; index++) {
    
    context.fillStyle = '#FFFFFF'; 
    context.fillRect(y1,112,32,32);
    context.fill();
    y1 += 40;
}

context.fillStyle = '#FFFFFF'; 
context.fillRect(y1,112,75,32);
context.fill();

y1 = 25;
context.fillStyle = '#FFFFFF'; 
context.fillRect(y1,152,50,32);
context.fill();
y1 = 45;

for (var index = 0; index < 13; index++) {
    
    context.fillStyle = '#FFFFFF'; 
    context.fillRect(y1,152,32,32);
    context.fill();
    y1 += 40
}

context.fillStyle = '#FFFFFF'; 
context.fillRect(y1,152,55,32);
context.fill();


y1 = 25;
context.fillStyle = '#FFFFFF'; 
context.fillRect(y1,192,55,32);
context.fill();
y1 = 55;

for (var index = 0; index < 12; index++) {
    
    context.fillStyle = '#FFFFFF'; 
    context.fillRect(y1,192,32,32);
    context.fill();
    y1 += 40
}

context.fillStyle = '#FFFFFF'; 
context.fillRect(y1,192,85,32);
context.fill();


y1 = 25;
context.fillStyle = '#FFFFFF'; 
context.fillRect(y1,232,80,32);
context.fill();
y1 = 75;

for (var index = 0; index < 11; index++) {
    
    context.fillStyle = '#FFFFFF'; 
    context.fillRect(y1,232,32,32);
    context.fill();
    y1 += 40
}
context.fillStyle = '#FFFFFF'; 
context.fillRect(y1,232,105,32);
context.fill();

y1 = 25

for (var index = 0; index < 4; index++) {
    
    context.fillStyle = '#FFFFFF'; 
    context.fillRect(y1,272,32,32);
    context.fill();
    y1 += 40
}

    context.fillStyle = '#FFFFFF'; 
    context.fillRect(y1,272,225,32);
    context.fill();
    y1 += 235

    for (var index = 0; index < 3; index++) {
        context.fillStyle = '#FFFFFF'; 
        context.fillRect(y1,272,32,32);
        context.fill();
        y1 += 40
    }

    context.fillStyle = '#FFFFFF'; 
    context.fillRect(y1,272,32,15);
    context.fill();

    context.fillStyle = '#FFFFFF'; 
    context.fillRect(y1,290,32,15);
    context.fill();

    y1 +=40;
    context.fillStyle = '#FFFFFF'; 
    context.fillRect(y1,272,32,32);
    context.fill();
}
    window.addEventListener( "keypress", doKeyDown, false )
    keyboard();

    function doKeyDown(e) {
        
        var y2 = 0
        var l = 32;
        var x = 112;
        var key = e.keyCode
        //keycode tidak bisa digunkan di firefox
        //line 1
        console.log(key);
        if(key == 96){
            y2 = 1
        } 
        for (var index = 1; index < 10; index++) {  
            if(key == index + 48){
                y2 += index+1
            }
        } 
        if(key == 48){
            y2 = 11
        } 
        else if(key == 45){
            y2 = 12
        } 
        else if(key == 61){
            y2 = 13
        } 
        else if(key == 8){
            y2 = 14;
            l = 75;
        }
        if(y2 != 0){
        y1 = 25
        for (var index = 1; index < y2; index++) {  
           y1 += 40;
        } 
                context.fillStyle = 'black'; 
                context.fillRect(y1,112,l,32);
                context.fill();
                setInterval(function() {
                   keyboard();
                }, 1000);
            y2 = 0;
        }
        
        //line 2
        var line2 = 0;
         if(key == 9){
            context.fillStyle = 'black'; 
            context.fillRect(25,152,50,32);
            context.fill();
            setInterval(function() {
               keyboard();
            }, 1000);
        }else if(key == 113){
            line2 = 1
        }
        else if(key == 113){
            line2 = 1
        }else if(key == 119){
            line2 = 2
        }else if(key == 101){
            line2 = 3
        }else if(key == 114){
            line2 = 4
        }else if(key == 116){
            line2 = 5
        }else if(key == 121){
            line2 = 6
        }else if(key == 117){
            line2 = 7
        }else if(key == 105){
            line2 = 8
        }else if(key == 111){
            line2 = 9
        }else if(key == 112){
            line2 = 10
        }else if(key == 91){
            line2 = 11
        }else if(key == 93){
            line2 = 12
        }else if(key == 92){
            line2 = 13
            l = 55;
        }

       if(line2 != 0){  
            y1 = line2 * 40 + 45;
                 context.fillStyle = 'black'; 
                 context.fillRect(y1,152,l,32);
                 context.fill();
                 setInterval(function() {
                    keyboard();
                 }, 1000);
        }


        //line 3 
        var line3 = 0;
        if (key == 20){
            context.fillStyle = '#FFFFFF'; 
            context.fillRect(25,192,55,32);
            context.fill();
        }else if(key == 97){
            line3 = 1
        }else if(key == 115){
            line3 = 2
        }else if(key == 100){
            line3 = 3
        }else if(key == 102){
            line3 = 4
        }else if(key == 103){
            line3 = 5
        }else if(key == 104){
            line3 = 6
        }else if(key == 106){
            line3 = 7
        }else if(key == 107){
            line3 = 8
        }else if(key == 108){
            line3 = 9
        }else if(key == 59){
            line3 = 10
        }else if(key == 39){
            line3 = 11
        }else if(key == 13){
            line3 = 12
            l = 85;
        }

        if(line3 != 0){  
            y1 = line3 * 40 + 55;
                 context.fillStyle = 'black'; 
                 context.fillRect(y1,192,l,32);
                 context.fill();
                 setInterval(function() {
                    keyboard();
                 }, 1000);
        }

        //line 4
        var line4 = 0;
        if (key == 16){
            context.fillStyle = '#FFFFFF'; 
            context.fillRect(25,232,80,32);
            context.fill();
        }else if(key == 122){
            line4 = 1
        }else if(key == 120){
            line4 = 2
        }else if(key == 99){
            line4 = 3
        }else if(key == 118){
            line4 = 4
        }else if(key == 98){
            line4 = 5
        }else if(key == 110){
            line4 = 6
        }else if(key == 109){
            line4 = 7
        }else if(key == 44){
            line4 = 8
        }else if(key == 46){
            line4 = 9
        }else if(key == 47){
            line4 = 10
        }

        if(line4 != 0){  
            y1 = line4 * 40 + 75;
                 context.fillStyle = 'black'; 
                 context.fillRect(y1,232,l,32);
                 context.fill();
                 setInterval(function() {
                    keyboard();
                 }, 1000);
        }
    }