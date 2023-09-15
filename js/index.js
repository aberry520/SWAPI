"use strict";

function showName(x, y) {
    document.getElementById("name").innerText = x;
    document.getElementById("born").innerText = y;
};

// function makePeopleList(peopleResults){
//     const select = document.createElement("select");
//     select.id="list";
//     peopleResults.map(function(index){
//         const option = document.createElement("option");
//         option.value = index.name;
//         option.text = index.name;
//         select.appendChild(option);
//     });
//     const peopleList = document.getElementById("peopleList");
//     peopleList.append(select);
// };
function addToPeopleList(peopleResultsOther) {
    console.log(peopleResultsOther);
    const list = document.querySelector("#list");
    peopleResultsOther.map(function (index) {
        const option = document.createElement("option");
        option.value = index.name;
        option.text = index.name;
        list.appendChild(option);
    });

  
    list.addEventListener("change", function (char) {
        const lukeSkywalker = char.target[1].selected;
        const c3po = char.target[2].selected;
        const r2d2 = char.target[3].selected;
        const darthVader = char.target[4].selected;
        const leia = char.target[5].selected;
        const owenLars = char.target[6].selected;
        const beruLars = char.target[7].selected;
        const r5d4 = char.target[8].selected;
        const biggs = char.target[9].selected;
        const ob1 = char.target[10].selected;
        if (lukeSkywalker === true) {
            const url = "https://swapi.dev/api/people/1";
            get(url).then(function (response) {
                showName(response.name, response.birth_year);
            });
        }
        if (c3po === true) {
            const url = "https://swapi.dev/api/people/2";
            get(url).then(function (response) {
                showName(response.name, response.birth_year);
            });
        }
        if (r2d2 === true) {
            const url = "https://swapi.dev/api/people/3";
            get(url).then(function (response) {
                showName(response.name, response.birth_year);
            });
        }
        if (darthVader === true) {
            const url = "https://swapi.dev/api/people/4";
            get(url).then(function (response) {
                showName(response.name, response.birth_year);
            });
        }
        if (leia === true) {
            const url = "https://swapi.dev/api/people/5";
            get(url).then(function (response) {
                showName(response.name, response.birth_year);
            });
        }if (owenLars === true) {
            const url = "https://swapi.dev/api/people/6";
            get(url).then(function (response) {
                showName(response.name, response.birth_year);
            });
        }if (beruLars === true) {
            const url = "https://swapi.dev/api/people/7";
            get(url).then(function (response) {
                showName(response.name, response.birth_year);
            });
        }if (r5d4 === true) {
            const url = "https://swapi.dev/api/people/8";
            get(url).then(function (response) {
                showName(response.name, response.birth_year);
            });
        }if (biggs === true) {
            const url = "https://swapi.dev/api/people/9";
            get(url).then(function (response) {
                showName(response.name, response.birth_year);
            });
        }if (ob1 === true) {
            const url = "https://swapi.dev/api/people/10";
            get(url).then(function (response) {
                showName(response.name, response.birth_year);
            });
        }
    });
};



document.addEventListener("DOMContentLoaded", function () {

    const peopleURL = "https://swapi.dev/api/people";
    get(peopleURL).then(function (response) {
        addToPeopleList(response.results);
    });
    // const peopleURL2 = "https://swapi.dev/api/people/?page=2";
    // get(peopleURL2).then(function(response){
    //     addToPeopleList(response.results);
    // });
    // const peopleURL3 = "https://swapi.dev/api/people/?page=3";
    // get(peopleURL3).then(function(response){
    //     addToPeopleList(response.results);
    // });
    // const peopleURL4 = "https://swapi.dev/api/people/?page=4";
    // get(peopleURL4).then(function(response){
    //     addToPeopleList(response.results);
    // });
    // const peopleURL5 = "https://swapi.dev/api/people/?page=5";
    // get(peopleURL5).then(function(response){
    //     addToPeopleList(response.results);
    // });
    // const peopleURL6 = "https://swapi.dev/api/people/?page=6";
    // get(peopleURL6).then(function(response){
    //     addToPeopleList(response.results);
    // });
    // const peopleURL7 = "https://swapi.dev/api/people/?page=7";
    // get(peopleURL7).then(function(response){
    //     addToPeopleList(response.results);
    // });
    // const peopleURL8 = "https://swapi.dev/api/people/?page=8";
    // get(peopleURL8).then(function(response){
    //     addToPeopleList(response.results);
    // });
    // const peopleURL9 = "https://swapi.dev/api/people/?page=9";
    // get(peopleURL9).then(function(response){
    //     addToPeopleList(response.results);
    // });
});

wookiee.addEventListener("click", function () {
    const wookieeURL = "https://swapi.dev/api/people/10/?format=wookiee";
    get(wookieeURL)
        .then(function (response) {
            showName(response.whrascwo, response.rhahrcaoac_roworarc)
        });
});

