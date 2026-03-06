function fibonacci(n) {
  // ? Yuhuu
  // * Jika n === 0 maka kembalikan 0
  if (n === 0) return [0];
  // * Jika n === 1 maka kembalikan [0, 1];
  if (n === 1) return [0, 1];
  /* Jika n > 1 maka
  pertama bikin variabel yang menampung fibonaci yang sebelumnya dengan cara fibonnaci(n - 1) jadi ini tuh gunanya buat manggil yang dulu nya;
  
  lalu ambil index terakhir dari sebuah array dengan cara
  panggil variabel array nya yaitu
  nilaiSementaraCuy[nilaiSementaraCuy.length - 1];
  lalu ambil index array kedua terakhir dengan cara ya tinggal di kurangi 2 aja tadi kan dikurangi 1 
  nilaiSementaraCuy[nilaiSementaraCuy.length - 2];
  
  */ 
  if (n > 1) {
    const nilaiSemetaraCuy = fibonacci(n - 1);
    const indexTerakhir = nilaiSemetaraCuy[nilaiSemetaraCuy.length - 1]; 
    const indexKeduaTerakhir = nilaiSemetaraCuy[nilaiSemetaraCuy.length - 2]; 
    const result = indexTerakhir + indexKeduaTerakhir;
    nilaiSemetaraCuy.push(result);
    return nilaiSemetaraCuy;
  }
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
