let oneDigits = ['', 'satu ', 'dua ', 'tiga ', 'empat ', 'lima ', 'enam ', 'tujuh ', 'delapan ', 'sembilan ', 'sepuluh '];
let twoDigits = ['', 'se', 'dua ', 'tiga ', 'empat ', 'lima ', 'enam ', 'tujuh ', 'delapan ', 'sembilan ', 'sepuluh '];
let manyDigits = ['', 'belas ', 'puluh ', 'ratus ', 'ribu ', 'puluh ', 'ratus ', 'juta ', 'puluh ', 'ratus ', 'miliar ', 'puluh ', 'ratus ', 'triliun ', 'puluh ', 'ratus '];

function numberToWords(angka) {
  var arrNumberToString = (String(angka)).split('');
  // console.log(arrNumberToString.length)
  var totalNumber = arrNumberToString.length;

  if (totalNumber == 1 || (totalNumber == 2 && arrNumberToString[0] == '1')) {
    //satuan atau belasan
    return totalNumber == 1 ? oneDigits[angka] : twoDigits[arrNumberToString[1]] + manyDigits[1];
  } else {
    // satu juta, satu miliar, dan satu triliun
    var numbers = arrNumberToString.length === 7 || arrNumberToString.length === 10 || arrNumberToString.length == 13 ?
      oneDigits[arrNumberToString[0]] : twoDigits[arrNumberToString[0]];
    var results = numbers + manyDigits[totalNumber];

    arrNumberToString.shift();
    var newAngka = parseInt(arrNumberToString.join(''));

    var additionalResults = numberToWords(newAngka);

    return results + additionalResults;
  }
}

// // Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));

//bug
console.log(numberToWords(10))
console.log(numberToWords(11000))
console.log(numberToWords(1010101))