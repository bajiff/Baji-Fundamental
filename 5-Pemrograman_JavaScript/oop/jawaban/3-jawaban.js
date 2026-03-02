// class Kendaraan {
//   constructor(merk = "Pajero", roda = 4, warna = "Merah") {
//     this.merk = merk;
//     this.roda = roda;
//     this.warna = warna;
//   };
// }

// class Mobil extends Kendaraan {
//   constructor(merkMobil){
//     super(merkMobil);
//   };

//   bukaBagasi(){
//     return `Membuka bagasi ${this.merk}`
//   }
// }

// const bajiCar = new Mobil("Chevrolet")
// console.log(bajiCar);
// console.log(bajiCar.bukaBagasi());
// 



class Karakter {
  constructor(nama = "Baji", level = 1, hasMelee = false, hasStone = false, hasVengeance = false){
    this.nama = nama;
    this.level = level;
    this.hasMelee = hasMelee;
    this.hasStone = hasStone;
    this.hasVengeance = hasVengeance;
  };
}

class Petarung extends Karakter {
  constructor(nama, level){
    super(nama,level,true,false,false)
  };

  pukul(){
    return `${this.nama} melayangkan pukulan maut!`
  };
};

class Pitcher extends Karakter {
  constructor(nama, level){
    super(nama,level,false,true,false)
  };

  throwStone(){
    return `${this.nama} melempar batu`;
  };
};

class Tanker extends Karakter {
  constructor(nama,level){
    super(nama,level,false,false,true)
  };

  vengeanceMode(){
    return `${this.nama} activated Vengeance Mode!`
  }
}

const baji = new Petarung("Baji Ajalah", 1000);
const meki = new Pitcher("Meki",250);
const jeki = new Tanker("Jeki",500);

console.log(jeki);
console.log(jeki.level);
console.log(jeki.vengeanceMode())
console.log(meki);
console.log(meki.throwStone());

console.log(baji);
console.log(baji.pukul());
