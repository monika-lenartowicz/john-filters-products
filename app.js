let filteredProducts = [...products];

const productsContainer = document.querySelector(".products-container");
const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");
const companiesContainer = document.querySelector(".companies");

const displayProducts = () => {
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

//filter buttons:
const displayButtons = () => {
	const buttons = ["all", ...new Set(products.map(product => product.company))];
	companiesContainer.innerHTML = buttons
		.map(button => {
			return `<button class="company-btn" data-id="${button}">${button}</button>`;
		})
		.join("");
};

displayButtons();

// filters

form.addEventListener("keyup", () => {
	const inputValue = searchInput.value;

	filteredProducts = products.filter(product => {
		// console.log(product.title.includes(inputValue));
		return product.title.toLowerCase().includes(inputValue);
	});

	displayProducts();
});

companiesContainer.addEventListener("click", e => {
	const el = e.target;
	if (el.classList.contains("company-btn")) {
		if (el.dataset.id === "all") {
			filteredProducts = [...products];
		} else {
			filteredProducts = products.filter(product => product.company === el.dataset.id);
		}
	}
	searchInput.value = "";
	displayProducts();
});
