"use strict"

//returns the id of the HTML element
let $ =(id)=> {
    return document.getElementById(id);
}

let makeBold = () => {

    //this array will hold the numbers generated using a for loop
    let numbers = [];

    //get the start and end number from the user
    //and convert them to a number
    let startValue = parseInt($("startValue").value); 
    let endValue = parseInt($("endValue").value);


    //populate the array using the starting and ending values
    for(startValue; startValue <=  endValue; startValue++) {
        numbers.push(startValue);
    }
    
    //using the forEach function iterates over the numbers array
    //and check for even numbers, and make them bold
    numbers.forEach((num)=>{
        
        let newR = $("results").insertRow();
        let newC = newR.insertCell();
        newC.innerHTML = num;
        if(num % 2 == 0) {  
            newR.className = "bold";
        }
    });
    console.log(numbers)
}

window.onload = function() {
    //when the event of click occurs trigger the makeBold function
    $("btnSubmit").onclick = function() {
        $("results").innerHTML = "";
        makeBold();
   }
}