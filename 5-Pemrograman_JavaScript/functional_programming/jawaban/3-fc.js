const hitungMundur = ( angka = 0) => {
  if (angka === 0){
    return "BOOM! Ledakan terjadi";
  }
    console.log(angka);
    return hitungMundur(angka -1);
};
console.log(hitungMundur(5));


const hitungSampeSeratus = (angkaAwal = 0) => {
  if (angkaAwal === 100) {
    console.log(angkaAwal)
    return "Duar NMAX";
  }
    console.log(angkaAwal);
    return hitungSampeSeratus(angkaAwal + 1);
};

console.log(hitungSampeSeratus(88));