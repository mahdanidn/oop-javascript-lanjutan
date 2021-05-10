// const cubo = new Promise(resolve => console.log('berhasil'));
// console.log(cubo);

function ambilkanIsiDariResolve() {
  return new Promise((resolve, rejects) => {
    let waktu = 1500;
    if (waktu < 5000) {
      setTimeout(() => {
          resolve('berhasil di ambil')
      }, waktu);
    } else {
      rejects('lamo nian');
    }
  })
}

// console.log(ambilkanIsiDariResolve());
async function getIsiDariResolve() {
  try {
    const ambil = await ambilkanIsiDariResolve();
    console.log(ambil);
  } catch (e) {
    console.error(e);
  }
  // ambil.then(response => console.log(response));
}

getIsiDariResolve();