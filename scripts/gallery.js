/* Photography Gallery Script (Thanks to whoever posted this on S.O. + edits by me) */
var xhr = new XMLHttpRequest();
xhr.open("GET", "/photoroll/", true);
xhr.responseType = 'document';
xhr.onload = () => {
    if (xhr.status === 200) {
        var elements = xhr.response.getElementsByTagName("a");
        //fetch valid images
        for (element of elements) {
            if (element.href.match(/\.(jpe?g|JPE?G|png|PNG|gif|GIF|heic|HEIC)$/)) {
                let a = document.createElement("a"); //create link
                a.href = element.href; //set link to image url
                a.target = "_blank"; //open in new tab
                let img = document.createElement("img"); //create image
                img.src = element.href; //set image source to url from loop
                a.appendChild(img); //add link to image
                document.getElementById("gallery").appendChild(a); //add image/link combo
            }
        };
        document.getElementById("warningLbl").style.display = "none"; //hide javascript warning
    } else {
        alert("Failed to fetch images. Reload the page to try again."); //show error if unable to pull images
    }
}
xhr.send()