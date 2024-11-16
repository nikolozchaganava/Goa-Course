const { readFile, writeFile } = require('fs');

const text = 'Niko Chaganava';

writeFile('./idk2.js', text, (err, res) => {
    if (err) {
        return;
    }
    console.log(res);
})