const tamu = {
  nama: "Gebil kirim",
  tipeMember: "Kirim" 
};

let pesanSapaan = "";

switch (tamu.tipeMember) {
  case "Silver":
     pesanSapaan = `Selamat datang ${tamu.nama}, nikmati fasilitas standar kami.`;
    break;
  case "Gold":
    pesanSapaan = `Halo ${tamu.nama}! Anda mendapat akses ke Kolam Renang VIP.`;
    break;
  case "Platinum":
    pesanSapaan = `Hormat kami ${tamu.nama}, seluruh layanan Spa dan Restoran gratis untuk Anda.`;
    break;
  default:
    pesanSapaan = `selamat datang ${tamu.nama},silakan nikmati lobi kami. `;
}

console.log (pesanSapaan)