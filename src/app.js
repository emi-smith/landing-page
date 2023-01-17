// CONTACT FORM
//Modal items
const contactModal = document.getElementById("contact-id");
const openContactBtn = document.querySelector("#contact");
const closeContactBtn = document.querySelector(".close-contact-btn");

//Click events
openContactBtn.addEventListener("click", () => {
	contactModal.style.display = "block";
});

closeContactBtn.addEventListener("click", () => {
	contactModal.style.display = "none";
});

window.addEventListener("click", (e) => {
	if (e.target === contactModal) {
		contactModal.style.display = "none";
	}
});

// ABOUT
//Modal items
const aboutModal = document.getElementById("about-id");
const openAboutBtn = document.querySelector("#about");
const closeAboutBtn = document.querySelector(".close-about-btn");

//Click events
openAboutBtn.addEventListener("click", () => {
	aboutModal.style.display = "block";
});

closeAboutBtn.addEventListener("click", () => {
	aboutModal.style.display = "none";
});

window.addEventListener("click", (e) => {
	if (e.target === aboutModal) {
		aboutModal.style.display = "none";
	}
});

// PRODUCTS
//Modal items
const productsModal = document.getElementById("products-id");
const openProductsBtn = document.querySelector("#products");
const closeProductsBtn = document.querySelector(".close-products-btn");

//Click events
openProductsBtn.addEventListener("click", () => {
	productsModal.style.display = "block";
});

closeProductsBtn.addEventListener("click", () => {
	productsModal.style.display = "none";
});

window.addEventListener("click", (e) => {
	if (e.target === productsModal) {
		productsModal.style.display = "none";
	}
});
