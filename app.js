let filteredProducts = [...products];

const productsContainer = document.querySelector(".products-container");

const displayProducts = () => {
	// if statement
	if (filteredProducts.length < 1) {
		productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
		return;
	}
	productsContainer.innerHTML = filteredProducts
		.map(product => {
			const { id, image, title, price } = product;
			return `
      <article class="product" data-id="${id}">
          <img src="${image}" alt="" class="img product-img">
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">$${price}</span>
          </footer>
      </article>
    `;
		})
		.join("");
};

displayProducts();

// filters
const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

form.addEventListener("keyup", () => {
	const inputValue = searchInput.value;

	filteredProducts = products.filter(product => {
		// console.log(product.title.includes(inputValue));
		return product.title.toLowerCase().includes(inputValue);
	});

	displayProducts();
});
