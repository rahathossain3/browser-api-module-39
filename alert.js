console.log('i am hear');

// alert('ma is coming');


//alert

const maComing = () => {
    alert('Ammu is coming . open the book');
}

// confirm

const askPicnic = () => {
    const response = confirm('Are you going to picnic?');
    console.log(response);
    if (response === true) {
        alert('amake fee ta bkash kore de');
    }
    else {
        console.log('DGM!!! dure giya mor')
    }
}

// prompt

const askName = () => {
    const name = prompt('what is your name');
    if (name) {
        console.log(name);
    }
}