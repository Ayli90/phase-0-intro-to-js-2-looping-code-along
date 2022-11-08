// Code your solutions in this file
function writeCards(names, party) {
    const messages = []
    for (let i = 0; i < names.length; i++) {
        
    const msg = "Thank you, "+names[i]+", for the wonderful " +party+" gift!";
    messages.push(msg);
    }
    //console.log(messages)
    return messages;
}


new_msg = writeCards( ["Guadalupe", "Ollie", "Aki"],"birthday");
console.log(new_msg)

function countDown(countdown) { 
while (countdown > -1) {
    console.log(countdown--);

}
}