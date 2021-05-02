// ambil semua element video
const getVideo = Array.from(document.querySelectorAll('[data-duration]'));
// pilih yang hanya javascript lanjutan
let jsLanjut = getVideo.filter(video => video.textContent.includes('JAVASCRIPT'))
  // ambil durasi masing" video
  .map(durasi => durasi.dataset.duration)
  // ubah durasi menjadi float, ubah menjadi menit ke detik
  .map(waktu => {

    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1];
  })
  // jumlahkan semua detik
  .reduce((total, detik) => total + detik);
// ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// console.log(detik);
// simpan di DOM
const duration = document.querySelector('.total-durasi');
duration.textContent = `${jam} Jam ${menit} Menit ${detik} Detik`;

const filVideo = getVideo.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const totalVideo = document.querySelector('.jumlah-video');
totalVideo.textContent = filVideo;