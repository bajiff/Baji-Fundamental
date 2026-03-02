function categorizeNumber(input) {
  if (typeof(input) !== "number") {
    throw new Error("Input harus berupa bilangan bulat");
  }
  if (input === 0) {
    return "Nol";
  }
  if (input < 0) {
    return "Negatif";
  }

  if (input > 1){
    // ? Inisialisasi awal dibikin true
    let apakahPrima = true;
    
    // ? Mencari akar kuadrat
    for (let i = 2; i <= Math.sqrt(input); i++) {
      // ? Apakah input habis dibagi i (2)?
      if (input % i === 0){
        // ? Maka false dan keluar;
        apakahPrima =  false;
        break;
      } 
    }
    if (apakahPrima) {
      return "Prima";
    };
  } if  (input % 2 === 0) {
    return "Genap";
  } if (input % 2 === 1) {
    return "Ganjil";
  }
}

// Contoh
console.log(categorizeNumber(15)); // Output: "Ganjil"
console.log(categorizeNumber(12)); // Output: "Genap"
console.log(categorizeNumber(17)); // Output: "Prima"
console.log(categorizeNumber(0)); // Output: "Nol"
console.log(categorizeNumber(-5)); // Output: "Negatif"
try {
  categorizeNumber('abc');
} catch (error) {
  console.log(error.message);
} // Output: "Input harus berupa bilangan bulat"