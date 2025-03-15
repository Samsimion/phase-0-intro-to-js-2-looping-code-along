// Code your solutions in this file

let names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, event) { 
    let messages = [];
    
    for (let i = 0; i < names.length; i++) {
        messages[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    }
    
    return messages;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;  
    }
}


console.log(writeCards(names, "surprise")); 
countDown(10);  