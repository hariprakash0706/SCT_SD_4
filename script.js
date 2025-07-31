const products = [
  { name: "HP Pavilion 15", price: "$599", rating: "4" },
  { name: "Dell Inspiron", price: "$499", rating: "3" },
  { name: "Lenovo IdeaPad", price: "$429", rating: "5" },
  { name: "Asus VivoBook", price: "$399", rating: "4" },
];

const container = document.getElementById('productContainer');


products.forEach(product => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <div class="product-name">${product.name}</div>
    <div class="price">${product.price}</div>
    <div class="rating">⭐ ${product.rating}</div>
  `;
  container.appendChild(card);
});


document.getElementById('download-btn').addEventListener('click', () => {
  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "Product Name,Price,Rating\n";
  products.forEach(p => {
    csvContent += `${p.name},${p.price},${p.rating}\n`;
  });
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "products.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
