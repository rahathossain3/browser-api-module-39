//module 38----**** v-4
// sincronous function : Seriale babe kay kore




function doSomting() {
    console.log(" doing jaba")
}

console.log('First :  This is the First parson');
console.log(' Second: this is the second parson');

//wtite a function ,  time ta first a likeh nile vul hober sombabona kom thake
setTimeout(function () {
    console.log(" i am using Vs code");
}, 5000);

setTimeout(() => {
    console.log('exploring MDN articales');
}, 4000);

// setTimeout(doSomting, 5000);

//setTimeout use korle  sob kas ses korar por eitar excute kore.,,, r jodi time set kore dioya hoy taile oi time ses hobar por code running hobe
// formula : setTimeout(function/varibale, time_in_mily_second);    1 sec =1000 mily sec
// je timeout er time kom thakbe sei code ayge runninig hobe.. 

// doSomting()
console.log(' Third: Thid is 3 number');
console.log(' Forth: Thid is 4 number');