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

