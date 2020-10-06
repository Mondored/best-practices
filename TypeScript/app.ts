const userInputElement = document.getElementById('user-input');

if (userInputElement){
    (userInputElement as HTMLInputElement).value = 'Hi there!';
}
//console.log('Input element:' + userInputElement);

interface ErrorContainer {
  [prop: string]: string;
}

const erroBag: ErrorContainer = {
    email: 'Not a valid email',
    username: 'Must start with a capital letter!'
};

let names: Array<string | number>;

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done');
  }, 2000);
});

promise.then(data => {
  data.split('');
})