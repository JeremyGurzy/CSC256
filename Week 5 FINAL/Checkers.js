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







// Lego Checkers
// pointer variable to the HTML div that is the parent of the checkers board 
var divCheckersBoard = document.getElementById("divCheckersBoard");
// pointer variable to the HTML hidden span to store the selected piece
var spnSelectedPiece = document.getElementById("spnSelectedPiece");

//build a 2d array to manage the layout of the pieces on the checkers board
var arrPieces = [
    //null = no pieces  w = piece will be placed
    [null, 'w', null, 'w', null, 'w', null, 'w'],
    [ 'w', null, 'w', null, 'w', null, 'w', null],
    [null, 'w', null, 'w', null, 'w', null, 'w'],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [ 'b', null, 'b', null, 'b', null, 'b', null],
    [null, 'b', null, 'b', null, 'b', null, 'b'],
    [ 'b', null, 'b', null, 'b', null, 'b', null],

];


// this function will create the checkers board
function createCheckersBoard(checkersBoard){

    // setup a typical checkers board with 8 rows and 8 columns
    // using nested for loops
    // this loop will build the rows 
    for (var row = 0; row < 8; row++){
        // this loop will build the columns
        for (var col = 0; col < 8; col++){
            // build a square div
            var checkersSquare = document.createElement("div");
            
            // assign a CSS class to the div/square
            checkersSquare.classList.add("checkersSquare");
            //add an id so we know where to move the pieces to and from 
            // the ids will look like div00, div01, div02, etc.
            checkersSquare.setAttribute("id", "div" + row + col);

            // check to see if this square is even or odd 
            // % mod/modulus - in a division problem, mod is the remainder
            if((row + col) % 2 == 1){
                // this is an odd number 
                // change the background color 
                checkersSquare.classList.add("checkerAlt");
                // add the event listener to support moving the pice
                checkersSquare.addEventListener("click", movePiece);
            }
            // add the piece to the checkers board
            checkersBoard.appendChild(checkersSquare);
             // if a piece belongs in this square, add a piece
            // if the value of the 2d array is w or b
            if (arrPieces[row][col]){
                //build the piece
                // passed in ID, css class and what square we are adding pieces to
                createPiece("piece" + row + col,"checkerPiece-" + arrPieces[row][col], checkersSquare);
            }
        }
    }
}

//function to create the pieces
function createPiece(pieceId, pieceClass, theSquare){
    // create a new div
    var newPiece = document.createElement("div");
    // set the id, so we can remove the piece from the DOM if needed
    newPiece.setAttribute("id", pieceId);
    // apply the standard class to make a round checkers piece
    newPiece.classList.add("checkerPiece");
    // apply the custom css class to give the piece the correct color
    newPiece.classList.add(pieceClass);
    // add a click event handler to handle when the piece is clicked 
    newPiece.addEventListener("click", savePieceId);

   // Add studs (2x2 grid) to the checker piece
   // Create new div for top-left stud
   var studTopLeft = document.createElement("div");
    //apply the style
   studTopLeft.classList.add("stud", "top-left");
    //append the stud
   newPiece.appendChild(studTopLeft);

   // Create new div for top-right stud
   var studTopRight = document.createElement("div");
    //apply the style
   studTopRight.classList.add("stud", "top-right");
    //append the stud
   newPiece.appendChild(studTopRight);

   // Create new div for bottom-left stud
   var studBottomLeft = document.createElement("div");
    //apply the style
   studBottomLeft.classList.add("stud", "bottom-left");
    //append the stud   
   newPiece.appendChild(studBottomLeft);

   // Create new div for bottom-right stud
   var studBottomRight = document.createElement("div");
    //apply the style
   studBottomRight.classList.add("stud", "bottom-right");
    //append the stud
   newPiece.appendChild(studBottomRight);

    // add the piece to the square
    theSquare.appendChild(newPiece);
}

// function to save the piece Id to the secret span
function savePieceId(event){

    //console.log("savePieceId function called");

    // variable to hold the Id of the piece
    var selectedPieceId = event.target.id;

    // remove the word piece from the Id 
    selectedPieceId = selectedPieceId.replace("piece", "");

    // store the number Id in our secret span
    spnSelectedPiece.dataset.value = selectedPieceId;

    console.log("selectedPieceId= " + selectedPieceId);

}


function movePiece(event) {
   console.log("movePiece function was called");

   // variable to hold the square that was clicked
   var newSquareId = event.target.id;

   console.log("newSquareId= " + newSquareId);

   // remove any prefix that the id may have
   newSquareId = newSquareId.replace("div", "").replace("piece", "");

   // variable to hold the id stored in the secret span 
   var oldPieceId = spnSelectedPiece.dataset.value;

   console.log("oldPieceId = " + oldPieceId);

   // make sure that the old piece id and the new square Id are different
   if ((newSquareId != oldPieceId) && oldPieceId != '') {

       // create pointer to the old square 
       var oldSquare = document.getElementById("div" + oldPieceId);

       // create a pointer to the old piece
       var oldPiece = document.getElementById("piece" + oldPieceId);

       // before removing piece, get the piece color
       var oldPieceColorClass = oldPiece.classList[1];

       // remove the piece from the board
       oldSquare.removeChild(oldPiece);

       // create a pointer to the new square
       var newSquareDiv = document.getElementById("div" + newSquareId);

       // check if the move is a jump, difference in row and col is 2
       // convert the first character of oldPieceId to an integer for the old row
       var oldRow = parseInt(oldPieceId[0]);
        // convert the second character of oldPieceId to an integer for the old column
       var oldCol = parseInt(oldPieceId[1]);
       
        // convert the first character of newSquareId to an integer for the new row
       var newRow = parseInt(newSquareId[0]);
        // convert the second character of newSquareId to an integer for the new column
       var newCol = parseInt(newSquareId[1]);

        // check if the move is a diagonal jump by comparing the absolute differences in rows and columns
       if (Math.abs(newRow - oldRow) == 2 && Math.abs(newCol - oldCol) == 2) {
           // variables that calculate the midpoint of the rows and columns
           var midRow = (oldRow + newRow) / 2;
           var midCol = (oldCol + newCol) / 2;
           var midSquareId = "div" + midRow + midCol;

           // variables that find the piece at the midpoint and remove it
           var midSquare = document.getElementById(midSquareId);
           // get the checker piece with the midpoint 
           var midPiece = midSquare.querySelector(".checkerPiece");
           // if for checking if the piece is a midpoint square
           if (midPiece) {
            //function removes the piece being jumped
            midSquare.removeChild(midPiece);
           }
       }

       // Create a new piece
       createPiece("piece" + newSquareId, oldPieceColorClass, newSquareDiv);

       // Clear the secret span
       spnSelectedPiece.dataset.value = "";
   }
}

//call the create checkers board function to build the board
createCheckersBoard(divCheckersBoard);
