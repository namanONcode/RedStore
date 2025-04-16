const products = [
    {
      id: 1,
      name: "ASICS Wrestling Shoes",
      price: 80,
      image: "shoes.jpeg"
    },
    {
      id: 2,
      name: "Gray Fedora Hat",
      price: 25,
      image: "hat.jpeg"
    },
    {
      id: 3,
      name: "Stylish Casual Sneakers",
      price: 65,
      image: "shoes1.jpg"
    },
    {
      id: 4,
      name: "Men's Classic Watch",
      price: 120,
      image: "watch.jpg"
    }
  ];
  
  function renderProducts() {
    const container = document.getElementById("product-list");
    if (!container) return;
    container.innerHTML = "";
    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      container.appendChild(card);
    });
  }
  
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    alert(`${product.name} added to cart!`);
  }
  
  renderProducts();