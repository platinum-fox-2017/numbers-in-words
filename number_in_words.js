function numberToWords(num) {
  let satuan = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan',
                'sembilan', 'sepuluh', 'sebelas', 'dua belas', 'tiga belas', 'empat belas',
                'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas']
  let puluhan = ['','','dua puluh', 'tiga puluh', 'empat puluh', 'lima puluh', 'enam puluh', 'tujuh puluh', 'delapan puluh', 'sembilan puluh']

  let tempWords = ''
  if (num < 20) {
    tempWords = satuan[num]
  }

  else if (num < 100) {
    tempWords = puluhan[Math.floor(num/10)]
    if (num%10) {
      tempWords += ' ' + satuan[num%10]
    }
  }

  else if (num < 1000) {
    tempWords = satuan[Math.floor(num/100)] + ' ratus ' + numberToWords(num%100)

    //RELEASE 0 WITHOUT RECURSIVE

    // if (num%100) {
    //   tempWords += ' ratus ' + puluhan[Math.floor((num%100) /10) | 0]
    // }
    // if (num%10) {
    //   tempWords += ' ' + satuan[num%10]
    // }
  }

  else if (num < 10000) {
    tempWords = satuan[Math.floor(num/1000)] + ' ribu ' + numberToWords(num%1000)
  }

  else if (num < 100000) {
    tempWords = puluhan[Math.floor(num/10000)] +' '+ numberToWords(num%10000)
  }

  else if (num < 1000000) {
    tempWords = satuan[Math.floor(num/100000)] + ' ratus ' + numberToWords(num%100000)
  }





  return tempWords
}


// console.log(numberToWords(765));


// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
