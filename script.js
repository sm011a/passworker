const symbols = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", " ", ",", ".", "<", ">", "/", "?", "|"];

function output() {
    let rand = symbols[Math.floor(Math.random() * symbols.length)];
    let rand1 = symbols[Math.floor(Math.random() * symbols.length)];
    let rand2 = symbols[Math.floor(Math.random() * symbols.length)];
    let rand3 = symbols[Math.floor(Math.random() * symbols.length)];
    let rand4 = symbols[Math.floor(Math.random() * symbols.length)];
    let rand5 = symbols[Math.floor(Math.random() * symbols.length)];
    let rand6 = symbols[Math.floor(Math.random() * symbols.length)];
    let rand7 = symbols[Math.floor(Math.random() * symbols.length)];
    let rand8 = symbols[Math.floor(Math.random() * symbols.length)];
    let rand9 = symbols[Math.floor(Math.random() * symbols.length)];
    let rand0 = symbols[Math.floor(Math.random() * symbols.length)];
    let rand11 = symbols[Math.floor(Math.random() * symbols.length)];
    let out = rand + rand1 + rand2 + rand3 + rand4 + rand5 + rand6 + rand7 + rand8 + rand9 + rand0 + rand11;

    document.getElementById("numberFin").innerHTML = out;
}
