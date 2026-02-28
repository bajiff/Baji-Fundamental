const keranjangBelanja = [
  { produk: "Kopi Gula Aren", harga: 18000 },
  { produk: "Roti Bakar", harga: 15000 },
  { produk: "Mie Rebus", harga: 12000 }
];

const notaPesan = keranjangBelanja.map((item) => {
  return `${item.produk} Harganya: ${item.harga}`
});

console.log(notaPesan);
