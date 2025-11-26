var clicks=0;

function clickUpdate() {
    clicks += 1;
    //and comments here are what I'm used to! just a normal //

    var displayTitle = document.getElementById("orClick");
    var displayElement = document.getElementById("displayClick"); // Find the element to display the click
    
    if (clicks>=0) {
        displayTitle.textContent = "Or you could play this clicker game I guess..?";
        displayElement.textContent = "Clicks: " + clicks;
    }
      else {
        displayElement.textContent = "Clicks: " + clicks;
    }
}