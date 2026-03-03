const pasukanMentah = [
  { id: 1, nama: "Baji", divisi: 1, isActive: true },
  { id: 2, nama: "Pah-chin", divisi: 3, isActive: false },
  { id: 3, nama: "Mitsuya", divisi: 2, isActive: false },
  { id: 4, nama: "Kazutora", divisi: 1, isActive: false }
];

const plants = [
  {id:1,nama: "Meki",category:"Cabai",umur:10,isRipe:false},
  {id:2,nama: "Bleki",category:"Cabai",umur:90,isRipe:true},
  {id:3,nama: "Puki",category:"Tomat",umur:55,isRipe:true},
  {id:4,nama: "Rendi",category:"Sawi",umur:55,isRipe:true},
];

const pasukanMatang = pasukanMentah.filter(pasukan => pasukan.isActive).map(pasukan => {
  return `${pasukan.nama} Sudah siap tempur`;
});

console.log(pasukanMatang);

const ripePlants = plants.filter(plants => plants.umur >= 50).map(item => {
  return `${item.nama} Sudah matang`;
})


console.log(ripePlants);