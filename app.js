// Enhanced JavaScript for The Blunder Rookie E-commerce Website
// Global Variables
let products = [];
let accessories = [];
let cart = [];
let currentUser = null;
let isAdmin = false;
let orders = [];
let customers = [];
let productReviews = {};

// Sample Data
const sampleProducts = [
    {
        id: 1,
        brand: 'DELL',
        name: 'Latitude 7480',
        processor: 'Intel Core i7 6th Gen',
        ram: '8GB',
        storage: '256GB SSD',
        screen: '14 inch',
        condition: 'Excellent',
        warranty: '12 months',
        originalPrice: 65000,
        currentPrice: 24999,
        discount: 62,
        stock: 6,
        stockStatus: 'low',
        rating: 4.5,
        reviewCount: 127,
        images: ['laptop-placeholder-1.jpg', 'laptop-placeholder-2.jpg'],
        specifications: {
            'Processor': 'Intel Core i7 6th Gen',
            'RAM': '8GB',
            'Storage': '256GB SSD',
            'Screen Size': '14 inch',
            'Condition': 'Excellent',
            'Warranty': '12 months'
        }
    },
    {
        id: 2,
        brand: 'HP',
        name: 'EliteBook 840 G6',
        processor: 'Intel Core i5 8th Gen',
        ram: '8GB',
        storage: '256GB SSD',
        screen: '14 inch',
        condition: 'Excellent',
        warranty: '12 months',
        originalPrice: 75000,
        currentPrice: 29999,
        discount: 60,
        stock: 8,
        stockStatus: 'low',
        rating: 4.3,
        reviewCount: 89,
        images: ['laptop-placeholder-3.jpg', 'laptop-placeholder-4.jpg'],
        specifications: {
            'Processor': 'Intel Core i5 8th Gen',
            'RAM': '8GB',
            'Storage': '256GB SSD',
            'Screen Size': '14 inch',
            'Condition': 'Excellent',
            'Warranty': '12 months'
        }
    },
    {
        id: 3,
        brand: 'LENOVO',
        name: 'ThinkPad X1 Carbon',
        processor: 'Intel Core i7 8th Gen',
        ram: '16GB',
        storage: '512GB SSD',
        screen: '14 inch',
        condition: 'Excellent',
        warranty: '12 months',
        originalPrice: 120000,
        currentPrice: 45999,
        discount: 62,
        stock: 5,
        stockStatus: 'low',
        rating: 4.7,
        reviewCount: 156,
        images: ['laptop-placeholder-5.jpg', 'laptop-placeholder-6.jpg'],
        specifications: {
            'Processor': 'Intel Core i7 8th Gen',
            'RAM': '16GB',
            'Storage': '512GB SSD',
            'Screen Size': '14 inch',
            'Condition': 'Excellent',
            'Warranty': '12 months'
        }
    },
    {
        id: 4,
        brand: 'APPLE',
        name: 'MacBook Air M1',
        processor: 'Apple M1 Chip',
        ram: '8GB',
        storage: '256GB SSD',
        screen: '13.3 inch',
        condition: 'Excellent',
        warranty: '12 months',
        originalPrice: 99900,
        currentPrice: 65999,
        discount: 34,
        stock: 15,
        stockStatus: 'available',
        rating: 4.8,
        reviewCount: 203,
        images: ['laptop-placeholder-7.jpg', 'laptop-placeholder-8.jpg'],
        specifications: {
            'Processor': 'Apple M1 Chip',
            'RAM': '8GB',
            'Storage': '256GB SSD',
            'Screen Size': '13.3 inch',
            'Condition': 'Excellent',
            'Warranty': '12 months'
        }
    },
    {
        id: 5,
        brand: 'ASUS',
        name: 'ZenBook 14',
        processor: 'AMD Ryzen 5 Pro',
        ram: '8GB',
        storage: '512GB SSD',
        screen: '14 inch',
        condition: 'Excellent',
        warranty: '12 months',
        originalPrice: 60000,
        currentPrice: 32999,
        discount: 45,
        stock: 12,
        stockStatus: 'available',
        rating: 4.4,
        reviewCount: 94,
        images: ['laptop-placeholder-9.jpg', 'laptop-placeholder-10.jpg'],
        specifications: {
            'Processor': 'AMD Ryzen 5 Pro',
            'RAM': '8GB',
            'Storage': '512GB SSD',
            'Screen Size': '14 inch',
            'Condition': 'Excellent',
            'Warranty': '12 months'
        }
    },
    {
        id: 6,
        brand: 'DELL',
        name: 'Precision 5540',
        processor: 'Intel Core i9 9th Gen',
        ram: '32GB',
        storage: '1TB SSD',
        screen: '15.6 inch',
        condition: 'Excellent',
        warranty: '12 months',
        originalPrice: 200000,
        currentPrice: 85999,
        discount: 57,
        stock: 3,
        stockStatus: 'low',
        rating: 4.6,
        reviewCount: 78,
        images: ['laptop-placeholder-11.jpg', 'laptop-placeholder-12.jpg'],
        specifications: {
            'Processor': 'Intel Core i9 9th Gen',
            'RAM': '32GB',
            'Storage': '1TB SSD',
            'Screen Size': '15.6 inch',
            'Condition': 'Excellent',
            'Warranty': '12 months'
        }
    }
];

