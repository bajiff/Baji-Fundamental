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

  formLogistic.reset();
});