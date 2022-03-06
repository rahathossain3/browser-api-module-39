// V - 6
//setTimeout () ----ekbar e cole
// setInterval () ----- loop akare bar bar cole....
// furmula: setInterval(function,time_in_mil_sec);
//setInterval ke off korte hole  clearInterval use kore te hobe..
// setInterval ekta time id return kore .. 
/*  javascritp non Blocking & asycinconus hihabe kaj kore..    */

console.log('first');

// setInterval(() => {
//     console.log('tik tik tik tik')
// }, 1000)

let seconds = 0;
const timeId = setInterval(() => {
    // seconds++;

    // console.log(seconds++);
    console.log(++seconds);
    if (seconds > 15) {
        clearInterval(timeId);
    }
}, 1000);

console.log('second');

//terminal a off korte holo ctrl + C dite hobe