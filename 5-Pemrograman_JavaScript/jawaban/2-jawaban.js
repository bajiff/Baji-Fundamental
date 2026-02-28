
const hello = (name, origin = "Bandung") => {
  return `Halo! Nama saya ${name}. Saya tinggal di ${origin}`;
};



const rahmat = hello("Rahmat","Semarang");

const indra = hello("Indra");

console.log(hello("Baji","Cirebon Gacor"))

console.log(hello("Meki"))

console.log(rahmat)
console.log(indra)
const noReturn = () => {
  let x = 10;
}

let coba = noReturn();

console.log(coba);