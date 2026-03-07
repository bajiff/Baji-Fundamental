const formTambahLogistik = document.getElementById("form-tambah-logistik");
const inputBarang = document.getElementById("barang");
const inputJumlah = document.getElementById("jumlah");
const result = document.getElementById("result");
formTambahLogistik.addEventListener("submit", (event) => {
  event.preventDefault();
  const outputInputBarang = inputBarang.value;
  const outputInputJumlah = inputJumlah.value;
  result.innerText = (`Menambahkan : ${outputInputJumlah} unit ${outputInputBarang} ke dalam gudang`);
  console.log(`Menambahkan : ${outputInputJumlah} unit ${outputInputBarang} ke dalam gudang`)
})