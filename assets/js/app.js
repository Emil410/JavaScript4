var alphabet = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var RandomLetters = "";
for (var i = 0; i < 8; i++) {
    var randomIndex = Math.floor(Math.random() * 36);
    RandomLetters = RandomLetters + alphabet[randomIndex];
};
console.log(RandomLetters);