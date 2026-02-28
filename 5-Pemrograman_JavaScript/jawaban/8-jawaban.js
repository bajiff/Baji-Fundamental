const hargaMakanan = [10000, 20000, 15000];

const hargaDiskon = hargaMakanan.map((harga) => {
  return harga - 5000;
});
console.log(hargaDiskon);