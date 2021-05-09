// callback bisa diartikan menjadi argument yang bisa di panggil di function lainnya

// function getDataMakanan(url, success, error) {
//   const xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 400) {
//         error();
//       }
//     }
//   }

//   xhr.open('get', url);
//   xhr.send();
// }

// console.log('start')
// getDataMakanan('./datamakanan.json', (result) => {
//   const food = JSON.parse(result);
//   food.forEach(e => console.log(e.namaMakanan));
//   // console.log(JSON.parse(result));
// }, (error) => {
//   console.log(error);
// })
// console.log('end');

// JQuery
console.log('start');
$.ajax({
  url: './datamakanan.json',
  success: (result) => {
    result.forEach(e => console.log(e.namaMakanan));
  },
  error: (e) => {
    console.log(e.responseText);
  }
})
console.log('end');