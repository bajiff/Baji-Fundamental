const products = [];
// ? Ngambil element Form make id
const formLogistic = document.getElementById("formLogistic");

// ? Ngambil element logistic-list
const logisticList = document.getElementById("logistic-list");

// ? Ngambil element logistic dan quantity
const inputProduct = document.getElementById("product");
const inputQuantity = document.getElementById("quantity");


// ! Bikin fungsi buat ngerender
const renderProducts = () => {
  // ! Logisticlist nya di kosongin dulu
  logisticList.innerHTML = "";
  // ! Lalu ditampilkan make foreach
  products.forEach((product) => {
    // ! Bikin elemen baru caranya seperti dibawah ini
    const newElement = document.createElement("article");
    // ! Isi elemen nya make innerHMTML agar kode HTML bisa tereksekusi
    newElement.innerHTML = `<strong>Name: ${product.name}, Quantity: ${product.quantity}</strong>`
    logisticList.append(newElement);
  });

};

formLogistic.addEventListener("submit", (e) => {
  e.preventDefault();
  const generateUID = Date.now();
  const productValue = inputProduct.value;
  const quantityValue = parseInt(inputQuantity.value);
  const newProduct = {
    id: generateUID,
    name: productValue,
    quantity: quantityValue,
    isSoldOut: false
  };
  products.push(newProduct);
  // ! Memanggil fungsi renderProducts setelah di push product baru nya
  renderProducts();
  formLogistic.reset();
});

