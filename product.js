var ForYou = [
  { item: "Leather Belt", category: "Men's Accessories", price: 1100, rating: 4.5, stock: "Out of Stock", image: "leather-belt.jpg" },
  { item: "Sunglasses", category: "Men's Accessories", price: 1428, rating: 4.5, stock: "In Stock", image: "sunglasses.jpg" },
  { item: "Wallet", category: "Men's Accessories", price: 1307, rating: 4.9, stock: "In Stock", image: "wallet.jpg" },
  { item: "Watch", category: "Men's Accessories", price: 2677, rating: 3.9, stock: "In Stock", image: "watch.jpg" },
  { item: "Bracelet", category: "Men's Accessories", price: 726, rating: 4.8, stock: "Out of Stock", image: "bracelet.jpg" },
  { item: "Tie", category: "Men's Accessories", price: 2036, rating: 3.7, stock: "In Stock", image: "tie.jpg" },
  { item: "Cufflinks", category: "Men's Accessories", price: 1350, rating: 4.2, stock: "Out of Stock", image: "cufflinks.jpg" },

  { item: "Handbag", category: "Women Accessories", price: 1279, rating: 4.1, stock: "Out of Stock", image: "handbag.jpg" },
  { item: "Earrings", category: "Women Accessories", price: 2166, rating: 4.4, stock: "In Stock", image: "earrings.jpg" },
  { item: "Necklace", category: "Women Accessories", price: 1612, rating: 4.8, stock: "Out of Stock", image: "necklace.jpg" },
  { item: "Makeup Kit", category: "Women Accessories", price: 1576, rating: 4.4, stock: "Out of Stock", image: "makeup-kit.jpg" },
  { item: "Scarf", category: "Women Accessories", price: 1255, rating: 3.9, stock: "In Stock", image: "scarf.jpg" },
  { item: "Hairband", category: "Women Accessories", price: 1607, rating: 4.3, stock: "In Stock", image: "hairband.jpg" },
  { item: "Bangles", category: "Women Accessories", price: 2245, rating: 4.9, stock: "Out of Stock", image: "bangles.jpg" },

  { item: "Baby Shampoo", category: "Baby Products", price: 2280, rating: 3.6, stock: "In Stock", image: "baby-shampoo.jpg" },
  { item: "Baby Diapers", category: "Baby Products", price: 2730, rating: 4.6, stock: "In Stock", image: "baby-diapers.jpg" },
  { item: "Baby Lotion", category: "Baby Products", price: 2708, rating: 4.4, stock: "In Stock", image: "baby-lotion.jpg" },
  { item: "Baby Powder", category: "Baby Products", price: 1333, rating: 4.4, stock: "In Stock", image: "baby-powder.jpg" },
  { item: "Baby Wipes", category: "Baby Products", price: 2405, rating: 4.0, stock: "Out of Stock", image: "baby-wipes.jpg" },
  { item: "Pacifier", category: "Baby Products", price: 2284, rating: 4.2, stock: "In Stock", image: "pacifier.jpg" },

  { item: "Milk Pack", category: "Food and Dairy", price: 1966, rating: 4.3, stock: "In Stock", image: "milk-pack.jpg" },
  { item: "Cheese Block", category: "Food and Dairy", price: 1486, rating: 4.4, stock: "In Stock", image: "cheese-block.jpg" },
  { item: "Yogurt Cup", category: "Food and Dairy", price: 1787, rating: 4.6, stock: "Out of Stock", image: "yogurt-cup.jpg" },
  { item: "Butter", category: "Food and Dairy", price: 1451, rating: 3.9, stock: "In Stock", image: "butter.jpg" },
  { item: "Eggs (12 pcs)", category: "Food and Dairy", price: 1217, rating: 4.3, stock: "In Stock", image: "eggs-12-pcs.jpg" },
  { item: "Paneer 250g", category: "Food and Dairy", price: 2347, rating: 4.2, stock: "Out of Stock", image: "paneer-250g.jpg" },

  { item: "T-shirt", category: "Clothes", price: 1294, rating: 4.1, stock: "In Stock", image: "t-shirt.jpg" },
  { item: "Jeans", category: "Clothes", price: 2605, rating: 3.7, stock: "In Stock", image: "jeans.jpg" },
  { item: "Tea Leaves 500g", category: "Grocery", price: 2952, rating: 3.7, stock: "In Stock", image: "tea-leaves-500g.jpg" }
];

 let pagelist = document.getElementById("main");
  let page = 1;
  let itemsperpage = 10;
  let columnClass = "col-md-12"; // default layout class

  function renderProducts() {
    let start = (page - 1) * itemsperpage;
    let end = start + itemsperpage;
    let product = ForYou.slice(start, end);

    pagelist.innerHTML = "";

    product.forEach(items => {
      pagelist.innerHTML += `
        <div class="col-6 ${columnClass} mb-3 main-product">
          <div class="product-inside d-flex flex-column flex-md-row shadow-hover border rounded-3 overflow-hidden h-100">
            <div class="product-image">
              <img src="images/${items.image}" class="img-fluid" alt="${items.item}" />
            </div>
            <div class="product-content d-flex flex-column justify-content-center align-items-start gap-1 p-2">
              <div class="product-name text-dark fw-semibold">${items.item}</div>
              <div class="product-price text-danger fw-bold">Rs. ${items.price}</div>
              <div class="product-rating text-warning">⭐ ${items.rating}</div>
            </div>
          </div>
        </div>
      `;
    });

    updatePaginationButtons();
  }

  function updatePaginationButtons() {
    const totalpage = Math.ceil(ForYou.length / itemsperpage);
    const prevBtn = document.querySelector(".previous");
    const nextBtn = document.querySelector(".next");

    prevBtn.disabled = page <= 1;
    prevBtn.style.color = page <= 1 ? "grey" : "black";

    nextBtn.disabled = page >= totalpage;
    nextBtn.style.color = page >= totalpage ? "grey" : "black";
  }

  function updateGrid(newClass) {
    columnClass = newClass;
    // Rerender current page to apply new columnClass
    renderProducts();
  }

  // Layout buttons
  document.querySelector(".btn1").addEventListener("click", () => updateGrid("col-md-12"));
  document.querySelector(".btn2").addEventListener("click", () => updateGrid("col-md-6"));
  document.querySelector(".btn3").addEventListener("click", () => updateGrid("col-md-4"));

  // Pagination: Next
  document.querySelector(".next").addEventListener("click", () => {
    const totalpage = Math.ceil(ForYou.length / itemsperpage);
    if (page < totalpage) {
      page++;
      renderProducts();
    }
  });

  // Pagination: Previous
  document.querySelector(".previous").addEventListener("click", () => {
    if (page > 1) {
      page--;
      renderProducts();
    }
  });

  // Initial render
  renderProducts();