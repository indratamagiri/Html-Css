var i = 0;
var images = [];
var time = 3000;

images[0] = 'bahan/Black_Purple_X-1_Mechanical_Keyboard.jpg';
images[1] = 'bahan/hv-kb390l-low-profile-mechanical-keyboard.jpg';
images[2] = 'bahan/hv-kb432l-rgb-mechanical-keyboard.jpg';
images[3] = 'bahan/K63_Cosair_01.jpg';

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    }else {
        i=0;
    }
    setTimeout("changeImg()", time);
}

window.onload = changeImg;