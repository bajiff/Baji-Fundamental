const user = {
  nama: "Chifuyu",
  sudahLogin: false
};

const {nama, sudahLogin} = user;

const tombolNavigasi = sudahLogin ? "Logout" : "Login";

console.log(tombolNavigasi);