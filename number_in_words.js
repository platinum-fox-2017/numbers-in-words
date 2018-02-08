function numberToWords(number) {
  // Your code here
  var words='';
  var satuan=['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas','dua belas','tiga belas','empat belas','lima belas','enam belas','tujuh belas','delapan belas','sembilan belas','dua puluh'];
  var puluhan=['','','dua puluh','tiga puluh','empat puluh','lima puluh', 'enam puluh','tujuh puluh','delapan puluh','sembilan puluh']
  if(number<20){
    words=satuan[number];
  }
  else if(number>=20 && number<100){
    if(number%10===0){
      words=puluhan[Math.floor(number/10)];
    }
    else{
      words=puluhan[Math.floor(number/10)]+' '+satuan[number%10];
    }
  }
  else if(number>99 && number<1000){
      var ratus=Math.floor(number/100);
      if(ratus===1){
        ratus='se';
        words=ratus+'ratus '+numberToWords(number%100);
      }
      else {
        words=satuan[ratus]+' ratus '+numberToWords(number%100);
      }

  }
  else{
    words="Out Of Range";
  }
  return words;
}

// Driver code
console.log(numberToWords(999));
//console.log(numberToWords(1000000));
//console.log(numberToWords(2011845));
