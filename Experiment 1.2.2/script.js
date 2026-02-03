const products = [
  { name: "Wireless Headphones", price: "$129.99", category: "electronics" },
  { name: "Cotton T-Shirt", price: "$24.99", category: "clothing" },
  { name: "Bluetooth Speaker", price: "$89.99", category: "electronics" },
  { name: "Denim Jeans", price: "$59.99", category: "clothing" }
];

const grid = document.getElementById("products");
const filter = document.getElementById("filter");

function render(items) {
  grid.innerHTML = "";

  items.forEach(p => {
    const card = document.createElement("div");
    card.className = "card fade";

    card.innerHTML = `
      <h3>${p.name}</h3>
      <div class="price">${p.price}</div>
      <span class="tag ${p.category}">${p.category}</span>
    `;

    grid.appendChild(card);

    // smooth entry animation
    setTimeout(() => card.classList.remove("fade"), 50);
  });
}

filter.addEventListener("change", () => {
  const value = filter.value;
  const result = value === "all"
    ? products
    : products.filter(p => p.category === value);

  render(result);
});

render(products);
