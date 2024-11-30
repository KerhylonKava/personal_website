function updateName() {
    //and comments here are what I'm used to! just a normal //
    var ghostName = document.getElementById("nameInput").value; // Get input
    var displayElement = document.getElementById("displayName"); // Find the element to display the ghost's name
    
    // Check if the user entered something
    if (ghostName.trim() !== "") {
        displayElement.textContent = "Hello, I'm " + ghostName + "!"; // ghost talking
    } else {
        displayElement.textContent = "I guess I'm nameless :("; // Default message if no input (sad ghost)
    }
}