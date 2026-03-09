const products = [];

const formLogistic = document.getElementById("form-logistic");

const inputProduct = document.getElementById("product");
const inputQuantity = document.getElementById("quantity");

const logisticList = document.getElementById("logistic-list");

const renderProducts = () => {
  logisticList.innerHTML = "";

  products.forEach((product) => {
    const newElement = document.createElement("p");
    newElement.innerHTML = `ID: ${product.id}\nName: ${product.name}\nQuantity: ${product.quantity}\nStatus: ${product.isSoldOut ? "Sold Out" : "Avaliable"}`
    logisticList.append(newElement);
  });
  
};

const saveData = () => {
  localStorage.setItem("LOGISTIC_DATA", JSON.stringify(products));
};

const loadDataFromStorage = () => {
  const dataStorage = localStorage.getItem("LOGISTIC_DATA");
    console.log(typeof dataStorage)
  if (dataStorage !== null) {
    const parseDataStorage = JSON.parse(dataStorage);
    
    console.log(typeof parseDataStorage,parseDataStorage)

    // ! Isi dari parseDataStorage itu array dan method dibawah ini sedang membongkar dengan cara spread ...parseDataStorage lalu di push dengan cara products.push();
    products.push(...parseDataStorage);
    
    // * Setelah di push lalu dilanjutkan dengan merender ulang
    renderProducts();
  }
  
}

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
  console.log(products);
  
  renderProducts();
  
  saveData();

  formLogistic.reset();
});

loadDataFromStorage();
