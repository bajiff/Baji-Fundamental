// ? ./app.js
import getAPI from "./getAPI.js";
const content = document.getElementById("content");

const productRender = async () => {
  try {
    // Suruh sabar dulu usernya
    content.innerHTML = `<p>Sabar lagi loading...</p>`
    // Tahap consume API
    const product = await getAPI();
    
    return `${product.map(product => {
      content.innerHTML = `<ul>
        <li>
          ${product}
        </li>
      </ul>`
    })}`
    
  } catch (error) {
    throw new Error(`Yah error ${error}`);
  };
};

productRender();