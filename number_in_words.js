function angkaTerbilang(number) {
  // Your code here
  number = String(number);
  if(number === ''){
     return '';   
   }
   var angkaSatuan = {satu: 1,dua: 2, tiga: 3,empat: 4,lima: 5, enam: 6, tujuh: 7, delapan: 8, sembilan: 9};
   var variasiSebutanBelakang = {ratus: 3,puluh: 2}
   var angkaDepan = '';
  for ( i in angkaSatuan ) {
    if( number[0] == angkaSatuan[i] ) {
       angkaDepan = i;
    }
  }
  var word = '';
  word = angkaDepan;
  if(word != ''){ 
  for ( i in variasiSebutanBelakang ) {
    if( number.length == variasiSebutanBelakang[i] ) {
      word = angkaDepan + ' ' +  i + ' ';
      if(number[0] == 1 && number[1] == 0 && number.length == 2){
          word = 'sepuluh ';    
          number = number.slice(2);
          return word + angkaTerbilang(number);
      }
      if(number[0] == 1 && number[1] == 1 && number.length == 2){
          word = 'sebelas ';    
          number = number.slice(2);
          return word + angkaTerbilang(number);
      }
      if(number[0] == 1 && number[1] > 0 && number.length == 2){
          for ( j in angkaSatuan ) {
            if( number[1] == angkaSatuan[j] ) {
               angkaDepan = j;
            }
          }
          word = angkaDepan + ' belas ';    
          number = number.slice(2);
          return word + angkaTerbilang(number);
      }
      if(number[0] == 1  && number.length == 3){
          word = 'seratus ';    
          number = number.slice(1);
          return word + angkaTerbilang(number);
      }
    }
  }
  }
  number = number.slice(1);
  return word + angkaTerbilang(number);

    
}

function numberToWords(number){
    var number = String(number);
    if(number.length <= 3){
      return angkaTerbilang(number);    
    }
    if(number.length >= 4 &&  number.length <= 6){

      var ratusan =  angkaTerbilang(number.slice(number.length - 3, number.length )); 
      var ribuan = angkaTerbilang(number.slice(0,number.length - 3));
      if(ribuan == 'satu'){
       ribuan = 'seribu '    
      } else {
       ribuan = ribuan + ' ribu ';
      }
        return ribuan + ratusan;
    }
    if(number.length >= 7 &&  number.length <= 9){

      var ratusan =  angkaTerbilang(number.slice(number.length - 3, number.length )); 
      var ribuan = angkaTerbilang(number.slice(number.length - 6,number.length - 3));
      var jutaan  = angkaTerbilang(number.slice(0,number.length - 6));

      ribuan = ribuan + ' ribu ';
      if(ribuan == 'satu'){
       ribuan = 'seribu '    
      } else if(ribuan == ''){
        ribuan = '';
      }
      jutaan = jutaan + ' juta ';
      return jutaan + ribuan  + ratusan;
    }
    if(number.length >= 10 &&  number.length <= 12){

      var ratusan =  angkaTerbilang(number.slice(number.length - 3, number.length )); 
      var ribuan = angkaTerbilang(number.slice(number.length - 6,number.length - 3));
      var jutaan  = angkaTerbilang(number.slice(number.length - 9,number.length - 6));
      var miliaran  = angkaTerbilang(number.slice(0,number.length - 9));

      ribuan = ribuan + ' ribu ';
      if(ribuan == 'satu'){
       ribuan = 'seribu '    
      } else if(ribuan == ''){
        ribuan = '';
      }
      jutaan = jutaan + ' juta ';
      miliaran = miliaran + ' miliar ';
      return miliaran + jutaan + ribuan  + ratusan;
    }
    if(number.length >= 13 &&  number.length <= 15){

      var ratusan =  angkaTerbilang(number.slice(number.length - 3, number.length )); 
      var ribuan = angkaTerbilang(number.slice(number.length - 6,number.length - 3));
      var jutaan  = angkaTerbilang(number.slice(number.length - 9,number.length - 6));
      var miliaran= angkaTerbilang(number.slice(number.length - 12,number.length - 9));
      var triliun  = angkaTerbilang(number.slice(0,number.length - 12));

      ribuan = ribuan + ' ribu ';
      if(ribuan == 'satu'){
       ribuan = 'seribu '    
      } else if(ribuan == ''){
        ribuan = '';
      }
      jutaan = jutaan + ' juta ';
      miliaran = miliaran + ' miliar ';
      triliun = triliun + ' triliun ';
      return triliun + miliaran + jutaan + ribuan  + ratusan;
    }
}

// Driver code
console.log(numberToWords(17)); //tuju ratus 5
console.log(numberToWords(9990)); // satu juta
console.log(numberToWords(999099099)); // satu juta
console.log(numberToWords(5020549)); // satu juta
console.log(numberToWords(9999999999)); // satu juta
console.log(numberToWords(219999999999)); // satu juta
console.log(numberToWords(111219999999999)); // satu juta
