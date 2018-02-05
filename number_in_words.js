function numberToWords(number) {
  // Your code here
  var wordNumberFront = ["sembilan", "delapan", "tujuh" ,"enam","lima","empat","tiga","dua","satu"];
    var numberFront = [9,8,7,6,5,4,3,2,1];
  var wordNumberBack = ["trilyun","milyar","juta",
  "ribu", "ratus", "puluh"];
  var numberBack = [1000000000000,1000000000,1000000,1000,100,10];

  if (number == 0) {
    return "";
  }

  for(var i = 0; i<numberBack.length;i++){
    var deviden = number/numberBack[i];
    if(number<10){
      return wordNumberFront[numberFront.indexOf(number)]+" ";
    }
    if (deviden >= 1) {
      if(number>10 && number<20){
        return  (wordNumberFront[numberFront.indexOf(Math.floor(number%10))] + " belas ");
      }
      else{
        if(Math.floor(deviden) == 1)
          return "se"+(wordNumberBack[i]+" ")+ numberToWords(number - Math.floor(deviden)* numberBack[i]);
        else{
          return numberToWords(Math.floor(deviden)) + (wordNumberBack[i]+" ") + numberToWords(number - Math.floor(deviden)* numberBack[i]);
        }
      }
    }
  }
  return strNumber;
}

// Driver code
console.log(numberToWords(30100731));
console.log(numberToWords(999999999999));
console.log(numberToWords(2));
console.log(numberToWords(15));
console.log(numberToWords(2));
console.log(numberToWords(573));
// console.log(numberToWords(1000000));
// console.log(numberToWords(2011845));
