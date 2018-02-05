function numberToWords(number) {
  var satuan = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];
  var pecahan = ['', '', 'puluh', 'ratus', 'ribu', 'ribu', 'ribu', 'juta', 'juta', 'juta', 'miliar', 'miliar', 'miliar', 'triliun', 'triliun', 'triliun'];
  var pembagi = [0, 1, 10, 100, 1000, 1000, 1000, 1000000, 1000000, 1000000, 1000000000, 1000000000, 1000000000, 1000000000000, 1000000000000, 1000000000000];

  var digit = number.toString().length;
  var jumlahNol = pembagi[digit];
  var bilangan = pecahan[digit];
  var result = '';

  if(number <= 11) {
    result += satuan[number];
  } else if(number < 20) {
    result += numberToWords(number-10) + ' belas';
  } else {
    // console.log(Number(number/jumlahNol));
    // console.log(jumlahNol);
    result += numberToWords(Number(Math.floor(number/jumlahNol))) + ' ' + bilangan + ' ' + numberToWords(number%jumlahNol);
  }

  return result;
}

// Driver code
console.log(numberToWords(4));
console.log(numberToWords(13));
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(11845));
console.log(numberToWords(11));
console.log(numberToWords(999000000000000))