function numberToWords(number) {
  // Your code here 1-99
  var arrAngka = [1,2,3,4,5,6,7,8,9,10,11]
  var arrBilangan = ['satu ','dua ','tiga ','empat ','lima ','enam ','tujuh ','delapan ','sembilan ','sepuluh ','sebelas ']
  var text = ''

  //RELEASE 0
  //1-11
  if(number<=11 && number>=1) text += arrBilangan[number-1]
  //12-19
  if(number<=19 && number>=12) text += arrBilangan[(number%10)-1] + 'belas '
  //20-99
  if(number<=99 && number>=20) {
    text += arrBilangan[Math.floor(number/10)-1] + 'puluh '
    return text + (numberToWords((number%10)))
  }
  //100-999
  if(number<=999 && number>=100) {
    if(Math.floor(Math.floor(number/100)) == 1) {
      text += 'seratus '
      return text + numberToWords(number-=100)
    } else {
      text += arrBilangan[Math.floor(number/100)-1] + 'ratus '
      return text + numberToWords(number%100)
    }
  }

  //RELEASE 2
  if(Math.floor(number/1000) == 1)
  return 'seribu ' + numberToWords(Math.floor(number%1000))

  if(Math.floor(number/1000) > 1 && Math.floor(number/1000) <= 99)
  return numberToWords(Math.floor(number/1000)) + 'ribu ' + numberToWords(Math.floor(number%1000))

  if(Math.floor(number/1000) > 100 && Math.floor(number/1000) <= 999)
  return numberToWords(Math.floor(number/1000000)) + numberToWords(Math.floor(number/1000)) + 'ribu ' + numberToWords(Math.floor(number%1000))

  if(Math.floor(number/1000000) >= 1 && Math.floor(number/1000000) <= 999)
  return numberToWords(Math.floor(number/1000000)) + 'juta ' + numberToWords(Math.floor(number%1000000))

  if(Math.floor(number/1000000000) >= 1 && Math.floor(number/1000000000) <= 999)
  return numberToWords(Math.floor(number/1000000000)) + 'miliyar ' + numberToWords(Math.floor(number%1000000000))

  if(Math.floor(number/1000000000000) >= 1 && Math.floor(number/1000000000000) <= 999)
  return numberToWords(Math.floor(number/1000000000000)) + 'triliun ' + numberToWords(Math.floor(number%1000000000000))

  return text
}

// Driver code!
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));

console.log(numberToWords(999000000000000));
