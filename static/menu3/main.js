// Global cart array to store meals added to cart
let cart = [];
// Object to store individual meal counts
let mealCounts = {};
// Object to store individual meal counts

function showMealDetails(title, price, description, imageUrl) {
    console.log("View button clicked:", title); // Debugging log

    let modal = document.getElementById("mealModal");
    let mealTitle = document.getElementById("mealTitle");
    let mealPrice = document.getElementById("mealPrice");
    let mealDescription = document.getElementById("mealDescription");
    let mealImage = document.getElementById("mealImage");
    let countElement = document.getElementById("mealCount");

    if (!modal || !mealTitle || !mealPrice || !mealDescription || !mealImage || !countElement) {
        console.error("Modal elements missing!");
        return;
    }

    // Set modal content
    mealTitle.textContent = title;
    mealPrice.textContent = "Price: " + price + " sum";
    mealDescription.textContent = description.replace(/&quot;/g, '"'); // Fix escaping issues
    mealImage.src = imageUrl;

    // Restore previous count if available, otherwise set to 0
    countElement.textContent = mealCounts[title] !== undefined ? mealCounts[title] : "0";

    // Show modal
    modal.style.display = "block";

    // Store the selected meal for later adding to cart
    window.selectedMeal = { title, price };
}

// Function to increase meal count
function increaseCount() {
    let countElement = document.getElementById('mealCount');
    let count = parseInt(countElement.textContent);
    count += 1;
    countElement.textContent = count;

    // Store the count for the currently selected meal
    if (window.selectedMeal) {
        mealCounts[window.selectedMeal.title] = count;
    }
}

// Function to decrease meal count
function decreaseCount() {
    let countElement = document.getElementById('mealCount');
    let count = parseInt(countElement.textContent);
    if (count > 0) {
        count -= 1;
        countElement.textContent = count;

        // Store the count for the currently selected meal
        if (window.selectedMeal) {
            mealCounts[window.selectedMeal.title] = count;
        }
    }
}

// Function to close meal details modal
function closeModal() {
    document.getElementById("mealModal").style.display = "none";
}

// Function to add meal to cart
function addToCart() {
    let count = parseInt(document.getElementById('mealCount').textContent);
    if (count > 0) {
        let meal = window.selectedMeal;
        let price = parseFloat(meal.price);
        let imageUrl = document.getElementById('mealImage').src; // Get meal image URL

        // Check if the meal is already in the cart
        let existingMeal = cart.find(item => item.title === meal.title);
        if (existingMeal) {
            existingMeal.quantity = count; // Update quantity instead of adding duplicate
        } else {
            cart.push({
                title: meal.title,
                price: price,
                quantity: count,
                imageUrl: imageUrl // Save image in cart
            });
        }

        mealCounts[meal.title] = count;
        updateCartIcon();
        closeModal();
    }
}


// Function to update cart icon count
function updateCartIcon() {
    let cartCount = cart.reduce((total, meal) => total + meal.quantity, 0);
    document.getElementById('cart-count').textContent = cartCount;
}

function viewCart() {
    document.getElementById('cart-icon').style.display = 'none';
    document.getElementById('cart').style.display = 'block';

    let cartItemsElement = document.getElementById('cartItems');
    cartItemsElement.innerHTML = '';

    let totalPrice = 0;

    cart.forEach((item, index) => {
        let itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;

        let listItem = document.createElement('li');
        listItem.style.display = "flex";
        listItem.style.alignItems = "center";
        listItem.style.justifyContent = "space-between";
        listItem.style.marginBottom = "10px";

        listItem.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.title}" style="width: 50px; height: 50px; border-radius: 5px; object-fit: cover;">
            <strong>${item.title}</strong> 
            <div style="display: flex; align-items: center;">
                <button class="count-btn" onclick="updateCartItem(${index}, -1)">-</button>
                <span style="margin: 0 10px; font-weight: bold;">${item.quantity}</span>
                <button class="count-btn" onclick="updateCartItem(${index}, 1)">+</button>
            </div>
            <span>${itemTotal} sum</span>
        `;
        cartItemsElement.appendChild(listItem);
    });

    // Add total price at the bottom
    let totalPriceElement = document.createElement('div');
    totalPriceElement.innerHTML = `<strong>Total: </strong>${totalPrice} sum`;
    cartItemsElement.appendChild(totalPriceElement);
}

function updateCartItem(index, change) {
    cart[index].quantity += change;
    
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1); // Remove item if quantity is zero
    }
    
    updateCartIcon();
    viewCart(); // Refresh cart modal
}


// Function to close the cart modal
function closeCart() {
    document.getElementById('cart').style.display = 'none';
    document.getElementById('cart-icon').style.display = 'block';
}

// Function to get CSRF token for Django security
function getCSRFToken() {
    return document.querySelector('[name=csrfmiddlewaretoken]').value;
}

// Function to confirm the order
function confirmOrder() {
    const roomNumber = document.getElementById('roomNumberInput').value.trim();

    // Validate room number (should not be empty)
    if (roomNumber === '') {
        alert('Please enter your room number before confirming the order.');
        return;
    }

    const cartItems = cart.map(item => ({
        title: item.title,
        quantity: item.quantity,
        price: item.price
    }));

    if (cartItems.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // Get the current URL path to handle language prefixes
    const currentPath = window.location.pathname;
    const langMatch = currentPath.match(/^\/([a-z]{2})\//);
    const langPrefix = langMatch ? `/${langMatch[1]}` : '';

    // Backend API endpoint for confirming order
    const confirmUrl = `${langPrefix}/prod/confirm-order/`;

    fetch(confirmUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCSRFToken()
        },
        body: JSON.stringify({ items: cartItems, room_number: roomNumber })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Server responded with status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Order confirmed:', data);
        cart = []; // Clear cart after successful order
        updateCartIcon();
        closeCart();
        alert('Your order has been confirmed!');
    })
    .catch(error => {
        console.error('Error confirming order:', error);
        alert('There was a problem confirming your order. Please try again.');
    });
}

// Add event listener for closing the cart
document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('closeCart')) {
        document.getElementById('closeCart').addEventListener('click', closeCart);
    }
});