const sampleAccessories = [
    {
        id: 101,
        name: 'Laptop Stand',
        price: 1299,
        category: 'Stand',
        image: 'stand-placeholder.jpg',
        description: 'Adjustable aluminum laptop stand',
        stock: 25,
        rating: 4.2,
        reviewCount: 45
    },
    {
        id: 102,
        name: 'Wireless Mouse',
        price: 899,
        category: 'Mouse',
        image: 'mouse-placeholder.jpg',
        description: 'Ergonomic wireless mouse with 2.4GHz connectivity',
        stock: 50,
        rating: 4.1,
        reviewCount: 67
    },
    {
        id: 103,
        name: 'Mechanical Keyboard',
        price: 2499,
        category: 'Keyboard',
        image: 'keyboard-placeholder.jpg',
        description: 'RGB mechanical keyboard with blue switches',
        stock: 15,
        rating: 4.5,
        reviewCount: 89
    },
    {
        id: 104,
        name: 'Laptop Bag',
        price: 1799,
        category: 'Bag',
        image: 'bag-placeholder.jpg',
        description: 'Water-resistant laptop bag with multiple compartments',
        stock: 30,
        rating: 4.3,
        reviewCount: 56
    },
    {
        id: 105,
        name: 'USB-C Hub',
        price: 2999,
        category: 'Hub',
        image: 'hub-placeholder.jpg',
        description: 'Multi-port USB-C hub with HDMI and USB 3.0',
        stock: 20,
        rating: 4.4,
        reviewCount: 34
    },
    {
        id: 106,
        name: 'External Monitor',
        price: 12999,
        category: 'Monitor',
        image: 'monitor-placeholder.jpg',
        description: '24-inch Full HD monitor with IPS panel',
        stock: 8,
        rating: 4.6,
        reviewCount: 23
    }
];

// Sample Reviews
const sampleReviews = {
    1: [
        {
            author: 'Amit Sharma',
            rating: 5,
            date: '2025-09-20',
            text: 'Excellent laptop! Works like new. Very satisfied with the purchase.'
        },
        {
            author: 'Priya Patel',
            rating: 4,
            date: '2025-09-18',
            text: 'Good performance and build quality. Fast delivery too.'
        },
        {
            author: 'Rohit Kumar',
            rating: 5,
            date: '2025-09-15',
            text: 'Amazing value for money. Highly recommended!'
        }
    ],
    2: [
        {
            author: 'Sita Devi',
            rating: 4,
            date: '2025-09-22',
            text: 'Great laptop for office work. Battery life is good.'
        },
        {
            author: 'Ramesh Singh',
            rating: 4,
            date: '2025-09-19',
            text: 'Solid build quality. Happy with the purchase.'
        }
    ]
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    products = [...sampleProducts];
    accessories = [...sampleAccessories];
    productReviews = {...sampleReviews};

    loadCartFromStorage();
    loadUserFromStorage();
    setupEventListeners();
    renderFeaturedProducts();
    showSection('home');
    updateCartUI();

    console.log('Application initialized successfully');
}

