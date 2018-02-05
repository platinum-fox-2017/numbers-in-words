function numberToWords(number) {
  var data = [
    {num: 1, spell: 'satu'},
    {num: 2, spell: 'dua'},
    {num: 3, spell: 'tiga'},
    {num: 4, spell: 'empat'},
    {num: 5, spell: 'lima'},
    {num: 6, spell: 'enam'},
    {num: 7, spell: 'tujuh'},
    {num: 8, spell: 'delapan'},
    {num: 9, spell: 'sembilan'},
    {num: 10, spell: 'sepuluh'},
    {num: 11, spell: 'sebelas'},
  ];

  var length = [
    {length: 1, spell: 'puluh'},
    {length: 2, spell: 'ratus'},
    {length: 3, spell: 'ribu'},
    {length: 6, spell: 'juta'},
    {length: 9, spell: 'milyar'},
  ];

  if(number == 0){
    return '';
  }

  number = number.toString();

  //untuk handel belasan
  if(number.length == 2){
    if(number[0]==1){
      if(number[1]==1){
        return 'sebelas';
      }else{
        for (var i=data.length-1; i>=0; i--){
          if(number[1] == data[i].num){
            return data[i].spell + ' belas'
          }
        }
      }
    }
  }

  //untuk handel puluhan ribu
  if(number.length == 5){
    if(number[0]==1){
      if(number[1]==1){
        return 'sebelas ribu ' + numberToWords(Number(number.substr(2)));
      }else{
        for (var i=data.length-1; i>=0; i--){
          if(number[1]==data[i].num){
            return data[1].spell + ' belas ribu ' + numberToWords(Number(number.substr(2)));
          }
        }
      }
    }else{
      for (var i=data.length-1; i>=0; i--){
        if(number[0]==data[i].num){
          if(number[1]==0){
            return data[i].spell + ' puluh ribu ' + numberToWords(Number(number.substr(1)));
          }else{
            return data[i].spell + ' puluh ' + numberToWords(Number(number.substr(1)));
          }
        }
      }
    }
  }

  //untuk handel ratusan ribu
  if(number.length == 6){
    if(number[0]==1){
      if(number[1]==0){
        return 'seratus ribu ' + numberToWords(Number(number.substr(1)));
      }else{
        return 'seratus ' + numberToWords(Number(number.substr(1)));
      }
    }else{
      for (var i=data.length-1; i>=0; i--){
        if(number[0] == data[i].num){
          if(number[1]==0){
            return data[i].spell + ' ratus ribu ' + numberToWords(Number(number.substr(1)));
          }
          return data[i].spell + ' ratus ' + numberToWords(Number(number.substr(1)));
        }
      }
    }
  }

  //untuk handel belasan juta sampai puluhan juta
  if(number.length == 8){
    if(number[0]==1){
      if(number[1]==1){
        return 'sebelas juta ' + numberToWords(Number(number.substr(2)));
      }else{
        for (var i=data.length-1; i>=0; i--){
          if(number[1]==data[i].num){
            return data[i].spell + ' belas juta ' + numberToWords(Number(number.substr(2)));
          }
        }
      }
    }else{
      for (var i=data.length-1; i>=0; i--){
        if(number[0] == data[i].num){
          if(number[1]==0){
            return data[i].spell + ' puluh juta ' + numberToWords(Number(number.substr(1)));
          }else{
            return data[i].spell + ' puluh ' + numberToWords(Number(number.substr(1)));
          }
        }
      }
    }
  }

  //untuk handel ratusan juta
  if(number.length == 9){
    if(number[0]==1){
      if(number[1]==0){
        return 'seratus juta ' + numberToWords(Number(number.substr(2)));
      }else{
        return 'seratus ' + numberToWords(Number(number.substr(1)));
      }
    }else{
      for (var i=data.length-1; i>=0; i--){
        if(number[0] == data[i].num){
          if(number[1] == 0){
            return data[i].spell + ' ratus juta ' + numberToWords(Number(number.substr(1)));
          }else{
            return data[i].spell + ' ratus ' + numberToWords(Number(number.substr(1)));
          }
        }
      }
    }
  }


  //untuk handel 1-999
  for(var i=data.length-1; i>=0; i--){
    if(number[0]==data[i].num){
      for (var j=0; j<length.length; j++){
        if(number.substr(1).length == length[j].length){
          return data[i].spell +' '+ length[j].spell +' '+ numberToWords(Number(number.substr(1)));
        }
      }
      return data[i].spell + numberToWords(Number(number.substr(1)));
      
    }
    

  }

}

// Driver code
//1-999
console.log(numberToWords(1))
console.log(numberToWords(15));
console.log(numberToWords(23));
console.log(numberToWords(919))

//ribuan
console.log(numberToWords(7211));
console.log(numberToWords(2611));

//belasan dan puluhan ribu
console.log(numberToWords(20200));
console.log(numberToWords(12212));
console.log(numberToWords(27999));

//ratusan ribu
console.log(numberToWords(102200));
console.log(numberToWords(127999));
console.log(numberToWords(202999));
console.log(numberToWords(999999));

//jutaan
console.log(numberToWords(2000000));

//belasan dan puluhan juta
console.log(numberToWords(20111845));
console.log(numberToWords(52111845));
console.log(numberToWords(13111845));

//ratusan juta
console.log(numberToWords(100111845));
console.log(numberToWords(113111845));
console.log(numberToWords(213111845));

console.log(numberToWords(2920000000))


//dari soal
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));