// periksa terlebih dahulu meja rumah makan tersebut
// ketika rumah makan tersebut tersedia meja kosong, beri meja tersebut ke pelanggan
// ketika pelanggan ingin pulang, isi meja tersebut dengan undefined

let mejaMakan = [];

function makanDitempat(namaPelanggan, mejaMakan) {
  // jika tempat makan tersedia
  if (mejaMakan.length == 0) {
    // maka tempatkan pelanggan tersebut kemejamakan yang tersedia
    mejaMakan.push(namaPelanggan);
    // kembalikan nilai arraynya
    return mejaMakan;
  }
}

// function pelangganPulang(namaPelanggan, mejaMakan) {
//   if (mejaMakan.length == 0) {
//     console.log('Tempat masih tersedia');
//     return mejaMakan;
//   } else {
//     for (let i = 0; i < mejaMakan.length; i++) {
//       if (mejaMakan[i] == namaPelanggan) {
//         mejaMakan[i] == undefined;
//         return mejaMakan;
//       }
//     }
//   }
// }