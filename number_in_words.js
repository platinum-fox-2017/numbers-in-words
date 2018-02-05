const words = [
  [0, ''],
  [1, 'satu'],
  [2, 'dua'],
  [3, 'tiga'],
  [4, 'empat'],
  [5, 'lima'],
  [6, 'enam'],
  [7, 'tujuh'],
  [8, 'delapan'],
  [9, 'sembilan'],
  [10, 'sepuluh'],
  [11, 'sebelas'],
  [12, 'dua belas'],
  [13, 'tiga belas'],
  [14, 'empat belas'],
  [15, 'lima belas'],
  [16, 'enam belas'],
  [17, 'tujuh belas'],
  [18, 'delapan belas'],
  [19, 'sembilan belas'],
]

const operator = [
  [0, ''],
  [10, 'puluh'],
  [100, 'ratus'],
  [1000, 'ribu']
]

function numberToWords(number) {
  // Your code here
  let result = '';
  let numSplit = number.toString().split('');

  if(number === 0){
    return ''
  } else if (number < 20){
    return words[number][1];
  } else if (number < 100){
    let num = Math.floor(number/10);
    return words[num][1] + ' puluh ' + numberToWords(number-num*10)
  } else if (number < 1000){
    let num = Math.floor(number/100);
    if(num === 1){
      return 'seratus ' + numberToWords(number-num*100)
    } else {
      return words[num][1] + ' ratus ' + numberToWords(number-num*100)
    }
  }
}

// Driver code
console.log(numberToWords(876));
// console.log(numberToWords(1000000));
// console.log(numberToWords(2011845));
