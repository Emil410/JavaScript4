var alphabet = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m",];
var RandomLetters = [];
for (var i = 0; i < 4; i++) {
    var randomIndex = Math.floor(Math.random() * 26);
    RandomLetters = RandomLetters + alphabet[randomIndex];
}
var randomNumber = Math.floor(1000 + Math.random() * 9999);
console.log(RandomLetters + randomNumber);