// Event Listeners Setup
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', handleNavigation);
    });

    // User authentication
    document.getElementById('user-btn').addEventListener('click', showUserModal);
    document.getElementById('show-register').addEventListener('click', showRegisterForm);
    document.getElementById('show-login').addEventListener('click', showLoginForm);
    document.getElementById('login-form-element').addEventListener('submit', handleLogin);
    document.getElementById('register-form-element').addEventListener('submit', handleRegister);
    document.getElementById('logout').addEventListener('click', handleLogout);

    // Cart
    document.getElementById('cart-btn').addEventListener('click', showCartModal);
    document.getElementById('checkout-btn').addEventListener('click', showCheckoutModal);

    // WhatsApp
    document.getElementById('whatsapp-btn').addEventListener('click', openWhatsAppChat);

    // Product modals
    document.getElementById('add-to-cart-btn').addEventListener('click', addToCartFromModal);
    document.getElementById('buy-now-btn').addEventListener('click', buyNowFromModal);

    // Quantity controls
    document.getElementById('quantity-plus').addEventListener('click', increaseQuantity);
    document.getElementById('quantity-minus').addEventListener('click', decreaseQuantity);

    // Checkout
    document.getElementById('place-order-btn').addEventListener('click', placeOrder);

    // Admin
    document.getElementById('admin-login-form').addEventListener('submit', handleAdminLogin);

    // Forms
    document.getElementById('sell-laptop-form').addEventListener('submit', handleSellLaptop);
    document.getElementById('contact-form').addEventListener('submit', handleContactForm);

    // Filters
    document.getElementById('brand-filter').addEventListener('change', applyFilters);
    document.getElementById('ram-filter').addEventListener('change', applyFilters);
    document.getElementById('price-filter').addEventListener('change', applyFilters);
    document.getElementById('sort-filter').addEventListener('change', applyFilters);

    // Modal close buttons
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });

    // Payment method selection
    document.querySelectorAll('input[name="payment-method"]').forEach(radio => {
        radio.addEventListener('change', handlePaymentMethodChange);
    });

    // Policy links
    document.querySelectorAll('a[href="#warranty"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showModal('warranty-modal');
        });
    });

    document.querySelectorAll('a[href="#refund"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showModal('refund-modal');
        });
    });

    document.querySelectorAll('a[href="#faq"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showModal('faq-modal');
        });
    });

    // Admin secret access (Ctrl+Shift+A)
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.shiftKey && e.key === 'A') {
            showModal('admin-modal');
        }
    });
}

// Navigation Functions
function handleNavigation(e) {
    e.preventDefault();
    const target = e.target.getAttribute('href').substring(1);
    showSection(target);
}

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });

    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';

        // Load content based on section
        switch(sectionId) {
            case 'buy':
                renderProductsGrid();
                break;
            case 'accessories':
                renderAccessoriesGrid();
                break;
        }
    }

    // Update navigation active state
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
        }
    });
}

// Product Rendering Functions
function renderFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;

    const featuredProducts = products.slice(0, 6);
    container.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');

    // Add click listeners to product cards
    container.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', function() {
            const productId = parseInt(this.dataset.productId);
            showProductModal(productId);
        });
    });
}

function renderProductsGrid() {
    const container = document.getElementById('products-grid');
    if (!container) return;

    let filteredProducts = [...products];

    // Apply filters
    const brandFilters = getCheckedValues('#brand-filter input:checked');
    const ramFilters = getCheckedValues('#ram-filter input:checked');
    const priceFilter = document.getElementById('price-filter').value;
    const sortFilter = document.getElementById('sort-filter').value;

    // Filter by brand
    if (brandFilters.length > 0) {
        filteredProducts = filteredProducts.filter(p => brandFilters.includes(p.brand));
    }

    // Filter by RAM
    if (ramFilters.length > 0) {
        filteredProducts = filteredProducts.filter(p => ramFilters.includes(p.ram));
    }

    // Filter by price
    if (priceFilter) {
        const [min, max] = priceFilter.split('-').map(Number);
        filteredProducts = filteredProducts.filter(p => p.currentPrice >= min && p.currentPrice <= max);
    }

    // Sort products
    switch(sortFilter) {
        case 'price-asc':
            filteredProducts.sort((a, b) => a.currentPrice - b.currentPrice);
            break;
        case 'price-desc':
            filteredProducts.sort((a, b) => b.currentPrice - a.currentPrice);
            break;
        case 'brand':
            filteredProducts.sort((a, b) => a.brand.localeCompare(b.brand));
            break;
    }

    // Update products count
    document.getElementById('products-count').textContent = `${filteredProducts.length} laptops found`;

    // Render products
    container.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');

    // Add click listeners
    container.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', function() {
            const productId = parseInt(this.dataset.productId);
            showProductModal(productId);
        });
    });
}

function renderAccessoriesGrid() {
    const container = document.getElementById('accessories-grid');
    if (!container) return;

    container.innerHTML = accessories.map(accessory => createAccessoryCard(accessory)).join('');

    // Add click listeners
    container.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', function() {
            const accessoryId = parseInt(this.dataset.productId);
            showAccessoryModal(accessoryId);
        });
    });
}

