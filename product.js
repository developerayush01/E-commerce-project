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


let page=1;
let main=document.getElementById("main");

main.innerHTML="";

const start=(page-1)*10;
const end=start+10;
let paginatedItems=ForYou.slice(start,end);
 paginatedItems.forEach(products => {
     main.innerHTML+= `
      <div class="col-12 columns">
  <div class="product-inside shadow-hover border rounded-3 overflow-hidden">
    <div class="product-image">
      <img src="images/download.jpg" alt="Product Image" />
    </div>
    <div class="product-content d-flex flex-column justify-content-center align-items-start gap-1 p-2">
      <div class="product-name text-dark fw-semibold">${products.item}</div>
      <div class="product-price text-danger fw-bold">Rs. ${products.price}</div>
      <div class="product-rating text-warning">⭐ ${products.rating}</div>
    </div>
  </div>
</div>
    `});

    let next=document.querySelector(".next");
    next.addEventListener("click",()=>{
      let start=0;
      let end=9;
      let productperpage=ForYou.splice(start,end);
      start=start+10;
      end=end+10;
    })