import { Product, productHabis, adaProduct } from "./Product.js";

const prosesPengecekan = (products) => {
  const prosesnya = products.map(item => {
    return Product.productCheck(item.name,item.isSoldout);
  });

  return Promise.all(prosesnya);
};

prosesPengecekan(productHabis).then(onfulfilled => console.log(`Berhasil ${onfulfilled}`)).catch(onrejected => console.log(`Yah gagal ${onrejected.message}`));

prosesPengecekan(adaProduct).then(onfulfilled => console.log(`Yey berhasil: ${onfulfilled}`)).catch((onrejected) => console.log(`Yah gagal: ${onrejected.message}`))