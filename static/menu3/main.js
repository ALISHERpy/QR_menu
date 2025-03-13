


// Global cart array to store meals added to cart
let cart = [];

// Show modal with meal details
function showMealDetails(name, title, price, description, imageUrl) {
    document.getElementById("mealName").textContent = name;
    document.getElementById("mealTitle").textContent = title;
    document.getElementById("mealPrice").textContent = "Price: " + price + " sum";
    document.getElementById("mealDescription").textContent = description;
    document.getElementById("mealImage").src = imageUrl;
    document.getElementById("mealCount").textContent = "0"; // Reset count when opening modal

    // Open modal
    document.getElementById("mealModal").style.display = "block";
    
    // Store the selected meal for later adding to cart
    window.selectedMeal = { name, title, price }; // Include title for later use in cart
}

// Close modal
function closeModal() {
    document.getElementById("mealModal").style.display = "none";
}

// Increase meal count in the modal
function increaseCount() {
    let countElement = document.getElementById('mealCount');
    let count = parseInt(countElement.textContent);
    countElement.textContent = count + 1;
}

// Decrease meal count in the modal
function decreaseCount() {
    let countElement = document.getElementById('mealCount');
    let count = parseInt(countElement.textContent);
    if (count > 0) {
        countElement.textContent = count - 1;
    }
}

// Add the selected meal to the cart
function addToCart() {
    let count = parseInt(document.getElementById('mealCount').textContent);
    if (count > 0) {
        let meal = window.selectedMeal;
        meal.quantity = count;

        // Get the meal title and price
        let title = document.getElementById("mealTitle").textContent;
        let price = document.getElementById("mealPrice").textContent.replace('Price: ', '').replace(' sum', '');

        // Add the full meal object to the cart
        cart.push({
            name: meal.name,
            title: title,
            price: parseFloat(price),  // Ensure price is a number
            quantity: meal.quantity
        });

        updateCartIcon();
        closeModal();
    }
}

// Update the cart icon with the total count of items
function updateCartIcon() {
    let cartCount = cart.reduce((total, meal) => total + meal.quantity, 0);
    document.getElementById('cart-count').textContent = cartCount;
}

// Show cart modal with cart items
function viewCart() {
    // Hide the cart icon when the modal is open
    document.getElementById('cart-icon').style.display = 'none';

    // Display the cart modal
    document.getElementById('cart').style.display = 'block';

    // Get the cartItems element and clear any previous content
    let cartItemsElement = document.getElementById('cartItems');
    cartItemsElement.innerHTML = '';

    // Initialize total price
    let totalPrice = 0;

    // Add each item in the cart to the modal
    cart.forEach(item => {
        let itemTotal = item.price * item.quantity;  // Calculate the total price for the item
        totalPrice += itemTotal;  // Add item total to the overall total

        let listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${item.title}</strong> (x${item.quantity}) - ${itemTotal} sum`;
        cartItemsElement.appendChild(listItem);
    });

    // Add total price at the bottom
    let totalPriceElement = document.createElement('div');
    totalPriceElement.innerHTML = `<strong>Total: </strong>${totalPrice} sum`;
    cartItemsElement.appendChild(totalPriceElement);
}

// Close the cart modal
function closeCart() {
    // Hide the cart modal
    document.getElementById('cart').style.display = 'none';

    // Show the cart icon again
    document.getElementById('cart-icon').style.display = 'block';
}

// Add an event listener to the close button
document.getElementById('closeCart').addEventListener('click', closeCart);


function getCSRFToken() {
    // Retrieve the CSRF token value from the meta tag
    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').content;
    return csrfToken;
}
// ##########_____________
function confirmOrder() {
    const cartItems = [
        { title: "Мясной ассорти", quantity: 2, price: 180000 },
        { title: "Фруктовое ассорти", quantity: 1, price: 190000 }
    ];

    fetch('/prod/confirm-order/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCSRFToken()  // Ensure CSRF token is sent in headers
        },
        body: JSON.stringify({ items: cartItems })  // Send the cart items in the request body
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);  // Handle the response from the server
    })
    .catch(error => {
        console.error('Error:', error);  // Handle errors
    });
}





// Function to get cart items from the cart array
function getCartItems() {
    return cart.map(item => ({
        title: item.title,
        quantity: item.quantity,
        price: item.price
    }));
}


