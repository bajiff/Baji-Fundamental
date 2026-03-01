let hpMonster = 100;
let jumlahPukulan = 0;

console.log("Pertarungan dimulai!");

while (hpMonster > 0) {
  hpMonster -= 25;
  jumlahPukulan ++;

  console.log(`Hit: ${jumlahPukulan}, Sisa HP: ${hpMonster}`);
};

console.log(`Monster kalah setelah ${jumlahPukulan} pukulan`)