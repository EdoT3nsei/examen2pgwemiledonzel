"use strict"

import Country from "./Country.js";

class Game {

    #score = 0;

    constructor(countryData){

        this.countryData = countryData;
        this.index = 0;
        this.currentCountry = new Country(this.countryData[this.index]);
        //console.log(this.currentCountry);
        this.currentScore = this.getScore();
        this.currentFlag = this.currentCountry.displayFlag();
        //console.log(this.currentFlag);
    }
    
    getScore(){
        return this.#score;
    }

    addScore(){
        return this.#score++;
    }

    isGameFinished(){
        if(this.index >= this.countryData.length){
            console.log("on arrête");
            return true;
        }
        else{
            //console.log(this.index);
            return false;
        }
    }

    nextCountry(){
        if (this.isGameFinished()) {
            console.log("jeu terminé")
        }
        else {
            this.index ++;
            this.currentCountry = new Country(this.countryData[this.index]);
            this.currentCountry.removeFlag();
            this.currentFlag = this.currentCountry.displayFlag();
            //console.log(this.currentCountry);
        }
    }
}

export default Game;