function createProductCard(product) {
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                💻
            </div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-specs">
                    <div>Processor: ${product.processor}</div>
                    <div>RAM: ${product.ram}</div>
                    <div>Storage: ${product.storage}</div>
                    <div>Screen: ${product.screen}</div>
                </div>
                <div class="product-stock ${product.stockStatus === 'low' ? 'stock-low' : 'stock-available'}">
                    ${product.stockStatus === 'low' ? '⚠ Only ' + product.stock + ' left' : '✓ In stock'}
                </div>
                <div class="product-pricing">
                    <span class="original-price">₹${product.originalPrice.toLocaleString()}</span>
                    <span class="current-price">₹${product.currentPrice.toLocaleString()}</span>
                    <span class="discount">${product.discount}% OFF</span>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id}, event)">Add to Cart</button>
            </div>
        </div>
    `;
}

function createAccessoryCard(accessory) {
    return `
        <div class="product-card" data-product-id="${accessory.id}">
            <div class="product-image">
                ${getCategoryIcon(accessory.category)}
            </div>
            <div class="product-info">
                <div class="product-name">${accessory.name}</div>
                <div class="product-specs">
                    <div>${accessory.description}</div>
                </div>
                <div class="product-stock stock-available">✓ In stock</div>
                <div class="product-pricing">
                    <span class="current-price">₹${accessory.price.toLocaleString()}</span>
                </div>
                <button class="add-to-cart-btn" onclick="addAccessoryToCart(${accessory.id}, event)">Add to Cart</button>
            </div>
        </div>
    `;
}

function getCategoryIcon(category) {
    const icons = {
        'Stand': '💻',
        'Mouse': '🖱️',
        'Keyboard': '⌨️',
        'Bag': '🎒',
        'Hub': '🔌',
        'Monitor': '🖥️'
    };
    return icons[category] || '📱';
}

// Modal Functions
function showModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function hideModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto';
}

function showProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Populate modal with product data
    document.getElementById('modal-product-name').textContent = `${product.brand} ${product.name}`;
    document.getElementById('modal-current-price').textContent = `₹${product.currentPrice.toLocaleString()}`;
    document.getElementById('modal-original-price').textContent = `₹${product.originalPrice.toLocaleString()}`;
    document.getElementById('modal-discount').textContent = `${product.discount}% OFF`;
    document.getElementById('rating-text').textContent = `${product.rating} (${product.reviewCount} reviews)`;
    document.getElementById('stock-status').textContent = product.stockStatus === 'low' ? `⚠ Only ${product.stock} left` : '✓ In stock';
    document.getElementById('stock-status').className = `stock-status ${product.stockStatus}`;

    // Set rating stars
    const stars = document.getElementById('product-stars');
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;
    stars.innerHTML = '';
    for (let i = 0; i < fullStars; i++) {
        stars.innerHTML += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        stars.innerHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
        stars.innerHTML += '<i class="far fa-star"></i>';
    }

    // Populate specifications
    const specsContainer = document.getElementById('product-specifications');
    specsContainer.innerHTML = '<h4>Specifications</h4>' + 
        Object.entries(product.specifications).map(([key, value]) => 
            `<div class="spec-item"><span>${key}:</span><span>${value}</span></div>`
        ).join('');

    // Load reviews
    loadProductReviews(productId);

    // Set product ID for cart actions
    document.getElementById('product-modal').dataset.productId = productId;

    // Reset quantity
    document.getElementById('quantity-input').value = 1;

    showModal('product-modal');
}

function showAccessoryModal(accessoryId) {
    const accessory = accessories.find(a => a.id === accessoryId);
    if (!accessory) return;

    // Populate modal with accessory data (simplified version of product modal)
    document.getElementById('modal-product-name').textContent = accessory.name;
    document.getElementById('modal-current-price').textContent = `₹${accessory.price.toLocaleString()}`;
    document.getElementById('modal-original-price').textContent = '';
    document.getElementById('modal-discount').textContent = '';
    document.getElementById('rating-text').textContent = `${accessory.rating} (${accessory.reviewCount} reviews)`;
    document.getElementById('stock-status').textContent = '✓ In stock';
    document.getElementById('stock-status').className = 'stock-status available';

    // Set rating stars for accessory
    const stars = document.getElementById('product-stars');
    const fullStars = Math.floor(accessory.rating);
    const hasHalfStar = accessory.rating % 1 !== 0;
    stars.innerHTML = '';
    for (let i = 0; i < fullStars; i++) {
        stars.innerHTML += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        stars.innerHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
        stars.innerHTML += '<i class="far fa-star"></i>';
    }

    // Populate specifications
    const specsContainer = document.getElementById('product-specifications');
    specsContainer.innerHTML = `<h4>Product Details</h4><div class="spec-item"><span>Description:</span><span>${accessory.description}</span></div>`;

    // Set accessory ID for cart actions
    document.getElementById('product-modal').dataset.accessoryId = accessoryId;
    document.getElementById('product-modal').dataset.productId = '';

    // Reset quantity
    document.getElementById('quantity-input').value = 1;

    showModal('product-modal');
}

function loadProductReviews(productId) {
    const reviewsContainer = document.getElementById('reviews-container');
    const reviews = productReviews[productId] || [];

    if (reviews.length === 0) {
        reviewsContainer.innerHTML = '<p>No reviews yet. Be the first to review this product!</p>';
        return;
    }

    reviewsContainer.innerHTML = reviews.map(review => `
        <div class="review-item">
            <div class="review-header">
                <span class="review-author">${review.author}</span>
                <span class="review-date">${new Date(review.date).toLocaleDateString()}</span>
            </div>
            <div class="review-rating">
                ${generateStarRating(review.rating)}
            </div>
            <div class="review-text">${review.text}</div>
        </div>
    `).join('');
}

function generateStarRating(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += '<i class="fas fa-star"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Cart Functions
function addToCart(productId, event = null) {
    if (event) {
        event.stopPropagation();
    }

    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId && item.type === 'product');

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            type: 'product',
            name: `${product.brand} ${product.name}`,
            price: product.currentPrice,
            quantity: 1,
            image: product.images[0]
        });
    }

    updateCartUI();
    saveCartToStorage();
    showNotification(`${product.name} added to cart!`);
}

function addAccessoryToCart(accessoryId, event = null) {
    if (event) {
        event.stopPropagation();
    }

    const accessory = accessories.find(a => a.id === accessoryId);
    if (!accessory) return;

    const existingItem = cart.find(item => item.id === accessoryId && item.type === 'accessory');

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: accessoryId,
            type: 'accessory',
            name: accessory.name,
            price: accessory.price,
            quantity: 1,
            image: accessory.image
        });
    }

    updateCartUI();
    saveCartToStorage();
    showNotification(`${accessory.name} added to cart!`);
}

function addToCartFromModal() {
    const modal = document.getElementById('product-modal');
    const productId = parseInt(modal.dataset.productId);
    const accessoryId = parseInt(modal.dataset.accessoryId);
    const quantity = parseInt(document.getElementById('quantity-input').value);

    if (productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = cart.find(item => item.id === productId && item.type === 'product');

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                id: productId,
                type: 'product',
                name: `${product.brand} ${product.name}`,
                price: product.currentPrice,
                quantity: quantity,
                image: product.images[0]
            });
        }

        showNotification(`${product.name} added to cart!`);
    } else if (accessoryId) {
        const accessory = accessories.find(a => a.id === accessoryId);
        if (!accessory) return;

        const existingItem = cart.find(item => item.id === accessoryId && item.type === 'accessory');

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                id: accessoryId,
                type: 'accessory',
                name: accessory.name,
                price: accessory.price,
                quantity: quantity,
                image: accessory.image
            });
        }

        showNotification(`${accessory.name} added to cart!`);
    }

    updateCartUI();
    saveCartToStorage();
    hideModal('product-modal');
}

function buyNowFromModal() {
    addToCartFromModal();
    showCheckoutModal();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
    saveCartToStorage();
    renderCartItems();
}

function updateCartQuantity(index, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(index);
        return;
    }

    cart[index].quantity = newQuantity;
    updateCartUI();
    saveCartToStorage();
    renderCartItems();
}

function updateCartUI() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    document.getElementById('cart-count').textContent = cartCount;
    document.getElementById('cart-total').textContent = cartTotal.toLocaleString();

    // Show/hide cart count badge
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.style.display = cartCount > 0 ? 'flex' : 'none';
}

function showCartModal() {
    renderCartItems();
    showModal('cart-modal');
}

function renderCartItems() {
    const container = document.getElementById('cart-items');

    if (cart.length === 0) {
        container.innerHTML = '<p>Your cart is empty</p>';
        return;
    }

    container.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div class="cart-item-image">
                ${item.type === 'product' ? '💻' : getCategoryIcon(item.name)}
            </div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
            </div>
            <div class="cart-item-controls">
                <button onclick="updateCartQuantity(${index}, ${item.quantity - 1})">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateCartQuantity(${index}, ${item.quantity + 1})">+</button>
                <button onclick="removeFromCart(${index})" style="margin-left: 10px; color: red;">×</button>
            </div>
        </div>
    `).join('');
}

