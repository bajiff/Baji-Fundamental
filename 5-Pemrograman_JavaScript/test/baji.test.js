// ==========================================
// 1. FUNGSI TARGET (Sudah selesai dibuat)
// ==========================================
function hitungSisaHP(hpAwal, damage) {
  const sisa = hpAwal - damage;
  if (sisa < 0) {
    return 0; // Aturan: HP tidak boleh minus
  }
  return sisa;
};
const inputPassword = (password = "") => {
  const kriteriaPassword = 8;
  try {
    if (password.length >= kriteriaPassword) {
      return "Berhasil";
    } else if (password.length <= kriteriaPassword) {
      return false;
    } else {
      return `Masukan input yang bener`;
    }
  } catch (error) {
    throw new Error(`Error terdeteksi: ${error.message}`);
  } finally{
    console.log(`Password berhasil`)
  };
};

test('should first', () => { 
  const password = "baji1234";
  const result = inputPassword(password);
  expect(result).toBe("Berhasil");
 })



// ==========================================
// 2. RUANG UJI COBA (Tugas Tuan Baji!)
// ==========================================

// Skenario Uji 1: Serangan Normal
test("Sisa HP harus berkurang dengan benar jika damage lebih kecil dari HP", () => {
  // Arrange (Siapkan)
  const hpBaji = 100;
  const damageMusuh = 30;

  // Act (Jalankan)
  const hasil = hitungSisaHP(hpBaji, damageMusuh);


  // Assert (Buktikan)
  // TODO 1: Tulis kode pembuktian di sini! 
  // Gunakan sintaks: expect(hasil).toBe(angka_harapan);
  // Hint: 100 dikurangi 30 seharusnya 70.
  expect(hasil).toBe(70);

});


// Skenario Uji 2: Serangan Fatal (Overkill)
test("Sisa HP harus mentok di 0 jika damage jauh melebihi HP", () => {
  // TODO 2: Arrange (Siapkan HP 50, dan damage brutal sebesar 500)
  
  const HP = 50;
  const damage = 500;


  // TODO 3: Act (Masukkan ke fungsi hitungSisaHP, simpan ke variabel 'hasil')
  
  const hasil = hitungSisaHP(HP,damage);

  // TODO 4: Assert (Buktikan bahwa expect(hasil).toBe(0))
  expect(hasil).toBe(0);
  
});