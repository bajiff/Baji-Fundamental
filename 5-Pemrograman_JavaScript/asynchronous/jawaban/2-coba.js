// --- 1. SISTEM GUDANG (Mirip API.fetch) ---
const Gudang = {
  // Fungsi ini butuh waktu (setTimeout) untuk ngecek stok ke gudang beneran
  cekStok(namaBarang, isHabis) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isHabis === true) {
          // Tombol GAGAL ditekan!
          return reject(new Error(`Transaksi Batal: Stok ${namaBarang} kosong!`));
        }
        // Tombol SUKSES ditekan!
        return resolve(`${namaBarang} siap dibungkus!`);
      }, 1000); // Anggap butuh 1 detik ngecek gudang
    });
  }
};

// --- 2. DATA KERANJANG BELANJA TUAN ---
const keranjangAman = [
  { nama: "Oli Mesin", isHabis: false },
  { nama: "Busi", isHabis: false }
];

const keranjangBermasalah = [
  { nama: "Helm Retro", isHabis: false },
  { nama: "Knalpot NMAX", isHabis: true } // Peringatan: Barang ini habis!
];

// --- 3. MISI TUAN BAJI ---
function prosesCheckout(keranjang) {
  /**
   * TODO 1: Ubah daftar barang di 'keranjang' menjadi aksi pengecekan gudang.
   * Gunakan metode .map() pada 'keranjang'.
   * Di dalam map, panggil fungsi Gudang.cekStok(item.nama, item.isHabis).
   * Simpan hasilnya di variabel const 'prosesPengecekan'.
   */
  const prosesPengecekan = keranjang.map((item) => {
    return Gudang.cekStok(item.nama, item.isHabis);
  });


  /**
   * TODO 2: Tunggu SEMUA pengecekan selesai dan kembalikan hasilnya.
   * Gunakan Promise.all() dan masukkan variabel 'prosesPengecekan' ke dalamnya.
   * Jangan lupa pakai kata 'return' di depannya!
   */
  return Promise.all(prosesPengecekan);

}

// --- TES SISTEM CHECKOUT ---

// Tes 1: Checkout Keranjang Aman (Harusnya Sukses semua)
prosesCheckout(keranjangAman)
  .then(hasil => console.log("SUKSES:", hasil))
  .catch(error => console.log("ERROR:", error.message));

// Tes 2: Checkout Keranjang Bermasalah (Harusnya Gagal karena Knalpot habis)
prosesCheckout(keranjangBermasalah)
  .then(hasil => console.log("SUKSES:", hasil))
  .catch(error => console.log("ERROR:", error.message));