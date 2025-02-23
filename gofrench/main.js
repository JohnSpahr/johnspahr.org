/*
   ______      ______                     __       __                 __      __             _____             __        
  / ____/___  / ____/_______  ____  _____/ /_     / /_  __  __       / /___  / /_  ____     / ___/____  ____ _/ /_  _____
 / / __/ __ \/ /_  / ___/ _ \/ __ \/ ___/ __ \   / __ \/ / / /  __  / / __ \/ __ \/ __ \    \__ \/ __ \/ __ `/ __ \/ ___/
/ /_/ / /_/ / __/ / /  /  __/ / / / /__/ / / /  / /_/ / /_/ /  / /_/ / /_/ / / / / / / /   ___/ / /_/ / /_/ / / / / /    
\____/\____/_/   /_/   \___/_/ /_/\___/_/ /_/  /_.___/\__, /   \____/\____/_/ /_/_/ /_/   /____/ .___/\__,_/_/ /_/_/     
                                                     /____/                                   /_/                        

Copyright (c) John Spahr, 2019-2024. 
*/

//focus on inputTxt when GoFrench loads
document.addEventListener(
    'DOMContentLoaded',
    function() {
        document.getElementById('inputTxt').focus();
    },
    false
);

//handle button presses in search bar
function txtChange(e) {
    if (e.keyCode == 13) {
        //if enter key is pressed, get site
        getSite();
        return false;
    }
}

//handle special chars buttons
function specialChar(button) {
    navigator.clipboard.writeText(button.textContent); //copy button text to clipboard
    alert("Copied character to clipboard."); //give user feedback
}

//toggle accents visibility
function toggleChars(button) {
    //get special chars div
    var specialChars = document.getElementById("specialChars");

    if (specialChars.style.display == "inline") {
        //hide
        specialChars.style.display = "none";
        button.textContent = "Show Accents";
        button.innerHTML = "<i class=\"fas fa-chevron-down\"></i> Show Accents";
    } else {
        //show
        specialChars.style.display = "inline";
        button.innerHTML = "<i class=\"fas fa-chevron-up\"></i> Hide Accents";
    }
}

//handle search functionality
function getSite() {
    var inputString = document.getElementById('inputTxt').value.trim(); //trims input
    if (inputString != '') {
        //makes sure text box isn't blank
        var count = (inputString.match(/ /g) || []).length; //gets number of spaces in text box.
        if (count == 0) {
            //no spaces
            //open wordreference
            window.open('http://www.wordreference.com/enfr/' + inputString, '_blank');
        } else {
            //spaces
            //open linguee
            window.open(
                'http://linguee.com/english-french/search?source=auto&query=' +
                inputString,
                '_blank'
            );
        }
        document.getElementById('inputTxt').value = ''; //reset text input field
    } else {
        alert('Please enter a search query.'); //if input is blank
    }
}

function conjugate() {
    //open wordreference word conjugation
    var inputString = document.getElementById('inputTxt').value.trim(); //get input value

    if (inputString != '') {
        //open conjugation result in new tab
        window.open(
            'http://www.wordreference.com/conj/frverbs.aspx?v=' +
            inputString,
            '_blank'
        );

        document.getElementById('inputTxt').value = ''; //reset text input field
    } else {
        alert('Please enter a search query.'); //if input is blank
    }
}

$(document).ready(function() {
    if ($(window).width() < 560) {
        //hide accents
        specialChars.style.display = "none";
        document.getElementById("charsBtn").innerHTML = "<i class=\"fas fa-chevron-down\"></i> Show Accents";
    }
});