let books = [];

const copyright = `Hak Cipta © [ngambil dari tahun terbit] oleh [Ngambil dari nama penulis]
Seluruh hak dilindungi undang-undang. Dilarang mengutip atau memperbanyak sebagian atau seluruh isi buku ini tanpa izin tertulis dari penerbit`

const formInputSection = document.getElementById("form-input-section");
const formSearchSection = document.getElementById("form-search-section");

const inputTitle = document.getElementById("title");
const inputSubTitle = document.getElementById("sub-title");
const inputAuthor = document.getElementById("author");
const inputPublisher = document.getElementById("publisher");
const inputIsbn = document.getElementById("isbn");
const inputPublicationYear = document.getElementById("publication-year");
const inputPlaceOfPublication = document.getElementById("place-of-publication");
const inputEditor = document.getElementById("editor");
const inputIlustrator = document.getElementById("ilustrator");

const formSearchSeaction = document.getElementById("form-search-section");

const inputSearchTitle = document.getElementById("search-title");

const readList = document.getElementById("read-list");

const unreadList = document.getElementById("unread-list");

const renderBooks = (data = books) => {
  readList.innerHTML = "";
  unreadList.innerHTML = "";

  data.forEach((book) => {
    const newElement = document.createElement("div");
    newElement.innerHTML = `ID: ${book.id}<br>Title: ${book.title}<br>Sub Title: ${book.subTitle}<br>Author: ${book.author}<br>Publisher: ${book.publisher}<br>ISBN: ${book.isbn}<br>Publication Year: ${book.publicationYear}<br>Place of Publication: ${book.placeOfPublication}<br>Editor: ${book.editor}<br>Ilustrator: ${book.ilustrator}<br>Status: ${book.isRead ? "Read" : "Unread"}`
    
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "Toggle";
    
    deleteButton.addEventListener("click",() => {
      deleteProduct(book.id);
    });

    toggleButton.addEventListener("click", () => {
      toggleStatus(book.id);
    });
    
    newElement.append(deleteButton,toggleButton);

    if (book.isRead === true) {
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
    renderBooks();
  };
  
};

const deleteProduct = (id) => {
  books = books.filter(book => book.id !== id);
  saveData();
  renderBooks();
};

const toggleStatus = (id) => {
  const productID = books.find(book => book.id === id);
  productID.isRead = (!productID.isRead);
  saveData();
  renderBooks();
};

formInputSection.addEventListener("submit", (e) => {
  e.preventDefault();
  const generateUID = Date.now();
  const titleValue = inputTitle.value;
  const subTitleValue = inputSubTitle.value;
  const authorValue = inputAuthor.value;
  const publisherValue = inputPublisher.value;
  const isbnValue = parseInt(inputIsbn.value);
  const publicationYearValue = parseInt(inputPublicationYear.value);
  const placeOfPublicationValue = inputPlaceOfPublication.value;
  const editorValue = inputEditor.value;
  const ilustratorValue = inputIlustrator.value;
  
  const newBook = {
    id: generateUID,
    title: titleValue,
    subTitle: subTitleValue,
    author: authorValue,
    publisher: publisherValue,
    isbn: isbnValue,
    publicationYear: publicationYearValue,
    placeOfPublication: placeOfPublicationValue,
    editor: editorValue,
    ilustrator: ilustratorValue,
    isRead: false
  };

  books.push(newBook);
  console.log(books);
  
  renderBooks();
  
  saveData();

  formInputSection.reset();
});

formSearchSeaction.addEventListener("submit", (e) => {
  e.preventDefault();

  const keyword = inputSearchTitle.value.toLowerCase();

  const filteredBook = books.filter(book => book.title.toLowerCase().includes(keyword));
  
  renderBooks(filteredBook);
  saveData();

})


loadDataFromStorage();