// Quantity Controls
function increaseQuantity() {
    const input = document.getElementById('quantity-input');
    const currentValue = parseInt(input.value);
    const maxValue = parseInt(input.max) || 10;

    if (currentValue < maxValue) {
        input.value = currentValue + 1;
    }
}

function decreaseQuantity() {
    const input = document.getElementById('quantity-input');
    const currentValue = parseInt(input.value);
    const minValue = parseInt(input.min) || 1;

    if (currentValue > minValue) {
        input.value = currentValue - 1;
    }
}

// Checkout Functions
function showCheckoutModal() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }

    if (!currentUser) {
        showNotification('Please login to continue with checkout');
        showUserModal();
        return;
    }

    renderCheckoutItems();
    populateUserDetails();
    showModal('checkout-modal');
}

function renderCheckoutItems() {
    const container = document.getElementById('checkout-items');
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    container.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <div class="checkout-item-info">
                <div class="checkout-item-name">${item.name}</div>
                <div class="checkout-item-quantity">Qty: ${item.quantity}</div>
            </div>
            <div class="checkout-item-price">₹${(item.price * item.quantity).toLocaleString()}</div>
        </div>
    `).join('');

    document.getElementById('checkout-subtotal').textContent = subtotal.toLocaleString();
    document.getElementById('checkout-total').textContent = subtotal.toLocaleString();
}

function populateUserDetails() {
    if (currentUser) {
        document.getElementById('checkout-name').value = currentUser.name || '';
        document.getElementById('checkout-email').value = currentUser.email || '';
        document.getElementById('checkout-phone').value = currentUser.phone || '';
    }
}

function placeOrder() {
    const form = document.getElementById('checkout-form');
    const formData = new FormData(form);

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const orderData = {
        id: generateOrderId(),
        customerId: currentUser.id,
        customerName: document.getElementById('checkout-name').value,
        customerEmail: document.getElementById('checkout-email').value,
        customerPhone: document.getElementById('checkout-phone').value,
        shippingAddress: {
            address: document.getElementById('checkout-address').value,
            city: document.getElementById('checkout-city').value,
            state: document.getElementById('checkout-state').value,
            pincode: document.getElementById('checkout-pincode').value
        },
        items: [...cart],
        subtotal: cart.reduce((total, item) => total + (item.price * item.quantity), 0),
        total: cart.reduce((total, item) => total + (item.price * item.quantity), 0),
        paymentMethod: document.querySelector('input[name="payment-method"]:checked').value,
        status: 'pending',
        orderDate: new Date().toISOString(),
        estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString()
    };

    showLoading();

    // Simulate order processing
    setTimeout(() => {
        processOrder(orderData);
        hideLoading();
    }, 2000);
}

function processOrder(orderData) {
    // Save order
    orders.push(orderData);
    saveOrdersToStorage();

    if (orderData.paymentMethod === 'upi') {
        // Redirect to UPI payment
        initiateUPIPayment(orderData);
    } else {
        // Pay Later - Send order details to WhatsApp
        sendOrderToWhatsApp(orderData);
        showOrderConfirmation(orderData);
    }

    // Clear cart
    cart = [];
    updateCartUI();
    saveCartToStorage();

    hideModal('checkout-modal');
}

function initiateUPIPayment(orderData) {
    // Generate UPI payment link (simplified - in real implementation, use payment gateway)
    const upiId = 'support@theblunderrookie.com'; // Replace with actual UPI ID
    const amount = orderData.total;
    const note = `Order #${orderData.id}`;

    // For demo purposes, show payment success after 3 seconds
    showNotification('Redirecting to UPI payment...');

    setTimeout(() => {
        orderData.status = 'paid';
        orderData.paymentDate = new Date().toISOString();
        generateInvoice(orderData);
        sendConfirmationToWhatsApp(orderData);
        showOrderConfirmation(orderData);
    }, 3000);
}

