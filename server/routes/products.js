const express = require('express');
const router = express.Router();

// Sample products data (in production, this would come from a database)
const products = [
  {
    id: 1,
    name: "Casement Windows",
    slug: "casement-windows",
    category: "windows",
    description: "Classic design with modern functionality. Perfect for traditional and contemporary homes in Chittoor District.",
    features: [
      "Outward opening design",
      "Maximum ventilation",
      "Easy maintenance",
      "Weather tight seal",
      "Multi-point locking system",
      "Energy efficient"
    ],
    specifications: {
      material: "Premium uPVC",
      thickness: "3mm",
      warranty: "25+ years",
      colors: ["White", "Brown", "Grey", "Black"],
      sizes: "Custom sizes available"
    },
    price: {
      starting: 2500,
      unit: "per sq ft"
    },
    images: [
      "/images/casement-window-1.jpg",
      "/images/casement-window-2.jpg",
      "/images/casement-window-3.jpg"
    ],
    benefits: [
      "Superior thermal insulation",
      "Excellent sound reduction",
      "Weather resistant",
      "Low maintenance",
      "Termite resistant",
      "Fire retardant"
    ]
  },
  {
    id: 2,
    name: "Sliding Windows",
    slug: "sliding-windows",
    category: "windows",
    description: "Space-saving design ideal for modern homes and apartments in Chittoor District.",
    features: [
      "Space-saving design",
      "Smooth operation",
      "Easy cleaning",
      "Modern appearance",
      "Durable tracks",
      "Weather resistant"
    ],
    specifications: {
      material: "Premium uPVC",
      thickness: "3mm",
      warranty: "25+ years",
      colors: ["White", "Brown", "Grey", "Black"],
      sizes: "Custom sizes available"
    },
    price: {
      starting: 2200,
      unit: "per sq ft"
    },
    images: [
      "/images/sliding-window-1.jpg",
      "/images/sliding-window-2.jpg",
      "/images/sliding-window-3.jpg"
    ],
    benefits: [
      "Space efficient",
      "Easy operation",
      "Modern design",
      "Low maintenance",
      "Energy efficient",
      "Sound proof"
    ]
  },
  {
    id: 3,
    name: "Tilt & Turn Windows",
    slug: "tilt-turn-windows",
    category: "windows",
    description: "Versatile opening options for maximum ventilation and convenience.",
    features: [
      "Dual opening modes",
      "Maximum ventilation",
      "Child safety features",
      "Easy operation",
      "Weather tight seal",
      "Secure locking"
    ],
    specifications: {
      material: "Premium uPVC",
      thickness: "3mm",
      warranty: "25+ years",
      colors: ["White", "Brown", "Grey", "Black"],
      sizes: "Custom sizes available"
    },
    price: {
      starting: 2800,
      unit: "per sq ft"
    },
    images: [
      "/images/tilt-turn-window-1.jpg",
      "/images/tilt-turn-window-2.jpg",
      "/images/tilt-turn-window-3.jpg"
    ],
    benefits: [
      "Versatile operation",
      "Maximum ventilation",
      "Child safe",
      "Easy maintenance",
      "Energy efficient",
      "Weather resistant"
    ]
  },
  {
    id: 4,
    name: "Sliding Doors",
    slug: "sliding-doors",
    category: "doors",
    description: "Elegant entrance solutions for your home with smooth operation and modern design.",
    features: [
      "Smooth sliding action",
      "Space efficient",
      "Modern design",
      "Easy maintenance",
      "Secure locking",
      "Weather resistant"
    ],
    specifications: {
      material: "Premium uPVC",
      thickness: "3mm",
      warranty: "25+ years",
      colors: ["White", "Brown", "Grey", "Black"],
      sizes: "Custom sizes available"
    },
    price: {
      starting: 3200,
      unit: "per sq ft"
    },
    images: [
      "/images/sliding-door-1.jpg",
      "/images/sliding-door-2.jpg",
      "/images/sliding-door-3.jpg"
    ],
    benefits: [
      "Space saving",
      "Smooth operation",
      "Modern appearance",
      "Low maintenance",
      "Secure",
      "Weather resistant"
    ]
  },
  {
    id: 5,
    name: "Lift & Slide Doors",
    slug: "lift-slide-doors",
    category: "doors",
    description: "Premium sliding doors with lift mechanism for easy operation and maximum space efficiency.",
    features: [
      "Lift mechanism",
      "Smooth operation",
      "Space efficient",
      "Modern design",
      "Easy maintenance",
      "Secure locking"
    ],
    specifications: {
      material: "Premium uPVC",
      thickness: "3mm",
      warranty: "25+ years",
      colors: ["White", "Brown", "Grey", "Black"],
      sizes: "Custom sizes available"
    },
    price: {
      starting: 3800,
      unit: "per sq ft"
    },
    images: [
      "/images/lift-slide-door-1.jpg",
      "/images/lift-slide-door-2.jpg",
      "/images/lift-slide-door-3.jpg"
    ],
    benefits: [
      "Easy operation",
      "Space efficient",
      "Modern design",
      "Low maintenance",
      "Secure",
      "Weather resistant"
    ]
  },
  {
    id: 6,
    name: "Top Hung Windows",
    slug: "top-hung-windows",
    category: "windows",
    description: "Ideal for bathrooms and kitchens with excellent ventilation and privacy.",
    features: [
      "Privacy protection",
      "Excellent ventilation",
      "Space efficient",
      "Easy operation",
      "Weather tight seal",
      "Secure locking"
    ],
    specifications: {
      material: "Premium uPVC",
      thickness: "3mm",
      warranty: "25+ years",
      colors: ["White", "Brown", "Grey", "Black"],
      sizes: "Custom sizes available"
    },
    price: {
      starting: 2000,
      unit: "per sq ft"
    },
    images: [
      "/images/top-hung-window-1.jpg",
      "/images/top-hung-window-2.jpg",
      "/images/top-hung-window-3.jpg"
    ],
    benefits: [
      "Privacy protection",
      "Excellent ventilation",
      "Space efficient",
      "Easy maintenance",
      "Weather resistant",
      "Secure"
    ]
  }
];

