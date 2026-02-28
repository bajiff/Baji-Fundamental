const pelanggan = {
  nama: "Baji",
  umur: 18,
  kendaraan: "Mikoyan-Gurevich MiG-25"
};

if (pelanggan.umur >= 17) {
  console.log(`Selamat ${pelanggan.nama}, Anda bisa menyewa ${pelanggan.kendaraan}`)
} else {
  console.log(`Maaf ${pelanggan.nama}, Anda belum cukup umur untuk menyewa ${pelanggan.kendaraan}`)
}