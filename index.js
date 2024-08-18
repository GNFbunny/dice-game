    var randomNumber1 = Math.floor(Math.random()*6+1);

    var ranImg = "./images/dice"+randomNumber1+".png";

    document.querySelectorAll("img")[0].setAttribute("src", ranImg);

    var randomNumber2 = Math.floor(Math.random()*6+1);

    var ranImg2 = "./images/dice"+randomNumber2+".png";

    document.querySelectorAll("img")[1].setAttribute("src", ranImg2);

    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 WINS!!!! 🚩";
    }else if(randomNumber2>randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 WINS!!!! 🚩";
    } else{
        document.querySelector("h1").innerHTML = "Draw, Refresh again!!";
    }


