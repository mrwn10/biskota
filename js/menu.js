// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const body = document.querySelector('body');

hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navMenu.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    body.style.overflow = 'auto';
}));

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.style.overflow = 'auto';
    }
});

// Close mobile menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.style.overflow = 'auto';
    }
});

// Simple scroll effect - just shadow, no size change
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 10) {
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Product Data
const productsData = {
    biscuits: [
        {
            id: 1,
            name: "Cinnamon Biscoff Bites",
            description: "Soft, cinnamon-spiced bites with a light Biscoff touch.",
            category: "Biscuits & Cookies",
            image: "../img/food2.jpg"
        },
        {
            id: 2,
            name: "Biscoff with Kataifi Brownies",
            description: "Rich brownies layered with crunchy kataifi and Biscoff for a sweet, textured bite.",
            category: "Biscuits & Cookies",
            image: "../img/food6.jpg"
        },
        {
            id: 3,
            name: "Double Chocolate Protein Cookies",
            description: "Soft, chocolate-packed cookies with an extra protein boost in every bite.",
            category: "Biscuits & Cookies",
            image: "../img/food7.jpg"
        },
        {
            id: 4,
            name: "White Chocolate Walnut Protein Cookies",
            description: "Chewy protein cookies studded with creamy white chocolate and crunchy walnuts.",
            category: "Biscuits & Cookies",
            image: "../img/food8.jpg"
        },
        {
            id: 5,
            name: "Nutty Road Protein Cookies",
            description: "Protein-rich cookies loaded with nuts and chocolate for a crunchy, satisfying treat.",
            category: "Biscuits & Cookies",
            image: "../img/food9.jpg"
        },
    ],
    pastries: [
        {
            id: 11,
            name: "Cinnamon Rolls",
            description: "Soft, whole-grain cinnamon rolls lightly sweetened.",
            category: "Pastries & Breads",
            image: "../img/food1.jpg"
        },
        {
            id: 12,
            name: "Dubai Chocolate Brownies",
            description: "Decadent, fudgy chocolate brownies with a rich, melt-in-your-mouth texture.",
            category: "Pastries & Breads",
            image: "../img/food4.jpg"
        },
        {
            id: 13,
            name: "Cheesy Lemon Mini Cake",
            description: "A soft, zesty mini cake with a creamy cheese twist for a bright, tangy bite.",
            category: "Pastries & Breads",
            image: "../img/food10.jpg"
        },
        {
            id: 14,
            name: "Red Velvet Mini Cake",
            description: "A moist mini cake with classic red velvet flavor and a smooth, creamy finish.",
            category: "Pastries & Breads",
            image: "../img/food11.jpg"
        },
        {
            id: 15,
            name: "Chicken Floss Buns",
            description: "Soft, fluffy buns filled and topped with savory chicken floss for a tasty, light snack.",
            category: "Pastries & Breads",
            image: "../img/food12.jpg"
        },
        {
            id: 16,
            name: "Chocolate Rolls",
            description: "Soft, fluffy rolls swirled with rich chocolate for a sweet, indulgent treat.",
            category: "Pastries & Breads",
            image: "../img/food13.jpg"
        },
        {
            id: 17,
            name: "Beef Twisters",
            description: "Savory, seasoned beef wrapped in a soft, twisted pastry for a hearty, flavorful bite.",
            category: "Pastries & Breads",
            image: "../img/food14.jpg"
        },
    ],
    beverages: [
        {
            id: 21,
            name: "Sugar Free Lemonade with Chia Seeds",
            description: "A refreshing citrus drink boosted with chia for light hydration and texture.",
            category: "Protein Beverages",
            image: "../img/food5.jpg"
        },
    ]
};

// Product Management
let displayedProducts = {
    all: 6,
    biscuits: 6,
    pastries: 6,
    beverages: 6
};

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initializeCarousel();
    initializeTabs();
    loadInitialProducts();
    initializeAnimations();
});

