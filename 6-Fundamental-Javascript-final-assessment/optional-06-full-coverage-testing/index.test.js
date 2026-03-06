import assert from "node:assert";
import test from "node:test";
import sum  from "./index.js";

test("Misal input bukan number",() => {
  const a = "number";
  const b = "number";
  const result = sum(a, b);
  assert.strictEqual(result,0);
});

test("Misal input Negatif",() => {
  const a = (-10);
  const b = (-30);
  const result = sum(a, b);
  assert.strictEqual(result,0);
});

test("Hasilnya 3",() => {
  const a = 1
  const b = 2
  const result = sum(a,b);
  assert.strictEqual(result,3);
});

test("Misal Input boolean wkwk", () => {
  const a = true;
  const b = true;
  const retus = sum(a,b);
  assert.strictEqual(retus,0);
});


test("Misal Input null wkwk", () => {
  const a = null;
  const b = undefined;
  const retus = sum(a,b);
  assert.strictEqual(retus,0);
});