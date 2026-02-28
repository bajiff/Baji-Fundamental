const daftarPelanggan = [
  { nama: "Rizky", umur: 16, kendaraan: "Mobil SUV" },
  { nama: "Baji", umur: 18, kendaraan: "MiG-25" },
  { nama: "Chifuyu", umur: 15, kendaraan: "Sepeda Onthel" },
  { nama: "Draken", umur: 20, kendaraan: "Harley Davidson" }
];

for (let i = 0; i < daftarPelanggan.length; i++) {
  const pelangganSaatIni = daftarPelanggan[i];
  
  if (pelangganSaatIni.umur >= 17 ){
    console.log(`Selamat ${pelangganSaatIni.nama}, Anda bisa menyewa ${pelangganSaatIni.kendaraan}`);
  } else {
    console.log(`Maaf ${pelangganSaatIni.nama}, Anda masih bocil jadi ngga boleh menyewa ${pelangganSaatIni.kendaraan}`)
  }
}