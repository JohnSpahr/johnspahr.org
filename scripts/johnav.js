/*
	JOHNAV - John's Made-From-Scratch Navigation Menu System (Pure JavaScript)
*/

//toggle main menu visibility
function navToggle() {
    let navMenu = document.getElementById("navMenu"); //navigation menu div
    let menuBtn = document.getElementById("menuBtn"); //menu button

    if (navMenu.style.display === "block") {
        //if visible, hide navigation menu and set menu button to show mode
        navMenu.style.display = "none";
        menuBtn.style.backgroundColor = "#222";
        menuBtn.innerHTML = '<span class="button"><i class="fas fa-chevron-down"></i>&nbsp;Menu</span>';
    } else {
        //if not visibile, show navigation menu and set menu to hide mode
        navMenu.style.display = "block";
        menuBtn.style.backgroundColor = "#4458be";
        menuBtn.innerHTML = '<span class="button"><i class="fas fa-chevron-up"></i>&nbsp;Close</span>';
    }
}