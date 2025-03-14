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
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('closeCart')) {
        document.getElementById('closeCart').addEventListener('click', closeCart);
    }
});

// Get CSRF token from the Django template
function getCSRFToken() {
    // Get the CSRF token from the hidden input field created by {% csrf_token %}
    return document.querySelector('[name=csrfmiddlewaretoken]').value;
}

// Function to confirm the order
function confirmOrder() {
    // Use the actual cart items instead of hard-coded values
    const cartItems = cart.map(item => ({
        title: item.title,
        quantity: item.quantity,
        price: item.price
    }));

    // Only proceed if there are items in the cart
    if (cartItems.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // Get the current URL path to handle language prefixes
    const currentPath = window.location.pathname;
    // Extract language prefix if it exists (e.g., /en/, /ru/)
    const langMatch = currentPath.match(/^\/([a-z]{2})\//);
    const langPrefix = langMatch ? `/${langMatch[1]}` : '';
    
    // Use the language prefix in the URL
    const confirmUrl = `${langPrefix}/prod/confirm-order/`;

    fetch(confirmUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCSRFToken()
        },
        body: JSON.stringify({ items: cartItems })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Server responded with status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Order confirmed:', data);
        // Clear the cart after successful order
        cart = [];
        updateCartIcon();
        closeCart();
        alert('Your order has been confirmed!');
    })
    .catch(error => {
        console.error('Error confirming order:', error);
        alert('There was a problem confirming your order. Please try again.');
    });
}

// Function to get cart items from the cart array (utility function)
function getCartItems() {
    return cart.map(item => ({
        title: item.title,
        quantity: item.quantity,
        price: item.price
    }));
}

// Initialize event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Any additional initialization can go here
    console.log('Menu system initialized');
});

const handleConfirmOrder = async () => {
try {
    const orderData = {
    restaurant_uid: restaurant.uid,
    items: basketItems.map(item => ({
        meal_id: item.id,
        quantity: item.quantity,
        price: item.price
    })),
    total: basketItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    };
    
    // Send order to Django backend
    const response = await fetch('/api/order/confirm', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderData),
    });
    
    if (!response.ok) {
    throw new Error('Failed to submit order');
    }
    
    // Clear basket after successful order
    setBasketItems([]);
    setBasketOpen(false);
    
    alert("Order confirmed! Thank you for your purchase.");
} catch (error) {
    console.error("Error confirming order:", error);
    alert("There was an error processing your order. Please try again.");
}
};

// In app/page.tsx useEffect
useEffect(() => {
const fetchData = async () => {
    try {
    setLoading(true);
    // Get restaurant UID from URL or props
    const uid = "your-restaurant-uid"; // Replace with actual UID or get from URL
    
    // Fetch data from your Django endpoint
    const response = await fetch(`/api/menu/${uid}`);
    const data = await response.json();
    
    setRestaurant(data.restaurant);
    setCategories(data.categories);
    setMeals(data.meals);
    setActiveCategory(data.categories[0]?.name);
    setLoading(false);
    } catch (error) {
    console.error("Error fetching data:", error);
    setLoading(false);
    }
};

fetchData();
}, []);