// const janjiBeliMotor = new Promise((resolve,reject) => {
//   let duitnya = 3000;
//   let hargaMotor = 300000;
//   setTimeout(() => {
//     if (duitnya >= hargaMotor) {
//       resolve(`Transaksi Berhasil saldo Anda ${duitnya}, Harga Motor: ${hargaMotor} Sisa saldo: ${duitnya - hargaMotor}`)
//     } else {
//       reject(new Error("Kirim duite kurang cok, saldo anda " + duitnya));
//     };
//   },3000);
// });

// console.log("Beli motor");
// janjiBeliMotor.then(onfulfilled => {
//   console.log(`Yey ${onfulfilled}`);
// }).catch(onrejected => {
//   console.log(`Yahhhh ${onrejected}`)
// })
// console.log("Nunggu beli motor");
// 
const beliKuota = (duit = 0) => {
  return new Promise((resolve,reject) => {
    console.log("Proses pembelian kuota");
    let hargaKuota = 5000;
    setTimeout(() => {
      if (duit >= hargaKuota){
        console.log("Harga Kuota: " + hargaKuota);
        resolve(`Yey berhasil, sisa uang: ${duit - hargaKuota}`);
      } else {
        reject(new Error(`Duit lu kureng dek, sana ambil duit lagi ${hargaKuota - duit}`));
      };
    },2000)
  });
};

beliKuota(2000).then(onfulfilled => console.log("Berhasil " + onfulfilled))
.catch(onrejected => console.log("Yahh gagal " + onrejected.message))

beliKuota(5000).then(onfulfilled => console.log("Berhasil " + onfulfilled))
.catch(onrejected => console.log("Yahh gagal " + onrejected.message))


const daftarTanaman = [
  
]