// Best Sellers Carousel
function initializeCarousel() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let slideInterval;
    let isAnimating = false;
    
    // Function to update carousel position
    function updateCarousel() {
        if (isAnimating) return;
        
        isAnimating = true;
        const translateX = -currentSlide * 100;
        track.style.transform = `translateX(${translateX}%)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
        
        // Update slides
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
        
        // Reset animation flag after transition
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }
    
    // Next slide function
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }
    
    // Previous slide function
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }
    
    // Event listeners for buttons
    nextBtn.addEventListener('click', () => {
        if (!isAnimating) nextSlide();
        resetAutoAdvance();
    });
    
    prevBtn.addEventListener('click', () => {
        if (!isAnimating) prevSlide();
        resetAutoAdvance();
    });
    
    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (!isAnimating && currentSlide !== index) {
                currentSlide = index;
                updateCarousel();
                resetAutoAdvance();
            }
        });
    });
    
    // Touch swipe support for mobile
    let startX = 0;
    let endX = 0;
    let isSwiping = false;
    
    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isSwiping = true;
        stopAutoAdvance();
    });
    
    track.addEventListener('touchmove', (e) => {
        if (!isSwiping) return;
        endX = e.touches[0].clientX;
    });
    
    track.addEventListener('touchend', () => {
        if (!isSwiping) return;
        
        const diffX = startX - endX;
        const minSwipeDistance = 50;
        
        if (Math.abs(diffX) > minSwipeDistance) {
            if (diffX > 0 && !isAnimating) {
                // Swipe left - next slide
                nextSlide();
            } else if (diffX < 0 && !isAnimating) {
                // Swipe right - previous slide
                prevSlide();
            }
        }
        
        isSwiping = false;
        setTimeout(startAutoAdvance, 3000);
    });
    
    // Auto-advance functionality
    function startAutoAdvance() {
        slideInterval = setInterval(() => {
            if (!isAnimating) nextSlide();
        }, 5000);
    }
    
    function resetAutoAdvance() {
        clearInterval(slideInterval);
        startAutoAdvance();
    }
    
    function stopAutoAdvance() {
        clearInterval(slideInterval);
    }
    
    // Pause auto-advance on hover/touch
    const carousel = document.querySelector('.carousel-container');
    carousel.addEventListener('mouseenter', stopAutoAdvance);
    carousel.addEventListener('mouseleave', startAutoAdvance);
    
    // For touch devices
    carousel.addEventListener('touchstart', stopAutoAdvance);
    carousel.addEventListener('touchend', () => {
        setTimeout(startAutoAdvance, 3000);
    });
    
    // Initialize
    updateCarousel();
    startAutoAdvance();
    
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            updateCarousel();
        }, 100);
    });
}

// Tab functionality
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding tab content
            const tabId = button.getAttribute('data-tab') + '-tab';
            document.getElementById(tabId).classList.add('active');
            
            // Update load more button text
            updateLoadMoreButton(button.getAttribute('data-tab'));
        });
    });
}

// Load initial products
function loadInitialProducts() {
    Object.keys(displayedProducts).forEach(category => {
        loadProducts(category, displayedProducts[category]);
    });
}

// Load products for a category
function loadProducts(category, count) {
    const grid = document.querySelector(`[data-category="${category}"]`);
    if (!grid) return;
    
    grid.innerHTML = '';
    
    let products = [];
    if (category === 'all') {
        // Combine all products and shuffle
        products = [
            ...productsData.biscuits,
            ...productsData.pastries,
            ...productsData.beverages
        ].sort(() => Math.random() - 0.5);
    } else {
        products = productsData[category];
    }
    
    // Limit to count
    const productsToShow = products.slice(0, count);
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        grid.appendChild(productCard);
    });
    
    // Update load more button visibility
    updateLoadMoreButtonVisibility(category, products.length);
}

// Create product card HTML - NOW MATCHES BEST SELLER STRUCTURE
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-product-id', product.id);
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
            <div class="image-overlay">
                <div class="placeholder-text">${product.name}</div>
            </div>
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="card-actions">
                <a href="https://www.facebook.com/profile.php?id=61556733159453" target="_blank" class="btn btn-primary btn-small order-now">
                    <span>Order Now</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                </a>
            </div>
        </div>
    `;
    
    return card;
}

// Update load more button visibility
function updateLoadMoreButtonVisibility(category, totalProducts) {
    const button = document.querySelector(`.load-more-btn[data-category="${category}"]`);
    if (!button) return;
    
    if (displayedProducts[category] >= totalProducts) {
        button.classList.add('hidden');
    } else {
        button.classList.remove('hidden');
    }
}

// Update load more button text
function updateLoadMoreButton(category) {
    const button = document.querySelector(`.load-more-btn[data-category="${category}"]`);
    if (!button) return;
    
    const totalProducts = getTotalProductsCount(category);
    const remaining = totalProducts - displayedProducts[category];
    
    if (remaining > 0) {
        button.innerHTML = `
            <span>Load ${remaining} More ${getCategoryLabel(category)}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
            </svg>
        `;
    }
}

// Get total products count for a category
function getTotalProductsCount(category) {
    if (category === 'all') {
        return productsData.biscuits.length + productsData.pastries.length + productsData.beverages.length;
    }
    return productsData[category].length;
}

// Get category label for button text
function getCategoryLabel(category) {
    const labels = {
        'all': 'Products',
        'biscuits': 'Biscuits',
        'pastries': 'Pastries',
        'beverages': 'Beverages'
    };
    return labels[category] || 'Items';
}

// Load more functionality
document.addEventListener('click', (e) => {
    if (e.target.closest('.load-more-btn')) {
        const button = e.target.closest('.load-more-btn');
        const category = button.getAttribute('data-category');
        
        // Increase displayed count
        displayedProducts[category] += 6;
        
        // Reload products
        loadProducts(category, displayedProducts[category]);
        
        // Update button text
        updateLoadMoreButton(category);
    }
});

// Initialize animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll('.best-seller-card, .product-card, .tab-btn');
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Handle mobile orientation change
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        const track = document.querySelector('.carousel-track');
        const currentSlide = document.querySelector('.carousel-slide.active');
        if (track && currentSlide) {
            const index = Array.from(document.querySelectorAll('.carousel-slide')).indexOf(currentSlide);
            track.style.transform = `translateX(-${index * 100}%)`;
        }
    }, 100);
});

// Error handling for images
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG' && e.target.classList.contains('product-img')) {
        e.target.src = '../img/placeholder.jpg';
        e.target.alt = 'Product image not available';
    }
}, true);