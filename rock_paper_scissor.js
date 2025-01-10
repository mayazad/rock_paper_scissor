let user_score = 0;
let ai_score = 0;

const choices = document.querySelectorAll(".choice1");
const msg = document.querySelector("#msg");
const user = document.querySelector("#user");
const ai = document.querySelector("#ai");
const reset = document.querySelector(".reset");

reset.addEventListener("click", () => {
    user_score = 0;
    ai_score = 0;
    user.innerText = user_score;
    ai.innerText = ai_score;
    msg.innerText = "Select your choice!!";
  });

const ai_choice = () => {
    const list = ["rock", "paper", "scissor"];
    const idx = Math.floor(Math.random() * 3);
    return list[idx];
};

const view_winner = (user_win) => {
    if (user_win) {
        msg.innerText = "You win!";
        user_score += 1;
        user.innerText = user_score;
    } else {
        msg.innerText = "You lose!";
        ai_score += 1;
        ai.innerText = ai_score;
    }

    console.log(`User Score: ${user_score}, AI Score: ${ai_score}`);
};

const play_game = (user_choice) => {
    console.log("User choice is", user_choice);
    const ai_c = ai_choice();
    console.log("AI choice is", ai_c);

    if (user_choice === ai_c) {
        msg.innerText = "It's a draw!";
        console.log("draw");
    } else {
        let user_win = false;
        if (user_choice === "rock") {
            user_win = ai_c === "scissor";
        } else if (user_choice === "paper") {
            user_win = ai_c === "rock";
        } else if (user_choice === "scissor") {
            user_win = ai_c === "paper";
        }

        view_winner(user_win);
    }
};

choices.forEach((choice1) => {
    choice1.addEventListener("click", () => {
        const user_choice = choice1.getAttribute("id");
        play_game(user_choice);
    });
});