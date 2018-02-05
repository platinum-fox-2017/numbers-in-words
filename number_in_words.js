function numberToWords(number) {
  // Your code here
  number = String(number);
  if(number === ''){
     return '';   
   }
   var angkaSatuan = {satu: 1,dua: 2, tiga: 3,empat: 4,lima: 5, enam: 6, tujuh: 7, delapan: 8, sembilan: 9};
   var variasiAngkaSatu = {sepuluh: 10, seratus: 100, seribu: 1000, sejuta: 1000000}
   var variasiSebutanBelakang = {ratus: 3,puluh: 2}
   var angkaDepan = '';
  for ( i in angkaSatuan ) {
    if( number[0] == angkaSatuan[i] ) {
       angkaDepan = i;
    }
  }
  var word = '';
  word = angkaDepan;
  for ( i in variasiSebutanBelakang ) {
    if( number.length == variasiSebutanBelakang[i] ) {
      word = angkaDepan + ' ' +  i + ' ';
      if(number[0] == 1 && number[1] == 1){
          word = 'sebelas';    
          number = number.slice(2);
          return word + numberToWords(number);
      }
      if(number[0] == 1 && number[1] != 1){
          for ( j in angkaSatuan ) {
            if( number[1] == angkaSatuan[j] ) {
               angkaDepan = j;
            }
          }
          word = angkaDepan + ' belas ';    
          number = number.slice(2);
          return word + numberToWords(number);
      }
    }
  }
  number = number.slice(1);
  return word + numberToWords(number);

    
}

// Driver code
console.log(numberToWords(21)); //tuju ratus 5
console.log(numberToWords(999)); // satu juta
console.log(numberToWords(931)); // satu juta
console.log(numberToWords(911)); // satu juta
console.log(numberToWords(913)); // satu juta
console.log(numberToWords(13)); // dua juta dua ratus sebelas ribu delapan ratus empat puluh lima 
console.log(numberToWords(11)); // dua juta dua ratus sebelas ribu delapan ratus empat puluh lima 
