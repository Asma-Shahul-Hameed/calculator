// Get the display input element from the DOM
const display=document.getElementById("display");

// Function to append numbers or operators to the display
function appendToDisplay(input){
    display.value += input;
}

// Function to clear the display (AC button)
function clearDisplay(){
    display.value="";
}

// Function to calculate the result
function calculate(){
    // Evaluate the mathematical expression entered in display
    try{
        display.value=eval(display.value);
    }
   
    //display error message if expression is invalid
    catch(error){
        display.value="Error";
    }

}