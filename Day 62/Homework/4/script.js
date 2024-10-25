//Homework 4
let c = Number(prompt(`How old are you?`));

if (c < 13){
    console.log(`Go away kiddo(no offense)`);
} else if(13< c < 19){
    console.log(`You are a teenager`);
} else if(c < 0){
    console.log(`You are customising you character`);
} else{
    console.log(`You are an adult`);
}