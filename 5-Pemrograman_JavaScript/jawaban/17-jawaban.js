const getAPI = async () => {
  const api = "https://jsonplaceholder.typicode.com/posts";
  try {
    const response = await fetch(api);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    throw new Error(`Yahh ada error: ${error}`);
  } finally {
    console.log("Berhasil Ngambil API");
  };
};

getAPI();