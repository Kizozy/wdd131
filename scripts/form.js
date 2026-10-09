const products = [
  { id: "fc-1888", name: "broadband", averagerating: 4.5 },
  { id: "fc-2050", name: "server", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "starlink", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
  const selectElement = document.getElementById("product-select");

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
  });

  const yearSpan = document.getElementById("currentyear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});