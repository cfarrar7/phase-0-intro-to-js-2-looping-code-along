// Code your solutions in this file
function writeCards(names, event){
    const messages = []
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
        messages.push(message)
    };
    return messages;
}
function countDown() {
    let number = 10 ;
    while ( number > 0){console.log(number--)};
    console.log(number);
}