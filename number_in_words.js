//release 1 --> 1-999 recursive
function numberToWords(number) {
  // Your code here
  const satuan = ["","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh","sebelas"]
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
    return `${satuan[(number-(number%10))/10]} ${akhiran[1]} ${numberToWords(number%10)}`
  }
  //cek angka 100-200 dan angka pertama =1
  else if(number >99 && numberStr[0] == 1){
      return `${spesialNum[0]} ${numberToWords(number%100)}`
    
  }
  //cek angka 200-1000
  else if(number < 1000){
    return `${satuan[(number-(number%100))/100]} ${akhiran[2]} ${numberToWords(number%100)}`
  }
}

// Driver code
console.log(numberToWords(4));//empat
console.log(numberToWords(14));//empat belas
console.log(numberToWords(27));//dua puluh tujuh
console.log(numberToWords(114));// 
console.log(numberToWords(128));//
console.log(numberToWords(705));// tujuh ratus lima
console.log(numberToWords(715));// 
console.log(numberToWords(678));
// console.log(numberToWords(1000000));// satu juta
// console.log(numberToWords(2011845)); // dua juta sebelas ribu delapan ratus empat puluh lima
