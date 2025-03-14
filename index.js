// Code your solutions in this file

let name = ["Guadalupe", "Ollie", "Aki"];

function writeCards(name){
    let msg=[];
    
    for(let i =0; i<name.length; i++){
        msg[i]= `Thank you, ${name[i]}, for the wonderful surprise gift!`;

    }
    return msg;
}
function countDown(num){
    while(num >= 0){
        console.log(num) ;
        num--;  
    }

}
console.log(countDown(10));

