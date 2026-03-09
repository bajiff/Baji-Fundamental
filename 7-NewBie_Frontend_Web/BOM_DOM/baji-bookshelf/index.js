let products = [];

const copyright = `Hak Cipta © [ngambil dari tahun terbit] oleh [Ngambil dari nama penulis]
Seluruh hak dilindungi undang-undang. Dilarang mengutip atau memperbanyak sebagian atau seluruh isi buku ini tanpa izin tertulis dari penerbit`

const formLogistic = document.getElementById("form-logistic");

const inputProduct = document.getElementById("product");
const inputQuantity = document.getElementById("quantity");

const availableList = document.getElementById("available-list");

const soldList = document.getElementById("sold-list");

const renderProducts = () => {
  availableList.innerHTML = "";
  soldList.innerHTML = "";

  products.forEach((product) => {
    const newElement = document.createElement("div");
    newElement.innerHTML = `ID: ${product.id}<br>Name: ${product.name}<br>Quantity: ${product.quantity}<br>Status: ${product.isSoldOut ? "Sold Out" : "Available"}`
    
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "Toggle";
    
    deleteButton.addEventListener("click",() => {
      deleteProduct(product.id);
    });

    toggleButton.addEventListener("click", () => {
      toggleStatus(product.id);
    });
    
    newElement.append(deleteButton,toggleButton);

    if (product.isSoldOut === true) {
      soldList.append(newElement);
    } else {
      availableList.append(newElement);
    };
  });
  
};

const saveData = () => {
  localStorage.setItem("LOGISTIC_DATA", JSON.stringify(products));
};

const loadDataFromStorage = () => {
  const dataStorage = localStorage.getItem("LOGISTIC_DATA");
  if (dataStorage !== null) {
    const parseDataStorage = JSON.parse(dataStorage);
    // ! Isi dari parseDataStorage itu array dan method dibawah ini sedang membongkar dengan cara spread ...parseDataStorage lalu di push dengan cara products.push();
    products.push(...parseDataStorage);
    
    // * Setelah di push lalu dilanjutkan dengan merender ulang
    renderProducts();
  };
  
};

const deleteProduct = (id) => {
  products = products.filter(product => product.id !== id);
  saveData();
  renderProducts();
};

const toggleStatus = (id) => {
  const productID = products.find(product => product.id === id);
  productID.isSoldOut = (!productID.isSoldOut);
  saveData();
  renderProducts();
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
  console.log(products);
  
  renderProducts();
  
  saveData();

  formLogistic.reset();
});

loadDataFromStorage();
