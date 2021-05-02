// HTML Fragments
// const profile = {
//   nama: 'Mahdani',
//   alamat: 'Jalan Mujahidin',
//   noHp: 081274967122
// }

// const print = `<div class="profile">
//                   <h3>Halo nama saya ${profile.nama}</h3>
//                   <h4>Alamat saya ${profile.alamat}</h4>
//                   <h4>No Hp saya ${profile.noHp}</h4>
//                </div>`

// Looping
// const profileTeman = [
//   {
//     nama: 'irfan',
//     alamat: 'Suro',
//     noHp: 12340886,
//   },
//   {
//     nama: 'asrol',
//     alamat: 'OPI Jakabaring',
//     noHp: 1239878957892
//   },
//   {
//     nama: 'eko',
//     alamat: 'Bukit Siguntang',
//     noHp: 89172398712893
//   },
//   {
//     nama: 'rezki',
//     alamat: 'Seberang Ulu',
//     noHp: 981723891723
//   }
// ];

// let print = `
//           <div class="profileTeman">
//             ${profileTeman.map(e => `<ul>
//                                         <li>${e.nama}</li>
//                                         <li>${e.alamat}</li>
//                                         <li>${e.noHp}</li>
//                                     </ul>`).join("")}
//           </div>
// `;

// Conditional
// const trackList = {
//   penyanyi: 'YOASOBI',
//   lagu: 'Yoru no Kakeru',
//   tahun: 2021
// }

// const print = `<div>
//                 <h3>Nama Penyanyi : ${trackList.penyanyi}</h3>
//                 <h3>Lagu : ${trackList.lagu}</h3>
//                 <h4>${trackList.tahun ? `Tahun Rilis : ${trackList.tahun}` : ''}</h4>
//               </div>`;

// Nested bersarang
const profile = {
  nama: 'Mahdani',
  umur: 24,
  bahasaPemrogramman: [
    'javascript',
    'php',
    'css',
    'flutter',
    'dart'
  ]
}

function loopLang(bahasaPemrogramman) {
  return `<ol>
            ${bahasaPemrogramman.map(e => `<li>${e}</li>`).join("")}
          </ol>`;
}

const print = `<div>
               <h2>Nama : ${profile.nama}</h2>
               <h3>Umur : ${profile.umur}</h3>
               <h4>Bahasa Pemrogramman :</h4>
               ${loopLang(profile.bahasaPemrogramman)}
               </div>`;
document.body.innerHTML = print;
            