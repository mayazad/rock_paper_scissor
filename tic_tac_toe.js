let boxes = document.querySelectorAll(".box1");
let reset_Btn = document.querySelector("#reset_btn");
let newGame_Btn = document.querySelector("#new_game");
let msgWin_con = document.querySelector(".msg_con");
let msgWin = document.querySelector("#win");

let turnO = true;

const winning_patterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box1) => {
    box1.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turnO) {
            box1.innerText = "O";
            turnO = false;
        }
        else{
            box1.innerText = "X";
            turnO = true;
        }
        box1.disabled = true;
        check_winner();
    });

});

const disableBtns = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBtns = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    } 
}

const viewWinner = (winner) => {
    msgWin.innerText = `Congrats, Winner is player${winner}`;
    msgWin_con.classList.remove("hide");
    disableBtns();
}

const check_winner = () => {
    for (let pattern of winning_patterns){
        let pos1_value = boxes[pattern[0]].innerText;
        let pos2_value = boxes[pattern[1]].innerText;
        let pos3_value = boxes[pattern[2]].innerText;

        if(pos1_value != "" && pos2_value != "" && pos3_value != "") {
            if(pos1_value === pos2_value && pos2_value === pos3_value) {
                console.log("Congrats!!! You win", pos1_value);
                viewWinner(pos1_value);
            }
        }
    }
}

const reset_game = () => {
    turnO = true;
    enableBtns();
    msgWin_con.classList.add("hide");
}

newGame_Btn.addEventListener("click", reset_game);
reset_Btn.addEventListener("click", reset_game);