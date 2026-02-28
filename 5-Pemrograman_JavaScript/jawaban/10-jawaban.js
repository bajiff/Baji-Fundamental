const menuRestoran = [
  { nama: "Nasi Goreng Spesial", harga: 25000 },
  { nama: "Mie Ayam Biasa", harga: 13000 },
  { nama: "Es Teh Manis", harga: 5000 },
  { nama: "Ayam Bakar Madu", harga: 30000 }
];

const menuMurah = menuRestoran.filter(menu => menu.harga <= 15000).map(item => item.nama)

console.log(menuMurah);