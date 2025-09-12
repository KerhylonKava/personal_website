function updateName() {
    //and comments here are what I'm used to! just a normal //
    var ghostName = document.getElementById("nameInput").value; // Get input
    var displayElement = document.getElementById("displayName"); // Find the element to display the ghost's name
    
    // Check if the user entered something
    if (ghostName.trim() == "Eddy") {
        displayElement.textContent = "Hello, I'm " + ghostName + "!"; // ghost talking
        //add something about the weather
    } 
    else if (ghostName.trim() == "Esther") {
        displayElement.textContent = "Oh, that's actually the name of the programmer for this website... A different name maybe?";
    }
    else if (ghostName.trim() !== "") {
        displayElement.textContent = "Hello, my name is " + ghostName + "!";
    }
    else if (ghostName.trim() == "") {
        displayElement.textContent = "I guess I'm nameless :("; // Default message if no input (sad ghost)
    }
}