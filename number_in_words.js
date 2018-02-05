function numberToWords(num) {
  let numbersWords = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas']

  if (num < 12) {
    return numbersWords[num]
  } else if (num < 20) {
    return numberToWords(num % 10) + ' belas';
  } else if (num < 100) {
    return numberToWords(Math.floor(num / 10)) + ' puluh ' + numberToWords(num % 10)
  } else if (num < 200) {
    return 'seratus ' + numberToWords(Math.floor(num % 100))
  } else if (num < 1000) {
    return numberToWords(Math.floor(num / 100)) + ' ratus ' + numberToWords(num % 100)
  } else if (num < 2000) {
    return 'seribu ' + numberToWords(Math.floor(num % 1000))
  } else if (num < 100000) {
    return numberToWords(Math.floor(num / 1000)) + ' ribu ' + numberToWords(num % 1000)
  } else if (num < 200000) {
    return 'seratus ' + numberToWords(num % 100000)
  } else if (num < 1000000) {
    return numberToWords(Math.floor(num / 100000)) + ' ratus ' + numberToWords(num % 100000)
  } else if (num < 1000000000) {
    return numberToWords(Math.floor(num / 1000000)) + ' juta ' + numberToWords(num % 1000000)
  } else if (num < 1000000000000) {
    return numberToWords(Math.floor(num / 1000000000)) + ' miliyar ' + numberToWords(num % 1000000000)
  } else if (num < 1000000000000000) {
    return numberToWords(Math.floor(num / 1000000000000)) + ' triliun ' + numberToWords(num % 1000000000000)
  }
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
