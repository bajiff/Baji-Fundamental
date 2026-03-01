function categorizeNumber(input) {
  if (typeof input !== "number"){
    throw new Error("Masukan angka aja")
  } else if (input % 2 === 0) {
    return "Genap";
  } else if (input % 3 === 0){
    return "Prima";
  } else if (input === 0){
    return "Nol";
  } else if (input < 0) {
    return "Negatif";
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