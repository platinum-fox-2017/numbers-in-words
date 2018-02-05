function numberToWords(number) {
  // Your code here

  var arrWords = [
    {angka: 1,
      words: 'satu'},
    {angka: 2,
      words: 'dua'},
    {angka: 3,
      words: 'tiga'},
    {angka: 4,
      words: 'empat'},
    {angka: 5,
      words: 'lima'},
    {angka: 6,
      words: 'enam'},
    {angka: 7,
      words: 'tujuh'},
    {angka: 8,
      words: 'delapan'},
    {angka: 9,
      words: 'sembilan'},
    {angka: 10,
      words: 'sepuluh'},
    {angka: 11,
      words: 'sebelas'},
    {angka: 12,
      words: 'dua belas'},
    {angka: 13,
      words: 'tiga belas'},
    {angka: 14,
      words: 'empat belas'},
    {angka: 15,
      words: 'lima belas'},
    {angka: 16,
      words: 'enam belas'},
    {angka: 17,
      words: 'tujuh belas'},
    {angka: 18,
      words: 'delapan belas'},
    {angka: 19,
      words: 'sembilan belas'}
  ]

  var hasilWords = [];

  // while (number != 0) {
  if (number == 0) {
    // base case;
    return '';
  } else {
    //recursion;
    if (number < 20) {
      var angkaMax = arrWords[0].angka; // 
      var indexMax = 0;
      for (var i = 0; i < arrWords.length; i++) { // untuk cari angka max
        if (arrWords[i].angka <= number && arrWords[i].angka > angkaMax) {
          angkaMax = arrWords[i].angka;
          indexMax++;
        }
      }

      hasilWords.push(arrWords[indexMax].words);
      number -= arrWords[indexMax].angka;
    
    } else if (number < 100) {

      var stringNum = String(number); // length 27: 2
      var stringNum_satuan = stringNum.substr(1, 1);
      var stringNum_puluhan = (stringNum - stringNum_satuan) / 10;
      // console.log(stringNum_satuan); // 7
      // console.log(stringNum_puluhan); // 2

      for (var i = 0; i < arrWords.length; i++) { // untuk pasangan angka puluhan
        if (arrWords[i].angka == stringNum_puluhan) {
          hasilWords.push(`${arrWords[i].words} puluh`);
          number -= (stringNum_puluhan * 10);
        }
      }

    } else if (number < 1000) {

      var stringNum = String(number); // length 705: 3
      var stringNum_puluhan = stringNum.substr(1, 2);
      var stringNum_ratusan = (stringNum - stringNum_puluhan) / 100;
      // console.log(stringNum_satuan); // 7
      // console.log(stringNum_puluhan); // 2

      for (var i = 0; i < arrWords.length; i++) { // untuk pasangan angka puluhan
        if (arrWords[i].angka == stringNum_ratusan) {
          hasilWords.push(`${arrWords[i].words} ratus`);
          number -= (stringNum_ratusan * 100);
        }
      }
    }

    return hasilWords + ' ' + numberToWords(number);
  
  }
  

}


// Driver code
console.log(numberToWords(705));
// console.log(numberToWords(1000000));
// console.log(numberToWords(2011845));
