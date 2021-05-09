// ambil semua element yang di butuhkan

const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

// jika user menekan tombol pada keyboard
inputBox.onkeyup = (e) => {
  let userData = e.target.value; //user memasukkan data
  let emptyArray = []; //tampung dalam array

  if (userData) {
    emptyArray = suggestions.filter((data) => {
      // memfilter nilai array dan karakter pengguna menjadi huruf kecil dan 
      // hanya mengembalikan kata / kalimat yang diawali dengan kata yang dimasukkan pengguna
      return data.toLocaleLowerCase();
    });
    emptyArray = emptyArray.map((data) => {
      return data = `<li>${data}</li>`;
    });
    console.log(emptyArray)
  }
} 