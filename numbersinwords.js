// let in_words = (target) => {
//     let words =['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan'];
//     let number_length = target.toString().length;
//     let no_pertama = (words[target.toString().split('')[0]]);
//     let no_kedua = (words[target.toString().split('')[1]]);
//     let no_ketiga = (words[target.toString().split('')[2]]);
//     //Check 1 Angka
//     if(number_length === 1){
//         return words[target];
//         //Check 2 Angka
//     } else if (number_length === 2) {
//         if(no_pertama === 'satu') {
//             if(no_kedua === 'satu') {
//                 return ('sebelas');
//             } else if (no_kedua === ''){
//                 return ('sepuluh');
//             } else {
//                 return (no_kedua +' belas');
//             }
//         } else {
//             return (no_pertama + ' puluh ' +words[target.toString().split('')[1]])
//         }
//         //Check 3 Angka
//     } else if (number_length === 3) {
//         if(no_pertama === 'satu'){
//             if(no_kedua === 'satu'){
//                 if(no_ketiga === 'satu'){
//                     return  ('seratus sebelas');
//                 } else if (no_ketiga !== 'satu') {
//                     return ('seratus ' + no_ketiga +' belas');
//                 }  
//             } else if (no_kedua === ''){
//                 return ('seratus '+ no_ketiga );
//             } else {
//                 return ('seratus '+ no_kedua +' puluh '+ no_ketiga);
//             }
//         } else {
//             if(no_kedua === 'satu'){
//                 if(no_ketiga === 'satu'){
//                     return (no_pertama + ' ratus sebelas');
//                 } else if (no_ketiga === ''){
//                     return  (no_pertama +' ratus sepuluh');
//                 } else {
//                     return (no_pertama +' ratus ' + no_ketiga +' belas');
//                 }
//             } else if (no_kedua === ''){
//                 return (no_pertama +' ratus '+ no_ketiga );
//             } else {
//                 return (no_pertama +' ratus '+ no_kedua +' puluh '+ no_ketiga);
//             }
//         }
//     }
// }
// console.log(in_words(291));

let in_words = (target) => {
    let words =['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas'];
  
    if(target === 0){
        return ''
    } else if (target < 12) {
        return words[target];
    } else if (target < 20) {
        return in_words(target%10) + ' belas';
    } else if (target < 100) {
        return in_words(Math.floor(target/10)) + ' puluh ' + in_words(target%10);
    } else if (target < 200) {
        return 'seratus ' + in_words(target%100);
    } else if (target < 1000) {
        return in_words(Math.floor(target/100)) + ' ratus ' + in_words(target%100);
    } else if (target < 2000){
        return 'seribu ' + in_words(target%1000);
    } else if (target < 1000000) {
        return in_words(Math.floor(target/1000)) + ' ribu ' + in_words(target%1000);
    } else if (target < 1000000000) {
        return in_words(Math.floor(target/1000000)) + ' juta ' + in_words(target%1000000);
    } else if (target < 1000000000000) {
        return in_words(Math.floor(target/1000000000)) + ' milyar ' + in_words(target%1000000000);
    } else if (target < 1000000000000000) {
        return in_words(Math.floor(target/1000000000000)) + ' triliun ' + in_words(target%1000000000000);
    }

}
console.log(in_words(999000000000000));