// Buat kamus one Digits dan Twodigits untuk menentukan angka depan
// Buat kamus multiplier untuk kelipatan 10 100 1000 
// Gunakan rekursif untuk pengurangan numbernya

function numberToWords(number) {
  
  let oneDigits = ['', 'satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan'] 
  // let twoDigitsBelas = ['sepuluh', 'sebelas','duabelas','tigabelas','empatbelas','limabelas','enambelas','tujuhbelas','delapanbelas','sembilanbelas']
  let oneMultiplier = ['se','se', 'dua','tiga','empat','lima','enam','tujuh','delapan','sembilan']
  let multiplier = ['belas','satu ', 'puluh', 'ratus', 'ribu','puluh','ratus','juta','puluh','ratus','trilliun']

  if(number === 0 ){
    return ''
  }else{
    let numbString = String(number)
    
    // Check Angka 1
    if(numbString.length < 2){
      
      return oneDigits[number] + numberToWords(number - number)
      // Check belas
    }else if(Number(numbString[0]) === 1 && numbString.length === 2){
      if(number - 10 === 0){
        return oneMultiplier[number-10] + multiplier[2] +  numberToWords (number - number) + " "
      }else{
        return oneMultiplier[number-10] + multiplier[0] +  numberToWords (number - number) + " "
      }
    // Ratusan untuk yang angkadepan 1
    }else if(Number(numbString[0]) === 1 && numbString.length > 2){
      
      let angkaDepan = Number(numbString[0])
      let multiply = Math.pow(10,numbString.length-1)
      let pengurangan = number - (angkaDepan*multiply)
      
      return oneMultiplier[0] + multiplier[numbString.length] + " " + numberToWords(pengurangan)
    }
    // Puluhan selain angka depan 1
    if(numbString.length > 1){
      
      let angkaDepan = Number(numbString[0])
      let multiply = Math.pow(10,numbString.length-1)
      let pengurangan = number - (angkaDepan*multiply)
      
      return oneDigits[angkaDepan] + " " + multiplier[numbString.length] + " " + numberToWords(pengurangan)
    }
    
  }
}

// Driver cod

console.log(numberToWords(19999));
// console.log(numberToWords(1000000));
// console.log(numberToWords(2011845));


