var emptyString = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz";
function getRandomLetter() {
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}
var randomLetter;

for (i = 0; i < alphabet.length ; i++) {
  randomLetter = getRandomLetter();
  emptyString = randomLetter;
} 
console.log(emptyString);

var wins = 0;
var loses = 0;
var Guess = 9;

document.onkeyup = function(event) {
console.log(onkeyup);

	function searchSwap () {
		for (var i = 0; i < alphabet.length ; i++);{
			if ( userGuess === alphabet[i]);{
				return alphabet[Math.floor(Math.random() * alphabet.length)];{

				}
			}
		}
	}
}


