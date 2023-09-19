/*
   ______      ______                     __       __                 __      __             _____             __        
  / ____/___  / ____/_______  ____  _____/ /_     / /_  __  __       / /___  / /_  ____     / ___/____  ____ _/ /_  _____
 / / __/ __ \/ /_  / ___/ _ \/ __ \/ ___/ __ \   / __ \/ / / /  __  / / __ \/ __ \/ __ \    \__ \/ __ \/ __ `/ __ \/ ___/
/ /_/ / /_/ / __/ / /  /  __/ / / / /__/ / / /  / /_/ / /_/ /  / /_/ / /_/ / / / / / / /   ___/ / /_/ / /_/ / / / / /    
\____/\____/_/   /_/   \___/_/ /_/\___/_/ /_/  /_.___/\__, /   \____/\____/_/ /_/_/ /_/   /____/ .___/\__,_/_/ /_/_/     
                                                     /____/                                   /_/                        

Copyright (c) John Spahr, 2019-2023. 
*/

function textCounter(field, counterLabel, maxlimit) {
    //get word count label
    var countLbl = document.getElementById(counterLabel);

    //restrict number of characters in textarea 
    if (field.value.length > maxlimit) {
        field.value = field.value.substring(0, maxlimit);
        return false;
    } else {
        //update label
        countLbl.innerText = (maxlimit - field.value.length) + " character(s) remaining";
    }
}

function generateCard() {
    //check if image has been uploaded
    var file = document.getElementById('imageUpload').files[0];

    if (file != null) {
        //show generatedCard div
        document.getElementById("generatedCard").style.display = "block";

        //get values from inputs...
        var nameTxt = document.getElementById("nameTxt").value;
        var bioTxt = document.getElementById("bioTxt").value;

        var interest1 = document.getElementById("interest1").value;
        var interest2 = document.getElementById("interest2").value;
        var interest3 = document.getElementById("interest3").value;
        var interest4 = document.getElementById("interest4").value;
        var interest5 = document.getElementById("interest5").value;

        var instagramTxt = document.getElementById("instagramTxt").value;
        var snapchatTxt = document.getElementById("snapchatTxt").value;
        var facebookTxt = document.getElementById("facebookTxt").value;

        //string for interest spans.
        var interests = "";

        //check to see if interests are blank. if not, create span for each interest listed.
        if (interest1.trim() != "") {
            interests += "<span class='bubble'>" + interest1 + "</span>";
        }
        if (interest2.trim() != "") {
            interests += "<span class='bubble'>" + interest2 + "</span>";
        }
        if (interest3.trim() != "") {
            interests += "<span class='bubble'>" + interest3 + "</span>";
        }
        if (interest4.trim() != "") {
            interests += "<span class='bubble'>" + interest4 + "</span>";
        }
        if (interest5.trim() != "") {
            interests += "<span class='bubble'>" + interest5 + "</span>";
        }

        //string for social spans...
        var socials = "";

        //check to see if socials are blank. if not, create span for each interest listed with fontawesome icons.
        if (instagramTxt.trim() != "") {
            socials += "<span class='bubble'><i class='fa-brands fa-instagram'></i>&nbsp;" + instagramTxt + "</span>";
        }
        if (snapchatTxt.trim() != "") {
            socials += "<span class='bubble'><i class='fa-brands fa-snapchat'></i>&nbsp;" + snapchatTxt + "</span>";
        }
        if (facebookTxt.trim() != "") {
            socials += "<span class='bubble'><i class='fa-brands fa-facebook'></i>&nbsp;" + facebookTxt + "</span>";
        }

        var reader = new FileReader();
        reader.onload = function(e) {
            //generate card...
            document.getElementById("generatedCard").innerHTML = "<img class='pfp' alt='Failed to load image' src='" + e.target.result + "'/><h1>Bonjour, je m'appelle " + nameTxt + "</h1><hr><p>" + bioTxt + "</p><hr><h2>J'aime...</h2><div class='bubbleSection'>" + interests + "</div><hr><h2>Suivez-moi sur...</h2><div class='bubbleSection'>" + socials + "</div>"
            saveCard(); //save card
            location.hash = "#generatedCard"; //jump to card on page
        }
        reader.readAsDataURL(file);
    } else {
        alert("Veuillez télécharger une image de vous-même.");
    }
}

function saveCard() {
    //create canvas from div
    html2canvas(document.querySelector("#generatedCard")).then(canvas => {
        //create link tag to canvas image and click to download
        var link = document.createElement('a');
        link.download = 'GoFrenchCard.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}

function goHome() {
    //navigate to index
    window.location.href = 'index.html';
}