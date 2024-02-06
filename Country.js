"use strict"

const container = document.querySelector('#flag');

class Country {

    constructor(countryData){
        this.data = countryData;
        this.acceptedResponses = this.possibleresponses(this.data);
        this.flag = this.gettingFlag(this.data);
        //console.log(this.acceptedResponses);
    }

    possibleresponses(data){
        const responses = data.translations;

        const setResponses = new Set();

        const responsesContainer = Object.values(responses);

        responsesContainer.forEach(element => {
            const response = element.common;
            setResponses.add(response.toLowerCase());
        });

        return setResponses;
    }

    gettingFlag(data){
        const flag = data.flag;
        //console.log(flag);
        return flag;
    }

    checkAnswer(text){
        const normalizedText = text.toLowerCase();
        if (this.acceptedResponses.has(normalizedText)) {
            return true;
        }
        else{
            return false;
        }
    }

    displayFlag(){   
        const html = `
            <h1>${this.flag}</h1>
        `;
        container.insertAdjacentHTML("afterbegin", html);
    }

    removeFlag(){
        container.innerHTML="";
    }
}

export default Country;