// class Brankas {
//   // Private properti harus di daftarin dulu
//   #secretPin;


//   constructor(pin){
//     this.#secretPin = pin;
//   };

//   openBrankas(tebakan){
//     if (this.#secretPin === tebakan){
//       return "Terbuka"
//     } else {
//       "Gagal dibuka"
//     };
//   };
// };

// const bajiBrankas = new Brankas("123");
// console.log(bajiBrankas.openBrankas("123"));
// 



class RobotAntiHacker {
  // Inisialisasi private hp
  #hp;

  constructor(nama, senjata, hpAwal){
    this.nama = nama;
    this.senjata = senjata;
    this.#hp = hpAwal;
  };
  
  terimaSerangan(damage){
    this.#hp -= damage;
    console.log(`Robot ${this.nama} -${damage}`)

  };
  
  cekRadar(){
    return this.#hp;
  };
};

const robotKolosal = new RobotAntiHacker("Kolosal","AK-47",500000);

robotKolosal.terimaSerangan(2000);

console.log(robotKolosal.cekRadar());