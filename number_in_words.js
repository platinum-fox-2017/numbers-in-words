function numberToWords(number) {
  // Your code here
  kata = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];

  // under 100
  if (number == 0){
    return ''
  } else if (number < 12){
    return kata[number]
  } else if (number < 20){
    return kata[number.toString()[1]] + ' belas '
  } else if (number < 100){
    return (kata[Math.floor(number/10)] + ' puluh ' + kata[number.toString()[1]]).trim()
  // under 2 ribu
  } else if (number < 200){
    return ('seratus ' + numberToWords(number-100)).trim()
  } else if (number < 1000){
    return (kata[Math.floor(number/100)] + ' ratus ' + numberToWords(Number(number.toString().slice(1)))).trim()
  } else if (number < 2000){
    return 'seribu ' + numberToWords(Number(number.toString().slice(1)))
    // under 100 rb
  } else if (number < 100000){
    return numberToWords(Math.floor(number/1000)) + ' ribu ' + numberToWords(Number(number.toString().slice(-3)))
    // under 1 juta
  } else if (number < 1000000){
    return numberToWords(Math.floor(number/1000)) + ' ribu ' + numberToWords(Number(number.toString().slice(-3)))
    // under 10 juta 
  } else if (number < 10000000){
    return numberToWords(Math.floor(number/1000000)) + ' juta ' + numberToWords(Number(number.toString().slice(-6)))
    // under 1 M
  } else if (number < 1000000000){
    return numberToWords(Math.floor(number/1000000)) + ' juta ' + numberToWords(Number(number.toString().slice(-6)))
    // under 1 T
  } else if (number < 1000000000000){
    return numberToWords(Math.floor(number/1000000000)) + ' miliar ' + numberToWords(Number(number.toString().slice(-9)))
    // up to 999 T
  } else if (number < 1000000000000000){
    return numberToWords(Math.floor(number/1000000000000)) + ' triliun ' + numberToWords(Number(number.toString().slice(-12)))
  }
} 

// Driver code
console.log(numberToWords(705)); // tujuh ratus lima
console.log(numberToWords(1000000)); // satu juta
console.log(numberToWords(2011845)); // dua juta sebelas ribu delapan ratus empat puluh lima
