const beliMieAyam = new Promise((resolve,reject) => {
  let duit = 50000;
  let hargaMieAyam = 10000;

  setInterval(() => {
    if (duit >= hargaMieAyam) {
      resolve("Duit nya ngga kurang");
    } else {
      reject("Duit nya kurang oy");
    };
  },3000);
});

console.log(beliMieAyam());