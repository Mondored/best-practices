"use strict";
const userInputElement = document.getElementById('user-input');
if (userInputElement) {
    userInputElement.value = 'Hi there!';
}
const erroBag = {
    email: 'Not a valid email',
    username: 'Must start with a capital letter!'
};
let names;
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done');
    }, 2000);
});
promise.then(data => {
    data.split('');
});