function sendOrderToWhatsApp(orderData) {
    const message = `
🛒 New Order Received!

Order ID: #${orderData.id}
Customer: ${orderData.customerName}
Phone: ${orderData.customerPhone}
Email: ${orderData.customerEmail}

Items:
${orderData.items.map(item => `• ${item.name} (Qty: ${item.quantity}) - ₹${(item.price * item.quantity).toLocaleString()}`).join('\n')}

Total: ₹${orderData.total.toLocaleString()}
Payment: Pay Later

Shipping Address:
${orderData.shippingAddress.address}
${orderData.shippingAddress.city}, ${orderData.shippingAddress.state} - ${orderData.shippingAddress.pincode}

Please contact the customer to confirm the order and payment details.
    `;

    const whatsappUrl = `https://wa.me/919962229914?text=${encodeURIComponent(message)}`;

    // In a real implementation, you might use WhatsApp Business API
    console.log('Order sent to WhatsApp:', message);
}

function sendConfirmationToWhatsApp(orderData) {
    const message = `
✅ Order Confirmed!

Hi ${orderData.customerName},

Your order #${orderData.id} has been confirmed and payment received.

Items:
${orderData.items.map(item => `• ${item.name} (Qty: ${item.quantity})`).join('\n')}

Total Paid: ₹${orderData.total.toLocaleString()}

Expected Delivery: ${new Date(orderData.estimatedDelivery).toLocaleDateString()}

Thank you for shopping with The Blunder Rookie!
    `;

    // Send to customer's WhatsApp (if they provided WhatsApp number)
    console.log('Confirmation sent to customer:', message);
}

