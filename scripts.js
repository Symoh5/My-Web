// Toggle Sidebar Menu
function toggleMenu() {
    const menu = document.getElementById("sidebar-menu");
    menu.style.right = menu.style.right === "0px" ? "-200px" : "0px";
}

// Search Function
function searchProducts() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    if (query) {
        alert("Searching for: " + query);
        // Implement search logic here, for example, filtering products based on the search query
    } else {
        alert("Please enter a search term.");
    }
}
// Sample shoe data for demonstration purposes
const shoes = [
    {id: 1, name: "Sneaker", category: "Casual", price: "$49.99", img: "images/sneaker.jpg", link: "shoe1.html"},
    {id: 2, name: "Running Shoes", category: "Sports", price: "$59.99", img: "images/running-shoe.jpg", link: "shoe2.html"},
    {id: 3, name: "Loafers", category: "Casual", price: "$69.99", img: "images/loafer.jpg", link: "shoe3.html"},
    {id: 4, name: "Formal Shoes", category: "Formal", price: "$79.99", img: "images/formal-shoe.jpg", link: "shoe4.html"}
];

// Function to toggle the sidebar menu
function toggleMenu() {
    const menu = document.getElementById("sidebar-menu");
    menu.style.right = menu.style.right === "0px" ? "-200px" : "0px";
}

// Search function to display shoe products
function searchProducts() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const filteredShoes = shoes.filter(shoe => shoe.name.toLowerCase().includes(query));
    displayProducts(filteredShoes);
}

// Function to display products in the grid
function displayProducts(products) {
    const productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = ""; // Clear previous results

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");

        productElement.innerHTML = `
            <a href="${product.link}">
                <img src="${product.img}" alt="${product.name}">
                <p>${product.name}</p>
                <span>${product.price}</span>
            </a>
        `;

        productGrid.appendChild(productElement);
    });

    // Display related products (example)
    displayRelatedProducts(products);
}

// Function to display related products based on the search
function displayRelatedProducts(products) {
    const relatedProducts = document.getElementById("related-products-grid");
    relatedProducts.innerHTML = ""; // Clear previous related products

    // Display 3 random related products
    const shuffled = [...shoes].sort(() => 0.5 - Math.random()).slice(0, 3);
    shuffled.forEach(product => {
        const relatedProductElement = document.createElement("div");
        relatedProductElement.classList.add("product");

        relatedProductElement.innerHTML = `
            <a href="${product.link}">
                <img src="${product.img}" alt="${product.name}">
                <p>${product.name}</p>
                <span>${product.price}</span>
            </a>
        `;

        relatedProducts.appendChild(relatedProductElement);
    });
}

// Initially display all products
displayProducts(shoes);
