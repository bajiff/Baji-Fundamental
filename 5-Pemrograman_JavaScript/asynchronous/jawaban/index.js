// --- SIMULASI SISTEM (Mirip 2-support.js milik Tuan) ---
const Markas = {
  // Fungsi ini mengembalikan Promise (Butuh waktu)
  kirimMataMata(lokasi, waktuIntai, isKetahuan = false) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isKetahuan) {
          return reject(new Error(`Misi GAGAL di ${lokasi}!`));
        }
        return resolve(`Intel dari ${lokasi} didapatkan dalam ${waktuIntai}ms`);
      }, waktuIntai);
    });
  }
};

const daftarMisiSukses = [
  { lokasi: "Shibuya", waktu: 100, ketahuan: false },
  { lokasi: "Shinjuku", waktu: 50, ketahuan: false }
];

const daftarMisiGagal = [
  { lokasi: "Roppongi", waktu: 100, ketahuan: false },
  { lokasi: "Yokohama", waktu: 50, ketahuan: true } // Misi ini akan melempar Error!
];

// --- MISI TUAN BAJI DIMULAI DI SINI ---

async function jalankanOperasi(daftarMisi) {
  /**
   * TODO 1: Gunakan metode .map() pada 'daftarMisi'.
   * Petakan setiap objek misi menjadi panggilan fungsi Markas.kirimMataMata(item.lokasi, item.waktu, item.ketahuan)
   * Simpan hasil .map() ini ke dalam variabel const bernama 'arrayPromise'.
   * (Catatan: arrayPromise sekarang berisi sekumpulan Promise yang sedang berjalan)
   */


  /**
   * TODO 2: Gunakan Promise.all() untuk menunggu semua 'arrayPromise' selesai.
   * Karena jalankanOperasi ini tidak pakai try/catch di dalamnya (diatur dari luar),
   * Tuan cukup me-return hasil dari Promise.all tersebut!
   * Hint: return Promise.all(arrayPromise); 
   */
   
}

// --- PENGUJIAN SISTEM ---
jalankanOperasi(daftarMisiSukses)
  .then(hasil => console.log("LAPORAN SUKSES:", hasil))
  .catch(error => console.log("LAPORAN ERROR:", error.message));
// Expected: ['Intel dari Shibuya...', 'Intel dari Shinjuku...']

jalankanOperasi(daftarMisiGagal)
  .then(hasil => console.log("LAPORAN SUKSES:", hasil))
  .catch(error => console.log("LAPORAN ERROR:", error.message));
// Expected: "LAPORAN ERROR: Misi GAGAL di Yokohama!"