// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// function computerPlay() {
//     comp = items[Math.random()];
//     return comp;
// }

function ComputerPlay() {
    var selection = ' ';
    var choices = new Array("Rock", "Paper", "Scissors");
    var i =0;
    var n =0;
    s='';
    while(i<=0) {
        n=Math.floor(Math.random()*4)
        s+=choices[n];
        ++i;
    } return s;
}

function youPlay() {
    var option = prompt('enter your choice',"Rock");
    if(option!=null){
        return option;
    }
}

function Play( player1, player2) {
if(player1=="Rock") {
    if(player2=="Rock") {
        console.log('draw!');
    }
    else if(player2=="Paper") {
        console.log('paper beats rock!\n you win!');
    }
    else {
        console.log('rock beats scissors!\m you lose!');
    }
}
else if(player1=="Paper") {
    if(player2=="Rock") {
        console.log('you lose!');
    }
    else if(player2=="Paper") {
        console.log('draw');
    }
    else {
        console.log('scissor beats paper!\m you win!');
    }
}

else {
    if(player2=="Rock") {
        console.log('Rock beats scissor! \n you win!');
    }
    else if(player2=="Paper") {
        console.log('Scissor beats paper. \n you lose');
    }
    else {
        console.log('draw');
    }
}

}
// var items = [1,2,3]; 
// // 1- rock
// // 2- paper
// // 3- scissors
x=ComputerPlay();
y=youPlay();
Play(x,y);

