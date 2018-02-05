//release 2 --> 1-999 trillion (999.000.000.000.000)

function numberToWords(number) {
  // Your code here
  const satuan = ["","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh","sebelas"]
  const akhiran = ["belas","puluh","ratus","ribu","juta","milyar","trillion"]
  const spesialNum = ["seratus","seribu"]

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
  else if(number >99 && number<200 && numberStr[0] == 1){
      return `${spesialNum[0]} ${numberToWords(number%100)}`
  }
  //cek angka 200-1000
  else if(number < 1000){
    return `${satuan[(number-(number%100))/100]} ${akhiran[2]} ${numberToWords(number%100)}`
  }
  //cek angka 1000-2000
  else if(number <2000){
    return `${spesialNum[1]} ${numberToWords(number%1000)}`
  }
  else if(number <10000){
    return `${satuan[(number-(number%1000))/1000]} ${akhiran[3]} ${numberToWords(number%1000)}`
  }
  //cek angka 10000-20000
  else if(number<20000){
    return `${satuan[((number-(number%1000))/1000)%10]} ${akhiran[0]} ${akhiran[3]} ${numberToWords(number%1000)} `
  }
  else if(number<100000){
    return `${satuan[(number-(number%10000))/10000]} ${akhiran[1]} ${numberToWords(number%10000)} `
  }
  //cek angka 100ribu-
  else if(number<200000){
    return `${spesialNum[0]} ${numberToWords(number%100000)} `
  }
  else if(number<1000000){
    return `${satuan[(number-(number%100000))/100000]} ${akhiran[2]} ${numberToWords(number%100000)} `
  }
  //cek angka 1juta-10jt
  else if(number<10000000){
    return `${satuan[(number-(number%1000000))/1000000]} ${akhiran[4]} ${numberToWords(number%1000000)} `
  }
  // cek angka 10juta -20jt
  else if(number<20000000){
    return `${satuan[((number-(number%1000000))/1000000)%10]} ${akhiran[0]} ${akhiran[4]} ${numberToWords(number%1000000)} `
  }
  // cek angka 20juta -100jt
  else if(number<100000000){
    return `${satuan[(number-(number%10000000))/10000000]} ${akhiran[1]} ${numberToWords(number%10000000)} `
  }
  // cek angka 100jt-200jt
  else if(number<200000000){
    return `${spesialNum[0]} ${numberToWords(number%100000000)} `
  }
  // cek angka 200jt-1M
  else if(number<1000000000){
    return `${satuan[(number-(number%100000000))/100000000]} ${akhiran[2]} ${numberToWords(number%100000000)} `
  }
  // cek angka 1 milyar-12
  else if(number<12000000000){
    return `${satuan[(number-(number%1000000000))/1000000000]} ${akhiran[5]} ${numberToWords(number%1000000000)} `
  }
  // cek angka 12-20 milyar
  else if(number<20000000000){
    return `${satuan[((number-(number%1000000000))/1000000000)%10]} ${akhiran[0]} ${akhiran[5]} ${numberToWords(number%1000000000)} `
  }
  // cek angka 20-100 milyar
  else if(number<100000000000){
    return `${satuan[((number-(number%10000000000))/10000000000)]} ${akhiran[1]} ${numberToWords(number%10000000000)} `
  }
  // cek angka 100m-200m
  else if(number<200000000000){
    return `${spesialNum[0]} ${numberToWords(number%100000000000)} `
  }
  // cek angka 200-1T
  else if(number<1000000000000){
    return `${satuan[((number-(number%100000000000))/100000000000)]} ${akhiran[2]} ${numberToWords(number%100000000000)} `
  }
  // cek angka 1 T-12
  else if(number<12000000000000){
    return `${satuan[(number-(number%1000000000000))/1000000000000]} ${akhiran[6]} ${numberToWords(number%1000000000000)} `
  }
  // cek angka 12-20 T
  else if(number<20000000000000){
    return `${satuan[((number-(number%1000000000000))/1000000000000)%10]} ${akhiran[0]} ${akhiran[6]} ${numberToWords(number%1000000000000)} `
  }
  // cek angka 20-100 T
  else if(number<100000000000000){
    return `${satuan[((number-(number%10000000000000))/10000000000000)]} ${akhiran[1]} ${numberToWords(number%10000000000000)} `
  }
  // // cek angka 100T-200T
  else if(number<200000000000000){
    return `${spesialNum[0]} ${numberToWords(number%100000000000000)} `
  }
  // // cek angka 200-1Q
  else if(number<1000000000000000){
    return `${satuan[((number-(number%100000000000000))/100000000000000)]} ${akhiran[2]} ${numberToWords(number%100000000000000)} `
  }
}

// console.log(15000/1000)
// Driver code
// console.log(numberToWords(4));//empat
// console.log(numberToWords(14));//empat belas
// console.log(numberToWords(27));//dua puluh tujuh
// console.log(numberToWords(114));// 
// console.log(numberToWords(128));//
// console.log(numberToWords(705));// tujuh ratus lima
// console.log(numberToWords(715));// 
// console.log(numberToWords(678));
console.log(numberToWords(115985));
console.log(numberToWords(963676765346900));
// console.log(numberToWords(1000000));// satu juta
// console.log(numberToWords(2011845)); // dua juta sebelas ribu delapan ratus empat puluh lima
