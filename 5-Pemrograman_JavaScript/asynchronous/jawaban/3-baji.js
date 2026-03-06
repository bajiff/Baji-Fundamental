const Product = {
  productCheck(productName, isSoldout) {
    return new Promise((resolve,reject) => {
      if (isSoldout === true) {
        return reject(new Error(`Barang nya habis cuy ${productName}`));
      } else {
        return resolve(`Transaksi berhasil ${productName}`);
      };
    },1000);
  }
};

const adaProduct = [
  {
    id:1,
    name:"T-Shirt",
    isSoldout:false
  },
  {
    id:2,
    name:"Baji Shoes",
    isSoldout:false
  },
  {
    id:3,
    name:"Baji Bag",
    isSoldout:false
  },
];

const productHabis = [
  {
    id:1,
    name:"T-Shirt",
    isSoldout:false
  },
  {
    id:2,
    name:"Baji Shoes",
    isSoldout:false
  },
  {
    id:3,
    name:"Baji Bag",
    isSoldout:false
  },
];


const prosesPengecekan = (products) => {
  const prosesnya = products.map(item => {
    return Product.productCheck(item.name,item.isSoldout);
  });

  return Promise.all(prosesnya);
};

prosesPengecekan(productHabis).then(onfulfilled => console.log(`Berhasil ${onfulfilled}`)).catch(onrejected => console.log(`Yah gagal ${onrejected.message}`));

prosesPengecekan(adaProduct).then(onfulfilled => console.log(`Yey berhasil: ${onfulfilled}`)).catch((onrejected) => console.log(`Yah gagal: ${onrejected.message}`))