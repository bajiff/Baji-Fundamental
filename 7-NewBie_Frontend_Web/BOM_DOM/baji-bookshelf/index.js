let books = [];

const copyright = `Hak Cipta © [ngambil dari tahun terbit] oleh [Ngambil dari nama penulis]
Seluruh hak dilindungi undang-undang. Dilarang mengutip atau memperbanyak sebagian atau seluruh isi buku ini tanpa izin tertulis dari penerbit`

const formInputSection = document.getElementById("form-input-section");

const inputTitle = document.getElementById("title");
const inputSubTitle = document.getElementById("sub-title");
const inputAuthor = document.getElementById("author");
const inputPublisher = document.getElementById("publisher");
const InputIsbn = document.getElementById("isbn");
const inputPublicationYear = document.getElementById("publication-year");
const inputPlaceOfPublication = document.getElementById("place-of-publication");
const inputEditor = document.getElementById("editor");
const inputIlustrator = document.getElementById("ilustrator");

const readList = document.getElementById("read-list");

const unreadList = document.getElementById("unread-list");

const renderProducts = () => {
  readList.innerHTML = "";
  unreadList.innerHTML = "";

  books.forEach((product) => {
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
      unreadList.append(newElement);
    } else {
      readList.append(newElement);
    };
  });
  
};

const saveData = () => {
  localStorage.setItem("LOGISTIC_DATA", JSON.stringify(books));
};

const loadDataFromStorage = () => {
  const dataStorage = localStorage.getItem("LOGISTIC_DATA");
  if (dataStorage !== null) {
    const parseDataStorage = JSON.parse(dataStorage);
    // ! Isi dari parseDataStorage itu array dan method dibawah ini sedang membongkar dengan cara spread ...parseDataStorage lalu di push dengan cara books.push();
    books.push(...parseDataStorage);
    
    // * Setelah di push lalu dilanjutkan dengan merender ulang
    renderProducts();
  };
  
};

const deleteProduct = (id) => {
  books = books.filter(product => product.id !== id);
  saveData();
  renderProducts();
};

const toggleStatus = (id) => {
  const productID = books.find(product => product.id === id);
  productID.isSoldOut = (!productID.isSoldOut);
  saveData();
  renderProducts();
};

formInputSection.addEventListener("submit", (e) => {
  e.preventDefault();
  const generateUID = Date.now();
  
  const productValue = inputTitle.value;
  const quantityValue = parseInt(inputSubTitle.value);
  
  const newProduct = {
    id: generateUID,
    name: productValue,
    quantity: quantityValue,
    isSoldOut: false
  };

  books.push(newProduct);
  console.log(books);
  
  renderProducts();
  
  saveData();

  formInputSection.reset();
});

loadDataFromStorage();
