function numberToWords(number) {
    let words = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas']
    if (number < 12) {
        return words[number]
    } else if (number < 20) {
        return numberToWords(number % 10) + ' belas'
    } else if (number < 100) {
        return numberToWords(Math.floor(number / 10)) + ' puluh ' + numberToWords(number % 10)
    } else if (number < 200) { // 100 to 199
        return 'seratus ' + numberToWords(Math.floor(number % 100))
    } else if (number < 1000) { // 200 to 999
        return numberToWords(Math.floor(number / 100)) + ' ratus ' + numberToWords(Math.floor(number % 100))
    } else if (number < 2000) { // 1000 to 1999
        return 'seribu ' + numberToWords(number % 1000)
    } else if (number < 1000000) { // 2.000 to 999.999
        return numberToWords(Math.floor(number / 1000)) + ' ribu ' + numberToWords(Math.floor(number % 1000))
    } else if (number < 1000000000) { // 1.000.000 to 999.999.999
        return numberToWords(Math.floor(number / 1000000)) + ' juta ' + numberToWords(Math.floor(number % 1000000))
    } else if (number < 1000000000000) { // 1.000.000.000 to sebelum triliun outpunya miliar
        return numberToWords(Math.floor(number / 1000000000)) + ' Miliar ' + numberToWords(Math.floor(number % 1000000000))
    } else if (number < 1000000000000000) {
        return numberToWords(Math.floor(number / 1000000000000)) + ' Triliun ' + numberToWords(Math.floor(number % 1000000000000))
    }
}

// console.log(numberToWords(4));
// console.log(numberToWords(14));
// console.log(numberToWords(27));
// console.log(numberToWords(102));
// console.log(numberToWords(112));
// console.log(numberToWords(163));
// console.log(numberToWords(289));
// 999.999.999
console.log(numberToWords(999999999))

// 9 miliar
console.log(numberToWords(999000000000000))
