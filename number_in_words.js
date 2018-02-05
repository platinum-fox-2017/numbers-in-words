//release 0 --> 1-999
// buat dictionary
//
function numberToWords(number) {
  // Your code here
  const satuan = ["","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh","sebelas"]
  // const belasan = ["","sebelas","dua belas","tiga belas","empat belas","lima belas","enam belas","tujuh belas",
  //                 "delapan belas","sembilan belas"]
  // const puluhan =["","","dua puluh","tiga puluh","empat puluh","lima puluh","enam puluh","tujuh puluh","delapan puluh",
  //               "sembilan puluh"]
  const akhiran = ["belas","puluh","ratus"]
  const spesialNum = ["seratus"]

  let numberStr = number.toString()
  // console.log(numberStr[0])
  //cek angka kurang 11
  if(number<12){
    return satuan[number]
  }
  //cek angka kurang 20 
  else if(number >11 && number < 20){
    return `${satuan[number%10]} ${akhiran[0]}`
  }
  //cek angka 20-99
  else if(number < 100){
    return `${satuan[(number-(number%10))/10]} ${akhiran[1]} ${satuan[number%10]}`
  }
  //cek angka 100-200 dan angka pertama =1
  else if(number >99 && numberStr[0] == 1){
    if(numberStr[1] == 0){
      return `${spesialNum[0]} ${satuan[number%100]}`
    }else if (number%100 < 20){
      return `${spesialNum[0]} ${satuan[number%110]} ${akhiran[0]} `
    }else{
      return `${spesialNum[0]} ${satuan[((number-(number%10))/10)%10]} ${akhiran[1]} ${satuan[number%10]}`
    }
  }
  //cek angka 200-1000
  else if(number < 1000){
    if(numberStr[1]==0){
    return `${satuan[(number-(number%100))/100]} ${akhiran[2]} ${satuan[number%10]}`
    }else if(number%100 <20){
    return `${satuan[(number-(number%100))/100]} ${akhiran[2]} ${satuan[number%10]} ${akhiran[0]}`
    }
    else{
      return `${satuan[(number-(number%100))/100]} ${akhiran[2]} ${satuan[((number-(number%10))/10)%10]} ${akhiran[1]} ${satuan[number%10]}`
    }
    
  }

}

// Driver code
console.log(numberToWords(4));//empat
console.log(numberToWords(14));//empat belas
console.log(numberToWords(27));//dua puluh tujuh
console.log(numberToWords(114));// seratus dua
console.log(numberToWords(128));//
console.log(numberToWords(705));// tujuh ratus lima
console.log(numberToWords(715));// tujuh ratus lima
console.log(numberToWords(678));
// console.log(numberToWords(1000000));// satu juta
// console.log(numberToWords(2011845)); // dua juta sebelas ribu delapan ratus empat puluh lima
