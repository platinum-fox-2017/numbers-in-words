// Pseudocode




function numberToWords(number) {
  var kamus = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas']
  if(number<12){ // unique number di bawah 12 langsung didefiniskan
    return kamus[number]
  } else if(number<19){ // unique number di bawah sembilan belas harus diberi belas
    return kamus[number-10]+' belas'
  } else if(number<100){ // unique number di bawah seratus harus ditambah puluh(ex 90 = 90/10 = 9 dengan math floor lalu dikasih puluh) dan sisanya dipanggil oleh fungsi yang sudah didefinisikan sebelumnya
    return kamus[Math.floor(number/10)]+' puluh '+numberToWords(number%10)
  } else if(number<200){ // seratus unique number karena itu harus didefinisikan khusus sisanya (ex 199%100 = 99)didefinisikan oleh fungsi sebelumnya dan dipanggil lagi
    return 'seratus '+numberToWords(number%100)
  } else if(number<1000){ // dua ratus sampai sembilan ratus unique didefinisikan disini sisanya didefinisikan oleh fungsi sebelumnya
    return kamus[Math.floor(number/100)]+' ratus '+numberToWords(number%100)
  }

}

// Driver code
console.log(numberToWords(11));
console.log(numberToWords(14));
console.log(numberToWords(59));
console.log(numberToWords(199));
console.log(numberToWords(799));
// console.log(numberToWords(1000000));
// console.log(numberToWords(2011845));
