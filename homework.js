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

if(2 > 5) { //если      //условная конструкция if
    _("test= " + true);
} else {  //иначе
    _(false);
}


//ДЗ 
//Написать скрипт использую конструкции if else, который если меньше 18 лет, то будет выводить рандомное предложение.
//if else прогнать все логические операторы (+-/* и т.д.)

//если меньше 18, то получается "вход запрещен"
//иначе 18, то "доступ разрешен (рандомное слово)"

let random = ["всем","детям","старым"];
magic = random[Math.floor(Math.random() * 2)];
let close = "вход запрещен";
let open = "доступ разрешен"

let age = " ";
if(age != 18) {
  _(close + " " + magic);
} else if (age == 18) {
    _(open + " " + magic);
} else {
    _("hi");
}

const name = "anton";
if(name.length >= 5) _("privet");

let name1 = 5;
//while - до тех пор, пока 
while(name1 <= 5) {
    _("щас будет кранты");
    _(name1++); 
} 
