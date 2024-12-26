function ludo() {

    var box = document.getElementById('box');
    var diceNum = (Math.random() * 6) + 1;
    var diceValue = Math.floor(diceNum);
    box.innerHTML = diceValue;
    
}