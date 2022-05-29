// ! JANGAN DIMODIFIKASI
/*
  Data Array Object Pegawai
  [
    {
      "id": 1,
      "namaDepan": "Edyth",
      "namaBelakang": "Roberts",
      "jenisKelamin": "M"
    },
    ...
  ]
*/
const arrayObjectPegawai = require("./data-customer.json");
// console.log(arrayObjectPegawai[0].namaDepan + " " + arrayObjectPegawai[0].namaBelakang);

function lakukanLooping(arrPegawai) {
  // ! JANGAN DIMODIFIKASI
  let dataYangAkanDilooping = arrPegawai;

  /*
    TODO 1: Buatlah sebuah variabel bernama "hasilLooping"
      yang berisi gabungan nama depan dan belakang dari masing masing pegawai

      Contoh: ["Aisyah Nirmala", "Mansur Faisal", ...]
  */
  let namaLengkap = []
  for (let i = 0; i < dataYangAkanDilooping.length; i++) {
    namaLengkap.push(dataYangAkanDilooping[i].namaDepan + " " + dataYangAkanDilooping[i].namaBelakang);
  }

  let hasilLooping = namaLengkap;

  /*
    TODO 2: Buatlah sebuah variabel bernama "jumlahPria"
      yang berisi jumlah pria dari masing masing pegawai
  */
  let jenisKelaminPria = []
for (let i = 0; i < dataYangAkanDilooping.length; i++) {
  if (dataYangAkanDilooping[i].jenisKelamin === "M") {
    jenisKelaminPria.push(dataYangAkanDilooping[i].id);
  } else { }
}
  let jumlahPria = jenisKelaminPria.length;

  /*
    TODO 3: Buatlah sebuah variabel bernama "jumlahWanita"
      yang berisi jumlah wanita dari masing masing pegawai
  */
  let jenisKelaminWanita = []
  for (let i = 0; i < dataYangAkanDilooping.length; i++) {
    if (dataYangAkanDilooping[i].jenisKelamin === "F") {
      jenisKelaminWanita.push(dataYangAkanDilooping[i].id);
    } else { }
  }
  let jumlahWanita = jenisKelaminWanita.length;

  /*
    TODO 4: Buatlah sebuah variabel bernama "komentar"
      yang akan mengomentari apakah lebih banyak Pria atau Wanita

      Apabila Pria lebih banyak dari Wanita, maka komentar akan berisi:
        "Jumlah Pria lebih banyak dari Wanita"
      Apabila Wanita lebih banyak dari Pria, maka komentar akan berisi:
        "Jumlah Wanita lebih banyak dari Pria"
      Apabila imbang, maka komentar akan berisi:
        "Jumlah Pria dan Wanita berimbang"
  */
let komentar = "Dummy";
  if (jumlahPria > jumlahWanita) {
    komentar = "Jumlah Pria Lebih banyak dari Wanita";
  } else if (jumlahWanita > jumlahPria){
  komentar = "Jumlah Wanita Lebih banyak dari Pria";
  } else {
      komentar = "Jumlah Pria dan Wanita berimbang";
  }




  // ! JANGAN DIMODIFIKASI
  return {
    hasilLooping,
    jumlahPria,
    jumlahWanita,
    komentar,
  };
}

function main(data) {
  const hasil = lakukanLooping(data || arrayObjectPegawai);

  console.log(hasil.hasilLooping);
  console.log(hasil.jumlahPria);
  console.log(hasil.jumlahWanita);
  console.log(hasil.komentar);

  return hasil;
}

main(arrayObjectPegawai);

module.exports = main;
