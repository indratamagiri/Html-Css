$(document).ready(function(){
    var message="";
    let orderNumber = $('#orderNumber');
    let listProduct = $('#list-product');

    let random = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let text = ""
    let number ="" 
    for (var i = 0; i < 3; i++){
        text += random.charAt(Math.floor(Math.random() * random.length));
        number += Math.floor(Math.random() * 9);
    }

    orderNumber.text("Order Number: "+text + number);
    var keyboards = JSON.parse(localStorage.getItem('keyboard')) || [];
    for (let i = 0; i < keyboards.length; i++) {
        const keyboard = keyboards[i];
        console.log(keyboard)
        listProduct.append( "<li>"+ keyboard +"</li>" );
    }

    $('#validate').submit(function() {
        let name = $('#name').val();
        let email = $('#email').val();
        let phone = $('#numberPhone').val();
        let address = $('#address').val();
        let qty = $('#qty').val();
        let sca = $('#scales');
        let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(keyboards.length < 4){
            message = "Contains minimum 4 choices"
        }
        else if(name == ""){
            message = "Name cannot be empty";
        }
        else if (!name.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/)) 
        {
            message = "Name must only contain alphabets";
        }
        else if(!regex.test(email)){
            message = "You must input valid email";
        }else if (phone == ""){
            message = "Number Phone Cant empty";
        }else if (!phone.match(/^08[0-9].*$/)){
            message = "Number Phone Incorrect";
        }else if (address == ""){
            message = "Address cannt empty";
        }else if (!address.includes("street")){
            message = "Address must contain street";
        }else if(!qty.match(/^\d+$/)){
            message = "Quantity must be number";
        }else if(qty <= 1 && qty <= 10){
            message = "Quantity must be between 1 and 10"
        }else if(!sca.checked){
            message = "Agreement must check";
        }

        if(!message == ""){
            alert(message);
        }
    
    })
});