function generateInvoice(orderData) {
    const invoice = {
        invoiceId: `INV-${orderData.id}`,
        orderData: orderData,
        generatedDate: new Date().toISOString(),
        dueDate: orderData.paymentMethod === 'pay-later' ? 
               new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() : null
    };

    // In a real implementation, generate PDF invoice
    console.log('Invoice generated:', invoice);

    return invoice;
}

function showOrderConfirmation(orderData) {
    const message = `
        Order Placed Successfully! 🎉

        Order ID: #${orderData.id}
        Total: ₹${orderData.total.toLocaleString()}
        ${orderData.paymentMethod === 'upi' ? 'Payment: Completed' : 'Payment: Pay Later'}

        ${orderData.paymentMethod === 'pay-later' ? 
          'Our team will contact you shortly to confirm your order and arrange payment.' : 
          'Your order is confirmed and will be delivered within 3-5 business days.'
        }
    `;

    alert(message);
}

// WhatsApp Integration
function openWhatsAppChat() {
    const message = "Hi! I'm interested in your refurbished laptops. Can you help me?";
    const whatsappUrl = `https://wa.me/919962229914?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// User Authentication
function showUserModal() {
    if (currentUser) {
        showUserDashboard();
    } else {
        showLoginForm();
    }
    showModal('user-modal');
}

function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('user-dashboard').style.display = 'none';
}

function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('user-dashboard').style.display = 'none';
}

function showUserDashboard() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('user-dashboard').style.display = 'block';
    document.getElementById('user-name').textContent = currentUser.name;
}

function handleLogin(e) {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Simple authentication (in real app, validate against backend)
    if (email && password) {
        currentUser = {
            id: generateUserId(),
            name: email.split('@')[0],
            email: email,
            loginDate: new Date().toISOString()
        };

        saveUserToStorage();
        showUserDashboard();
        showNotification('Login successful!');

        // Update UI to show logged-in state
        document.getElementById('user-btn').innerHTML = '<i class="fas fa-user-check"></i>';
    } else {
        showNotification('Please enter valid credentials');
    }
}

function handleRegister(e) {
    e.preventDefault();

    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const phone = document.getElementById('register-phone').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    if (password !== confirmPassword) {
        showNotification('Passwords do not match');
        return;
    }

    if (name && email && phone && password) {
        currentUser = {
            id: generateUserId(),
            name: name,
            email: email,
            phone: phone,
            registrationDate: new Date().toISOString()
        };

        saveUserToStorage();
        showUserDashboard();
        showNotification('Account created successfully!');

        // Update UI to show logged-in state
        document.getElementById('user-btn').innerHTML = '<i class="fas fa-user-check"></i>';
    } else {
        showNotification('Please fill all required fields');
    }
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    hideModal('user-modal');
    showNotification('Logged out successfully!');

    // Update UI to show logged-out state
    document.getElementById('user-btn').innerHTML = '<i class="fas fa-user"></i>';
}

// Admin Functions
function handleAdminLogin(e) {
    e.preventDefault();

    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;

    // Simple admin authentication
    if (username === 'admin' && password === 'admin123') {
        isAdmin = true;
        document.getElementById('admin-login').style.display = 'none';
        document.getElementById('admin-dashboard').style.display = 'block';
        loadAdminData();
        showNotification('Admin login successful!');
    } else {
        showNotification('Invalid admin credentials');
    }
}

function loadAdminData() {
    loadAdminProducts();
    loadAdminOrders();
    loadAdminCustomers();
}

function loadAdminProducts() {
    const container = document.getElementById('admin-products-list');
    container.innerHTML = products.map(product => `
        <div class="admin-item">
            <h4>${product.brand} ${product.name}</h4>
            <p>Price: ₹${product.currentPrice.toLocaleString()} | Stock: ${product.stock}</p>
            <button onclick="editProduct(${product.id})">Edit</button>
            <button onclick="deleteProduct(${product.id})">Delete</button>
        </div>
    `).join('');
}

function loadAdminOrders() {
    const container = document.getElementById('admin-orders-list');
    container.innerHTML = orders.map(order => `
        <div class="admin-item">
            <h4>Order #${order.id}</h4>
            <p>Customer: ${order.customerName} | Total: ₹${order.total.toLocaleString()}</p>
            <p>Status: ${order.status} | Date: ${new Date(order.orderDate).toLocaleDateString()}</p>
            <button onclick="viewOrder('${order.id}')">View Details</button>
        </div>
    `).join('');
}

function loadAdminCustomers() {
    const uniqueCustomers = [...new Set(orders.map(o => o.customerEmail))];
    const container = document.getElementById('admin-customers-list');
    container.innerHTML = uniqueCustomers.map(email => {
        const customerOrders = orders.filter(o => o.customerEmail === email);
        return `
            <div class="admin-item">
                <h4>${customerOrders[0].customerName}</h4>
                <p>Email: ${email} | Orders: ${customerOrders.length}</p>
                <p>Total Spent: ₹${customerOrders.reduce((sum, o) => sum + o.total, 0).toLocaleString()}</p>
            </div>
        `;
    }).join('');
}

// Form Handlers
function handleSellLaptop(e) {
    e.preventDefault();

    const formData = {
        brand: document.getElementById('sell-brand').value,
        model: document.getElementById('sell-model').value,
        age: document.getElementById('sell-age').value,
        name: document.getElementById('sell-name').value,
        phone: document.getElementById('sell-phone').value,
        email: document.getElementById('sell-email').value,
        submissionDate: new Date().toISOString()
    };

    // Send to WhatsApp for processing
    const message = `
📱 New Laptop Sale Inquiry

Customer Details:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Laptop Details:
Brand: ${formData.brand}
Model: ${formData.model}
Age: ${formData.age}

Please contact the customer for evaluation and quotation.
    `;

    const whatsappUrl = `https://wa.me/919962229914?text=${encodeURIComponent(message)}`;

    showNotification('Your request has been submitted! We will contact you soon.');
    document.getElementById('sell-laptop-form').reset();

    // Auto-open WhatsApp (optional)
    setTimeout(() => {
        window.open(whatsappUrl, '_blank');
    }, 1000);
}

