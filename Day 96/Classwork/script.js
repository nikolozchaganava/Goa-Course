let obj = {};

for(let i = 0; i < 50; i++) {
    obj[`name${i}`] = 'სიზმარა';
    obj[`duration${i}`] = '10 min';
    obj[`rating${i}`] = '10 / 10';
}

console.log(obj);