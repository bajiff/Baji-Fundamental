const products = [];

const formLogistik = document.getElementById("form-logistik");
const inputBarang = document.getElementById("barang");
const inputJumlah = document.getElementById("jumlah");

// ? Result nya ada di sini
const result = document.getElementById("result");

formLogistik.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const generateUID = Date.now();
  
  const barangValue = inputBarang.value;
  const jumlahValue = parseInt(inputJumlah.value);
  
  const newProduct = {
    id: generateUID,
    name: barangValue,
    quantity: jumlahValue,
    status: true,
  };
  
  products.push(newProduct);
  
  result.innerText = `Barang berhasil di tambahkan\nID: ${newProduct.id}\nNama: ${newProduct.name}\nQuantity: ${newProduct.quantity}\nStatus ${newProduct.status ? "Available" : "Soldout"}`
  
  console.log(products)
  
  formLogistik.reset();
  
})
