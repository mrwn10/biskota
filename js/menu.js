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
            name: "Protein Chocolate Chip Cookies",
            description: "Classic chocolate chip cookies with a protein boost.",
            category: "Biscuits & Cookies",
            image: "../img/food1.jpg"
        },
        {
            id: 3,
            name: "Oatmeal Raisin Biscuits",
            description: "Hearty oatmeal biscuits with plump raisins and cinnamon.",
            category: "Biscuits & Cookies",
            image: "../img/food3.jpg"
        },
        {
            id: 4,
            name: "Almond Protein Biscuits",
            description: "Crunchy almond biscuits packed with protein goodness.",
            category: "Biscuits & Cookies",
            image: "../img/food1.jpg"
        },
        {
            id: 5,
            name: "Double Chocolate Cookies",
            description: "Rich chocolate cookies with double the chocolate goodness.",
            category: "Biscuits & Cookies",
            image: "../img/food2.jpg"
        },
        {
            id: 6,
            name: "Peanut Butter Protein Bites",
            description: "Energy-packed bites with natural peanut butter flavor.",
            category: "Biscuits & Cookies",
            image: "../img/food3.jpg"
        },
        {
            id: 7,
            name: "Coconut Macaroons",
            description: "Light and chewy coconut treats with protein enrichment.",
            category: "Biscuits & Cookies",
            image: "../img/food1.jpg"
        },
        {
            id: 8,
            name: "Matcha Green Tea Cookies",
            description: "Antioxidant-rich matcha cookies with subtle sweetness.",
            category: "Biscuits & Cookies",
            image: "../img/food2.jpg"
        },
        {
            id: 9,
            name: "Hazelnut Crunch Biscuits",
            description: "Crunchy biscuits with roasted hazelnuts and protein.",
            category: "Biscuits & Cookies",
            image: "../img/food3.jpg"
        },
        {
            id: 10,
            name: "Lemon Zest Cookies",
            description: "Zesty lemon cookies with a refreshing citrus twist.",
            category: "Biscuits & Cookies",
            image: "../img/food1.jpg"
        }
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
            name: "Protein Croissants",
            description: "Flaky, buttery croissants with added protein.",
            category: "Pastries & Breads",
            image: "../img/food2.jpg"
        },
        {
            id: 13,
            name: "Almond Protein Buns",
            description: "Soft buns with almond flour and protein enrichment.",
            category: "Pastries & Breads",
            image: "../img/food3.jpg"
        },
        {
            id: 14,
            name: "Nutty Road Loaf",
            description: "A nutrient-packed loaf loaded with wholesome nuts.",
            category: "Pastries & Breads",
            image: "../img/food1.jpg"
        },
        {
            id: 15,
            name: "Banana Protein Bread",
            description: "Moist banana bread with added protein and natural sweetness.",
            category: "Pastries & Breads",
            image: "../img/food2.jpg"
        },
        {
            id: 16,
            name: "Whole Grain Protein Loaf",
            description: "Hearty whole grain bread perfect for sandwiches.",
            category: "Pastries & Breads",
            image: "../img/food3.jpg"
        },
        {
            id: 17,
            name: "Blueberry Protein Muffins",
            description: "Moist muffins bursting with fresh blueberries and protein.",
            category: "Pastries & Breads",
            image: "../img/food1.jpg"
        },
        {
            id: 18,
            name: "Apple Cinnamon Pastries",
            description: "Flaky pastries filled with spiced apple cinnamon goodness.",
            category: "Pastries & Breads",
            image: "../img/food2.jpg"
        },
        {
            id: 19,
            name: "Pumpkin Spice Bread",
            description: "Seasonal pumpkin bread with warm spices and protein.",
            category: "Pastries & Breads",
            image: "../img/food3.jpg"
        },
        {
            id: 20,
            name: "Cheese Danish Pastry",
            description: "Creamy cheese filling in a flaky, protein-enriched pastry.",
            category: "Pastries & Breads",
            image: "../img/food1.jpg"
        }
    ],
    beverages: [
        {
            id: 21,
            name: "Protein Coffee",
            description: "Smooth coffee with added protein for sustained energy.",
            category: "Protein Beverages",
            image: "../img/food1.jpg"
        },
        {
            id: 22,
            name: "Protein Shake",
            description: "Creamy protein shake available in chocolate or vanilla.",
            category: "Protein Beverages",
            image: "../img/food2.jpg"
        },
        {
            id: 23,
            name: "Green Protein Smoothie",
            description: "Refreshing green smoothie with spinach and protein.",
            category: "Protein Beverages",
            image: "../img/food3.jpg"
        },
        {
            id: 24,
            name: "Berry Blast Smoothie",
            description: "Mixed berry smoothie packed with antioxidants and protein.",
            category: "Protein Beverages",
            image: "../img/food1.jpg"
        },
        {
            id: 25,
            name: "Matcha Protein Latte",
            description: "Creamy matcha latte with added protein boost.",
            category: "Protein Beverages",
            image: "../img/food2.jpg"
        },
        {
            id: 26,
            name: "Chocolate Protein Milk",
            description: "Rich chocolate milk with high-quality protein.",
            category: "Protein Beverages",
            image: "../img/food3.jpg"
        },
        {
            id: 27,
            name: "Tropical Paradise Smoothie",
            description: "Tropical fruit blend with coconut and protein.",
            category: "Protein Beverages",
            image: "../img/food1.jpg"
        },
        {
            id: 28,
            name: "Vanilla Almond Shake",
            description: "Creamy vanilla shake with almond milk and protein.",
            category: "Protein Beverages",
            image: "../img/food2.jpg"
        },
        {
            id: 29,
            name: "Iced Protein Coffee",
            description: "Chilled coffee with protein, perfect for warm days.",
            category: "Protein Beverages",
            image: "../img/food3.jpg"
        },
        {
            id: 30,
            name: "Mango Protein Smoothie",
            description: "Sweet mango smoothie with tropical flavors and protein.",
            category: "Protein Beverages",
            image: "../img/food1.jpg"
        }
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

// Best Sellers Carousel - IMPROVED MOBILE SUPPORT
function initializeCarousel() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let slideInterval;
    
    // Function to update carousel position
    function updateCarousel() {
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
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
            resetAutoAdvance();
        });
    });
    
    // Touch swipe support for mobile
    let startX = 0;
    let endX = 0;
    
    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    
    track.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
    });
    
    track.addEventListener('touchend', () => {
        const diffX = startX - endX;
        const minSwipeDistance = 50;
        
        if (Math.abs(diffX) > minSwipeDistance) {
            if (diffX > 0) {
                // Swipe left - next slide
                nextSlide();
            } else {
                // Swipe right - previous slide
                prevSlide();
            }
            resetAutoAdvance();
        }
    });
    
    // Auto-advance functionality
    function startAutoAdvance() {
        slideInterval = setInterval(nextSlide, 5000);
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
    window.addEventListener('resize', () => {
        updateCarousel();
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

// Create product card HTML
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
            <a href="https://www.facebook.com/profile.php?id=61556733159453" target="_blank" class="btn btn-primary btn-small order-now">
                <span>Order Now</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
            </a>
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
    
    const totalProducts = category === 'all' ? 30 : 10;
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