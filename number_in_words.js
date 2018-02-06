function notasiCurrency(number){
  var currWords = [
                    ['', 1], ['ribu ', 4], ['juta ', 7],
                    ['milyar ', 10], ['trillion ', 13]
                  ];
  let numberStr = String(Number(number));
  let digitLength = numberStr.length;
  if(digitLength === 0){
    return currWords[0][0];
  }
  for (var i = currWords.length-1; i >= 0; i--) {
    if(digitLength >= currWords[i][1]) {
      var notasiAcc = currWords[i][0];
      return notasiAcc;
    }
  }
}

function basicNumberToWord(number){
  var pecahan = ['', 'puluh ', 'ratus '];
  var angka = ['satu', 'dua ', 'tiga ', 'empat ', 'lima ', 'enam ', 'tujuh ', 'delapan ', 'sembilan ', 'sepuluh '];
  let numberStr = String(Number(number));
  let digitLength = numberStr.length;
  if(digitLength > 1){
    angka.splice(0, 1, 'se');
  } else {
    angka.splice(0, 1, 'satu ');
  }

  if (numberStr === '0'){
    return '';
  }
  var numberReduc;
  var angkaWord = angka[Number(numberStr[0]-1)]

  if(digitLength === 2 && numberStr[0] === '1'){ // belasan
    if(numberStr[1] === '0'){ // 10
      numberReduc = numberStr.split('').slice(2).join('');
      return angka[0]+ pecahan[digitLength-1];
    } else {
      pecahan.splice(1, 1, 'belas ');
      numberReduc = numberStr.split('').slice(2).join('');
      return angka[Number(numberStr[1]-1)] + pecahan[digitLength-1];
    }
  } else {
    numberReduc = numberStr.split('').slice(1).join('');
    return angkaWord + pecahan[digitLength-1] + basicNumberToWord(numberReduc);
  }
}

function numberToWords(number){
  var notasiAcc = notasiCurrency(number);
  var threeDigit;
  var newNumber;
  var numLength = String(number).length;
  if (numLength === 0) {
    return '';
  }
  if (numLength % 3 === 0) {
    threeDigit = String(number).substr(0, 3);
    newNumber = String(number).substr(3);
  } else {
    var remain = numLength % 3;
    threeDigit = String(number).substr(0, remain);
    newNumber = String(number).substr(remain);
  }
  return basicNumberToWord(threeDigit) + notasiAcc  + numberToWords(newNumber);
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(12004));
console.log(numberToWords(2011845));
console.log(numberToWords(150000000));
console.log(numberToWords(10000));
console.log(numberToWords(999000));
