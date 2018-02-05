function numberToWords(number) {
  // Your code here
  let words = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas']
  let satuan = number.toString().charAt(2)
  let belas = number.toString().charAt(1)
  let puluh = number.toString().charAt(1)
  let ratus = number.toString().charAt(0)
  // loop selama words length
  if (number < 12) { // satuan
    return words[number]
  } else if (number < 20) { // belasan
    return words[number.toString().charAt(1)] + " belas "
  } else if (number < 100) {
    return words[number.toString().charAt(0)] + " puluh " + words[number.toString().charAt(1)]
  } else if (number < 112) {
    return "seratus " + words[parseInt(belas + satuan)]
  } else if (number < 120) {
    return "seratus " + words[satuan] + " belas"
  } else if (number < 200) { // 120 to 199
    return "seratus " + words[puluh] + " puluh " + words[satuan]
  } else if (number < 1000) { // 200 to 999
    if (puluh === '0') {
      return words[ratus] + ' ratus ' + words[puluh] + words[satuan]
    } else if (puluh === '1') {
      return words[ratus] + ' ratus ' + words[parseInt(satuan)] + ' belas '
    } else {
      return words[ratus] + ' ratus ' + words[parseInt(puluh)] + ' puluh ' + words[parseInt(satuan)]
    }
  }
}

// Driver code
console.log(numberToWords(4));
console.log(numberToWords(27));
console.log(numberToWords(102));
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
