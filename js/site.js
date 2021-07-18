"use strict"

//retrieves the id of the HTML element
let $ =(id)=> {
    return document.getElementById(id);
}
//makes the even numbers BOLD
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
        
        let row = $("results").insertRow();
        let cell = row.insertCell();
        cell.innerHTML = num;
        if(num % 2 == 0) {  
            row.className = "bold";
        }
    });

}
//when window loads
window.onload = function() {
    //when the event of click occurs trigger the makeBold function
    $("btnSubmit").onclick = function() {
        //this statement resets the table body data
        $("results").innerHTML = "";
    
        makeBold();
   }
}