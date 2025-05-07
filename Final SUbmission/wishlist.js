
  // Navigation click handlers
  var honey1Image = document.getElementById("honey1Image");
  if(honey1Image) {
    honey1Image.addEventListener("click", function (e) {
      // Add your code here
    });
  }

  var frameContainer6 = document.getElementById("frameContainer6");
  if(frameContainer6) {
    frameContainer6.addEventListener("click", function (e) {
      // Add your code here
    });
  }

  var homeText = document.getElementById("homeText");
  if(homeText) {
    homeText.addEventListener("click", function (e) {
      // Add your code here
    });
  }

  var shopText = document.getElementById("shopText");
  if(shopText) {
    shopText.addEventListener("click", function (e) {
      // Add your code here
    });
  }

  // 🖤 Load Wishlist Products
  document.addEventListener("DOMContentLoaded", () => {
    const wishlistContainer = document.querySelector('.wishlist-grid') || document.querySelector('.cart-body');

    if (!wishlistContainer) return;

    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    if (wishlist.length === 0) {
      wishlistContainer.innerHTML = "<p>Your wishlist is empty.</p>";
      return;
    }

    wishlist.forEach(item => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <p>₹${item.price}/kg</p>
        <div class="card-actions">
          <button class="btn-add-cart">Add to Cart</button>
          <button class="btn-remove-wishlist" data-id="${item.id}">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      `;
      wishlistContainer.appendChild(card);
    });

    wishlistContainer.addEventListener('click', (e) => {
      if (e.target.closest('.btn-remove-wishlist')) {
        const id = e.target.closest('.btn-remove-wishlist').getAttribute('data-id');
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        wishlist = wishlist.filter(item => item.id !== id);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        location.reload(); // Update UI
      }
    });
  });

