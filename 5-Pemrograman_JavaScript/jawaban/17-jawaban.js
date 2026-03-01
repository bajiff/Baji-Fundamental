let saldo = 50000;
let tarikTunai = 200000;

console.log("Memulai transaksi...");

try {
  if (tarikTunai > saldo){
    throw new Error("Sadar diri woy saldo lu ngga cukup, dasar miskin");
  } else {
    saldo -= tarikTunai;
    console.log("Penarikan berhasil! Sisa saldo: " + saldo)
  };
} catch (error) {
  console.log(`Mohon maaf, transaksi dibatalkan. Sistem mendeteksi anomali: ${error.message}`);
} finally {
  console.log("Terimakasih telah menggunakan ATM kami. Jangan lupa gunakan uang sebaik mungkin");
}