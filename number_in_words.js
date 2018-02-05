function numberToWords(number) {

    var bilangan =['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas']

    if(number===0){
      return ''
    }
    else if(number<12){
      return bilangan[number]
    }
    else if(number<20){
      return bilangan[number.toString()[1]]+'belas'
    }
    else{
      if(number<100){
        return numberToWords(Math.floor(number/10))+' puluh '+numberToWords(Number(number.toString().slice(-1)))
      }
      else if(number<1000){
        return numberToWords(Math.floor(number/100))+' ratus '+numberToWords(Number(number.toString().slice(-2)))
      }
      else if(number<10000){
        return numberToWords(Math.floor(number/1000))+' ribu '+numberToWords(Number(number.toString().slice(-3)))
      }
      else if(number<100000){
        return numberToWords(Math.floor(number/1000))+' ribu '+numberToWords(Number(number.toString().slice(-3)))
      }
      else if(number<1000000){
        return numberToWords(Math.floor(number/100000))+' ratus '+numberToWords(Number(number.toString().slice(-5)))
      }
      else if(number<10000000){
        if(Math.floor(number/1000000)===1){
            return 'sejuta '+numberToWords(Number(number.toString().slice(-6)))
        }
        else{
            return numberToWords(Math.floor(number/1000000))+' juta '+numberToWords(Number(number.toString().slice(-6)))
        }
      }
    }
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
