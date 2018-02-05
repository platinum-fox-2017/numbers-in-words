var listNumberandWord = [
    {number: 1, word : 'satu'},
    {number: 2, word : 'dua'},
    {number: 3, word : 'tiga'},
    {number: 4, word : 'empat'},
    {number: 5, word : 'lima'},
    {number: 6, word : 'enam'},
    {number: 7, word : 'tujuh'},
    {number: 8, word : 'delapan'},
    {number: 9, word : 'sembilan'},
    {number: 10, word : 'sepuluh'},
    {number: 11, word : 'sebelas'},
    {number: 12, word : 'dua belas'},
    {number: 13, word : 'tiga belas'},
    {number: 14, word : 'empat belas'},
    {number: 15, word : 'lima belas'},
    {number: 16, word : 'enam belas'},
    {number: 17, word : 'tujuh belas'},
    {number: 18, word : 'delapan belas'},
    {number: 19, word : 'sembilan belas'}
  ];

function numberToWords(number) {
  var result = '';

	while (number > 0) {
		if (number < 20) {
			for (var i = 0; i < listNumberandWord.length; i++) {
				if (listNumberandWord[i].number == number) {
					result += listNumberandWord[i].word;
					number -= listNumberandWord[i].number;
				}
			}
		} else if (number < 100) {
			for (var i = 8; i >= 2; i--) {
				if (listNumberandWord[i].number == Math.floor(number/10)) {
					result += listNumberandWord[i].word + ' puluh ';
					number %= 10;
					break;
				}
			}
		} else if (number == 100) {
			result += ' seratus ';
			number %= 100;
			break;
		} else if (number < 1000) {
			for (var i = 8; i >= 2; i--) {
				if (listNumberandWord[i].number == Math.floor(number/100)) {
					result += listNumberandWord[i].word + ' ratus ';
					number %= 100;
					break;
				}
			}
		}
	}

  return result;
}

// Driver code
console.log(numberToWords(1));
console.log(numberToWords(12));
console.log(numberToWords(55));
console.log(numberToWords(999));
// console.log(numberToWords(1000000));
// console.log(numberToWords(2011845));
