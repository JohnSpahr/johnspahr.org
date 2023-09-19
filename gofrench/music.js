/*
   ______      ______                     __       __                 __      __             _____             __        
  / ____/___  / ____/_______  ____  _____/ /_     / /_  __  __       / /___  / /_  ____     / ___/____  ____ _/ /_  _____
 / / __/ __ \/ /_  / ___/ _ \/ __ \/ ___/ __ \   / __ \/ / / /  __  / / __ \/ __ \/ __ \    \__ \/ __ \/ __ `/ __ \/ ___/
/ /_/ / /_/ / __/ / /  /  __/ / / / /__/ / / /  / /_/ / /_/ /  / /_/ / /_/ / / / / / / /   ___/ / /_/ / /_/ / / / / /    
\____/\____/_/   /_/   \___/_/ /_/\___/_/ /_/  /_.___/\__, /   \____/\____/_/ /_/_/ /_/   /____/ .___/\__,_/_/ /_/_/     
                                                     /____/                                   /_/                        

Copyright (c) John Spahr, 2019-2023. 
*/

//declare variables...
var videoList = ["https://www.youtube.com/embed/OTrPBsvuR3M", "https://www.youtube.com/embed/a79iLjV-HKw", "https://www.youtube.com/embed/Y1sWOW23md0", "https://www.youtube.com/embed/31kCEV9_Z3g", "https://www.youtube.com/embed/yC1nQPbjVl4", "https://www.youtube.com/embed/jWi6_K8x1FQ", "https://www.youtube.com/embed/YXRSCOuwq80", "https://www.youtube.com/embed/XRi1lhm6qAQ", "https://www.youtube.com/embed/_8ppYcu7ZHY", "https://www.youtube.com/embed/_TIPjyLFUBY", "https://www.youtube.com/embed/_LTsjwiTN7w", "https://www.youtube.com/embed/XYUVJd_Tfro", "https://www.youtube.com/embed/y8s8-7h11YA", "https://www.youtube.com/embed/UX3CCMhUp7Q", "https://www.youtube.com/embed/x30kc8zgbm0", "https://www.youtube.com/embed/zani6VzfYPU", "https://www.youtube.com/embed/VqsU_4KOEA8", "https://www.youtube.com/embed/D38EUIll1pM", "https://www.youtube.com/embed/Uzuspeneepc", "https://www.youtube.com/embed/4tmE2AzrIps", "https://www.youtube.com/embed/iMWR9G0XBCI", "https://www.youtube.com/embed/h7oEuaQqJpU", "https://www.youtube.com/embed/lBVz-HnDaNU", "https://www.youtube.com/embed/dvItruOSOaE", "https://www.youtube.com/embed/Vkw4Dqd43nA", "https://www.youtube.com/embed/7yCaNt9qRek", "https://www.youtube.com/embed/opGrbthhH0o", "https://www.youtube.com/embed/Gen7lAH5ir8", "https://www.youtube.com/embed/DdTbvzmlLLg", "https://www.youtube.com/embed/BNWM-cZhqLU", "https://www.youtube.com/embed/J_w0RRqDemo", "https://www.youtube.com/embed/G3lSONLLx70", "https://www.youtube.com/embed/hsOqEhMumaw", "https://www.youtube.com/embed/ar8zt45bN14", "https://www.youtube.com/embed/HoaQ1TbtnSs", "https://www.youtube.com/embed/UqBErMLfSww", "https://www.youtube.com/embed/oiKj0Z_Xnjc", "https://www.youtube.com/embed/vFippyIh5fk", "https://www.youtube.com/embed/PuDfh4F0aKc", "https://www.youtube.com/embed/t5D7XTHWAdw", "https://www.youtube.com/embed/d_3vEFFfgH0", "https://www.youtube.com/embed/_lxCSsNLuOE", "https://www.youtube.com/embed/Wz86pFtHZqI", "https://www.youtube.com/embed/_whvVXX0hCk", "https://www.youtube.com/embed/EiAej_sSpbI", "https://www.youtube.com/embed/ltlculkCHr8", "https://www.youtube.com/embed/8IjWHBGzsu4", "https://www.youtube.com/embed/_aXA1jRXWnk", "https://www.youtube.com/embed/P3QS83ubhHE", "https://www.youtube.com/embed/OAMuNfs89yE", "https://www.youtube.com/embed/vtNJMAyeP0s", "https://www.youtube.com/embed/K5KAc5CoCuk", "https://www.youtube.com/embed/mesIbctOueQ", "https://www.youtube.com/embed/BWmiAF7VLMc", "https://www.youtube.com/embed/ibwixyj1Klc", "https://www.youtube.com/embed/DKFpF0wu8j0", "https://www.youtube.com/embed/cE6L5pckNqk", "https://www.youtube.com/embed/PpRgiaONETI", "https://www.youtube.com/embed/5xyoPwocD08", "https://www.youtube.com/embed/y0dbfkpWkUo", "https://www.youtube.com/embed/M3F_tZlpyd4", "https://www.youtube.com/embed/xIJ46_OXtx8", "https://www.youtube.com/embed/yleB8fUXudw", "https://www.youtube.com/embed/UXU0_vRYYJI", "https://www.youtube.com/embed/YTHLJnY1pAU", "https://www.youtube.com/embed/8nUd4IId9l0", "https://www.youtube.com/embed/8yOuNrT0dOw", "https://www.youtube.com/embed/t48_vQT5Zsw", "https://www.youtube.com/embed/LZRnvEEgAW0", "https://www.youtube.com/embed/VHIEznwcqsk", "https://www.youtube.com/embed/D6Wi3SmmnAE"];
var selectedSong = "";

function loadSong() {
    //when page loads, pick a random video from list
    selectedSong = videoList[Math.floor(Math.random() * videoList.length)];

    //add embed for selected song to designated div
    document.getElementById("musicPlayer").innerHTML = '<iframe width="560" height="315" src="' + selectedSong + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
}

function goHome() {
    //navigate to index
    window.location.href = 'index.html';
}

function saveResponses() {
    //get responses...
    var titleLbl = document.getElementById("titleLbl").innerText;
    var titleTxt = document.getElementById("titleTxt").value;
    var artistLbl = document.getElementById("artistLbl").innerText;
    var artistTxt = document.getElementById("artistTxt").value;
    var messageLbl = document.getElementById("messageLbl").innerText;
    var messageTxt = document.getElementById("messageTxt").value;
    var opinionLbl = document.getElementById("opinionLbl").innerText;
    var opinionTxt = document.getElementById("opinionTxt").value;

    //get responseSheet div and assign it to variable
    var responseSheet = document.getElementById("responseSheet");

    //add responses to div innerhtml for saving
    responseSheet.innerHTML = '<h1><i class="fa-solid fa-music"></i>&nbsp;Musique française</h1><hr><h3>' + titleLbl + '</h3><p>' + titleTxt + '</p><hr><h3>' + artistLbl + '</h3><p>' + artistTxt + '</p><hr><h3>' + messageLbl + '</h3><p>' + messageTxt + '</p><hr><h3>' + opinionLbl + '</h3><p>' + opinionTxt + '</p>';

    //make responseSheet visible
    responseSheet.style.display = "block";

    //create canvas from div
    html2canvas(document.querySelector("#responseSheet")).then(canvas => {
        //create link tag to canvas image and click to download
        var link = document.createElement('a');
        link.download = 'SongResponse.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}