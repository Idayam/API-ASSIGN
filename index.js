function generateProduct(data) {
  const productContainer = document.getElementById("product-box");
  data.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product");
    card.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.name}" />

            <div>
            <p>${product.price}</p>
            </div>
        `;
    productContainer.appendChild(card);
  });
}
function fetchProducts() {
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {

      const returnedData = data.products.slice(0, 7);
      generateProductCards(returnedData);
    });
}
fetchProducts()
  
  
  
  
  
  