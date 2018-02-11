function numberToWords(number) {
  var num = number.toString()
  var len = num.length
  var satuan = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas']
  var kata = ""

  if(number === 0){
    kata = ""
  }
  else if(number < 12){
    kata = satuan[number]
  }
  else if(len === 2){
    kata = satuan[Math.floor(number/10)] + ' puluh ' + satuan[num[1]]
    if(number < 20){
      kata = satuan[num[1]] + ' belas'
    }
  }
  else if(len === 3){
    kata = satuan[Math.floor(number/100)] + ' ratus ' + numberToWords(number%100)
    if(number < 200){
      kata = 'seratus ' + numberToWords(number - 100)
    }
  }
  else if(len === 4){
    kata = numberToWords(Math.floor(number/1000)) + ' ribu ' + numberToWords(number%1000)
    if(number < 2000){
      kata = 'seribu ' + numberToWords(number - 1000)
    }
  }
  else if(len === 5 || len === 6){
    kata = numberToWords(Math.floor(number/1000)) + ' ribu ' + numberToWords(Number(num.slice(-3)))
  }
  else if(len === 7 || len === 8){
    kata = numberToWords(Math.floor(number/1000000)) + ' juta ' + numberToWords(Number(num.slice(-6)))
  }
  else if(len === 9){
    kata = numberToWords(Math.floor(number/1000000)) + ' juta ' + numberToWords(Number(num.slice(-6)))
  }
  else if(9 < len <= 12){
    kata = numberToWords(Math.floor(number/1000000000)) + ' milyar ' + numberToWords(Number(num.slice(-9)))
  }
  else if(12 < len <= 15){
    kata = numberToWords(Math.floor(number/1000000000000)) + ' trilyun ' + numberToWords(Number(num.slice(-12)))
  }

  return kata
}

// Driver code
console.log(numberToWords(9999999999999));
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
