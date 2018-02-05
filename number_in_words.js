// buat list angka dari satu sampai sebelas
// jika number sama dengan 

function numberToWords(number) {
  let dictionary = ['','satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan','sembilan', 'sepuluh','sebelas'];
      if(number < 12){
        return dictionary[number]
      }else if(number<20){
        return dictionary[number%10]+' belas'
      }else if (number < 100){
        return dictionary[Math.floor(number/10)]+' puluh ' + dictionary[number%10]
      }else if(number < 200){
        return 'seratus '+numberToWords(number%100)
      }else if(number <1000){
        return dictionary[Math.floor(number/100)]+' ratus '+numberToWords(number%100)
      }
}

// Driver code
console.log(numberToWords(999));
// console.log(numberToWords(705));
// console.log(numberToWords(1000000));
// console.log(numberToWords(2011845));
