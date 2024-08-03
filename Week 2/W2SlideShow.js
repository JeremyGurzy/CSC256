// add an event listener that fires the initLinks function once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initLinks)

// array of images - list of the image file names
var arrImages = ["./dungeonDragon.png","millenniumFalcon.png", "./baradDur.png", "./voltron.png", "./cat.png"];
//array of numbers
var arrNumber = ["Number 5", "Number 4", "Number 3", "Number 2", "Number 1"];

//variables to keep track of the current picture and numbers
var currentImage = 0;
var currentNumber = 0;
// function to add listeners to the anchor tags - previous and next links
function initLinks(){
    //listen for the click event on the previous link
    document.getElementById("previousLego").addEventListener("click", processPrevious);
    //listen for the click event on the previous link
    document.getElementById("nextLego").addEventListener("click", processNext);
}

// Function to process the previous link click
function processPrevious(event)
{
    //navigate to the previous image        ++ adds 1 -- subtracts 1
    currentImage--;
    // navigated to the previous number
    currentNumber--;
    //when we get to the beginning of the image array, show the last image
    if (currentImage == -1 || currentNumber == -1){
        // set current image to the last element in the array, which is the length -1
        currentImage = arrImages.length -1;
        // set the current number to the last element in the array
        currentNumber = arrNumber.length -1;
        
    }

    // Show the next image in the array
    document.getElementById("imageSlideShow").src = arrImages[currentImage];
    // Changes the text to the numbers in the array
    document.getElementById("changeNum").innerHTML = arrNumber[currentNumber];
    
}
// Function to process the next link click
function processNext(event)
{
    // prevent the default action of the link
    event.preventDefault();

    //navigate to the next image        
    currentImage++
    //navigate the next number
    currentNumber++
    //if currentImage is equal to the length of the array of images
    if (currentImage == arrImages.length || currentNumber == arrNumber.length){
        //variable for current image
        currentImage = 0;
        //variable for the current number
        currentNumber = 0;
    }

    // Show the next image in the array
    document.getElementById("imageSlideShow").src = arrImages[currentImage];
    // Changes the text to the numbers in the array
    document.getElementById("changeNum").innerHTML = arrNumber[currentNumber];
  
}