// Get all products
router.get('/', (req, res) => {
  try {
    const { category, limit, offset } = req.query;
    
    let filteredProducts = products;
    
    if (category) {
      filteredProducts = products.filter(product => product.category === category);
    }
    
    const startIndex = parseInt(offset) || 0;
    const endIndex = limit ? startIndex + parseInt(limit) : filteredProducts.length;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    res.json({
      success: true,
      data: {
        products: paginatedProducts,
        total: filteredProducts.length,
        hasMore: endIndex < filteredProducts.length
      }
    });
  } catch (error) {
    console.error('Get products error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch products'
    });
  }
});

// Get product by slug
router.get('/:slug', (req, res) => {
  try {
    const { slug } = req.params;
    const product = products.find(p => p.slug === slug);
    
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }
    
    res.json({
      success: true,
      data: product
    });
  } catch (error) {
    console.error('Get product error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch product'
    });
  }
});

// Get product categories
router.get('/categories/list', (req, res) => {
  try {
    const categories = [
      {
        name: 'Windows',
        slug: 'windows',
        count: products.filter(p => p.category === 'windows').length,
        description: 'Energy-efficient uPVC windows for all applications'
      },
      {
        name: 'Doors',
        slug: 'doors',
        count: products.filter(p => p.category === 'doors').length,
        description: 'Secure and stylish uPVC doors'
      }
    ];
    
    res.json({
      success: true,
      data: categories
    });
  } catch (error) {
    console.error('Get categories error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch categories'
    });
  }
});

// Search products
router.get('/search/:query', (req, res) => {
  try {
    const { query } = req.params;
    const searchTerm = query.toLowerCase();
    
    const searchResults = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.features.some(feature => feature.toLowerCase().includes(searchTerm))
    );
    
    res.json({
      success: true,
      data: {
        products: searchResults,
        total: searchResults.length,
        query: query
      }
    });
  } catch (error) {
    console.error('Search products error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to search products'
    });
  }
});

// Get featured products
router.get('/featured/list', (req, res) => {
  try {
    const featuredProducts = products.slice(0, 4); // First 4 products as featured
    
    res.json({
      success: true,
      data: featuredProducts
    });
  } catch (error) {
    console.error('Get featured products error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch featured products'
    });
  }
});

module.exports = router;
