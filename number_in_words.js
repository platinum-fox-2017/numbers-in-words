function numberToWords(number) {
  var satuan = ['puluh','ratus','ribu','juta','milyar','trilyun'];
  var kelipatan = [10,100,1000,1000000,1000000000,1000000000000];
  var angkaSatuan = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
  var kata = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan','sepuluh','sebelas',
              'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas',
              'sembilan belas'];
  if(number===0){
    return '';
  } else if(number<10){
    return kata[angkaSatuan.indexOf(number)];
  } else if(number===11){
    return 'sebelas';
  } else if(number>12 && number<20){
    return kata[angkaSatuan.indexOf(number)];
  } else {
    var str = number.toString();
    for(var i=kelipatan.length-1; i>=0; i--){
      if(number>=kelipatan[i]){
        var hasilBagi = Math.floor(number/kelipatan[i]);
        var sisa = number % kelipatan[i];
        var kataKedua = satuan[i];
        break;
      }
    }
    for(var j=0; j<angkaSatuan.length; j++){
      if(hasilBagi===angkaSatuan[j]){
        var kataPertama = kata[j];
      }
    }
    // console.log(hasilBagi);
    // console.log(sisa);
    // console.log(kataKedua);
    // console.log(kataPertama);
    var gabungan = kataPertama + ' ' + kataKedua + ' ';
    // console.log(gabungan);
    return gabungan + numberToWords(sisa);
  }
}


console.log(numberToWords(14));
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
