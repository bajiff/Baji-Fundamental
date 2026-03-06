import { sum } from "./index.js";
import test from "node:test";
import assert from "node:assert";

test("Hasilnya 30",() => {
  // Arrange
  const a = 10;
  const b = 20;
  // Act
  const result = sum(a,b); 
  // Assert
  assert.strictEqual(result,30);
});


test("Hasilnya 10",() => {
  // Arrange
  const a = (-10);
  const b = 20;
  // Act
  const result = sum(a,b); 
  // Assert
  assert.strictEqual(result,10);
});


test("Hasilnya Helodek20",() => {
  // Arrange
  const a = "Helodek";
  const b = 20;
  // Act
  const result = sum(a,b); 
  // Assert
  assert.strictEqual(result,"Helodek20");
});

test("Hasilnya Helodekfalse",() => {
  // Arrange
  const a = "Helodek";
  const b = false;
  // Act
  const result = sum(a,b); 
  // Assert
  assert.strictEqual(result,"Helodekfalse");
});

test("Hasilnya 1",() => {
  // Arrange
  const a = false;
  const b = true;
  // Act
  const result = sum(a,b); 
  // Assert
  assert.strictEqual(result,1);
});

test("Hasilnya nullnull",() => {
  const a = "null";
  const b = null;

  const result = sum(a,b);

  assert.strictEqual(result,"nullnull")
});

test("Hasilnya 0",() => {
  const a = null;
  const b = null;

  const result = sum(a,b);

  assert.strictEqual(result,0)
});

test("Hasilnya NaN",() => {
  const a = null;
  const b = undefined;

  const result = sum(a,b);

  assert.strictEqual(result,NaN)
});

test("Hasilnya NaN",() => {
  const a = undefined;
  const b = undefined;

  const result = sum(a,b);

  assert.strictEqual(result,NaN)
});

test("Hasilnya NaN",() => {
  const a = 10;
  const b = undefined;

  const result = sum(a,b);

  assert.strictEqual(result,NaN)
});