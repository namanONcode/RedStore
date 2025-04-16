// Example static orders (simulate API response)
const orders = [
    {
      id: "12345",
      status: "Delivered",
      product: "Red Sports Shoes",
      qty: 1,
      total: 2499,
      img: "shoes.jpeg",
    },
    {
      id: "12346",
      status: "Pending",
      product: "Wireless Headphones",
      qty: 2,
      total: 3999,
      img: "https://via.placeholder.com/100",
    },
    {
      id: "12347",
      status: "Delivered",
      product: "Red Hoodie",
      qty: 1,
      total: 1299,
      img: "https://via.placeholder.com/100",
    }
  ];
  
  // Helper to get status class
  function getStatusClass(status) {
    switch (status.toLowerCase()) {
      case "delivered": return "delivered";
      case "pending": return "pending";
      default: return "";
    }
  }
  
  // Render orders
  function renderOrders() {
    const container = document.querySelector(".container");
  
    const title = document.createElement("h1");
    title.textContent = "Your Orders";
    container.appendChild(title);
  
    orders.forEach(order => {
      const card = document.createElement("div");
      card.className = "order-card";
  
      card.innerHTML = `
        <div class="order-header">
          <h2>Order #${order.id}</h2>
          <span class="status ${getStatusClass(order.status)}">${order.status}</span>
        </div>
        <div class="order-details">
          <img src="${order.img}" alt="${order.product}">
          <div class="order-info">
            <h3>${order.product}</h3>
            <p>Qty: ${order.qty}</p>
            <p>Total: ₹${order.total}</p>
          </div>
        </div>
        <button class="btn check-btn">${order.status === "Pending" ? "Track Order" : "View Details"}</button>
      `;
  
      container.appendChild(card);
    });
  }
  
  document.addEventListener("DOMContentLoaded", renderOrders);
  