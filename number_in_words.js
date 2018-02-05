function numberToWords(number) {
  var angkaWords = [['ribu', 1000],
                    ['ratus', 100],
                    ['puluh',10],
                    ['sembilan', 9],
                    ['delapan', 8],
                    ['tujuh', 7], 
                    ['enam', 6], 
                    ['lima', 5], 
                    ['empat', 4], 
                    ['tiga', 3], 
                    ['dua',2],
                    ['satu',1]];

  var strBalikan = '';

  if (number <= 0) {
    return strBalikan;
  } else {
    var angkaWordsTerbesar = 0;
    var strPosisi = ''
    for (var i = 0; i < angkaWords.length; i++) {
      if (number >= angkaWords[i][1]) {
        if (angkaWords[i][1] > angkaWordsTerbesar ) {
          angkaWordsTerbesar = angkaWords[i][1];
          strPosisi = angkaWords[i][0];
        }
      }
    }

    if (number > 10 && number < 20) {
      var bilangan = Math.floor(number - angkaWordsTerbesar);
      for (i = 0; i < angkaWords.length; i++) {
        if (bilangan == angkaWords[i][1]) {
          strBilangan = angkaWords[i][0] + ' belas';
          strPosisi   = '';
        }
      }
      strBalikan = strBalikan + ' ' + strBilangan + ' ' + strPosisi;
      number = 0;
      return strBalikan + numberToWords(number);
    } else {
      var bilangan = Math.floor(number / angkaWordsTerbesar);
      
      var strBilangan = '';
  
      if (bilangan > 1) {
        for (i = 0; i < angkaWords.length; i++) {
          if (bilangan == angkaWords[i][1]) {
            strBilangan = angkaWords[i][0]
          }
        }
  
        number = number - (bilangan * angkaWordsTerbesar);
  
      } else {
        for (i = 0; i < angkaWords.length; i++) {
          if (angkaWordsTerbesar == angkaWords[i][1]) {
            if (angkaWordsTerbesar <= 1000 && angkaWordsTerbesar >= 10) {
              strBilangan = 'se' + angkaWords[i][0];
              strPosisi = '';
            }
          }
        }
        number = number - angkaWordsTerbesar;
      }
      strBalikan = strBalikan + ' ' + strBilangan + ' ' + strPosisi;
      return strBalikan + numberToWords(number);
    }
  }

}

// Driver code
console.log(numberToWords(413));
// console.log(numberToWords(1000000));
// console.log(numberToWords(2011845));
