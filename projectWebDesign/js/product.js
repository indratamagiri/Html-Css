$("button").click(function() {
    var keyboard = $(this).val();
    console.log(keyboard);
    var keyboards = JSON.parse(localStorage.getItem('keyboard')) || [];
    // add to it,
    keyboards.push(keyboard);
    // then put it back.
    localStorage.setItem('keyboard', JSON.stringify(keyboards));
});