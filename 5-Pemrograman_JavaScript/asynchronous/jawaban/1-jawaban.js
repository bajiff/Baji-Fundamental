const pictures = ["1.jpg","Epstein.jpg","Fatamorgana.jpg"];
const token = ~~[Math.random() * 123456789];

const login = (username) => {
  return {token, username};
};

const getAPI_KEY = (token) => {
  if (token) {
    return {apiKey:"baji-api-key"};
  };
};

const getPictures = (apiKey) => {
  if (apiKey) {
    return pictures;
  }
}

const user = login("Baji");
const apiKey = getAPI_KEY(user.token);
const picture = getPictures(apiKey)

console.log(user,picture);

