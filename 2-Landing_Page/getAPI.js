const api = "https://simple-grocery-store-api.click";

const getAPI = async () => {
  try {
    const data = await fetch(`${api}/products`);
    const json = await data.json()
    console.log(json);
    return json;
  } catch (err){
    throw new Error(`Waduh error: ${err}`)
  };
};

export default getAPI();
