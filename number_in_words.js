
  // 705
  // tujuh, ratus
  // 05
  // lima
  // if length is < 6

function numberToWords(number) {

  if(number === 0){
    return '';
  }

  var converted = [];
  var numbersWords = ['satu', 'dua ', 'tiga ', 'empat ', 'lima ', 'enam ', 'tujuh ', 'delapan ', 'sembilan '];
  var digitsWords = ['', 'puluh', 'ratus'];
  var digitsWordsSecondary = ['', 'ribu', 'juta', 'milyar', 'trillion'];
  var output = [];
  var numberStr = String(number);

  // numbers + digitsWords
  var startNumber = Number(numberStr[0]);
  var belasNumber = Number(numberStr[1]);
  var digitLength = String(Number(numberStr)).length;

  var notasiAcc;
  if (digitLength >= 1 && digitLength < 4){
    notasiAcc = digitsWordsSecondary[0]; // ''
  } else {
    if (digitLength >= 4 && digitLength < 7){
      notasiAcc = digitsWordsSecondary[1]; // ribu
    } else {
      if (digitLength >= 7 && digitLength < 10){
        notasiAcc = digitsWordsSecondary[2]; // juta
      } else {
        if (digitLength >= 10 && digitLength < 13){
          notasiAcc = digitsWordsSecondary[3]; // milyar
       } else {
          if (digitLength >= 13 && digitLength < 16){
            notasiAcc = digitsWordsSecondary[4]; // ribu
          }
        }
      }
    }
  }

  // jika digitLength > 1, satu jadi 'se'
  if(digitLength > 1){
    numbersWords.splice(0, 1, 'se');
  } else {
    numbersWords.splice(0, 1, 'satu');
  }

  // jika posisi 2 dan start number is 1 then puluh menjadi 'belas'
  if((digitLength+1) % 3 === 0 && startNumber === 1 && belasNumber != 0){
    digitsWords.splice(1, 1, 'belas');
  } else {
    digitsWords.splice(1, 1, 'puluh');
  }

  if(digitLength % 3 === 0){
    // add number + ratus
    converted.push(numbersWords[startNumber-1] + digitsWords[2]);
    output = converted.join(' ');
    leftover = Number(numberStr.substr(1));
    return output + ' ' + numberToWords(leftover);
  } else {
    if((digitLength+1) % 3 === 0){
      // add belas exception
      if (startNumber === 1 && belasNumber >= 2 ){ // number-belas execption return asap
        converted.push(numbersWords[startNumber] + digitsWords[1]);
        converted.push(notasiAcc);
        output = converted.join(' ');
        leftover = Number(numberStr.substr(2));
        return output + ' ' + numberToWords(leftover);
      } else {
        if (startNumber === 1 && belasNumber === 1   ){ // number-belas execption return asap
          converted.push(numbersWords[startNumber-1] + digitsWords[1]);
          converted.push(notasiAcc);
          output = converted.join(' ');
          leftover = Number(numberStr.substr(2));
          return output + ' ' + numberToWords(leftover);
        } else {
          if (startNumber === 1 && belasNumber === 0  ){ // number-belas execption return asap
            converted.push(numbersWords[startNumber-1] + digitsWords[1]);
            converted.push(notasiAcc);
            output = converted.join(' ');
            leftover = Number(numberStr.substr(2));
            return output + ' ' + numberToWords(leftover);
          } else {
            // add number + puluh
            converted.push(numbersWords[startNumber-1] + digitsWords[1]);
            converted.push(notasiAcc);
            output = converted.join(' ');
            leftover = Number(numberStr.substr(1));
            return output + ' ' + numberToWords(leftover);
          }


        }
      }

    } else {
      // add number + ''
      converted.push(numbersWords[startNumber-1] + digitsWords[0]);
      converted.push(notasiAcc);
      output = converted.join('');
      leftover = Number(numberStr.substr(1));
      return output + ' ' + numberToWords(leftover);
    }
  }

  // converted.push(notasiAcc);
  output = converted.join(' ');
  leftover = Number(numberStr.substr(1));
  return output + ' ' + numberToWords(leftover);
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
console.log(numberToWords(150000000));
console.log(numberToWords(10000));
console.log(numberToWords(999000));
