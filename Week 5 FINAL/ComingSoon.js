// Coming Soon Page

// add an event listener that fires the initLinks function once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initSlides);

// Array of lego data, each one has the image src and text of each set
var legos = [
    { src: "zeldaTree.jpg", text: "Zelda Tree - Release Date: September 1st, 2024" },
    { src: "battleBus.jpg", text: "Battle Bus - Release Date: October 1st, 2024" },
    { src: "superMario.jpg", text: "Super Mario - Release Date: October 1st, 2024" },
    { src: "harryPotter.png", text: "The Burrow - Release Date: September 4th, 2024" },
    { src: "nightmareChristmas.jpg", text: "NightMare Before Christmas - Release Date: September 6th, 2024" }
];
// variable to keep track of the current slides
var currentSet = 0;
// function to add listeners to the buttons - previous and next links
function initSlides() {
    // button for previous with function
    document.getElementById("previousSet").addEventListener("click", displayPrevious);
    // button for next with function
    document.getElementById("nextSet").addEventListener("click", displayNext);
    //call the update slides function
    updateSlides();
}
// function for updating the slide, was easier to do this way rather than retyping every little thing
function updateSlides() {
    // variable for where the slideshow is stored
    var container = document.querySelector(".slideshowContainer");
    
    // clear any existing content inside the container
    container.innerHTML = "";

    // for loop to create and display three slides
    for (var i = 0; i < 3; i++) {
        // calculates the set to display with module to wrap around if needed
        var legoSet = (currentSet + i) % legos.length;
        
        // create a new div element for the slide
        var slide = document.createElement("div");
        
        // just like the forums page, learned from W3Schools how to display text to the screen along with template strings
        slide.innerHTML = `
            <div class="legoSet">
                <img src="${legos[legoSet].src}" alt="${legos[legoSet].text}">
                <div class="setNameAndDate">${legos[legoSet].text}</div>
            </div>
        `;
        
        // append the new slide to the container
        container.appendChild(slide);
    }
}
// function for the next button
function displayNext(event) {
    // prevent default 
    event.preventDefault();
    // sets the current set to the next set wrapping around if needed
    currentSet = (currentSet + 1) % legos.length;
    // call the update slide function to refresh the displayed photos
    updateSlides();
}

function displayPrevious(event) {
    // prevents default
    event.preventDefault();
    // sets the current set to the next set wrapping around if needed
    currentSet = (currentSet - 1 + legos.length) % legos.length;
    // call the update slide function to refresh the displayed photos
    updateSlides();
}
// Buttons for each page, did it this way because anchor tags get boring
// this is for the forums button with event listener along with inline function to move to the page within
document.getElementById("forumsButton").addEventListener("click", function() {
    // moves to the next page
    window.location.href = "FinalForums.html";
});
// coming soon page button with inline function as well
document.getElementById("comingSoonButton").addEventListener("click", function() {
    // moves to the next page
    window.location.href = "FinalComingSoon.html";
});
// games page button wiuth inline function
document.getElementById("gamesButton").addEventListener("click", function() {
    // moves to the next page
    window.location.href = "FinalLegoCheckers.html";
});
