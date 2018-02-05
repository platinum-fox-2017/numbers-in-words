function numberToWords(number) {
  var ribuanPlus=['ribu','juta','miliar','triliun']
  var arrNumber=String(number).split('');
  var tigaNol=Math.floor(arrNumber.length/3);
  var tigaDigitAwal=arrNumber.length%3;
  tigaDigitAwal=Number(arrNumber.slice(0,tigaDigitAwal===0?3:tigaDigitAwal).join(''));
  if(tigaNol>0 && number>999) {
    var newNumber=Number(arrNumber.slice(String(tigaDigitAwal).length).join(''));
    if(tigaDigitAwal===1) {
      return 'se'+ribuanPlus[tigaNol-1]+' '+numberToWords(newNumber);
    }
    else {
      // console.log(tigaDigitAwal)
      return first3Digit(tigaDigitAwal)+' '+ribuanPlus[tigaNol-1]+' '+numberToWords(newNumber);
    }
  }
  return first3Digit(number);
}

function first3Digit(number) {
  if(number>0)
  var ratusan=['belas','puluh','ratus'];
  var satuan=['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas'];
  var res='';
  var arrNumber=String(number).split('');
  if(arrNumber.length>1 && number>19) {
    var newNumber=Number(arrNumber.slice(1).join(''));;
    if(arrNumber[0]==1) {
      return 'se'+ratusan[arrNumber.length-1]+' '+first3Digit(newNumber);
    }
    else { return satuan[Number(arrNumber[0])]+' '+ratusan[arrNumber.length-1]+' '+first3Digit(newNumber);}
  }
  else if(arrNumber.length===2 && number<20 && number>11) {      
    return satuan[Number(arrNumber[1])]+' '+ratusan[0];
  }
  return satuan[number];
}

console.log(first3Digit(11));
console.log(first3Digit(50));
console.log(first3Digit(15));
console.log(first3Digit(951));
console.log(first3Digit(20));
console.log(first3Digit(21));

// Driver code
console.log(numberToWords(20));
console.log(numberToWords(915));
console.log(numberToWords(1020));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
console.log(numberToWords(11111));
console.log(numberToWords(999999999999));
