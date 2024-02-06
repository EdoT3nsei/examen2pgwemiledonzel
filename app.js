"use strict"

//import { shuffle } from "./node_modules/lodash";
import Country from "./Country.js";
import Game from "./Game.js";

const form = document.querySelector("form");
const input = document.querySelector("input");
const score = document.querySelector("aside#score h1");
const highscoreContainer = document.querySelector("aside#highscore h1");

async function fetchData(){
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        createNewGame(data);
    }
    catch(error){
        console.error(error);
    }
}

if (!localStorage.getItem("highscore")) {
    localStorage.setItem("highscore", 0);
}
highscoreContainer.textContent=`Highscore : ${localStorage.getItem("highscore")}`;

function createNewGame(data){
    data.forEach(element => {
        const country = new Country(element);
    });
    const game = new Game(data);

    form.addEventListener("submit", function(e){
        e.preventDefault();
        const reponse = game.isGameFinished();
        if (reponse == true) {
            alert(`Game Over, your score is : ${game.getScore()}`);
        }
        else{
            if(game.currentCountry.checkAnswer(input.value) == true){
                console.log("bonne réponse");
                game.addScore();
                score.textContent=`Score : ${game.getScore()}`;
                    if (game.getScore() > localStorage.getItem("highscore")) {
                        let highscore = parseInt(localStorage.getItem("highscore"));
                        highscore++;
                        localStorage.setItem("highscore", highscore);
                    }
                highscoreContainer.textContent=`Highscore : ${localStorage.getItem("highscore")}`;
            }
            else {
               console.log("mauvaise réponse");
            }
        }
        game.nextCountry();
        form.reset();
    })
}

fetchData();


