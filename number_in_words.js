var listNumberandWord = [
    {number: 1, word : 'satu '},
    {number: 2, word : 'dua '},
    {number: 3, word : 'tiga '},
    {number: 4, word : 'empat '},
    {number: 5, word : 'lima '},
    {number: 6, word : 'enam '},
    {number: 7, word : 'tujuh '},
    {number: 8, word : 'delapan '},
    {number: 9, word : 'sembilan '}
  ];

function numberToWords(number) {
	var strNumber = number.toString();

	if (number == 0) return '';
	if (strNumber.length == 1) return listNumberandWord[number - 1].word; else
	if (strNumber.length == 2) {
		if (number < 20) return belasan(number); else
		if (number < 100) return puluhan(number) + numberToWords(number % 10);
	} else
	if (strNumber.length == 3) return ratusan(number) + numberToWords(number % 100); else
	if (strNumber.length < 7) return ribuan(number) + numberToWords(number % 1000); else
	if (strNumber.length < 10) return jutaan(number) + numberToWords(number % 1000000); else
	if (strNumber.length < 13) return milyaran(number) + numberToWords(number % 1000000000); else
	if (strNumber.length < 16) return triliunan(number) + numberToWords(number % 1000000000000);
}

function belasan(number) {
	if (number % 10 == 1) return 'sebelas ';
	else return listNumberandWord[(number % 10) - 1].word + 'belas ';
}

function puluhan(number) {
	if (number / 10 == 1) return 'sepuluh ';
	else return listNumberandWord[Math.floor(number / 10) - 1].word + 'puluh ';
}

function ratusan(number) {
	if (Math.floor(number / 100) == 1) return 'seratus ';
	else return listNumberandWord[Math.floor(number / 100) - 1].word + 'ratus ';
}

function ribuan(number) {
	var ribu = Math.floor(number / 1000);
	if (ribu == 1) return 'seribu ';
	else return numberToWords(ribu) + 'ribu ';
}

function jutaan(number) {
	var juta = Math.floor(number / 1000000);
	return numberToWords(juta) + 'juta ';
}

function milyaran(number) {
	var milyar = Math.floor(number / 1000000000);
	return numberToWords(milyar) + 'milyar ';
}

function triliunan(number) {
	var trillion = Math.floor(number / 1000000000000);
	return numberToWords(trillion) + 'trillion ';
}

// Driver code
console.log(numberToWords(1));
console.log(numberToWords(12));
console.log(numberToWords(55));
console.log(numberToWords(100));
console.log(numberToWords(200));
console.log(numberToWords(111));
console.log(numberToWords(999));
console.log(numberToWords(1111));
console.log(numberToWords(111111));
console.log(numberToWords(2011845));
console.log(numberToWords(2011845000));
console.log(numberToWords(999000000000000));
