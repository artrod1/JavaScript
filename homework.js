
let randomWord = ["один", "два", "три"];
let magic = randomWord[Math.floor(Math.random() * 2)];
console.log(magic + " привет луна " + magic + " слон " + magic);

console.log(randomWord.join(" + "));