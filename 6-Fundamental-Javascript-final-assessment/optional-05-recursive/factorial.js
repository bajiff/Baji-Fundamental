// ? ./factorial.js
function factorial(n) {
  // Disini tadinya if (n === 0 || n === 1 || n <= 1) {return 1;};
  // Dan setelah di telaah eh itu mah pemborosan kode jadi make <= 1 ajalah biar simple
  if (n <= 1){
    return 1;
  } else  {
    // Nah disini wkwk agak bingun dan banyak percobaan mulai dari
    // n = n * (factorial(n) - 1);
    n = n * (factorial(n - 1));
    return n;
  }
}

// Jangan hapus kode di bawah ini!
export default factorial;
