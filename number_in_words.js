// Buat kamus one Digits dan Twodigits untuk menentukan angka depan
// Buat kamus multiplier untuk kelipatan 10 100 1000 
// Gunakan rekursif untuk pengurangan numbernya

function numberToWords(number) {
  let satuan = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh', 'sebelas']

  if(number < 12){
    return satuan[number]
  }else if(number < 20){
    return numberToWords(number % 10) + "belas"
  }else if(number < 100){
    return numberToWords(Math.floor(number/ 10)) + " puluh " + numberToWords(number%10)
  }else if(number < 200){
    return "seratus " + numberToWords(number % 100)
  }else if(number < 1000){
    return numberToWords(Math.floor(number/100)) + " ratus " + numberToWords(number%100)
  }else if(number < 2000){
    return "seribu " + numberToWords(number % 1000)
  }else if(number < 1000000){
    return numberToWords(Math.floor(number/1000)) + " ribu " + numberToWords(number%1000)
  } else if(number < 1000000000){
    return numberToWords(Math.floor(number/1000000)) + " juta " + numberToWords(number%1000000)
  } else if(number < 1000000000000){
    return numberToWords(Math.floor(number/1000000000)) + " milliar " + numberToWords(number%1000000000)
  }else if(number < 1000000000000000){
    return numberToWords(Math.floor(number/1000000000000)) + " trilliun " + numberToWords(number%1000000000000)
  }
}

function trimming(numb){
  let convert = numberToWords(numb)
  let wordsSplit = convert.split(" ")
  const newArrayWords = wordsSplit.filter(word=>{
    if(word !== ""){
      return word
    }
  })

  return newArrayWords.join(" ")
}

// Driver cod

// console.log(numberToWords(4));
// console.log(numberToWords(12));
// console.log(numberToWords(24));
// console.log(numberToWords(114));
// console.log(numberToWords(914));
// console.log(numberToWords(1121));
// console.log(numberToWords(212222));
console.log(trimming(1200000));
console.log(trimming(1200000000));

























// let oneDigits = ['', 'satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan'] 
//   // let twoDigitsBelas = ['sepuluh', 'sebelas','duabelas','tigabelas','empatbelas','limabelas','enambelas','tujuhbelas','delapanbelas','sembilanbelas']
//   let oneMultiplier = ['se','sebelas', 'duabelas','tigabelas','empatbelas','limabelas','enambelas','tujuhbelas','delapanbelas','sembilanbelas']
//   let multiplier = ['puluh','puluh', 'ratus', 'ribu','puluh','ratus', 'ribu','juta','puluh','ratus', 'ribu','trilliun','puluh','ratus','ribu']



// let numbString = String(number)
    
    // // Check Angka 1
    // if(numbString.length < 2){
      
    //   return oneDigits[number] + numberToWords(number - number)
    // // Ratusan untuk yang angkadepan 1
    // }else if(Number(numbString[0]) === 1 && numbString.length > 1){
    //   let length = numbString.length
      
    //   let depan = Math.floor(number / Math.pow(10,numbString.length-2))

    //   let angkaDepan = Number(numbString.slice(0,2))
    //   let multiply = Math.pow(10,numbString.length-2)
      
    //   let pengurangan = number - (angkaDepan*multiply)
      
    //   if(numbString.length > 2){
        
    //     return oneMultiplier[depan-10] + " " + multiplier[numbString.length+1] + " " + numberToWords(pengurangan)
    //   }else{
        
    //     return oneMultiplier[depan-10]
    //   } 
    // }
    // // Puluhan selain angka depan 1
    // if(numbString.length > 1){
      
    //   let angkaDepan = Number(numbString[0])
    //   let multiply = Math.pow(10,numbString.length-1)
    //   let pengurangan = number - (angkaDepan*multiply)
      
    //   console.log(angkaDepan*multiply)
      
    //   return oneDigits[angkaDepan] + " " + multiplier[numbString.length-1] + " " + numberToWords(pengurangan)
    // }