    
function myCheck () {
    var guess = Number(document.getElementById("input").value)
    var number = Math.round(Math.random() * 100);
    var message = number;
    
    if (guess < number){
        message = "My number is less than the result : " + number + " Try again!" 

    } else if (guess > number){
        message = "My number is greater than the result : " + number + " Try again!" 
     
    }else if ( guess === number )
    message = "Congratulation! Your guess is right"

    document.getElementById("result").innerHTML = message
        
}