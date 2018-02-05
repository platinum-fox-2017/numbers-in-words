function numberToWords(number) {
  // Your code here
  const lowNum = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas'];
  const specialNum = ['seratus','seribu'];
  const nominal = ['belas','puluh','ratus','ribu','juta','miliar','triliyun','bilyun'];

    if (number < 12) {
      return lowNum[number]
    } else if(number < 20) {
      return `${lowNum[number%10]} ${nominal[0]}`
    } else if(number < 100) {
      return `${lowNum[(number - (number % 10))/10]} ${nominal[1]} ${numberToWords(number % 10)}`
    } else if(number < 200) {
      return `${specialNum[0]} ${numberToWords(number % 100)}`
    } else if(number < 1000) {
      return `${numberToWords((number - (number % 100))/100)} ${nominal[2]} ${numberToWords(number % 100)}`
    } else if(number < 2000) {
      return `${specialNum[1]} ${numberToWords(number % 1000)}`
    } else if(number < 10000) {
      return `${numberToWords((number - (number % 1000))/1000)} ${nominal[3]} ${numberToWords(number%1000)}`
    } else if(number < 100000) {
      return `${numberToWords((number - (number % 1000))/1000)} ${nominal[3]} ${numberToWords(number%1000)}`
    } else if(number < 1000000000) {
      return `${numberToWords((number - (number % 1000000))/1000000)} ${nominal[4]} ${numberToWords(number%1000000)}`
    } else if(number < 1000000000000) {
      return `${numberToWords((number - (number % 1000000000))/1000000000)} ${nominal[5]} ${numberToWords(number%1000000000)} `
    }
}

// Driver code
// console.log(numberToWords(127));
// console.log(numberToWords(1750));
// console.log(numberToWords(6750));
console.log(numberToWords(922280000000));
// console.log(numberToWords(2011845));
