import { sum } from "./index.js";
import test from "node:test";
import assert from "node:assert";

test("Fungsi sum harus menjumlahkan dua nilai dan outputnya harus valid",() => {
  
  // Menambahkan nilai positip
  assert.strictEqual(sum(10,20),30);

  // Menambahkan nilai negatip
  assert.strictEqual(sum((-10),(-20)),(-30));

  // Menambahkan nilai null
  assert.strictEqual(sum(null, null),0);

  // Menambahkan nilai nol
  assert.strictEqual(sum(0, 0),0);
});
