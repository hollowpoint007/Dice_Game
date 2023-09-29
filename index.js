var p1;
var p2;

function diceRoll(){
    p1 = Math.floor(Math.random()*6 + 1);
    p2 = Math.floor(Math.random()*6 + 1);
}

if (performance.navigation.type == performance.navigation.TYPE_RELOAD){
    diceRoll();
    if(p1 > p2){
        document.querySelector("h1").textContent = "player 1 wins";
    }
    else if(p2 > p1){
        document.querySelector("h1").textContent = "player 2 wins";
    }
    else{
        document.querySelector("h1").textContent = "Its a draw"
    }

    document.getElementsByTagName("img")[0].setAttribute("src", "images/dice"+p1+".png");
    document.getElementsByTagName("img")[1].setAttribute("src", "images/dice"+p2+".png");
}