function handleContactForm(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    showNotification('Message sent successfully! We will get back to you soon.');
    form.reset();
}

// Filter Functions
function getCheckedValues(selector) {
    return Array.from(document.querySelectorAll(selector)).map(input => input.value);
}

function applyFilters() {
    renderProductsGrid();
}

function handlePaymentMethodChange() {
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;

    if (paymentMethod === 'upi') {
        showNotification('You will be redirected to UPI payment after placing order');
    } else {
        showNotification('Order will be confirmed and we will contact you for payment');
    }
}

// Utility Functions
function generateOrderId() {
    return Date.now().toString(36).toUpperCase();
}

function generateUserId() {
    return 'USER_' + Date.now().toString(36).toUpperCase();
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-medium);
        z-index: 20000;
        font-weight: 600;
        max-width: 300px;
        word-wrap: break-word;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}

function showLoading() {
    document.getElementById('loading-overlay').style.display = 'flex';
}

function hideLoading() {
    document.getElementById('loading-overlay').style.display = 'none';
}

// Storage Functions
function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

function saveUserToStorage() {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
}

function loadUserFromStorage() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        document.getElementById('user-btn').innerHTML = '<i class="fas fa-user-check"></i>';
    }
}

function saveOrdersToStorage() {
    localStorage.setItem('orders', JSON.stringify(orders));
}

function loadOrdersFromStorage() {
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
        orders = JSON.parse(savedOrders);
    }
}

// Initialize on load
window.addEventListener('load', function() {
    // Additional initialization if needed
    console.log('Window loaded, app ready');
});

// Error handling
window.addEventListener('error', function(e) {
    console.error('Application error:', e.error);
    showNotification('An error occurred. Please refresh the page.');
});

// Export functions for global access
window.addToCart = addToCart;
window.addAccessoryToCart = addAccessoryToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.editProduct = function(id) { console.log('Edit product:', id); };
window.deleteProduct = function(id) { console.log('Delete product:', id); };
window.viewOrder = function(id) { console.log('View order:', id); };
