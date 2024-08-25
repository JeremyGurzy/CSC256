 // Added event listener for the comment with an inline function
 document.getElementById('comment').addEventListener('click', function() {
    // variable for getting the username in the text box
    var username = document.getElementById('username').value;
    // variable for getting the comment in the text box
    var commentText = document.getElementById('userComment').value;
    // If to check if a username and comment has been added
    if (username === '' || commentText === '') {
        //alert message to tell the user to input a name and comment
        alert('Please enter both your username and comment.');
        // return if the inputs are empty
        return;
    }

    // Create new comment element
    var newComment = document.createElement('div');
    // added the user class to the new comment div for styling in CSS
    newComment.classList.add('user');
    //using W3Schools I figured out that you can display text to the screen by doing html tags, also cannot comment in it. Utilized template strings for the username and comment
    newComment.innerHTML = `
        <p><b>User: </b>${username}</p>
        <div class="comment">
            <p>${commentText}</p>
        </div>
    `;

    // append the new comment to the comments section
    document.getElementById('commentsSection').appendChild(newComment);

    // these two clear the input fields after the comment has been posted
    document.getElementById('username').value = '';
    document.getElementById('userComment').value = '';
});

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
