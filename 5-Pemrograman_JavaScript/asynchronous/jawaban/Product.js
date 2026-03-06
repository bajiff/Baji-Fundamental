// ? Product.js
const Product = {
  productCheck(productName, isSoldout) {
    console.log("Proses transaksi")
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isSoldout === true) {
          return reject(new Error(`Barang nya habis cuy ${productName}`));
        } else {
          return resolve(`Transaksi berhasil ${productName}`);
        };
      }, 2000);
    });
  }
};

const adaProduct = [
  {
    id: 1,
    name: "T-Shirt",
    isSoldout: false
  },
  {
    id: 2,
    name: "Baji Shoes",
    isSoldout: false
  },
  {
    id: 3,
    name: "Baji Bag",
    isSoldout: false
  },
];
const productHabis = [
  {
    id: 1,
    name: "T-Shirt",
    isSoldout: false
  },
  {
    id: 2,
    name: "Baji Shoes",
    isSoldout: false
  },
  {
    id: 3,
    name: "Baji Bag",
    isSoldout: false
  },
];
export {Product, adaProduct, productHabis};