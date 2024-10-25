export default function asyncFunc(number) {
    return new Promise((resolve, reject) => {
        if (number === 1) {
            reject(new Error('Number 1 is not allowed'));
        } else {
            setTimeout(() => {
                resolve(`Your number is ${number}`);
            }, 1000);
        }
    });
}

const welcomeMessage = 'Hello, world!';
const goodbyeMessage = 'Bye, world!';

export {welcomeMessage, goodbyeMessage};