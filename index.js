// Code your solutions in this file
//for (let age = 30; age < 40; age++) {
//    console.log(`I'm ${age} years old. Happy birthday to me!`);
//}

//const gifts = ["teddy bear", "drone", "doll"]
//
//function wrapGifts(gifts) {
//    for (let i = 0; i < gifts.length; i++) {
//        console.log(`Wrapped ${gifts[i]} and added a bow!`);
//    }
//    return gifts;
//}
//
//wrapGifts(gifts);

const nameList = ["Guadalupe", "Ollie", "Aki"]

function writeCards(nameList, event) {
    const thankYouCards = []
    for(let i = 0; i < nameList.length; i++) {
        thankYouCards.push(`Thank you, ${nameList[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}

writeCards(nameList, "surprise")



function countDown() {
    let countDown = 10
    while (countDown >= 0) {
        console.log(countDown--)
    }
    return countDown
}