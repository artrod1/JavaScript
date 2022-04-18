
const _ = function(e){
    console.log(e);
}

let randomWord = ["один", "два", "три"];
let magic = randomWord[Math.floor(Math.random() * 2)];
console.log(magic + " привет луна " + magic + " слон " + magic);

console.log(randomWord.join(" + "));

randomWord.join("больше")
_(randomWord.join("больше"));

//_(magic.join());

let bor = {
    "key1": 5,
    "key2": 10
}

_(bor.key1); // точечная натация
_(bor["key1"]) //обращение по ключу объекта

if(2 > 5) {
    _("test= " + true);
} else{
    _(false);
}
